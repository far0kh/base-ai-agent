import { PipeI } from '@baseai/core';
import getCurrentWeatherTool from '../tools/get-current-weather';
import getCurrentPriceTool from '../tools/get-current-price';

const pipeSummarizer = (): PipeI => ({
  apiKey: process.env.GOOGLE_API_KEY!, // Replace with your API key https://langbase.com/docs/api-reference/api-keys
  name: 'summarizer',
  description: 'A pipe that summarizes content and make it less wordy',
  status: 'public',
  model: 'google:gemini-1.5-flash-latest',
  stream: true,
  json: false,
  store: true,
  moderate: true,
  top_p: 1,
  max_tokens: 1000,
  temperature: 0.7,
  presence_penalty: 1,
  frequency_penalty: 1,
  stop: [],
  tool_choice: 'auto',
  parallel_tool_calls: false,
  messages: [
    { role: 'system', content: `You are a content summarizer. You will summarize content without loosing context into less wordy to the point version.` },
  ],
  variables: [],
  memory: [],
  tools: [getCurrentPriceTool(), getCurrentWeatherTool()],
});

export default pipeSummarizer;
