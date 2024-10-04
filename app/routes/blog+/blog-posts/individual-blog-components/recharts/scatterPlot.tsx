import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";
import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
} from "./defaults";
import ChartContainer from "./chartContainer";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export type ScatterDataPointType = {
  x: number;
  y: number;
};

export type ScatterDataType = {
  name: string;
  data: ScatterDataPointType[];
};

interface SimpleScatterplotProps {
  data: ScatterDataType[];
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  biaxialLabel?: string;
  isVertical?: boolean;
  useDollar?: boolean;
  biaxial?: boolean;
  xAxisType?: "number" | "category";
  yAxisType?: "number" | "category";
  yDataKey?: string;
  xDataKey?: string;
  biaxialDataKey?: string;
  colorList?: string[];
  yTickStroke?: string;
  biaxialTickStroke?: string;
  useShapes?: boolean;
  shapeList?:
    | (
        | "circle"
        | "cross"
        | "diamond"
        | "square"
        | "star"
        | "triangle"
        | "wye"
      )[];
}

export default function SimpleScatterplot({
  data,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  isVertical = false,
  useDollar = false,
  biaxial = false,
  xAxisType = "number",
  yAxisType = "number",
  yDataKey,
  xDataKey,
  biaxialDataKey,
  colorList,
  yTickStroke,
  useShapes,
  shapeList,
  biaxialTickStroke,
}: SimpleScatterplotProps) {
  const colorsToUse = colorList || colorOptions;
  return (
    <ChartContainer>
      {/* Title */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>
      {/* X-Axis Label */}
      <FlexFull className="absolute bottom-[0.5vh] justify-center">
        <Text className="text-white text-[1.8vh] textShadow">{xAxisLabel}</Text>
      </FlexFull>
      {/* Y-Axis Label */}
      <Flex className="absolute left-[2vh] top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {yAxisLabel}
        </Text>
      </Flex>
      {/* Biaxial Label */}
      {biaxialLabel && (
        <Flex className="absolute right-[2vh] top-1/2 -translate-y-1/2 rotate-90 origin-right">
          <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
            {biaxialLabel}
          </Text>
        </Flex>
      )}

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          layout={isVertical ? "vertical" : "horizontal"}
          margin={{ top: 40, right: 10, left: 25, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            height={50}
            type={xAxisType}
            dataKey={xDataKey}
            tick={
              <CustomizedXAxisTick
                x={0}
                y={0}
                stroke=""
                payload={{ value: "" }}
              />
            }
          />
          <YAxis
            width={60}
            type={yAxisType}
            dataKey={yDataKey}
            tick={
              <CustomizedYAxisTick
                x={0}
                y={0}
                useDollar={useDollar}
                stroke={yTickStroke || ""}
                payload={{ value: "" }}
              />
            }
          />
          {biaxial && (
            <YAxis
              yAxisId="right"
              orientation="right"
              dataKey={biaxialDataKey}
              width={60}
              type={yAxisType}
              tick={
                <CustomizedBiaxialAxisTick
                  x={0}
                  y={0}
                  useDollar={useDollar}
                  stroke={biaxialTickStroke || ""}
                  payload={{ value: "" }}
                />
              }
            />
          )}
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
          <Legend />
          {data.map((dataset, index) => (
            <Scatter
              key={dataset.name}
              name={dataset.name}
              data={dataset.data}
              fill={colorsToUse[index]}
              shape={useShapes && shapeList ? shapeList[index] : "circle"}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
