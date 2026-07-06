import { createUserPrompt, SYSTEM_PROMPT } from '@/services/ai/prompts';
import { AIReading } from '@/types/types';
import axios from 'axios';

interface MistralResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function POST(req: Request) {
  const { question, cards } = await req.json();
  const body = {
    model: 'mistral-small-latest',
    response_format: {
      type: 'json_object',
    },
    messages: [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      {
        role: 'user',
        content: createUserPrompt({ question, cards }),
      },
    ],
  };
  const response = await axios.post<MistralResponse>(
    'https://api.mistral.ai/v1/chat/completions',
    body,
    {
      headers: {
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
    }
  );

  const reading: AIReading = JSON.parse(response.data.choices[0].message.content);
  return Response.json(reading);
}
