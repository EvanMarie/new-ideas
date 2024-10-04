import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { CustomTooltip, colorOptions } from "./defaults";
import ChartContainer from "./chartContainer";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export type PieDataType = {
  name: string;
  value: number;
  color: string;
};

interface SimplePieChartProps {
  data01: PieDataType[];
  data02: PieDataType[];
  title: string;
  height?: string;
  radius?: number;
}

export default function SimplePieChart({
  data01,
  data02,
  title,
  height = "h-[45vh]",
  radius = 100,
}: SimplePieChartProps) {
  const renderLabel = (entry: PieDataType) => entry.name;
  const legendData = data01.map((entry) => ({
    value: entry.name,
    type: "square" as const, // Ensure type is LegendType
    color: entry.color,
    id: entry.name,
  }));

  return (
    <ChartContainer height={height}>
      {/* Title */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={radius - 20}
            fill={colorOptions[5]}
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={radius}
            outerRadius={radius + 20}
            fill={colorOptions[6]}
            label={renderLabel}
          >
            {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <Legend payload={legendData} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
