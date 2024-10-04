import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import ChartContainer from "./chartContainer";

import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
} from "./defaults";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export type CombinationPointType = {
  category: string;
  barValue: number;
  lineValue: number;
  areaValue: number;
  scatterValue: number;
};

interface CombinedGraphProps {
  data: CombinationPointType[];
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  biaxialLabel?: string;
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
  areaColor?: string;
  barColor?: string;
  lineColor?: string;
  scatterColor?: string;
}

export default function CombinedGraph({
  data,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  useDollar = false,
  biaxial = false,
  xAxisType = "category",
  yAxisType = "number",
  yDataKey,
  xDataKey,
  biaxialDataKey,
  yTickStroke,
  biaxialTickStroke,
  areaColor = colorOptions[3],
  barColor = colorOptions[5],
  lineColor = colorOptions[2],
  scatterColor = colorOptions[4],
}: CombinedGraphProps) {
  return (
    <ChartContainer>
      {/* * * * * * * * * * * * TITLE * * * * * * * * * * * */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>
      {/* * * * * * * * * * * * X LABEL * * * * * * * * * * * */}
      <FlexFull className="absolute bottom-[0.5vh] justify-center">
        <Text className="text-white text-[1.8vh] textShadow">{xAxisLabel}</Text>
      </FlexFull>
      {/* * * * * * * * * * * * Y LABEL * * * * * * * * * * * */}
      <Flex className="absolute left-[2vh] top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {yAxisLabel}
        </Text>
      </Flex>
      {/* * * * * * * * * * * * BIAXIAL LABEL * * * * * * * * * * * */}
      <Flex className="absolute right-[2vh] top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {biaxialLabel}
        </Text>
      </Flex>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 10, left: 25, bottom: 50 }}
        >
          <XAxis
            dataKey={xDataKey}
            type={xAxisType}
            tick={
              <CustomizedXAxisTick
                x={0}
                y={0}
                stroke={""}
                payload={{
                  value: "",
                }}
              />
            }
          />
          <YAxis
            tick={
              <CustomizedYAxisTick
                x={0}
                y={0}
                useDollar={useDollar}
                stroke={yTickStroke || ""}
                payload={{
                  value: "",
                }}
              />
            }
            dataKey={yDataKey}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
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
                  payload={{
                    value: "",
                  }}
                />
              }
            />
          )}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="areaValue"
            fill={areaColor}
            stroke={areaColor}
          />
          <Bar dataKey="barValue" barSize={20} fill={barColor} />
          <Line type="monotone" dataKey="lineValue" stroke={lineColor} />
          <Scatter dataKey="scatterValue" fill={scatterColor} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
