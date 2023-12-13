import Link from "next/link";
import HomeButton from "../HomeButton";
import styles from "./index.module.css";
import QuestionsListSvg from "../../../../../public/questions-list.svg";
import SplitPane from "../../split-pane";
import QuestionPanel from "./question-panel";

export default function EditorContainer() {
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
            <QuestionPanel />

            <QuestionPanel />
          </SplitPane>

          <SplitPane orientation="horizontal">
            <QuestionPanel />

            <QuestionPanel />
          </SplitPane>
        </SplitPane>
      </div>
    </div>
  );
}
