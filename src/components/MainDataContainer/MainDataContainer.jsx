import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
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
  }, [window.innerHeight, window.innerWidth, viewportSize]);

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
    <motion.div
      className="data-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
      initial={{ opacity: 0, x: alignment === "end" ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: false }}
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
                  <motion.li
                    key={index}
                    className={styles.itemContainer}
                    initial={{
                      opacity: 0,
                      y: alignment === "end" ? 100 : -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 * (index > 0 ? index : 0.5) },
                    }}
                    viewport={{ once: false }}
                    ref={index === items.length - 1 ? lastItemRef : null}
                  >
                    <div>{item.date}</div>
                    <div className={styles.contactItemTextBold}>
                      {item.title}
                    </div>
                    <div className={styles.itemDescription}>
                      {item.description}
                    </div>
                  </motion.li>
                ))
              : null}
          </ul>
        </div>
      ) : null}
    </motion.div>
  );
};

MainDataContainer.propTypes = {
  sectionTitle: PropTypes.string,
  items: PropTypes.array,
  alignment: PropTypes.string,
};

export default MainDataContainer;
