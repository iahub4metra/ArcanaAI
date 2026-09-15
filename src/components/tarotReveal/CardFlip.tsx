'use client';
import { slugify } from '@/services/slug';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export interface CardFlipProps {
  imgSrc: string;
  name: string;
  dealDelay: number;
  flipDelay: number;
}

export default function CardFlip({ imgSrc, name, flipDelay, dealDelay }: CardFlipProps) {
  return (
    <Link href={`/tarot-reading/spread-reveal/${slugify(name)}`}>
      <motion.div
        className="relative h-40 w-24 md:h-52 md:w-32 xl:h-60 xl:w-36"
        style={{ perspective: 1000 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: dealDelay, duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 180 }}
          transition={{ delay: dealDelay + flipDelay, duration: 0.6, ease: 'easeInOut' }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image
              src="/cards/back.png"
              alt="Card back"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 144px, (min-width: 768px) 128px, 96px"
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <Image
              src={`/cards/${imgSrc}`}
              alt={name}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 144px, (min-width: 768px) 128px, 96px"
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
