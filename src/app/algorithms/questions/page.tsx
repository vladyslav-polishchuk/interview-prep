'use client';

import MainHeader from '@/lib/client/header/MainHeader';
import QuestionsContainer from '@/lib/client/questions/QuestionsContainer';

export default function AlgorithmQuestions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHeader />
      <QuestionsContainer />
    </main>
  );
}
