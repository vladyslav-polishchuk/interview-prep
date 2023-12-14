import { useState } from "react";
import styles from "./index.module.css";
import type { Question } from "@/lib/shared/types/question";

export interface QuestionPanelProps {
  question: Question | null;
}

export default function QuestionPrompt({ question }: QuestionPanelProps) {
  const [hideCategory, setHideCategory] = useState(true);

  if (!question) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <span className={styles.headerSectionKey}>Difficulty:</span>
          <span className={styles.difficultyValue}>{question.complexity}</span>
        </div>
        <div className={styles.headerSection}>
          <span className={styles.headerSectionKey}>Category:</span>
          <span
            className={hideCategory ? styles.categoryHidden : ""}
            title="Hidden"
            onClick={() => setHideCategory(false)}
          >
            {hideCategory ? "Hidden" : question.category}
          </span>
        </div>
        <div className={styles.headerSection}>
          <span className={styles.headerSectionKey}>
            Successful Submissions:
          </span>
          0
        </div>
      </div>

      <h2 className={styles.title}>{question.name}</h2>

      <div
        className={styles.example}
        dangerouslySetInnerHTML={{ __html: question.prompt }}
      ></div>

      <div className={styles.hints}></div>
    </div>
  );
}
