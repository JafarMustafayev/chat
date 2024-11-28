import { useState } from "react";

const Message = ({ message, isUser, isLoading, image }) => {
  const [modalImage, setModalImage] = useState(null);

  const formatMessage = (text) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      const isBold = part.startsWith("**") && part.endsWith("**");
      return (
        <p
          key={index}
          className={isBold ? "font-bold text-lg mb-1" : "text-base mb-1"}
          style={{ color: "white", fontWeight: isBold ? "bold" : "normal" }}
        >
          {isBold ? part.slice(2, -2) : part}
        </p>
      );
    });
  };

  const closeModal = () => setModalImage(null);

  return (
    <>
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div className="text-white max-w-[85%] md:max-w-[70%]">
          {/* Şəkil varsa göstər */}
          {image && (
            <div className="flex flex-col items-center justify-end gap-1">
              {image.map((img, index) => (
                <button
                  key={index}
                  className="justify-end"
                  onClick={() => setModalImage(`data:image/jpeg;base64,${img}`)}
                >
                  <img
                    className="max-w-64 max-h-64 border-white border-2 rounded-3xl"
                    src={`data:image/jpeg;base64,${img}`}
                    alt={`Image ${index}`}
                  />
                </button>
              ))}
            </div>
          )}

          <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-3xl p-2 mb-2 break-words whitespace-pre-wrap ${
                isUser
                  ? "bg-blue-600 rounded-tr-lg"
                  : "bg-gray-600 rounded-tl-lg"
              }`}
            >
              {!isLoading && formatMessage(message)}
            </div>
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-1 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              className="w-full h-auto rounded-lg"
              src={modalImage}
              style={{
                maxHeight: "70vh",
                maxWidth: "70vh",
              }}
              alt="Modal Image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
