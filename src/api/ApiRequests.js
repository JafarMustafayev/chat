// api.js

const apiRequest = async (prompt, file = null, model = "llava") => {
  const endpoint = "http://localhost:11434/api/generate";
  debugger;
  const data = {
    prompt: prompt,
    model: model,
    stream: false,
    images: [],
  };
  if (file) {
    data.images.push(file);
  }
  console.log(data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  console.log(options);

  const response = await fetch(endpoint, options);

  console.log(response);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${errorText}`
    );
  }
  return await response.json();
};

export default apiRequest;
//const apiRequest = async (prompt) => {
//  const response = await fetch("https://api.ai21.com/studio/v1/j2-ultra/chat", {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: "Bearer TOKEN", // Replace with your AI21 API key
//    },
//    body: JSON.stringify({
//      numResults: 1,
//      temperature: 0.7,
//      messages: [
//        {
//          text: prompt,
//          role: "user",
//        },
//      ],
//      system:
//        "You are an AI assistant. Your responses should be informative and concise.",
//    }),
//  });

//  var res = await response.json();

//  return safeJSONParse(res);
//};

//function safeJSONParse(str) {
//  try {
//    return JSON.parse(str);
//  } catch (e) {
//    return str;
//  }
//}
