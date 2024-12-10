import React, { useState, useEffect, useRef, createContext } from "react";
import apiRequest from "../api/ApiRequests";
import Message from "../Components/Message";
import Resend from "../Components/Resend";
import NewChatSvg from "../SVG/NewChat";
import Input from "../Components/Input";
import "../Style/ChatWindow.css";

export const ModalContext = createContext();

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);
  const [status, setStatus] = useState("success");
  const [isResending, setIsResending] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSend = async () => {
    if (input.trim()) {
      messages.push({
        role: "user",
        content: input,
        images: file,
      });
      setStatus("pending");
      setInput("");
      sendApiRequests();
    }
  };

  const reSend = () => {
    setStatus("pending");
    const lastUserMessage = messages.reduce((acc, curr) => {
      return curr.isUser ? curr : acc;
    }, null);
    setInput(lastUserMessage.text);
    setIsResending(true);
    sendApiRequests();
  };

  const sendApiRequests = async () => {
    try {
      const res = await apiRequest(messages);
      if (isResending) {
        setInput("");
        setIsResending(false);
      }

      setMessages((prevMessages) => [...prevMessages, res.message]);

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const newChat = () => {
    setMessages([]);
    setInput("");
    setStatus("success");
  };

  return (
    <ModalContext.Provider value={{ modalImage, setModalImage }}>
      <>
        <div className="flex flex-col h-screen p-4 bg-chatBg">
          {/* Top bar with button and title */}
          <div className="flex justify-between items-center  mb-4">
            <button
              className="h-10 rounded-lg px-2 focus-visible:outline-0 items-start text-white hover:bg-input"
              onClick={newChat}
              title="New chat"
            >
              <NewChatSvg />
            </button>

            <h1 className="text-2xl text-white font-bold mx-auto">Chatbot</h1>
          </div>

          <div className="flex-1 w-full flex justify-center overflow-y-auto custom-scrollbar">
            <div className="w-full max-w-[95%] md:max-w-[75%] lg:max-w-[60%] p-2 space-y-2">
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  message={msg}
                  setModalImage={setModalImage}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex justify-center w-full">
            {status === "error" ? (
              <Resend reSend={reSend} />
            ) : (
              <Input
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                status={status}
                file={file}
                setFile={setFile}
                setModalImage={setModalImage}
              />
            )}
          </div>
        </div>
      </>
    </ModalContext.Provider>
  );
};

export default ChatWindow;
