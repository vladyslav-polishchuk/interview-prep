import TabsSwitcher from "@/lib/client/tabs-switcher";
import type { Question } from "@/lib/shared/types/question";
import QuestionPrompt from "./question-prompt";

export interface QuestionPanelProps {
  question: Question | null;
}

export default function QuestionPanel({ question }: QuestionPanelProps) {
  const tabs = [
    {
      id: "prompt",
      title: "Prompt",
      content: <QuestionPrompt question={question} />,
    },
    { id: "solutions", title: "Solutions", content: <div>solution</div> },
    {
      id: "explanation",
      title: "Explanation",
      content: <div>explanation</div>,
    },
  ];

  return <TabsSwitcher tabs={tabs} />;
}
