import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  ReferenceLine,
  Brush,
} from "recharts";
import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
} from "./defaults";
import ChartContainer from "./chartContainer";
import Text from "~/buildingBlockComponents/text";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function SimpleBarGraph({
  data,
  dataBars,
  stackIds,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  isVertical = false,
  useDollar = false,
  biaxial = false,
  xAxisType = "category",
  yAxisType = "number",
  yDataKey,
  xDataKey,
  biaxialDataKey,
  barShape = "rectangle",
  colorList,
  labelPosition,
  showBrush,
  yTicksStroke,
  biaxialTickStroke,
  barBackground = false,
}: {
  data: any;
  dataBars: string[];
  stackIds?: { [key: string]: string };
  isVertical?: boolean;
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
  barShape?: string;
  colorList?: string[];
  showBrush?: boolean;
  yTicksStroke?: string;
  biaxialTickStroke?: string;
  barBackground?: boolean;
  labelPosition?: "inside" | "outside" | "top" | "bottom" | "left" | "right";
}) {
  interface BarProps {
    fill: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }
  const TriangleBar: React.FC<BarProps> = ({ fill, x, y, width, height }) => {
    const getPath = (x: number, y: number, width: number, height: number) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
      },${y + height / 3} ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
        y + height
      } ${x + width}, ${y + height} Z`;
    };
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RectangleBar: React.FC<BarProps> = ({ fill, x, y, width, height }) => {
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="none"
        fill={fill}
      />
    );
  };

  const CircleBar: React.FC<BarProps> = ({ fill, x, y, width, height }) => {
    return (
      <circle
        cx={x + width / 2}
        cy={y + height / 2}
        r={Math.min(width, height) / 2}
        stroke="none"
        fill={fill}
      />
    );
  };

  const DiamondBar: React.FC<BarProps> = ({ fill, x, y, width, height }) => {
    const getPath = (x: number, y: number, width: number, height: number) => {
      return `M${x + width / 2},${y}L${x + width},${y + height / 2}L${
        x + width / 2
      },${y + height}L${x},${y + height / 2}Z`;
    };
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const renderBarShape = (props: any) => {
    const { fill, x, y, width, height, isMandatory } = props;

    if (isMandatory) {
      // Render the hover state shape
      switch (barShape) {
        case "triangle":
          return (
            <TriangleBar
              fill="white"
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
        case "rectangle":
          return (
            <RectangleBar
              fill="white"
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
        case "circle":
          return (
            <CircleBar fill="white" x={x} y={y} width={width} height={height} />
          );
        case "diamond":
          return (
            <DiamondBar
              fill="white"
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
        default:
          return (
            <RectangleBar
              fill="white"
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
      }
    } else {
      // Render the regular bar shape
      switch (barShape) {
        case "triangle":
          return (
            <TriangleBar
              fill={fill}
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
        case "rectangle":
          return (
            <RectangleBar
              fill={fill}
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
        case "circle":
          return (
            <CircleBar fill={fill} x={x} y={y} width={width} height={height} />
          );
        case "diamond":
          return (
            <DiamondBar fill={fill} x={x} y={y} width={width} height={height} />
          );
        default:
          return (
            <RectangleBar
              fill={fill}
              x={x}
              y={y}
              width={width}
              height={height}
            />
          );
      }
    }
  };

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
        <BarChart
          layout={isVertical ? "vertical" : "horizontal"}
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
                stroke={yTicksStroke || ""}
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
                  stroke={biaxialTickStroke || ""}
                  payload={{
                    value: "",
                  }}
                />
              }
            />
          )}
          {showBrush && (
            <Brush dataKey="name" height={15} stroke={colorsToUse[0]} />
          )}
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
          <Legend />
          {dataBars.map((bar, index) => (
            <Bar
              key={index}
              label={
                labelPosition
                  ? { position: labelPosition, fill: "white" }
                  : undefined
              }
              shape={renderBarShape}
              dataKey={bar}
              stackId={stackIds ? stackIds[bar] : undefined}
              activeBar={renderBarShape}
              background={
                barBackground
                  ? { fill: colorsToUse[index], opacity: 0.15 }
                  : undefined
              }
              stroke={colorsToUse[index]}
              fill={colorsToUse[index]}
              yAxisId={bar === biaxialDataKey ? "right" : "left"}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
