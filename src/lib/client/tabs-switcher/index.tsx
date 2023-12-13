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
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={styles.root}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={styles.button}
            aria-pressed={tab === selectedTab}
            onClick={() => {
              if (selectedTab !== tab) {
                setSelectedTab(tab);
              }
            }}
          >
            <span className={styles.title}>{tab.title}</span>
          </button>
        ))}
      </div>
      <div className={styles.content}>{selectedTab.content}</div>
    </div>
  );
}
