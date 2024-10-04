import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartContainer from "./chartContainer";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import GetPieChartStyles from "./pieChartOptions"; // Assuming you have a similar function for pie charts
import { InputData } from "./barChartComponent";

// Register necessary Chart.js components for Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function PieChartComponent({
  data,
  title,
}: {
  data: InputData; // Make sure InputData type is suitable for pie data structure
  title?: string;
}) {
  const colors = [
    "rgba(234, 97, 255, 1)",
    "rgba(0, 225, 255, 1)",
    "rgba(255, 242, 0, 1)",
    "rgba(115, 99, 255, 1)",
    "rgba(255, 18, 113, 1)",
    "rgba(98, 255, 89, 1)",
  ];

  const chartDefaults = GetPieChartStyles({
    title: title,
  });

  // Update color and style for pie chart
  const inputData = {
    labels: data.labels,
    datasets: [
      {
        data: data.datasets[0].data,
        backgroundColor: colors, // Use color array directly
        hoverOffset: 4,
      },
    ],
  };

  return (
    <ChartContainer>
      <Pie data={inputData} options={chartDefaults} />
    </ChartContainer>
  );
}
