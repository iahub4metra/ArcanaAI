import { AIReading, TarotCard } from '@/types/types';
import axios from 'axios';

export const generateReading = async (readingRequest: { question: string; cards: TarotCard[] }) => {
  const response = await axios.post<AIReading>('/api/reading', readingRequest);
  return response.data;
};
