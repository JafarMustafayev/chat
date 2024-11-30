import Modal from "../Components/Modal";

const Message = ({
  message,
  isUser,
  isLoading,
  image,
  setModalImage,
  modalImage,
}) => {
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

      <Modal />
    </>
  );
};

export default Message;
