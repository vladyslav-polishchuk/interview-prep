import TabsSwitcher from "@/lib/client/tabs-switcher";

const tabs = [
  { id: "prompt", title: "Prompt", content: <div>prompt</div> },
  { id: "solution", title: "Solution", content: <div>solution</div> },
  { id: "explanation", title: "Explanation", content: <div>explanation</div> },
];

export default function QuestionPanel() {
  return <TabsSwitcher tabs={tabs} />;
}
