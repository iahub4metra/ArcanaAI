import { ReadingSession } from '@/types/types';

const SESSION_KEY = 'reading-session';

export const saveReadingSession = (readingSession: ReadingSession) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(readingSession));
};
