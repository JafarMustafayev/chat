import { useRef } from "react";
const Message = ({ message, isUser, isLoading, image }) => {
  const formatMessage = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <h3
            key={index}
            className="font-bold text-lg mb-1"
            style={{ fontWeight: "bold", color: "white" }}
          >
            {part.slice(2, -2)}
          </h3>
        );
      }
      return (
        <p
          key={index}
          className="text-base mb-1"
          style={{ color: "white", fontWeight: "normal" }}
        >
          {part}
        </p>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}   `}>
      <div className={`  text-white max-w-[85%] md:max-w-[70%]`}>
        <div className={` ${isUser ? "justify-end" : "justify-start"}`}>
          {image && (
            <div className="flex flex-col items-center justify-end gap-1 ">
              {image.map((img, index) => {
                return (
                  <button className="justify-end" onClick={() => {}}>
                    <img
                      className="max-w-64 max-h-64 border-white border-2 rounded-3xl"
                      src={"data:image/jpeg;base64," + img}
                    />
                  </button>
                );
              })}
            </div>
          )}
          <div className={`flex ${isUser ? "justify-end" : "justify-start"} `}>
            <div
              className={`rounded-3xl p-2 mb-2 break-words whitespace-pre-wrap
                ${
                  isUser
                    ? "bg-blue-600 rounded-tr-lg"
                    : "bg-gray-600 rounded-tl-lg"
                }`}
            >
              {!isLoading ? formatMessage(message) : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
