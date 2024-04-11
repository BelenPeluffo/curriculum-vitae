const DiagonalLine = ({ x1, y1, diagonalDistance: length }) => {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute" }}>
      <line
        y1={y1}
        y2={length}
        stroke="var(--brand-orange)"
        strokeWidth={4}
      />
    </svg>
  );
};

export default DiagonalLine;
