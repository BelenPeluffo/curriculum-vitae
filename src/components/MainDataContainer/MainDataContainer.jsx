import { useEffect, useRef, useState } from "react";
import styles from "../../app.module.css";
import DiagonalLine from "./DiagonalLine";

const MainDataContainer = ({ sectionTitle, items, alignment }) => {
  const lineLength = items.length * 65;
  const containerRef = useRef(null);
  const [leftDistance, setLeftDistance] = useState(null);
  console.log("leftDistance?", leftDistance);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      setLeftDistance(rect.left);
    }
  }, []);

  return (
    <div
      className="data-container"
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: alignment ? alignment : "start",
        alignItems: "start",
      }}
      ref={containerRef}
    >
      <div className={styles.sectionTitle}>{sectionTitle.toUpperCase()}</div>
      {items ? (
        <div>
          <DiagonalLine
            x1={leftDistance}
            y1={0}
            length={lineLength}
            alignment={alignment}
          />
          <ul>
            {items
              ? items.map((item, index) => (
                  <li key={index} className={styles.itemContainer}>
                    <div>{item.date}</div>
                    <div className={styles.contactItemTextBold}>
                      {item.title}
                    </div>
                    <div className={styles.itemDescription}>
                      {item.description}
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MainDataContainer;
