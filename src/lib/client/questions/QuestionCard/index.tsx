import type { Question } from '@/lib/shared/types/question';
import styles from './index.module.css';
import Link from 'next/link';

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <div className={styles.root}>
      <div className={styles.status}></div>
      <Link href={'questions/' + question.id}>{question.title}</Link>
      <div className={styles.color}></div>
    </div>
  );
}
