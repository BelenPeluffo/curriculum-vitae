import { PieChart } from "@mui/x-charts/PieChart";
import BrandLogo from "../../assets/images/logo.svg";
import { useDrawingArea } from "@mui/x-charts";

const HobbiesWheel = ({ items }) => {
  const { width } = useDrawingArea();
  console.log('width?', width);
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
      ></PieChart>
      <img
        src={BrandLogo}
        style={{ position: "absolute", top: "252%", right: "46%" }}
      />
    </div>
  );
};

export default HobbiesWheel;
