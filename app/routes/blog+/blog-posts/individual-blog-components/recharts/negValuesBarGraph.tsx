import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  CustomTooltip,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
} from "./defaults";
import ChartContainer from "./chartContainer";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

interface NegValuesGraphProps {
  data: any[];
  dataBars: string[];
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  biaxialLabel?: string;
  height?: string;
  width?: string;
  xAxisType?: "number" | "category";
  yAxisType?: "number" | "category";
  xDataKey?: string;
  colorList?: string[];
}

export default function NegValuesGraph({
  data,
  dataBars,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  xAxisType = "category",
  yAxisType = "number",
  xDataKey,
  colorList,
}: NegValuesGraphProps) {
  const colorsToUse = colorList || ["#8884d8", "#82ca9d"];

  return (
    <ChartContainer>
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>
      <FlexFull className="absolute bottom-[0.5vh] justify-center">
        <Text className="text-white text-[1.8vh] textShadow">{xAxisLabel}</Text>
      </FlexFull>
      <Flex className="absolute left-[2vh] top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {yAxisLabel}
        </Text>
      </Flex>
      {biaxialLabel && (
        <Flex className="absolute right-[2vh] top-1/2 -translate-y-1/2 rotate-90 origin-right">
          <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
            {biaxialLabel}
          </Text>
        </Flex>
      )}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
            yAxisId={0}
            type={yAxisType}
            domain={["dataMin", "dataMax"]}
            tick={
              <CustomizedYAxisTick
                x={0}
                y={0}
                stroke={""}
                payload={{
                  value: "",
                }}
              />
            }
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <ReferenceLine y={0} stroke="white" />
          {dataBars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar}
              fill={colorsToUse[index]}
              yAxisId={0}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
