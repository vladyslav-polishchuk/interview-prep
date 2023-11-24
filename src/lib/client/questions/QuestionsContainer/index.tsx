import { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard';
import { Question } from '@/lib/shared/types/question';
import styles from './index.module.css';

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../api/questions')
      .then((response) => response.json())
      .then((questions) => {
        setQuestions(questions);
        setLoading(false);
      });
  }, []);

  return { questions, loading };
};

export default function QuestionsContainer() {
  const { questions, loading } = useQuestions();

  if (loading) {
    return <>Loading...</>;
  }

  const questionCards = questions.map((question) => {
    return <QuestionCard key={question.id} question={question} />;
  });

  return <div className={styles.category}>{questionCards}</div>;
}
