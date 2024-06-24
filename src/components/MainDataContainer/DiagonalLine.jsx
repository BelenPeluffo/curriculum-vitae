import { motion } from "framer-motion";
import PropTypes from "prop-types";
const DiagonalLine = ({ x1, y1, length }) => {
  console.log("x1?", x1);
  const left = x1;
  console.log("left?", left);
  return (
    <motion.svg
      width={4}
      height={length}
      style={{
        position: "absolute",
        paddingLeft: 16,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <line y1={y1} y2={length} stroke="var(--brand-orange)" strokeWidth={4} />
    </motion.svg>
  );
};

DiagonalLine.propTypes = {
  x1: PropTypes.number,
  y1: PropTypes.number,
  length: PropTypes.number,
  alignment: PropTypes.string,
};

export default DiagonalLine;
