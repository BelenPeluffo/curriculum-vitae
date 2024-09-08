import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";

const RechartsPieChart = ({ items }) => {
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
            data={items}
            dataKey="value"
            paddingAngle={2}
            cx="50%"
            cy="50%"
            innerRadius={170}
            outerRadius={190}
            fill="var(--brand-orange)"
            activeIndex={activeSlice}
            onClick={(_, index) => setActiveSlice(index)}
            activeShape={(props) => {
              const {
                fill,
                cx,
                cy,
                innerRadius,
                outerRadius,
                startAngle,
                endAngle,
              } = props;
              return (
                <g>
                  {/* Add styling to slice */}
                  <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                  />
                  <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                  />
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
            {activeSlice !== -1 ? items[activeSlice].name : "Hobbies"}
          </Typography>
          <Tooltip
            title={
              <Typography>
                {activeSlice !== -1
                  ? items[activeSlice].description
                  : "Clickeá y conocé mis pasiones"}
              </Typography>
            }
            placement="bottom"
            open={isTooltipOpen}
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: "var(--dark-gray)",
                  color: "var(--gray)",
                },
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

RechartsPieChart.propTypes = {
  items: PropTypes.array,
};
