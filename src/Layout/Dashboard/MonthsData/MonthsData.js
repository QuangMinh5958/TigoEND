import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

import TitleData from "../../../component/TitleData.js/TitleData";

const MonthsData = () => {
  const uData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 2100, 4500, 2700, 3410, 2450,
  ];
  const pData = [
    2400, 1398, 4800, 3908, 4800, 3800, 4300, 2700, 2410, 1100, 3100, 4100,
  ];
  const postData = [
    1000, 3100, 2000, 2700, 3000, 2450, 4050, 2400, 3000, 1900, 4000, 4500,
  ];
  const commentData = [
    1500, 3700, 2500, 2100, 3200, 2100, 3000, 1200, 3100, 4100, 2700, 4600,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="w-full h[270]">
      <TitleData title={"Month"} />
      <LineChart
        width={undefined}
        height={270}
        series={[
          { data: pData, label: "register" },
          { data: uData, label: "access" },
          { data: postData, label: "post" },
          { data: commentData, label: "comment" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </div>
  );
};

export default MonthsData;
