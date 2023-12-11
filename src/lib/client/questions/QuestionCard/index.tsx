import { Complexity, type Question } from '@/lib/shared/types/question';
import styles from './index.module.css';
import Link from 'next/link';

const colorToClassName = {
  [Complexity.EASY]: styles['color-easy'],
  [Complexity.MEDIUM]: styles['color-medium'],
  [Complexity.HARD]: styles['color-hard'],
  [Complexity.VERY_HARD]: styles['color-very-hard'],
};

export default function QuestionCard({
  question,
  hideColor,
}: {
  question: Question;
  hideColor?: boolean;
}) {
  const complexityClassName = colorToClassName[question.complexity];
  const colorClassName = `${styles.color} ${
    hideColor ? '' : complexityClassName
  }`;

  return (
    <div className={styles.root}>
      <div className={styles.status}></div>

      <Link href={'questions/' + question.id} className={styles.link}>
        {question.name}
      </Link>

      <div className={colorClassName}></div>
    </div>
  );
}
