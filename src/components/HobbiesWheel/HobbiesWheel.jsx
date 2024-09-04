import { PieChart } from "@mui/x-charts/PieChart";
// import BrandLogo from "../../assets/images/logo.svg";
import { useState } from "react";
import { styled, Typography } from "@mui/material";
import styles from "../../app.module.css";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const CenterItem = ({ children, onClick, subtitle }) => {
  return (
    <>
      <StyledText
        x={"50%"}
        y={"50%"}
        className={styles.hobbieItem}
        onClick={onClick}
      >
        {children}
      </StyledText>
      <StyledText fontSize={8} x={"50%"} y={"50%"} width={"50%"}>
        {subtitle}
      </StyledText>
    </>
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
      className={styles.hobbiesWheel}
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
        <CenterItem
          onClick={() => console.log("Hallo")}
          subtitle={
            !hobbie ? "Presioná sobre alguna de las porciones para verla" : null
          }
        >
          {hobbie ? hobbie.label : "Hobbies"}
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
