import Link from "next/link";
import HomeButton from "../HomeButton";
import styles from "./index.module.css";
import QuestionsListSvg from "../../../../../public/questions-list.svg";
import SplitPane from "../../split-pane";
import QuestionPanel from "./question-panel";
import { useEffect, useState } from "react";
import type { Question } from "@/lib/shared/types/question";
import { usePathname } from "next/navigation";

const useQuestion = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);
  const path = usePathname();
  const questionId = path.split("/").pop();

  useEffect(() => {
    fetch(`/api/questions/${questionId}`)
      .then((response) => response.json())
      .then((question) => {
        setQuestion(question);
        setLoading(false);
      });
  }, [questionId]);

  return { question, loading };
};

export default function EditorContainer() {
  const { question } = useQuestion();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <HomeButton />
        <Link href="/algorithms/questions" className={styles["questions-list"]}>
          <QuestionsListSvg width={25} height={25} />
        </Link>
      </header>
      <div className={styles.main}>
        <SplitPane orientation="vertical">
          <SplitPane orientation="horizontal">
            <QuestionPanel question={question} />

            <QuestionPanel question={question} />
          </SplitPane>

          <SplitPane orientation="horizontal">
            <QuestionPanel question={question} />

            <QuestionPanel question={question} />
          </SplitPane>
        </SplitPane>
      </div>
    </div>
  );
}
