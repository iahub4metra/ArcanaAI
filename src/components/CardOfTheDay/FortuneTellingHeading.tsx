import { motion } from 'motion/react';

const gradientStyles = {
  backgroundImage: 'linear-gradient(to right, #C9A24B, #E8C874, #AD5230, #5B3A73, #C9A24B)',
  backgroundSize: '200% auto',

  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
};

export default function FortuneTellingHeading() {
  return (
    <motion.h4
      style={gradientStyles}
      animate={{ backgroundPosition: ['0% center', '200% center'] }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      }}
      className="text-[18px] leading-5 text-[#E8E6DF]"
    >
      Fortune Telling
    </motion.h4>
  );
}
