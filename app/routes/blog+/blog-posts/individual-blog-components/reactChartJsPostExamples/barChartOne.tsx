import { Bar } from "react-chartjs-2";
import ChartContainer from "./chartContainer";
import BarChartComponent, { InputData } from "./barChartComponent";

import BarChartCodeExamples from "./barChartCodeExamples";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Data",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 30, 40, 50, 60],
    },
  ],
};

export default function BarChartOne() {
  return (
    <VStackFull className="gap-[2vh]">
      <BarChartComponent data={data as InputData} title="Demo Bar Chart" />
      <BarChartCodeExamples
        codeExample={`import { Bar } from "react-chartjs-2";
import ChartContainer from "./chartContainer";
import BarChartComponent, { InputData } from "./barChartComponent";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Data",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 30, 40, 50, 60],
    },
  ],
};

export default function BarChartOne() {
  return <BarChartComponent data={data as InputData} title="Demo Bar Chart" />;
}`}
      />
    </VStackFull>
  );
}
