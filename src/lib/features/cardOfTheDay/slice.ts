import { createSlice } from '@reduxjs/toolkit';
import { getCardOfTheDay } from './operations';

interface InitialValue {
  cardOfTheDay: {
    type: string;
    name_short: string;
    name: string;
    value: string;
    value_int: number;
    meaning_up: string;
    meaning_rev: string;
    desc: string;
    img: string;
  } | null;
  operation: {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: {
      message: string;
      status?: number;
    } | null;
  };
}

const initialState: InitialValue = {
  cardOfTheDay: null,
  operation: {
    status: 'idle',
    error: null,
  },
};

const cardOfTheDaySlice = createSlice({
  name: 'cardOfTheDay',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCardOfTheDay.pending, (state) => {
        state.operation.status = 'loading';
        state.operation.error = null;
      })
      .addCase(getCardOfTheDay.fulfilled, (state, action) => {
        state.cardOfTheDay = action.payload;
        state.operation.status = 'succeeded';
        state.operation.error = null;
      })
      .addCase(getCardOfTheDay.rejected, (state, action) => {
        state.operation.status = 'failed';
        state.operation.error = action.payload ?? null;
      });
  },
});

export const cardOfTheDayReducer = cardOfTheDaySlice.reducer;
