import React from "react";

type props = {
  data: number[];
};

const GraphComponent = ({ data }: props) => {
  const chartData = {
    labels: [
      "Assignment 1",
      "Assignment 2",
      "Assignment 3",
      "Assignment 4",
      "Assignment 5",
    ],
    datasets: [
      {
        label: "Student Scores",
        data: data || [0, 0, 0, 0, 0],
        borderColor: "#007bff",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div></div>
    // <Line
    //   data={chartData}
    //   options={chartOptions}
    //   style={{ minWidth: "300px", minHeight: "300px" }}
    // />
  );
};

export default GraphComponent;
