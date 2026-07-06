'use client';
import { TbCards } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField';
import { QuestionFormData, questionSchema } from '@/schemas/questionSchema';
import { getRandomCards } from '@/services/randomCards';
import { ReadingSession } from '@/types/types';
import { useAppDispatch } from '@/lib/hooks';
import { setSession } from '@/lib/features/reading/slice';
import { generateReading } from '@/services/ai/client';
import { saveReadingSession } from '@/services/storage';

export default function Form() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
  });

  const onSubmit = async (data: QuestionFormData) => {
    const cards = getRandomCards();
    const createdAt = new Date().toISOString();
    const answer = await generateReading({ question: data.question, cards });
    const session: ReadingSession = {
      question: data.question,
      cards,
      createdAt,
      answer,
    };
    dispatch(setSession(session));
    saveReadingSession(session);
  };

  return (
    <div className="bg-[#1B1B1B] p-4 md:p-6 rounded-2xl border-[#4E380F]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5 items-center">
        <TextField
          {...register('question')}
          multiline
          maxRows={5}
          error={Boolean(errors.question?.message)}
          helperText={errors.question?.message}
          sx={{
            '& .MuiInputBase-root': {
              width: '308px',
              bgcolor: 'transparent',
              minHeight: '140px',
              borderRadius: '1rem',
              alignItems: 'flex-start',
              '@media screen and (min-width: 768px)': {
                width: '460px',
                minHeight: '100px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4E380F',
              },
              '& .MuiOutlinedInput-input': {
                color: '#9CA3AF',
                fontSize: '14px',
              },
            },
          }}
          placeholder="Your question to the cards"
        />
        <button
          type="submit"
          className="rounded-2xl bg-[#B73208] py-3.5 px-4 w-full border-[#F6C049] text-[#F5ECE0] text-[14px] flex items-center gap-1.5 justify-center"
        >
          Draw
          <TbCards className="stroke-[#F5ECE0]" />
        </button>
      </form>
    </div>
  );
}
