import styles from "./index.module.css";
import { ReactNode, useState } from "react";

export interface Tab {
  id: string;
  title: string;
  content: ReactNode;
}

export interface TabsSwitcherProps {
  tabs: Array<Tab>;
}

export default function TabsSwitcher({ tabs }: TabsSwitcherProps) {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId)!;

  return (
    <div className={styles.root}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={styles.button}
            aria-pressed={tab.id === selectedTabId}
            onClick={() => {
              if (selectedTabId !== tab.id) {
                setSelectedTabId(tab.id);
              }
            }}
          >
            <span className={styles.title}>{tab.title}</span>
          </button>
        ))}
      </div>
      <>{selectedTab.content}</>
    </div>
  );
}
