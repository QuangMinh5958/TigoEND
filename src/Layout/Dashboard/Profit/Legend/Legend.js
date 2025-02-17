import * as React from "react";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";
import { PiecewiseColorLegend } from "@mui/x-charts/ChartsLegend";

// Dataset biểu thị số tiền tăng giảm từ 2020-2025
const dataset = [
  { year: new Date(2020, 0, 1), money: 500 },
  { year: new Date(2021, 0, 1), money: 750 },
  { year: new Date(2022, 0, 1), money: 600 },
  { year: new Date(2023, 0, 1), money: 900 },
  { year: new Date(2024, 0, 1), money: 850 },
  { year: new Date(2025, 0, 1), money: 910 },
];

const MoneyChart = () => {
  return (
    <div className="w-full pl-5 lg:pl-0">
      <Typography variant="body1" className="text-lg !font-bold   mb-2">
        Biểu đồ số tiền tăng giảm (2020-2025)
      </Typography>
      <LineChart
        dataset={dataset}
        series={[
          {
            label: "Số tiền (VNĐ)",
            dataKey: "money",
            showMark: true,
            valueFormatter: (value) => `${value.toLocaleString()} $`,
          },
        ]}
        xAxis={[
          {
            scaleType: "time",
            dataKey: "year",
            valueFormatter: (value) => value.getFullYear().toString(),
          },
        ]}
        yAxis={[
          {
            valueFormatter: (value) => `${value.toLocaleString()} $`,
          },
        ]}
        grid={{ horizontal: true }}
        height={270}
        margin={{ top: 30, right: 50 }}
        slotProps={{ legend: { hidden: true } }}
      >
        <ChartsReferenceLine y={700} color="red" label="Mold 700 $" />
        <PiecewiseColorLegend
          axisDirection="x"
          position={{ vertical: "top", horizontal: "right" }}
          direction="column"
        />
      </LineChart>
    </div>
  );
};

export default MoneyChart;
