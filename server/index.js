
// import OpenAI from 'openai';
const express = require("express");
// import dotenv from "dotenv";
// dotenv.config();


// const OpenAI = require('openai');

const cors = require("cors");
const bodyParser = require("body-parser");
// const { Configuration, OpenAIApi } = require("openai");


 
// const openai = new OpenAI({
//   apiKey: "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",
// });


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBTf1cv4EKOYg76QuSF7iTkWLdkbSOZzDE");
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});



// const config = new Configuration({
//   apiKey: "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",
// });

// const openai = new OpenAIApi(config);

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT
app.post("/chat", async (req, res) => {

  // e 
  const { prompt } = req.body;
  async function run() {
    
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.send(text);
  }
  
  run();

  //



  // const { prompt } = req.body;
//
  // const chatCompletion = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [{"role": "user", "content": "Hello!"}],
  //   prompt: prompt,

  // });
  // console.log(chatCompletion.choices[0].message.content);

  // res.send(completion.data.choices[0].text);
//

  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   max_tokens: 512,
  //   temperature: 0,
  //   prompt: prompt,
  // });
 
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
