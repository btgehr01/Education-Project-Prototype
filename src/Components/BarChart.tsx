import React from "react";
import { BarChart } from "@mui/x-charts";

type Props = {
  data1: number[];
  label1: string;
  xLabels: string[];
};

const BarPlot = ({ data1, label1, xLabels }: Props) => {
  return (
    <BarChart
      width={800}
      height={500}
      series={[{ data: data1, label: label1 }]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};

export default BarPlot;
