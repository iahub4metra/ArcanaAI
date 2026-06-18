import { configureStore } from '@reduxjs/toolkit';
import { cardOfTheDayReducer } from './features/cardOfTheDay/slice';

export const store = configureStore({
  reducer: {
    cardOfTheDay: cardOfTheDayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
