'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  selectCardOfTheDay,
  selectCardOfTheDayOperations,
} from '@/lib/features/cardOfTheDay/selectors';
import { useEffect } from 'react';
import { getCardOfTheDay } from '@/lib/features/cardOfTheDay/operations';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import { findCardOfTheDayFortuneTelling } from '@/services/findCardOfTheDayFortuneTelling';
import FortuneTellingHeading from './FortuneTellingHeading';

export default function CardOfTheDay() {
  const dispatch = useAppDispatch();
  const date = new Date().toDateString();
  const card = useAppSelector(selectCardOfTheDay);
  const operationState = useAppSelector(selectCardOfTheDayOperations);

  useEffect(() => {
    dispatch(getCardOfTheDay());
  }, [dispatch, date]);

  return (
    <div className="rounded-2xl border border-dashed border-[#F6C049] p-4 flex flex-col gap-4 md:flex-row bg-[#151517]">
      <div className="w-full md:max-w-[200px]">
        {card ? (
          <Image
            src={`/cards/${card?.img}`}
            alt={card.name}
            width={200}
            height={210}
            loading="eager"
            className="w-full"
          />
        ) : (
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              bgcolor: '#2E2E2E',
              borderRadius: '16px',
              width: '100%',
              height: '460px',
              '@media screen and (min-width: 768px)': {
                maxWidth: '200px',
                height: '300px',
              },
              '@media screen and (min-width: 1280px)': {
                height: '340px',
              },
            }}
          />
        )}
      </div>
      <div>
        <h4 className="text-[#EAE1D9] text-[16px] leading-5 flex items-center gap-1 mb-3">
          {new Date().toLocaleString('en-uk', { day: '2-digit' })}{' '}
          {new Date().toLocaleString('en-uk', { month: 'long' })}
          <span className="text-amber-600">•</span>
          Card of the Day
        </h4>
        {operationState.status === 'failed' ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[14px] text-[#E8E6DF]">
              {operationState.error?.message ?? "Could not load today's card."}
            </p>
            <button
              onClick={() => dispatch(getCardOfTheDay())}
              className="rounded-2xl border border-[#F6C049] bg-[#B73208] px-4 py-2 text-[13px] text-[#F5ECE0] transition-colors duration-150 hover:bg-[#9B2A07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6C049] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151517] active:bg-[#7A2205] cursor-pointer"
            >
              Try again
            </button>
          </div>
        ) : card ? (
          <>
            <p className="text-[14px] text-[#E8E6DF] leading-4">
              <span className="text-[18px] leading-6">{card.name}</span>
              <span> — </span>
              {card.meaning_up}
            </p>
            <div className=" mt-4 flex flex-col items-center gap-3">
              <FortuneTellingHeading />
              <ul className="flex flex-col gap-2.5 items-center">
                {findCardOfTheDayFortuneTelling(card.name).map((str, index) => (
                  <li key={index} className="rounded-xl border-[#3A2A14] border p-3 md:w-fit">
                    <p className="text-[14px] leading-[18px] text-[#E8E6DF]">{str}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{ height: '32px', bgcolor: '#2E2E2E', display: 'block', borderRadius: '8px' }}
            />
            <div className="mt-4">
              <FortuneTellingHeading />
              <ul className="flex flex-col gap-2.5 items-center">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="rounded-xl border-[#3A2A14] border p-3 w-full">
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      sx={{
                        height: '18px',
                        width: '250px',
                        bgcolor: '#2E2E2E',
                        borderRadius: '8px',
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
