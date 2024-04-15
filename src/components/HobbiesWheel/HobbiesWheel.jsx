import { PieChart } from "@mui/x-charts/PieChart";
import BrandLogo from "../../assets/images/logo.svg";
import { useDrawingArea } from "@mui/x-charts";
import { useState } from "react";
import { styled } from "@mui/material";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const CenterItem = ({ children }) => {
  const { width, left, height, top } = useDrawingArea();
  console.log("width?", width, "left?", left);
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
};

const HobbiesWheel = ({ items }) => {
  const [hobbie, setHobbie] = useState(null);
  console.log("hobbie?", hobbie);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <PieChart
        series={[
          { paddingAngle: 5, innerRadius: 160, outerRadius: 200, data: items },
        ]}
        width={400}
        // width="100%"
        height={400}
        legend={{ hidden: true }}
        colors={["var(--brand-orange)"]}
        onItemClick={(e, data) => setHobbie(items[data.dataIndex])}
      >
        <CenterItem>
          {hobbie ? (
            hobbie.label
          ) : (
            <img
              src={BrandLogo}
              // style={{ position: "absolute", top: "252%", right: "46%" }}
            />
          )}
        </CenterItem>
      </PieChart>
    </div>
  );
};

export default HobbiesWheel;
