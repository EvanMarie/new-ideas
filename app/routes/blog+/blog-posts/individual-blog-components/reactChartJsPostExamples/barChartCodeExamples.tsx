import { HStack } from "~/buildingBlockComponents/mainContainers";
import CodeModal from "~/routes/blog+/blog-components/codeModal";

export default function BarChartCodeExamples({
  codeExample,
  exampleNumber = "One",
}: {
  codeExample: string;
  exampleNumber?: string;
}) {
  return (
    <HStack>
      <CodeModal
        code={`export default function GetBarChartStyles({
  title = "Chart Title",
  indexAxis = "y" as const,
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
  xTitle,
  yTitle,
}: {
  title?: string;
  indexAxis?: string;
  gridLineColor?: string;
  textColor?: string;
  tickSize?: number;
  xTitle?: string;
  yTitle?: string;
}) {
  const chartDefaults = {
    indexAxis: indexAxis,
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
            weight: "bold" as const,
            color: textColor,
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
            weight: "bold" as const,
            color: textColor,
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
      textShadow: {
        titleFont: "24px Arial",
        titleColor: "#000",
        shadowColor: "rgba(0,0,0,0.75)",
        shadowBlur: 10,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
      },
      legend: {
        position: "top" as const,
        display: true,
        labels: {
          padding: 20,
          color: textColor,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return chartDefaults;
}
`}
        title="Bar Chart Options"
        buttonText="Options"
      />
      <CodeModal
        code={`import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartContainer from "./chartContainer";
import GetChartStyles from "./barChartOptions";
import ToggleSwitch from "~/buildingBlockComponents/toggleSwitch";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type InputData = {
  labels: string[];
  datasets: { label: string; data: number[] }[];
};

export default function BarChartComponent({
  data,
  title,
  showAxisToggle = true,
}: {
  data: InputData;
  title?: string;
  showAxisToggle?: boolean;
}) {
  const [indexAxis, setIndexAxis] = useState("x"); // Default to 'x'

  const handleToggleAxis = () => {
    setIndexAxis(indexAxis === "x" ? "y" : "x");
  };

  const chartDefaults = GetChartStyles({
    indexAxis: indexAxis,
    title: title,
  });

  const colorPairs = [
    {
      backgroundColor: "rgba(234, 97, 255, 0.8)",
      borderColor: "rgba(234, 97, 255, 1)",
    },
    {
      backgroundColor: "rgba(0, 225, 255, 0.8)",
      borderColor: "rgba(0, 225, 255, 1)",
    },
    {
      backgroundColor: "rgba(255, 242, 0, 0.8)",
      borderColor: "rgba(255, 242, 0, 1)",
    },
    {
      backgroundColor: "rgba(115, 99, 255, 0.8)",
      borderColor: "rgba(115, 99, 255, 1)",
    },
    {
      backgroundColor: "rgba(255, 18, 113, 0.8)",
      borderColor: "rgba(255, 18, 113, 1)",
    },
    {
      backgroundColor: "rgba(98, 255, 89, 0.8)",
      borderColor: "rgba(98, 255, 89, 1)",
    },
  ];

  // Dynamic dataset generation
  const inputData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: colorPairs[index % colorPairs.length].backgroundColor,
      borderColor: colorPairs[index % colorPairs.length].borderColor,
      borderWidth: 2,
    })),
  };

  return (
    <ChartContainer>
      <VStackFull className="gap-[2vh]">
        {showAxisToggle && (
          <ToggleSwitch
            toggleOn={indexAxis === "x"}
            setToggleOn={handleToggleAxis}
            labelColor="light"
            size="xs"
            onText="horizontal"
            offText="vertical"
          />
        )}
        <Bar data={inputData} options={chartDefaults as any} />
      </VStackFull>
    </ChartContainer>
  );
}
`}
        title="Bar Chart Component"
        buttonText="Bar Chart Component"
      />
      <CodeModal
        code={codeExample}
        title={`Bar Chart Example ${exampleNumber}`}
        buttonText="Example"
      />
    </HStack>
  );
}
