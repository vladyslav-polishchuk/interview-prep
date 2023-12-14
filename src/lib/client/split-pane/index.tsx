import { useRef, useState } from "react";
import styles from "./index.module.css";

export interface SplitPaneProps {
  children: [React.ReactNode, React.ReactNode];
  orientation: "vertical" | "horizontal";
}

export default function SplitPane({ children, orientation }: SplitPaneProps) {
  const [firstPaneSize, setFirstPaneSize] = useState("0.5");
  const [secondPaneSize, setSecondPaneSize] = useState("0.5");
  const firstPaneRef = useRef<HTMLDivElement>(null);
  const secondPaneRef = useRef<HTMLDivElement>(null);
  const isHorizontal = orientation === "horizontal";

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseMoveHandler = (e: MouseEvent) => {
      const sizes1 = firstPaneRef.current?.getBoundingClientRect()!;
      const sizes2 = secondPaneRef.current?.getBoundingClientRect()!;

      const movement = isHorizontal ? e.movementY : e.movementX;

      const newSize1 = (isHorizontal ? sizes1.height : sizes1.width) + movement;
      const newSize2 = (isHorizontal ? sizes2.height : sizes2.width) - movement;

      const ratio1 = newSize1 / (newSize1 + newSize2);
      const ratio2 = newSize2 / (newSize1 + newSize2);

      setFirstPaneSize(`${ratio1}`);
      setSecondPaneSize(`${ratio2}`);
    };

    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    e.preventDefault();
  };

  return (
    <div
      className={styles.root}
      style={{ flexDirection: isHorizontal ? "column" : "row" }}
    >
      <div
        className={styles.pane}
        style={{ flex: `${firstPaneSize} 1 0%` }}
        ref={firstPaneRef}
      >
        {children[0]}
      </div>
      <div
        className={styles.splitter}
        onMouseDown={onMouseDown}
        style={{ cursor: isHorizontal ? "row-resize" : "col-resize" }}
      />
      <div
        className={styles.pane}
        style={{ flex: `${secondPaneSize} 1 0%` }}
        ref={secondPaneRef}
      >
        {children[1]}
      </div>
    </div>
  );
}
