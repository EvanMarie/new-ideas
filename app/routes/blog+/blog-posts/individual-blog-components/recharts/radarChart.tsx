import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CustomTooltip, colorOptions } from "./defaults";
import ChartContainer from "./chartContainer";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export type RadarDataType = {
  language: string;
  [key: string]: number | string;
};

interface SimpleRadarChartProps {
  data: RadarDataType[];
  title: string;
  colors?: string[];
  axisLabel: string;
}

export default function SimpleRadarChart({
  data,
  title,
  colors = colorOptions,
  axisLabel,
}: SimpleRadarChartProps) {
  return (
    <ChartContainer height="h-[45vh]">
      {/* Title */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={axisLabel} stroke="white" />
          <PolarRadiusAxis domain={[0, 100]} />
          {Object.keys(data[0])
            .filter((key) => key !== "subject" && key !== "fullMark")
            .map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.4}
              />
            ))}
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
