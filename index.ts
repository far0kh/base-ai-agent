import 'dotenv/config';
import { Pipe, getRunner } from '@baseai/core';
// import pipeBigi from './baseai/pipes/bigi';
import pipeSummarizer from './baseai/pipes/summarizer';

// const pipe = new Pipe(pipeBigi());
const pipe = new Pipe(pipeSummarizer());

// const userMsg = `How you can help me build a resume?`;
// const userMsg = `What's the weather in San Francisco?`;
const userMsg = `What's the weather in San Francisco and what's the price of Bitcoin?`;

async function main() {
  const { stream } = await pipe.run({
    messages: [{ role: 'user', content: userMsg }],
    stream: true,
  });

  const runner = getRunner(stream);

  // Method 1: Using event listeners
  runner.on('connect', () => {
    console.log('Stream started.\n');
  });

  runner.on('content', content => {
    process.stdout.write(content);
  });

  runner.on('end', () => {
    console.log('\nStream ended.');
  });

  runner.on('error', error => {
    console.error('Error:', error);
  });
}

main();