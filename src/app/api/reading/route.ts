import { getTarotReading } from '@/services/ai/mistral';
import { z } from 'zod';

const readingRequestSchema = z.object({
  question: z.string().trim().min(10).max(500),
  cards: z.array(z.object({ name: z.string() })).length(3),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = readingRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  try {
    const reading = await getTarotReading(parsed.data.question, parsed.data.cards);
    return Response.json(reading);
  } catch (error) {
    console.error('Failed to generate reading', error);
    return Response.json({ error: 'Reading unavailable, please try again' }, { status: 502 });
  }
}
