import { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard';
import { Question } from '@/lib/shared/types/question';
import styles from './index.module.css';
import FilterSvg from '../../../../../public/filter.svg';
import PickRandomSvg from '../../../../../public/pick-random.svg';

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

type Groups = Array<[string, Question[]]>;

const getGroupsByComplexity = (questions: Question[]) => {
  const groups: Groups = [
    ['Easy', []],
    ['Medium', []],
    ['Hard', []],
    ['Very Hard', []],
  ];

  const filledGroups = questions.reduce((groups, question) => {
    groups[question.complexity][1].push(question);
    return groups;
  }, groups);

  return filledGroups.filter(([, questions]) => questions.length > 0);
};

export default function QuestionsContainer() {
  const { questions, loading } = useQuestions();

  if (loading) {
    return <>Loading...</>;
  }

  const groups = getGroupsByComplexity(questions);

  return (
    <div className={styles.root}>
      <div className={styles['grouping-container']}>
        <div className={styles.random}>
          <button className={styles['pick-random']}>
            <PickRandomSvg className={styles.icon} />
            Pick Random
          </button>
        </div>
        <div className={styles.groupby}>
          <div className={styles.groupby2}>
            <button className={styles['group-button']}>
              Group by Difficulty
            </button>
            <button className={styles['group-button']}>
              Group by Category
            </button>
            <button className={styles['group-button']}>Group Randomly</button>
          </div>
        </div>
        <div className={styles.filter}>
          <button className={styles['filter-button']}>
            <FilterSvg className={styles.icon} />
            Filters
          </button>
        </div>
      </div>

      <div className={styles['columns-container']}>
        {groups.map(([title, questions]) => (
          <div key={title} className={styles.category}>
            {title}
            {questions.map((question) => {
              return <QuestionCard key={question.id} question={question} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
