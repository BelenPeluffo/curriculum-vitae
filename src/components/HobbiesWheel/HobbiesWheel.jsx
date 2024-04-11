import { PieChart } from "@mui/x-charts/PieChart";
import BrandLogo from "../../assets/images/logo.svg";

const HobbiesWheel = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center" }}>
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
        style={{ position: "relative", top: "50%", right: "50%" }}
      />
    </div>
  );
};

export default HobbiesWheel;
