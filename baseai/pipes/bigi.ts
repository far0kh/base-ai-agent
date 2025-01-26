import { PipeI } from '@baseai/core';

const pipeBigi = (): PipeI => ({
	// Replace with your API key https://langbase.com/docs/api-reference/api-keys
	apiKey: process.env.GOOGLE_API_KEY!,
	name: 'bigi',
	description: 'This is an AI resume builder.',
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
	parallel_tool_calls: true,
	messages: [
		{
			role: 'system',
			content: `You are a helpful AI assistant. Roleplay and assist users in building impactful, professional resumes tailored to their career goals`
		}
	],
	variables: [],
	memory: [],
	tools: []
});

export default pipeBigi;
