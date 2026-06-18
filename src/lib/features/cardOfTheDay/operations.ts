import { createAsyncThunk } from '@reduxjs/toolkit';
import tarotCards from '../../../data/tarot.json';
import axios from 'axios';

interface ReturnType {
  type: string;
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  img: string;
}

interface AxiosResponse {
  nhits: number;
  cards: {
    type: string;
    name_short: string;
    name: string;
    value: string;
    value_int: number;
    meaning_up: string;
    meaning_rev: string;
    desc: string;
  }[];
}

type ApiError = {
  message: string;
  status?: number;
};

export const getCardOfTheDay = createAsyncThunk<ReturnType, void, { rejectValue: ApiError }>(
  'cardOfTheDay',
  async (_, thunkAPI) => {
    try {
      const today = new Date().toDateString();
      const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = seed % tarotCards.length;
      const localCard = tarotCards[index];
      const query = localCard.name.toLowerCase().replace('the ', '');
      const res = await axios.get<AxiosResponse>(
        `https://tarotapi.dev/api/v1/cards/search?q=${query}`
      );

      const apiCard = res.data.cards.find((c) => c.name === localCard.name) || res.data.cards[0];

      if (!apiCard) {
        throw new Error('Card not found in API');
      }

      return {
        ...apiCard,
        img: localCard.img,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          message: error.response?.data?.message || error.message,
          status: error.response?.status,
        });
      }

      return thunkAPI.rejectWithValue({
        message: 'Unknown error',
      });
    }
  }
);
