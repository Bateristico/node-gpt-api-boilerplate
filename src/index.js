const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const { OPEN_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPEN_API_KEY
});

const openai = new OpenAIApi(configuration);

async function runCompletion() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: ' How are you doing today?'
  });
  console.log(completion.data.choices[0].text);
}

runCompletion();
