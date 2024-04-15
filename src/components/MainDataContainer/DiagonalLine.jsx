const DiagonalLine = ({ x1, y1, length, alignment }) => {
  console.log('x1?',x1);
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        // left: alignment === "start" || !alignment ? 24 : 100,
        left: x1 + 16,
      }}
    >
      <line y1={y1} y2={length} stroke="var(--brand-orange)" strokeWidth={4} />
    </svg>
  );
};

export default DiagonalLine;
