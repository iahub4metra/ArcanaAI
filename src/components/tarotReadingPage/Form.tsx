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
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Form() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
  });

  const onSubmit = async (data: QuestionFormData) => {
    setSubmitError(null);
    try {
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
      router.push('/tarot-reading/spread-reveal');
    } catch (error) {
      console.error('Failed to get reading', error);
      setSubmitError('Something went wrong drawing your cards. Please try again.');
    }
  };

  return (
    <div className="bg-[#1B1B1B] p-4 md:p-6 rounded-2xl w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2.5 items-center xl:items-start"
      >
        <TextField
          {...register('question')}
          multiline
          maxRows={6}
          error={Boolean(errors.question?.message)}
          helperText={errors.question?.message}
          sx={{
            '& .MuiInputBase-root': {
              width: '308px',
              bgcolor: 'transparent',
              minHeight: '140px',
              borderRadius: '1rem',
              alignItems: 'flex-start',
              ':hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#FC8804',
                },
              '@media screen and (min-width: 768px)': {
                width: '350px',
                minHeight: '120px',
              },
              '@media screen and (min-width: 1280px)': {
                width: '460px',
                minHeight: '100px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4E380F',
              },
              '& .MuiOutlinedInput-input': {
                color: '#9CA3AF',
                fontSize: '14px',
                lineHeight: '18px',
              },
            },
          }}
          placeholder="Type your question here..."
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl bg-[#B73208] py-3.5 px-4 w-full xl:w-auto border-[#F6C049] text-[#F5ECE0] text-[14px] flex items-center gap-1.5 justify-center"
        >
          {isSubmitting ? 'Drawing...' : 'Draw'}
          <TbCards className="stroke-[#F5ECE0]" />
        </button>
        {submitError && <p className="text-[13px] text-red-400">{submitError}</p>}
      </form>
    </div>
  );
}
