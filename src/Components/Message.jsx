const Message = ({ message, isUser, isLoading }) => {
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
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`${isUser ? "bg-blue-600" : "bg-gray-600"} ${
          isLoading ? "animate-pulse h-9 w-[60%] opacity-70" : ""
        } text-white p-2 rounded-lg mb-2 max-w-[85%] md:max-w-[70%] break-words whitespace-pre-wrap`}
      >
        {!isLoading ? formatMessage(message) : ""}
      </div>
    </div>
  );
};

export default Message;
