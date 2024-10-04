import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import PieChartComponent from "./pieChartComponent";
import { HStack } from "~/buildingBlockComponents/mainContainers";
import CodeModal from "~/routes/blog+/blog-components/codeModal";

// Assuming InputData is already appropriately defined for pie charts
const salesData = {
  labels: [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports Equipment",
    "Toys & Games",
  ],
  datasets: [
    {
      data: [300, 250, 150, 200, 100], // Sales values for each category
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      hoverOffset: 8,
    },
  ],
};

export default function PieChartOne() {
  return (
    <VStackFull gap="gap-[2vh]">
      <PieChartComponent data={salesData as any} title="Sales Distribution" />{" "}
      <HStack>
        <CodeModal
          code={`import { ChartOptions } from "chart.js";

export default function GetPieChartStyles({
  title = "Pie Chart Title",
  textColor = "rgba(255, 255, 255, 1)",
}: {
  title?: string;
  textColor?: string;
}): ChartOptions<"pie"> {
  const pieChartDefaults: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: textColor,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
          family: "Arial",
          weight: "bold",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return pieChartDefaults;
}
`}
          title="Pie Chart Options"
          buttonText="Options"
        />
        <CodeModal
          code={`import { useState } from "react";
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
`}
          title="Pie Chart Component"
          buttonText="Pie Chart Component"
        />
        <CodeModal
          code={`import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import PieChartComponent from "./pieChartComponent";
import HStack from "~/components/buildingBlocks/hStack";
import CodeModal from "../codeModal";

// Assuming InputData is already appropriately defined for pie charts
const salesData = {
  labels: [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports Equipment",
    "Toys & Games",
  ],
  datasets: [
    {
      data: [300, 250, 150, 200, 100], // Sales values for each category
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      hoverOffset: 8,
    },
  ],
};

export default function PieChartOne() {
  return (
      <PieChartComponent data={salesData as any} title="Sales Distribution" />
    )
  }`}
          title="Pie Chart Example"
          buttonText="Example"
        />
      </HStack>
    </VStackFull>
  );
}
