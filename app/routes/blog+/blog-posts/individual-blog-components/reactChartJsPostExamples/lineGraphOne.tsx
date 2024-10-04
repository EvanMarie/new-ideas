import { InputData } from "./barChartComponent";
import LineChartComponent from "./lineGraphComponent";
import { HStack, VStackFull } from "~/buildingBlockComponents/mainContainers";
import CodeModal from "~/routes/blog+/blog-components/codeModal";

const salesData: InputData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Product A",
      data: [65, 59, 80, 81, 56, 55], // Sales for Product A
    },
    {
      label: "Product B",
      data: [75, 69, 90, 91, 66, 65], // Sales for Product B
    },
    {
      label: "Product C",
      data: [85, 79, 100, 101, 76, 75], // Sales for Product C
    },
  ],
};

export default function LineGraphExample() {
  return (
    <VStackFull gap="gap-[2vh]">
      <LineChartComponent
        data={salesData}
        title="Monthly Sales Data"
        yTitle="sales in $10,000"
      />
      <HStack>
        <CodeModal
          code={`import { ChartOptions } from "chart.js";
export default function GetLineGraphStyles({
  title = "Chart Title",
  xTitle,
  yTitle,
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
  pointStyle = "circle" as const, // Default point style
}: {
  title?: string;
  gridLineColor?: string;
  xTitle?: string;
  yTitle?: string;
  textColor?: string;
  tickSize?: number;
  pointStyle?:
    | "circle"
    | "cross"
    | "crossRot"
    | "dash"
    | "line"
    | "rect"
    | "rectRounded"
    | "rectRot"
    | "star"
    | "triangle";
}): ChartOptions {
  const lineGraphDefaults: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
        title: {
          display: true,
          text: xTitle,
          color: textColor,
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
      y: {
        grid: {
          color: gridLineColor,
        },
        beginAtZero: true,
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
        title: {
          display: true,
          text: yTitle,
          color: textColor,
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: true,

        labels: {
          padding: 20,
          color: textColor,
          usePointStyle: true,
          pointStyle: pointStyle,
          font: {
            family: "Arial",
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
          family: "Arial",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return lineGraphDefaults;
}
`}
          title="Line Graph Options"
          buttonText="Options"
        />
        <CodeModal
          code={`import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartContainer from "./chartContainer";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import { InputData } from "./barChartComponent";
import GetLineGraphStyles from "./lineGraphOptions";

// Register Chart.js components necessary for Line Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChartComponent({
  data,
  title,
  yTitle,
  xTitle,
}: {
  data: InputData;
  title?: string;
  yTitle?: string;
  xTitle?: string;
}) {
  const colorPairs = [
    {
      lineColor: "rgba(234, 97, 255, 1)",
    },
    {
      lineColor: "rgba(0, 225, 255, 1)",
    },
    {
      lineColor: "rgba(255, 242, 0, 1)",
    },
    {
      lineColor: "rgba(115, 99, 255, 1)",
    },
    {
      lineColor: "rgba(255, 18, 113, 1)",
    },
    {
      lineColor: "rgba(98, 255, 89, 1)",
    },
  ];

  const [indexAxis, setIndexAxis] = useState("x");

  const handleToggleAxis = () => {
    setIndexAxis(indexAxis === "x" ? "y" : "x");
  };

  const chartDefaults = GetLineGraphStyles({
    title: title,
    xTitle: xTitle,
    yTitle: yTitle,
  });

  // Update color and style for line chart
  const inputData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: colorPairs[index].lineColor,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 2,
      tension: 0.4,
    })),
  };

  return (
    <ChartContainer>
        <Line data={inputData} options={chartDefaults as any} />
    </ChartContainer>
  );
}
`}
          title="Line Graph Component"
          buttonText="Line Graph Component"
        />
        <CodeModal
          code={`import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import { InputData } from "./barChartComponent";
import LineChartComponent from "./lineGraphComponent";
import HStack from "~/components/buildingBlocks/hStack";
import CodeModal from "../codeModal";

const salesData: InputData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Product A",
      data: [65, 59, 80, 81, 56, 55], // Sales for Product A
    },
    {
      label: "Product B",
      data: [75, 69, 90, 91, 66, 65], // Sales for Product B
    },
    {
      label: "Product C",
      data: [85, 79, 100, 101, 76, 75], // Sales for Product C
    },
  ],
};

export default function ChartExampleFive() {
  return (
      <LineChartComponent
        data={salesData}
        title="Monthly Sales Data"
        yTitle="sales in $10,000"
      />`}
          title="Line Graph Example"
          buttonText="Example"
        />
      </HStack>
    </VStackFull>
  );
}
