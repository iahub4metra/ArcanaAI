import { RootState } from '@/lib/store';

export const selectReadingSession = (state: RootState) => state.readingSession.readingSession;
