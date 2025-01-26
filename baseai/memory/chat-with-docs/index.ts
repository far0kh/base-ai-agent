import {MemoryI} from '@baseai/core';

const memoryChatWithDocs = (): MemoryI => ({
	name: 'chat-with-docs',
	description: "A memory containing Langbase Pipe FAQs docs",
	git: {
		enabled: false,
		include: ['documents/**/*'],
		gitignore: false,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryChatWithDocs;