const Message = ({ message, isUser, isLoading }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`${isUser ? "bg-blue-600" : "bg-gray-600"} ${
          isLoading ? "animate-pulse  h-9 w-[60%] opacity-70" : ""
        } text-white p-2 rounded-lg mb-2 max-w-[85%] md:max-w-[70%]  break-words whitespace-pre-wrap`}
      >
        {!isLoading && message}
      </div>
    </div>
  );
};

export default Message;
