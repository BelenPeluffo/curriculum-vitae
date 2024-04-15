import { PieChart } from "@mui/x-charts/PieChart";
import BrandLogo from "../../assets/images/logo.svg";
import { useDrawingArea } from "@mui/x-charts";
import { useState } from "react";
import { styled } from "@mui/material";
import styles from "../../app.module.css";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const CenterItem = ({ children, onClick }) => {
  return (
    <StyledText
      // x={left + width / 2}
      x={"50%"}
      y={"50%"}
      className={styles.hobbieItem}
      onClick={onClick}
    >
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
      className="hobbies-wheel"
    >
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 160,
            outerRadius: 200,
            data: items,
          },
        ]}
        width={400}
        // width="100%"
        height={400}
        legend={{ hidden: true }}
        colors={["var(--brand-orange)"]}
        onItemClick={(e, data) => setHobbie(items[data.dataIndex])}
        className={styles.donutChart}
        sx={{
          "& .MuiResponsiveChart-container svg > g > g": {
            transform: "translate(50%,50%)",
          },
        }}
      >
        <CenterItem onClick={() => console.log("Hallo")}>
          {hobbie && hobbie.label}
        </CenterItem>
        {/* <img
          src={BrandLogo}
          // style={{ position: "absolute", top: "252%", right: "46%" }}
        /> */}
      </PieChart>
    </div>
  );
};

export default HobbiesWheel;
