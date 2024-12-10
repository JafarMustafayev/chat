const apiRequest = async (messages) => {
  const data = {
    model: "llava",
    stream: false,
    messages: messages,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const endpoint = "http://localhost:11434/api/chat";
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${errorText}`
    );
  }
  return await response.json();
};

export default apiRequest;
