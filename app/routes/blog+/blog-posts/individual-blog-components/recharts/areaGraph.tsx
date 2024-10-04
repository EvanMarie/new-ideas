import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
  strokeDashes,
} from "./defaults";
import ChartContainer from "./chartContainer";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function SimpleAreaGraph({
  data,
  dataLines,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  useStrokeDash = false,
  isVertical = false,
  useDollar = false,
  biaxial = false,
  xAxisType = "category",
  yAxisType = "number",
  yDataKey,
  xDataKey,
  biaxialDataKey,
  colorList,
}: {
  data: any;
  dataLines: string[];
  isVertical?: boolean;
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  biaxialLabel?: string;
  useDollar?: boolean;
  useStrokeDash?: boolean;
  height?: string;
  width?: string;
  biaxial?: boolean;
  xAxisType?: "number" | "category";
  yAxisType?: "number" | "category";
  yDataKey?: string;
  xDataKey?: string;
  biaxialDataKey?: string;
  includeArea?: boolean;
  colorList?: string[];
}) {
  const colorsToUse = colorList || colorOptions;
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
        <AreaChart
          layout={isVertical ? "vertical" : "horizontal"}
          width={500}
          height={300}
          data={data}
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
                stroke={""}
                payload={{
                  value: "",
                }}
              />
            }
          />
          <YAxis
            width={60}
            yAxisId="left"
            type={yAxisType}
            dataKey={yDataKey}
            tick={
              <CustomizedYAxisTick
                x={0}
                y={0}
                useDollar={useDollar}
                stroke={""}
                payload={{
                  value: "",
                }}
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
                  stroke={""}
                  payload={{
                    value: "",
                  }}
                />
              }
            />
          )}
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
          <Legend />

          {dataLines.map((line, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey={line}
              stroke={colorsToUse[index]}
              fill={colorsToUse[index]}
              activeDot={{ r: 8 }}
              strokeDasharray={useStrokeDash ? strokeDashes[index] : undefined}
              yAxisId={line === biaxialDataKey ? "right" : "left"}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
