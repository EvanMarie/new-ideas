import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import BarChartComponent, { InputData } from "./barChartComponent";
import BarChartCodeExamples from "./barChartCodeExamples";

const data: InputData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales",
      data: [20000, 24000, 25000, 27000], // Sales data for each quarter
    },
    {
      label: "Expenses",
      data: [10000, 11000, 9000, 12000], // Expenses data for each quarter
    },
    {
      label: "Profit",
      data: [10000, 13000, 16000, 15000], // Profit data for each quarter
    },
    {
      label: "Investments",
      data: [5000, 7000, 6000, 11000], // Investments data for each quarter
    },
  ],
};

export default function BarChartThree() {
  return (
    <VStackFull className="gap-[2vh]">
      <BarChartComponent data={data} title="Quarterly Financial Overview" />{" "}
      <BarChartCodeExamples
        exampleNumber="Three"
        codeExample={`import BarChartComponent, { InputData } from "./barChartComponent";
import BarChartCodeExamples from "./barChartCodeExamples";

const data: InputData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales",
      data: [20000, 24000, 25000, 27000], // Sales data for each quarter
    },
    {
      label: "Expenses",
      data: [10000, 11000, 9000, 12000], // Expenses data for each quarter
    },
    {
      label: "Profit",
      data: [10000, 13000, 16000, 15000], // Profit data for each quarter
    },
    {
      label: "Investments",
      data: [5000, 7000, 6000, 11000], // Investments data for each quarter
    },
  ],
};

export default function BarChartThree() {
  return <BarChartComponent data={data} title="Quarterly Financial Overview" />;
}
`}
      />
    </VStackFull>
  );
}
