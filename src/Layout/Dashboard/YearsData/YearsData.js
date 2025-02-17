import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import TitleData from "../../../component/TitleData.js/TitleData";

const YearsData = () => {
  const years = [
    new Date(2006, 0, 1),
    new Date(2007, 0, 1),
    new Date(2008, 0, 1),
    new Date(2009, 0, 1),
    new Date(2010, 0, 1),
    new Date(2011, 0, 1),
    new Date(2012, 0, 1),
    new Date(2013, 0, 1),
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
    new Date(2018, 0, 1),
  ];

  const Register = [
    14231, 26389, 48081, 51723, 71000, 69080, 53001, 49612, 72918, 74128, 62091,
    60021, 50129,
  ];

  const Post = [
    9231, 29389, 38081, 41723, 49000, 66180, 54001, 42612, 71918, 71128, 65091,
    65021, 60129,
  ];

  const Access = [
    8231, 32389, 32081, 48723, 45060, 63022, 52001, 44612, 65918, 64128, 55091,
    50021, 45129,
  ];
  const Comment = [
    7231, 34389, 35081, 46723, 51010, 64084, 56001, 47612, 79918, 68128, 59091,
    40021, 47129,
  ];

  const lineChartsParams = {
    series: [
      {
        label: "Register",
        data: Register,
        showMark: false,
      },
      {
        label: "Access",
        data: Access,
        showMark: false,
      },
      {
        label: "Post",
        data: Post,
        showMark: false,
      },
      {
        label: "Comment",
        data: Comment,
        showMark: false,
      },
    ],
    width: undefined,
    height: 260,
  };

  const yearFormatter = (date) => date.getFullYear().toString();
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format;

  return (
    <div className="w-full h[270]">
      <TitleData title={"Years"} />
      <LineChart
        {...lineChartsParams}
        xAxis={[
          { data: years, scaleType: "time", valueFormatter: yearFormatter },
        ]}
        series={lineChartsParams.series.map((series) => ({
          ...series,
          valueFormatter: (v) => (v === null ? "" : currencyFormatter(v)),
        }))}
      />
    </div>
  );
};

export default YearsData;
