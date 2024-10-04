import BarChartComponent, { InputData } from "./barChartComponent";
import { useState } from "react";

import BarChartCodeExamples from "./barChartCodeExamples";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import ToggleSwitch from "~/buildingBlockComponents/toggleSwitch";

const groupedByWeek: InputData = {
  labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"],
  datasets: [
    {
      label: "Alice",
      data: [70, 75, 70, 85, 90, 95], // Alice's performance over 6 weeks
    },
    {
      label: "Bob",
      data: [60, 65, 68, 70, 75, 78], // Bob's performance over 6 weeks
    },
    {
      label: "Charlie",
      data: [80, 82, 80, 83, 85, 88], // Charlie's performance over 6 weeks
    },
  ],
};

const groupedByEmployee: InputData = {
  labels: ["Alice", "Bob", "Charlie"],
  datasets: [
    {
      label: "Wk 1",
      data: [70, 60, 80],
    },
    {
      label: "Wk 2",
      data: [75, 65, 82],
    },
    {
      label: "Wk 3",
      data: [70, 68, 80],
    },
    {
      label: "Wk 4",
      data: [85, 70, 83],
    },
    {
      label: "Wk 5",
      data: [90, 75, 85],
    },
    {
      label: "Wk 6",
      data: [95, 78, 88],
    },
  ],
};

export default function BarChartFour() {
  const [toggleOn, setToggleOn] = useState(true); // true for groupedByWeek, false for groupedByEmployee
  const data = toggleOn ? groupedByWeek : groupedByEmployee;

  return (
    <VStackFull className="gap-[2vh]">
      <VStackFull className=" gap-[2vh]">
        {" "}
        <ToggleSwitch
          toggleOn={toggleOn}
          setToggleOn={setToggleOn}
          labelColor="dark"
          size="xs"
          onText="by employee"
          offText="by week"
        />
        <BarChartComponent
          data={data}
          title={
            data === groupedByWeek
              ? "Performance by Week"
              : "Performance by Employee"
          }
        />
      </VStackFull>
      <BarChartCodeExamples
        exampleNumber="Four"
        codeExample={`import BarChartComponent, { InputData } from "./barChartComponent";
import { useState } from "react";
import ToggleSwitch from "~/buildingBlockComponents/toggleSwitch";
import VStack from "~/components/buildingBlocks/vStack";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import BarChartCodeExamples from "./barChartCodeExamples";

const groupedByWeek: InputData = {
  labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"],
  datasets: [
    {
      label: "Alice",
      data: [70, 75, 70, 85, 90, 95], // Alice's performance over 6 weeks
    },
    {
      label: "Bob",
      data: [60, 65, 68, 70, 75, 78], // Bob's performance over 6 weeks
    },
    {
      label: "Charlie",
      data: [80, 82, 80, 83, 85, 88], // Charlie's performance over 6 weeks
    },
  ],
};

const groupedByEmployee: InputData = {
  labels: ["Alice", "Bob", "Charlie"],
  datasets: [
    {
      label: "Wk 1",
      data: [70, 60, 80],
    },
    {
      label: "Wk 2",
      data: [75, 65, 82],
    },
    {
      label: "Wk 3",
      data: [70, 68, 80],
    },
    {
      label: "Wk 4",
      data: [85, 70, 83],
    },
    {
      label: "Wk 5",
      data: [90, 75, 85],
    },
    {
      label: "Wk 6",
      data: [95, 78, 88],
    },
  ],
};

export default function BarChartFour() {
  const [toggleOn, setToggleOn] = useState(true); // true for groupedByWeek, false for groupedByEmployee
  const data = toggleOn ? groupedByWeek : groupedByEmployee;

  return (
    <VStack className="w-95% gap-[2vh] p-[1vh] bg-slate-500 border-900-md shadowBroadLoose">
      {" "}
      <ToggleSwitch
        toggleOn={toggleOn}
        setToggleOn={setToggleOn}
        labelColor="dark"
        size="xs"
        onText="by employee"
        offText="by week"
      />
      <BarChartComponent
        data={data}
        title={
          data === groupedByWeek
            ? "Performance by Week"
            : "Performance by Employee"
        }
      />
    </VStack>
  );
}
`}
      />
    </VStackFull>
  );
}
