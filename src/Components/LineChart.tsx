import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

type Props = {
  data1: number[];
  label1: string;
  data2?: number[];
  label2?: string;
  xLabels: string[];
};

const LineGraph = ({ data1, label1, data2, label2, xLabels }: Props) => {
  return (
    <LineChart
      width={800}
      height={500}
      series={
        data2
          ? [
              { data: data1, label: label1 },
              { data: data2, label: label2 },
            ]
          : [{ data: data1, label: label1 }]
      }
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
};

export default LineGraph;
