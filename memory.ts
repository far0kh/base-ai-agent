import 'dotenv/config';
import { Pipe } from '@baseai/core';
import pipeSummarizer from './baseai/pipes/summarizer';

const pipe = new Pipe(pipeSummarizer());

const userMsg = `Was bitcoin created in 2001?`;

async function main() {
  const response = await pipe.run({
    messages: [{ role: 'user', content: userMsg }],
    stream: false,
  });

  console.log(response['completion']);
}

main();
