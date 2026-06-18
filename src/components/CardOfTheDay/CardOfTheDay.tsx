'use client';
import Link from 'next/link';
import Star from '../Icons/star';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectCardOfTheDay } from '@/lib/features/cardOfTheDay/selectors';
import { useEffect } from 'react';
import { getCardOfTheDay } from '@/lib/features/cardOfTheDay/operations';
import Image from 'next/image';
import StarsCardOfTheDay from '../Icons/starsCardOfTheDay';

export default function CardOfTheDay() {
  const dispatch = useAppDispatch();
  const date = new Date().toDateString();
  const card = useAppSelector(selectCardOfTheDay);

  useEffect(() => {
    dispatch(getCardOfTheDay());
  }, [dispatch, date]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
      {/* Card of the day */}
      <div className="relative before:w-px before:h-[480px] before:absolute before:bg-[#FDBE1C] before:-left-5 before:top-12">
        <Star className="absolute top-0.5 -left-10" />
        <div className=" relative before:h-px before:absolute before:bg-linear-to-r before:from-[#B9444405] before:from-0% before:via-20% before:via-[#C65C3C52] before:to-100% before:to-[#FDBE1C] before:w-63.75 before:-bottom-2.5 before:rotate-180 before:-left-5">
          <h4 className="text-[#EAE1D9] text-[32px] flex flex-col gap-3 items-start">
            {new Date().toLocaleString('en-uk', { day: '2-digit' })}{' '}
            <span className="text-[24px]">
              {new Date().toLocaleString('en-uk', { month: 'long' })}
            </span>
          </h4>
          <h3 className="text-[#EAE1D9] text-[18px]">Card of the Day</h3>
        </div>
        <p className="text-[14px] text-[#E8E6DF] leading-4 max-w-55.5 mt-6 h-[100px] overflow-y-hidden">
          {/* The Moon card refers to a deep state of sensitivity and imaginative impressionability.
          Here we dream and go into trance, have visions and receive insights and experience deep
          mystical realities beyond our ordinary senses. */}
          {card?.desc}
        </p>
        <picture className="relative before:h-px before:absolute before:bg-linear-to-r before:from-[#B9444405] before:from-0% before:via-20% before:via-[#C65C3C52] before:to-100% before:to-[#FDBE1C] before:w-63.75 before:-bottom-4 before:rotate-180 before:-left-5">
          <source srcSet="/homePage/moons-homePage@1x.png 1x, /homePage/moons-homePage@2x.png 2x" />
          <img src="/homePage/moons-homePage@1x.png" alt="two moons" className="mt-6 md:mt-12" />
        </picture>
        <div className="mt-6">
          <p className="text-[#C4951C] text-[16px] leading-4.5 max-w-52.5 text-center">
            Membership comes with perks <br /> Get started NOW!
          </p>
          <div className="flex items-center gap-2.5 mt-3">
            <Link
              href="/"
              className="py-2.5 px-5.5 rounded-[15px] border border-[#FDBE1C] text-[#EAE1D9] text-[18px] bg-linear-to-l from-0% from-[#AD0B0B] to-100% to-[#FDBE1C]"
            >
              Sign Up
            </Link>
            <p className="text-[#EAE1D9] text-[12px]">or</p>
            <Link
              href="/"
              className="text-[#FDBE1C] border-[#FDBE1C] border rounded-[15px] bg-transparent py-2.5 px-5.5 text-[18px]"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
      {/* Card image */}
      <div className="border-white border px-5 py-10 relative bg-linear-to-b from-0% from-[#ffffff55] to-100% to-[#ffffff24]">
        <div className="absolute border border-t-0 border-l-0 border-white bg-[#000000] rounded-br-[60%] top-0 left-0 w-[42px] h-[47px] flex items-center justify-center">
          <StarsCardOfTheDay className="rotate-180 -scale-x-100" />
        </div>
        <div className="absolute border border-t-0 border-r-0 border-white bg-[#000000] rounded-bl-[60%] top-0 right-0 w-[42px] h-[47px] flex items-center justify-center">
          <StarsCardOfTheDay className="rotate-180" />
        </div>
        {card ? (
          <Image
            src={`/cards/${card?.img}`}
            alt="card"
            width="280"
            height="510"
            className="w-[280px] h-[510px] rounded-full"
          />
        ) : (
          <div className="w-70 h-127.5 rounded-full bg-amber-300"></div>
        )}
        <div className="absolute border border-[#ffffff70] rounded-t-full bg-black py-5 px-8 bottom-0 left-[40.25px] md:left-[47px]">
          <p className="text-[#FDBE1C] text-[28px] leading-8 max-h-16 w-[165px] text-center">
            {card ? card.name : 'Card of The Day'}
          </p>
        </div>
      </div>
    </div>
  );
}
