import { ToolI } from '@baseai/core';

export async function getCurrentPrice(currency: string, unit: string = 'USD') {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await response.json();
  const btcPrice = data.bpi.USD.rate;
  return `The price of ${currency} is ${btcPrice} ${unit === 'USD' ? 'Dollar' : 'Euro'}`;
}

const getCurrentPriceTool = (): ToolI => ({
  run: getCurrentPrice,
  type: 'function' as const,
  function: {
    name: 'getCurrentPrice',
    description: 'Get the current price for a given currency',
    parameters: {
      type: 'object',
      properties: {
        currency: {
          type: 'string',
          description: 'The currency, e.g. Bitcoin',
        },
        unit: {
          type: 'string',
          enum: ['USD', 'EUR'],
        },
      },
      required: ['currency'],
    },
  },
});

export default getCurrentPriceTool;
