import { ReadingSession } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

export interface InitialType {
  readingSession: ReadingSession | null;
}

const initialState: InitialType = {
  readingSession: null,
};

const readingSlice = createSlice({
  name: 'reading',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.readingSession = action.payload;
    },
    clearSession: (state) => {
      state.readingSession = null;
    },
  },
});

export const { setSession, clearSession } = readingSlice.actions;

export const readingSessionReducer = readingSlice.reducer;
