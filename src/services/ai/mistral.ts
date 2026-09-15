import { AIReading, TarotCard } from '@/types/types';
import axios from 'axios';
import { createUserPrompt, SYSTEM_PROMPT } from './prompts';

interface MistralChatResponse {
  choices: { message: { content: string } }[];
}

export const getTarotReading = async (
  question: string,
  cards: Pick<TarotCard, 'name'>[]
): Promise<AIReading> => {
  const response = await axios.post<MistralChatResponse>(
    'https://api.mistral.ai/v1/chat/completions',
    {
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
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
    }
  );
  const content = response.data.choices[0].message.content;
  return JSON.parse(content) as AIReading;
};
