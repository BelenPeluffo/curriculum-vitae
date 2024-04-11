const DiagonalLine = ({ x1, y1, diagonalDistance: length, alignment }) => {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        left: alignment === "start" || !alignment ? 24 : 'calc(100%-24px)',
        // right: alignment === "end" ? 100 : null,
      }}
    >
      <line y1={y1} y2={length} stroke="var(--brand-orange)" strokeWidth={4} />
    </svg>
  );
};

export default DiagonalLine;
