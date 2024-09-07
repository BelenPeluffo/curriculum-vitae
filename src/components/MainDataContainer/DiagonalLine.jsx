import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const FINAL_Y_POSITION = 0;

const DiagonalLine = ({ containerRef, lastItemRef }) => {
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
  const left = leftDistance;
  console.log("left?", left);
  return (
    <motion.svg
      width={4}
      // height={lineLength}
      style={{
        position: "absolute",
        paddingLeft: 16,
        zIndex: 0,
      }}
      initial={{ opacity: 0, height: 0 }}
      whileInView={{ opacity: 1, height: lineLength }}
      transition={{ duration: 0.25 }}
    >
      <line y1={FINAL_Y_POSITION} y2={lineLength} stroke="var(--brand-orange)" strokeWidth={4} />
    </motion.svg>
  );
};

DiagonalLine.propTypes = {
  containerRef: PropTypes.object,
  lastItemRef: PropTypes.object,
};

export default DiagonalLine;
