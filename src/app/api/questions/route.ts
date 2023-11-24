import { db } from '@/lib/server/db';

export const GET = () => {
  const questions = db.questions.read();

  return new Response(JSON.stringify(questions));
};
