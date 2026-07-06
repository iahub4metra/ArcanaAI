import { configureStore } from '@reduxjs/toolkit';
import { cardOfTheDayReducer } from './features/cardOfTheDay/slice';
import { readingSessionReducer } from './features/reading/slice';

export const store = configureStore({
  reducer: {
    cardOfTheDay: cardOfTheDayReducer,
    readingSession: readingSessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
