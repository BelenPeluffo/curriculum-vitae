import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton, styled, Tooltip, Typography } from "@mui/material";

const data02 = [
  { name: "A1", value: 100, description: "description" },
  { name: "A2", value: 100, description: "description" },
  { name: "B1", value: 100, description: "description" },
  { name: "B2", value: 100, description: "description" },
  { name: "B3", value: 100, description: "description" },
  { name: "B4", value: 100, description: "description" },
  { name: "B5", value: 100, description: "description" },
  { name: "C1", value: 100, description: "description" },
  { name: "C2", value: 100, description: "description" },
  { name: "D1", value: 100, description: "description" },
  { name: "D2", value: 100, description: "description" },
];

const RechartsPieChart = () => {
  const [activeSlice, setActiveSlice] = useState(-1);
  const [isTooltipOpen, setTooltipOpen] = useState(false);

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
            fill="var(--brand-orange)"
            activeIndex={activeSlice}
            onClick={(_, index) => setActiveSlice(index)}
            activeShape={(props) => {
              const { payload } = props;
              return (
                <g>
                  {/* Add styling to slice */}
                </g>
              );
            }}
          />
        </PieChart>

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
          <Typography variant="h5">
            {activeSlice !== -1 ? data02[activeSlice].name : "Hobbies"}
          </Typography>
          <Tooltip
            title={
              <Typography>
                {activeSlice !== -1
                  ? data02[activeSlice].description
                  : "Hobbies"}
              </Typography>
            }
            placement="bottom"
            open={isTooltipOpen}
            slotProps={{
              tooltip: {
                sx: { backgroundColor: "rgba(0, 0, 0, 0.1)", color: "gray" },
              },
            }}
          >
            <IconButton onClick={() => setTooltipOpen(!isTooltipOpen)}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default RechartsPieChart;
