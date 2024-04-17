import { useEffect, useRef, useState } from "react";
import styles from "../../app.module.css";
import DiagonalLine from "./DiagonalLine";

const MainDataContainer = ({ sectionTitle, items, alignment }) => {
  const containerRef = useRef(null);
  const lastItemRef = useRef(null);
  const [leftDistance, setLeftDistance] = useState(null);
  const [lineLength, setLineLength] = useState(null);
  const [viewportSize, setViewportSize] = useState(null);

  useEffect(() => {
    resizingListener();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const lastItem = lastItemRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      setLeftDistance(rect.left);
    }
    if (lastItem) {
      const rect = lastItem.getBoundingClientRect();
      setLineLength(rect.top - 32);
    }
  }, [viewportSize]);

  const resizingListener = () => {
    window.addEventListener("resize", () => {
      setViewportSize({ height: window.innerHeight, width: window.innerWidth });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewportSize({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      });
    };
  };

  return (
    <div
      className="data-container"
      style={{
        display: "flex",
        flexDirection: "column",
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
                  <li
                    key={index}
                    className={styles.itemContainer}
                    ref={index === items.length - 1 ? lastItemRef : null}
                  >
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
