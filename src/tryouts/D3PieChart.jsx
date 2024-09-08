import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Typography } from "@mui/material";

const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 100 },
  { name: "B1", value: 100 },
  { name: "B2", value: 100 },
  { name: "B3", value: 100 },
  { name: "B4", value: 100 },
  { name: "B5", value: 100 },
  { name: "C1", value: 100 },
  { name: "C2", value: 100 },
  { name: "D1", value: 100 },
  { name: "D2", value: 100 },
];

const RechartsPieChart = () => {
  const [activeSlice, setActiveSlice] = useState(-1);

  return (
    <>
      <ResponsiveContainer
        width="100%"
        height={400}
        style={{ zIndex: 999, position: "relative" }}
      >
        <PieChart width="100%" height="100%">
          <Pie
            data={data02}
            dataKey="value"
            paddingAngle={2}
            cx="50%"
            cy="50%"
            innerRadius={170}
            outerRadius={200}
            fill="#82ca9d"
            activeIndex={activeSlice}
            onClick={(_, index) => setActiveSlice(index)}
            activeShape={(props) => {
              const { payload } = props;
              return (
                <g>
                  <text x="50%" y="50%" textAnchor="middle">
                    {payload.name}
                  </text>
                </g>
              );
            }}
          />
        </PieChart>
        {activeSlice == -1 ? (
          <div
            style={{
              position: "absolute",
              bottom: "50%",
              left: "50%",
              transform: "translate(-55%, 50%)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Hobbies</Typography>
            <IconButton>
              <InfoIcon />
            </IconButton>
          </div>
        ) : null}
      </ResponsiveContainer>
    </>
  );
};

export default RechartsPieChart;
