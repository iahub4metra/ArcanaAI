import { RootState } from '@/lib/store';

export const selectCardOfTheDay = (state: RootState) => state.cardOfTheDay.cardOfTheDay;
export const selectCardOfTheDayOperations = (state: RootState) => state.cardOfTheDay.operation;
