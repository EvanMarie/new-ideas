import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import CodeModal from "../../blog-components/codeModal";
import RadarChartOne, {
  LineGraphOne,
  AreaGraphOne,
  BarGraphEight,
  BarGraphFour,
  BarGraphFourA,
  BarGraphFourB,
  BarGraphFourC,
  BarGraphNine,
  BarGraphOne,
  BarGraphThree,
  BarGraphTwo,
  CombinationGraphOne,
  LineGraphFour,
  LineGraphThree,
  LineGraphTwo,
  PieChartOne as RechartPieChart,
  ScatterPlotOne,
  ScatterPlotTwo,
} from "../individual-blog-components/recharts/examples";

export const ExploringRecharts: BlogPost =
  // RECHARTS
  {
    id: "48",
    date: "2024-05-15",
    title: "Exploring Recharts: A Powerful React Charting Library",
    slug: "explorting-recharts-a-powerful-react-charting-library",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Data Visualization", "Remix", "React", "Recharts"],
    categories: [
      "Programming",
      "Data Visualization",
      "UX / UI & Frontend Design",
    ],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/recharts.png",
    summary:
      "Embark on an exciting journey exploring Recharts, a powerful and flexible React charting library, and discover how Recharts offers a wider range of functionality and customization options, making it a valuable tool for creating stunning data visualizations.",
    paragraphs: [
      <React.Fragment key="explorting-recharts-a-powerful-react-charting-library">
        <p>
          <a href="https://recharts.org/en-US" target="_blank">
            Recharts Documentation
          </a>
        </p>
        <h2>Overview</h2>
        <p>
          Greetings, fellow data visualization enthusiasts! In my last post, I
          took you on a{" "}
          <a href="/blog/powerful-data-visualization-in-remix-with-react-chartjs-2">
            journey through React-ChartJS-2
          </a>
          , a popular React charting library. While it provided a solid
          foundation for creating charts, I couldn't help but feel a bit limited
          in terms of functionality, mainly due to the minimal documentation.
          When I decided to dive deeper into React-ChartJs-2, I got a bit
          frustrated. I love customizing extensively. And without in-depth
          documentation, customization can get challenging, trying to guess at
          the best ways to get the desired results. That's when I decided to
          give Recharts a try. Recharts is a powerful and flexible React
          charting library that offers a wide range of chart types,
          customization options, and interactivity features.
        </p>
        <p>
          Now, I'll be honest, customizing charts in Recharts can be a bit
          clumsy at times. It's not always as intuitive as one might hope.
          However, the sheer power and flexibility it provides make up for any
          minor inconveniences. Plus, with a little bit of tinkering and
          exploration, if you are like me, you'll be creating chart masterpieces
          in no time!
        </p>
        <p>
          As we go, we'll dive into these various chart types, including line
          graphs, bar graphs, scatterplots, pie charts, radar charts, and even
          combination charts. Each chart type will be accompanied by examples
          and code snippets, allowing you to follow along and create you own
          visualizations easily with the foundation I will provide.
        </p>
        <p>
          So, get ready to level up your data visualization skills and explore
          the world of Recharts! Prepare to be impressed by the possibilities
          this library offers.
        </p>
        <h2>Helper Components</h2>
        <p>
          To facilitate the creation of various chart types and configurations,
          I created a set of helper components that encapsulate common chart
          elements and functionalities. These components serve as building
          blocks for the examples and provide a foundation for creating more
          customized visualizations.
        </p>
        <CodeModal
          isCenterFull
          code={`export interface CustomizedAxisTickProps {
  x: number;
  y: number;
  stroke: string;
  useDollar?: boolean;
  fontSize?: string;
  payload: {
    value: string;
  };
}

export function CustomizedXAxisTick({
  x,
  y,
  stroke,
  payload,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {

  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="white"
        transform="rotate(-35)"
        style={{ fontSize }}
      >
        {/* {formattedDateTime} */}
        {payload.value}
      </text>
    </g>
  );
}

export function CustomizedYAxisTick({
  x,
  y,
  stroke,
  payload,
  useDollar = false,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {
  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill={stroke || "white"}
        // transform="rotate(-35)"
        style={{ fontSize }}
      >
        {useDollar
          ? \`$\${payload.value.toLocaleString()}\`
          : payload.value.toLocaleString()}
      </text>
    </g>
  );
}

export function CustomizedBiaxialAxisTick({
  x,
  y,
  stroke,
  payload,
  useDollar = false,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {
  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="start"
        fill={stroke || "white"}
        // transform="rotate(-35)"
        style={{ fontSize }}
      >
        {/* {useDollar ? \`$\${payload.value.toLocaleString()}\` : payload.value} */}
        {payload.value}
      </text>
    </g>
  );
}

export type CustomTooltipProps = TooltipProps<number, string> & {
  label?: string;
  useDollar?: boolean;
};

export function CustomTooltip({
  active,
  payload,
  label,
  useDollar,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <VStack className="bg-col-900 p-[1vh] rounded-[1vh] border-970-md shadowNarrowTight">
        <Text className="text-col-100">{\`Month: \${label}\`}</Text>
        {payload.map((entry, index) => (
          <Text key={index} style={{ color: entry.color }}>
            {useDollar
              ? \`\${entry.name}: $\${entry.value?.toLocaleString()}\`
              : \`\${entry.name}: \${entry.value?.toLocaleString()}\`}
          </Text>
        ))}
      </VStack>
    );
  }

  return null;
}`}
          title="Custom Helper Function"
          buttonText="Custom Helper Functions"
        />
        ,
        <>
          <ul>
            <li>
              <strong>CustomizedXAxisTick:</strong> Customizes the tick labels
              on the X-axis of a chart, allowing control over their position,
              color, font size, and rotation.
            </li>
            <li>
              <strong>CustomizedYAxisTick:</strong> Customizes the tick labels
              on the Y-axis of a chart, providing options to control their
              position, color, font size, and formatting (e.g., displaying
              values as currency).
            </li>
            <li>
              <strong>CustomizedBiaxialAxisTick:</strong> Similar to{" "}
              <strong>CustomizedYAxisTick</strong>, this function customizes the
              tick labels on the biaxial axis of a chart, with options to
              control their position, color, font size, and formatting.
            </li>
            <li>
              <strong>CustomTooltip:</strong> Customizes the appearance and
              content of the tooltip that appears when hovering over data points
              in a chart. It allows you to display additional information, such
              as the month label and the name and value of each data entry, with
              options to format the values as currency.
            </li>
          </ul>
          <h2>Line Graphs</h2>
          <p>
            Line graphs are excellent for visualizing trends, changes, and
            patterns over time. They are particularly useful when you have
            continuous data points that are connected in a meaningful way. Line
            graphs allow you to easily spot increases, decreases, or
            fluctuations in your data. They are commonly used to represent stock
            prices, temperature changes, or website traffic over a specific
            period.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";

export default function SimpleLineGraph({
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
  yTickStroke,
  biaxialTickStroke,
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
  biaxial?: boolean;
  xAxisType?: "number" | "category";
  yAxisType?: "number" | "category";
  yDataKey?: string;
  xDataKey?: string;
  biaxialDataKey?: string;
  colorList?: string[];
  yTickStroke?: string;
  biaxialTickStroke?: string;
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
        <LineChart
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
                stroke={yTickStroke || ""}
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
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
          <Legend />

          {dataLines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line}
              stroke={colorsToUse[index]}
              activeDot={{ r: 8 }}
              strokeDasharray={useStrokeDash ? strokeDashes[index] : undefined}
              yAxisId={line === biaxialDataKey ? "right" : "left"}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
`}
          title="Custom Line Graph Component"
          buttonText="Custom Line Graph Component"
        />
        ,
        <>
          <p>
            The above component will be used for the following four examples of
            line graphs. The component takes in various props to customize the
            appearance and behavior of the line graph, including the data, data
            lines, title, axis labels, data keys, colors, and more. By passing
            different configurations to the component, you can create a wide
            range of line graphs tailored to your specific needs all with one
            component.
          </p>
          <>
            <ul>
              <li>
                The <strong>LineChart</strong> component serves as the main
                container for the line graph.
              </li>
              <li>
                Inside the <strong>LineChart</strong>, you can define various
                sub-components to customize the appearance and behavior of the
                graph.
              </li>
              <li>
                The <strong>LineChart</strong> component renders the grid lines
                in the background of the chart, providing a visual reference for
                the data points.
              </li>
              <li>
                The <strong>XAxis</strong> and <strong>YAxis</strong> components
                represent the horizontal and vertical axes of the graph,
                respectively.
              </li>
              <ul>
                <li>
                  You can specify the data key for each axis using the{" "}
                  <strong>dataKey</strong> prop.
                </li>
                <li>
                  The appearance of the axis ticks can be customized using the{" "}
                  <strong>tick</strong> prop.
                </li>
              </ul>
              <li>
                The <strong>Tooltip</strong> component displays additional
                information when hovering over the data points, providing
                insights into the specific values at each point.
              </li>
              <li>
                The <strong>Legend</strong> component is used to display a
                legend for the different lines in the graph, helping users
                identify which line represents which data series.
              </li>
              <li>
                The actual data lines are rendered using the{" "}
                <strong>Line</strong> component.
              </li>
              <ul>
                <li>
                  Each <strong>Line</strong> represents a specific data series
                  and is mapped to a unique data key using the{" "}
                  <strong>dataKey</strong> prop.
                </li>
                <li>
                  The appearance of the lines can be customized by specifying
                  the <strong>stroke</strong> color,{" "}
                  <strong>strokeDasharray</strong> for dashed lines, and{" "}
                  <strong>activeDot</strong> to highlight the active data point.
                </li>
              </ul>
              <li>
                In the provided example, the <strong>dataLines</strong> prop is
                used to dynamically render multiple <strong>Line</strong>{" "}
                components based on the specified data keys, allowing for the
                creation of a line graph with multiple data series.
              </li>
              <li>
                The <strong>data</strong> prop passed to the{" "}
                <strong>LineChart</strong> component represents the actual data
                used to plot the graph.
              </li>
              <ul>
                <li>
                  Each object in the data array corresponds to a single data
                  point, with properties matching the data keys used in the{" "}
                  <strong>Line</strong> components and the{" "}
                  <strong>XAxis</strong> and <strong>YAxis</strong> components.
                </li>
              </ul>
              <li>
                Recharts provides a declarative and flexible way to create line
                graphs by composing various sub-components within the{" "}
                <strong>LineChart</strong> component. The combination of{" "}
                <strong>XAxis</strong>, <strong>YAxis</strong>,{" "}
                <strong>Tooltip</strong>, <strong>Legend</strong>, and{" "}
                <strong>Line</strong> components allows you to customize the
                appearance and behavior of the graph, while the{" "}
                <strong>data</strong> prop provides the underlying data to be
                plotted.
              </li>
            </ul>
            <h4>Line Graph One: A simple line graph with three data lines </h4>
          </>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointOne = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

const dataOne: DataPointOne[] = [
  { month: "Jan", revenue: 10000, expenses: 6000, profit: 4000 },
  { month: "Feb", revenue: 12000, expenses: 7000, profit: 5000 },
  { month: "Mar", revenue: 15000, expenses: 8000, profit: 7000 },
  { month: "Apr", revenue: 11000, expenses: 6500, profit: 4500 },
  { month: "May", revenue: 13000, expenses: 7500, profit: 5500 },
  { month: "Jun", revenue: 16000, expenses: 9000, profit: 7000 },
  { month: "Jul", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Aug", revenue: 17000, expenses: 10000, profit: 7000 },
  { month: "Sep", revenue: 15000, expenses: 9000, profit: 6000 },
  { month: "Oct", revenue: 13000, expenses: 7000, profit: 6000 },
  { month: "Nov", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Dec", revenue: 16000, expenses: 10000, profit: 6000 },
];

const dataLinesOne = ["revenue", "expenses", "profit"];

export function LineGraphOne() {
  return (
    <SimpleLineGraph
      data={dataOne}
      dataLines={dataLinesOne}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      useDollar
    />
  );
}`}
          title="Line Graph One Data"
          buttonText="Line Graph One Data"
        />
        ,
        <LineGraphOne />,
        <h4>
          Line Graph Two: Numerous data lines with varying stroke dash patterns
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`export const strokeDashes = [
  "15 10 5 10",
  "8 4 2 4",
  "12 6 2 6",
  "4 8 4 12",
  "6 3 1 3",
  "2 6 4 6",
  "1 4 2 8",
  "4 2 8 2",
  "10 2 5 2 5 2",
  "8 1 4 1 2 1",
];

type DataPointTwo = {
  week: string;
  "Teddy Bear": number;
  "Building Blocks": number;
  "RC Car": number;
  Puzzle: number;
  Doll: number;
  "Board Game": number;
  "Art Set": number;
  "Action Figure": number;
  "Toy Train": number;
  "Stuffed Animal": number;
};

const dataTwo: DataPointTwo[] = [
  {
    week: "Week 1",
    "Teddy Bear": 120,
    "Building Blocks": 90,
    "RC Car": 20,
    Puzzle: 100,
    Doll: 80,
    "Board Game": 30,
    "Art Set": 130,
    "Action Figure": 95,
    "Toy Train": 10,
    "Stuffed Animal": 85,
  },
  {
    week: "Week 2",
    "Teddy Bear": 100,
    "Building Blocks": 120,
    "RC Car": 40,
    Puzzle: 110,
    Doll: 90,
    "Board Game": 24,
    "Art Set": 105,
    "Action Figure": 115,
    "Toy Train": 95,
    "Stuffed Animal": 23,
  },
  {
    week: "Week 3",
    "Teddy Bear": 110,
    "Building Blocks": 45,
    "RC Car": 120,
    Puzzle: 64,
    Doll: 130,
    "Board Game": 22,
    "Art Set": 140,
    "Action Figure": 10,
    "Toy Train": 115,
    "Stuffed Animal": 2,
  },
  {
    week: "Week 4",
    "Teddy Bear": 90,
    "Building Blocks": 110,
    "RC Car": 140,
    Puzzle: 120,
    Doll: 100,
    "Board Game": 130,
    "Art Set": 12,
    "Action Figure": 105,
    "Toy Train": 33,
    "Stuffed Animal": 135,
  },
  {
    week: "Week 5",
    "Teddy Bear": 33,
    "Building Blocks": 140,
    "RC Car": 100,
    Puzzle: 105,
    Doll: 120,
    "Board Game": 44,
    "Art Set": 90,
    "Action Figure": 135,
    "Toy Train": 110,
    "Stuffed Animal": 150,
  },
  {
    week: "Week 6",
    "Teddy Bear": 140,
    "Building Blocks": 130,
    "RC Car": 30,
    Puzzle: 115,
    Doll: 105,
    "Board Game": 33,
    "Art Set": 150,
    "Action Figure": 100,
    "Toy Train": 135,
    "Stuffed Animal": 90,
  },
  {
    week: "Week 7",
    "Teddy Bear": 150,
    "Building Blocks": 120,
    "RC Car": 90,
    Puzzle: 135,
    Doll: 115,
    "Board Game": 44,
    "Art Set": 110,
    "Action Figure": 140,
    "Toy Train": 11,
    "Stuffed Animal": 105,
  },
  {
    week: "Week 8",
    "Teddy Bear": 130,
    "Building Blocks": 150,
    "RC Car": 120,
    Puzzle: 110,
    Doll: 140,
    "Board Game": 23,
    "Art Set": 100,
    "Action Figure": 90,
    "Toy Train": 44,
    "Stuffed Animal": 115,
  },
];

export function LineGraphTwo() {
  return (
    <SimpleLineGraph
      data={dataTwo}
      dataLines={Object.keys(dataTwo[0]).slice(1)}
      title="Toy Sales by Week"
      xAxisLabel="Weeks"
      yAxisLabel="Toy Sales"
      xDataKey="week"
      useStrokeDash
    />
  );
}`}
          title="Line Graph Two Data"
          buttonText="Line Graph Two Data"
        />
        ,
        <LineGraphTwo />,
        <h4>
          Line Graph Three: Vertical line graph with category and number axes
          flipped
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointThree = {
  product: string;
  Q1: number;
  Q2: number;
  Q3: number;
  Q4: number;
};

const dataThree: DataPointThree[] = [
  { product: "Product A", Q1: 300, Q2: 700, Q3: 540, Q4: 100 },
  { product: "Product B", Q1: 800, Q2: 900, Q3: 1000, Q4: 300 },
  {
    product: "Product C",
    Q1: 1200,
    Q2: 1300,
    Q3: 1100,
    Q4: 1000,
  },
  { product: "Product D", Q1: 100, Q2: 500, Q3: 780, Q4: 1100 },
];

const dataLinesThree = ["Q1", "Q2", "Q3", "Q4"];

export function LineGraphThree() {
  return (
    <SimpleLineGraph
      data={dataThree}
      dataLines={dataLinesThree}
      title="Product Sales by Quarter"
      xAxisLabel="Product Sales"
      yAxisLabel="Products"
      isVertical={true}
      xAxisType="number"
      yAxisType="category"
      yDataKey="product"
    />
  );
}`}
          title="Line Graph Three Data"
          buttonText="Line Graph Three Data"
        />
        ,
        <LineGraphThree />,
        <h4>
          Line Graph Four: Biaxial line graph comparing attendance and
          temperature
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointFour = {
  month: string;
  attendance: number;
  temperature: number;
};

const dataFour: DataPointFour[] = [
  { month: "Jan", attendance: 50000, temperature: 40 },
  { month: "Feb", attendance: 55000, temperature: 45 },
  { month: "Mar", attendance: 60000, temperature: 50 },
  { month: "Apr", attendance: 70000, temperature: 55 },
  { month: "May", attendance: 80000, temperature: 60 },
  { month: "Jun", attendance: 95000, temperature: 70 },
  { month: "Jul", attendance: 110000, temperature: 80 },
  { month: "Aug", attendance: 100000, temperature: 75 },
  { month: "Sep", attendance: 90000, temperature: 65 },
  { month: "Oct", attendance: 75000, temperature: 60 },
  { month: "Nov", attendance: 60000, temperature: 50 },
  { month: "Dec", attendance: 55000, temperature: 45 },
];

const dataLinesFour = ["attendance", "temperature"];

export function LineGraphFour() {
  return (
    <SimpleLineGraph
      data={dataFour}
      dataLines={dataLinesFour}
      title="Amphitheater Attendance-Temperature Comparison 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Attendance"
      xDataKey="month"
      biaxial
      biaxialDataKey="temperature"
      biaxialLabel="Temperature (°F)"
      colorList={[colorOptions[3], colorOptions[4]]}
      yTickStroke={colorOptions[3]}
      biaxialTickStroke={colorOptions[4]}
    />
  );
}`}
          title="Line Graph Four Data"
          buttonText="Line Graph Four Data"
        />
        ,
        <LineGraphFour />, // ------------------------------ AREA GRAPHS
        ------------------------------ //
        <>
          <h2>Area Graphs</h2>
          <p>
            Area graphs are excellent for visualizing trends and changes in data
            over time, while also representing the magnitude of the values. They
            provide a clear and visually appealing way to showcase the
            cumulative data in a series. Area graphs are effective when you want
            to emphasize the overall pattern and progression of the data, as
            well as the total value at each point. The filled area under the
            line helps to highlight the volume or quantity being measured. Area
            graphs are often used to display data such as website traffic, sales
            volume, market share, or population growth over a specific period.
            They are particularly useful when you want to compare multiple data
            series and see how they stack up against each other. By using
            different colors or transparencies for each series, area graphs
            allow for easy comparison and identification of the relative
            contributions of each category to the total value.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import {
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";

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
`}
          title="Custom Area Graph Component"
          buttonText="Custom Area Graph Component"
        />
        ,
        <>
          <ul>
            <li>
              The <strong>AreaChart</strong> component serves as the main
              container for the area graph.
            </li>
            <li>
              Inside the <strong>AreaChart</strong>, you can define various
              sub-components to customize the appearance and behavior of the
              graph.
            </li>
            <li>
              The <strong>CartesianGrid</strong> component renders the grid
              lines in the background of the chart, providing a visual reference
              for the data points.
            </li>
            <li>
              The <strong>XAxis</strong> and <strong>YAxis</strong> components
              represent the horizontal and vertical axes of the graph,
              respectively.
            </li>
            <ul>
              <li>
                You can specify the data key for each axis using the{" "}
                <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the axis ticks can be customized using the{" "}
                <strong>tick</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>Tooltip</strong> component displays additional
              information when hovering over the data points, providing insights
              into the specific values at each point.
            </li>
            <li>
              The <strong>Legend</strong> component is used to display a legend
              for the different area series, helping users identify which area
              represents which data series.
            </li>
            <li>
              The actual area series are rendered using the{" "}
              <strong>Area</strong> component.
            </li>
            <ul>
              <li>
                Each <strong>Area</strong> component represents a specific data
                series and is mapped to a unique data key using the{" "}
                <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the area series can be customized by
                specifying the <strong>stroke</strong> color for the line and
                the <strong>fill</strong> color for the filled area.
              </li>
              <li>
                The <strong>activeDot</strong> prop allows you to customize the
                appearance of the dots when hovering over the data points.
              </li>
            </ul>
            <li>
              In the provided example, the <strong>dataLines</strong> prop is
              used to dynamically render multiple <strong>Area</strong>{" "}
              components based on the specified data keys, allowing for the
              creation of an area graph with multiple data series.
            </li>
            <li>
              The <strong>data</strong> prop passed to the{" "}
              <strong>AreaChart</strong> component represents the actual data
              used to plot the graph.
            </li>
            <ul>
              <li>
                Each object in the data array corresponds to a single data
                point, with properties matching the data keys used in the{" "}
                <strong>Area</strong> components and the <strong>XAxis</strong>{" "}
                and <strong>YAxis</strong> components.
              </li>
            </ul>
            <li>
              The chart can be customized further by specifying props such as{" "}
              <strong>isVertical</strong> for a vertical layout,{" "}
              <strong>useDollar</strong> for displaying dollar values,{" "}
              <strong>biaxial</strong> for a biaxial chart, and{" "}
              <strong>useStrokeDash</strong> for dashed stroke lines.
            </li>
          </ul>
          <h4>Area Graph: A simple area graph with three data lines</h4>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointOne = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

const dataOne: DataPointOne[] = [
  { month: "Jan", revenue: 10000, expenses: 6000, profit: 4000 },
  { month: "Feb", revenue: 12000, expenses: 7000, profit: 5000 },
  { month: "Mar", revenue: 15000, expenses: 8000, profit: 7000 },
  { month: "Apr", revenue: 11000, expenses: 6500, profit: 4500 },
  { month: "May", revenue: 13000, expenses: 7500, profit: 5500 },
  { month: "Jun", revenue: 16000, expenses: 9000, profit: 7000 },
  { month: "Jul", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Aug", revenue: 17000, expenses: 10000, profit: 7000 },
  { month: "Sep", revenue: 15000, expenses: 9000, profit: 6000 },
  { month: "Oct", revenue: 13000, expenses: 7000, profit: 6000 },
  { month: "Nov", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Dec", revenue: 16000, expenses: 10000, profit: 6000 },
];

const dataLinesOne = ["revenue", "expenses", "profit"];

export function AreaGraphOne() {
  return (
    <SimpleAreaGraph
      data={dataOne}
      dataLines={dataLinesOne}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      colorList={[colorOptions[3], colorOptions[4], colorOptions[5]]}
      includeArea
      useDollar
    />
  );
}`}
          title="Area Graph Data"
          buttonText="Area Graph Data"
        />
        ,
        <AreaGraphOne />, // ------------------------------ BAR
        GRAPHS------------------------------ //
        <>
          <h2>Bar Charts</h2>
          <p>
            Bar charts are ideal for comparing categories or discrete values.
            They provide a clear and intuitive way to showcase the differences
            between various groups or items. Bar charts are effective when you
            want to highlight the highest or lowest values, or when you need to
            compare the relative sizes of different categories. They are often
            used to display sales figures, survey results, or population
            demographics.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import {
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";
import { render } from "react-dom";

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
      return \`M\${x},\${y + height}C\${x + width / 3},\${y + height} \${
        x + width / 2
      },\${y + height / 3} \${x + width / 2}, \${y}
            C\${x + width / 2},\${y + height / 3} \${x + (2 * width) / 3},\${
        y + height
      } \${x + width}, \${y + height} Z\`
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
      return \`M\${x + width / 2},\${y}L\${x + width},\${y + height / 2}L\${
        x + width / 2
      },\${y + height}L\${x},\${y + height / 2}Z\`;
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
`}
          title="Custom Bar Graph Component"
          buttonText="Custom Bar Graph Component"
        />
        ,
        <>
          <ul>
            <li>
              The <strong>BarChart</strong> component serves as the main
              container for the bar graph.
            </li>
            <li>
              Inside the <strong>BarChart</strong>, you can define various
              sub-components to customize the appearance and behavior of the
              graph.
            </li>
            <li>
              The <strong>CartesianGrid</strong> component renders the grid
              lines in the background of the chart, providing a visual reference
              for the bars.
            </li>
            <li>
              The <strong>XAxis</strong> and <strong>YAxis</strong> components
              represent the horizontal and vertical axes of the graph,
              respectively.
            </li>
            <ul>
              <li>
                You can specify the data key for each axis using the{" "}
                <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the axis ticks can be customized using the{" "}
                <strong>tick</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>Tooltip</strong> component displays additional
              information when hovering over the bars, providing insights into
              the specific values of each bar.
            </li>
            <li>
              The <strong>Legend</strong> component is used to display a legend
              for the different bar series, helping users identify which bar
              represents which data series.
            </li>
            <li>
              The actual bars are rendered using the <strong>Bar</strong>{" "}
              component.
            </li>
            <ul>
              <li>
                Each <strong>Bar</strong> represents a specific data series and
                is mapped to a unique data key using the{" "}
                <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the bars can be customized by specifying the{" "}
                <strong>fill</strong> color, <strong>stroke</strong> color, and
                custom shapes using the <strong>shape</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>Brush</strong> component can be added to enable
              interactive zooming and panning of the chart.
            </li>
            <li>
              Bar labels can be displayed by configuring the{" "}
              <strong>label</strong> prop on the <strong>Bar</strong> component,
              specifying the position and style of the labels.
            </li>
            <li>
              Stacked bars can be created by assigning the same{" "}
              <strong>stackId</strong> to multiple <strong>Bar</strong>{" "}
              components.
            </li>
            <li>
              The <strong>activeBar</strong> prop allows you to customize the
              appearance of the bar when it is actively hovered or selected.
            </li>
            <li>
              The <strong>background</strong> prop can be used to add a
              background color or pattern to the bars.
            </li>
            <li>
              In the provided example, the <strong>dataBars</strong> prop is
              used to dynamically render multiple <strong>Bar</strong>{" "}
              components based on the specified data keys, allowing for the
              creation of a bar graph with multiple data series.
            </li>
            <li>
              The <strong>data</strong> prop passed to the{" "}
              <strong>BarChart</strong> component represents the actual data
              used to plot the graph.
            </li>
            <ul>
              <li>
                Each object in the data array corresponds to a single data
                point, with properties matching the data keys used in the{" "}
                <strong>Bar</strong> components and the <strong>XAxis</strong>{" "}
                and <strong>YAxis</strong> components.
              </li>
            </ul>
          </ul>
          <h4>Bar Graph One: A simple bar graph with three data bars</h4>,
        </>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointOne = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

const dataOne: DataPointOne[] = [
  { month: "Jan", revenue: 10000, expenses: 6000, profit: 4000 },
  { month: "Feb", revenue: 12000, expenses: 7000, profit: 5000 },
  { month: "Mar", revenue: 15000, expenses: 8000, profit: 7000 },
  { month: "Apr", revenue: 11000, expenses: 6500, profit: 4500 },
  { month: "May", revenue: 13000, expenses: 7500, profit: 5500 },
  { month: "Jun", revenue: 16000, expenses: 9000, profit: 7000 },
  { month: "Jul", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Aug", revenue: 17000, expenses: 10000, profit: 7000 },
  { month: "Sep", revenue: 15000, expenses: 9000, profit: 6000 },
  { month: "Oct", revenue: 13000, expenses: 7000, profit: 6000 },
  { month: "Nov", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Dec", revenue: 16000, expenses: 10000, profit: 6000 },
];

const dataLinesOne = ["revenue", "expenses", "profit"];
export function BarGraphOne() {
        return (
      <SimpleBarGraph
        data={dataOne}
        dataBars={dataLinesOne}
        title="Coffee Corner Financials 2023"
        xAxisLabel="Months of 2023"
        yAxisLabel="Financials"
        xDataKey="month"
        colorList={[colorOptions[3], colorOptions[5], colorOptions[4]]}
        useDollar
      />
        );
      }`}
          title="Bar Graph One Data"
          buttonText="Bar Graph One Data"
        />
        ,
        <BarGraphOne />,
        <h4>
          Bar Graph Two: A stacked bar graph, allowing for the comparison of
          different categories or groups within each bar while still showing the
          overall total
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointSix = {
  month: string;
  income: number;
  expenses: number;
};

const dataSix: DataPointSix[] = [
  { month: "Jan", income: 5000, expenses: 3000 },
  { month: "Feb", income: 6000, expenses: 3500 },
  { month: "Mar", income: 7000, expenses: 4000 },
  { month: "Apr", income: 5500, expenses: 3200 },
  { month: "May", income: 6500, expenses: 3800 },
  { month: "Jun", income: 8000, expenses: 4500 },
  { month: "Jul", income: 7500, expenses: 4200 },
  { month: "Aug", income: 9000, expenses: 5000 },
  { month: "Sep", income: 8500, expenses: 4800 },
  { month: "Oct", income: 7200, expenses: 4000 },
  { month: "Nov", income: 6800, expenses: 3600 },
  { month: "Dec", income: 9500, expenses: 5500 },
];

export function BarGraphTwo() {
  return (
    <SimpleBarGraph
      data={dataSix}
      dataBars={["income", "expenses"]}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      stackIds={{ income: "stack", expenses: "stack" }}
      colorList={[colorOptions[6], colorOptions[3]]}
      useDollar
    />
  );
}`}
          title="Bar Graph Two Data"
          buttonText="Bar Graph Two Data"
        />
        ,
        <BarGraphTwo />,
        <h4>
          Bar Graph Three: A mixed bar chart with two stacked and one
          independent bar
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointSeven = {
  month: string;
  income: number;
  expenses: number;
  profit: number;
};

const dataSeven: DataPointSeven[] = [
  { month: "Jan", income: 5000, expenses: 3000, profit: 2000 },
  { month: "Feb", income: 6000, expenses: 3500, profit: 2500 },
  { month: "Mar", income: 7000, expenses: 4000, profit: 3000 },
  { month: "Apr", income: 5500, expenses: 3200, profit: 2300 },
  { month: "May", income: 6500, expenses: 3800, profit: 2700 },
  { month: "Jun", income: 8000, expenses: 4500, profit: 3500 },
  { month: "Jul", income: 7500, expenses: 4200, profit: 3300 },
  { month: "Aug", income: 9000, expenses: 5000, profit: 4000 },
  { month: "Sep", income: 8500, expenses: 4800, profit: 3700 },
  { month: "Oct", income: 7200, expenses: 4000, profit: 3200 },
  { month: "Nov", income: 6800, expenses: 3600, profit: 3200 },
  { month: "Dec", income: 9500, expenses: 5500, profit: 4000 },
];

export function BarGraphThree() {
  return (
    <SimpleBarGraph
      data={dataSeven}
      dataBars={["income", "expenses", "profit"]}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      colorList={[colorOptions[3], colorOptions[4], colorOptions[5]]}
      stackIds={{ income: "stack", expenses: "stack", profit: "" }}
      useDollar
    />
  );
}`}
          title="Bar Graph Three Data"
          buttonText="Bar Graph Three Data"
        />
        ,
        <BarGraphThree />,
        <h4>
          Bar Graph Four: A bar graph with a brush component for interactive
          zooming
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`const simpleData = [
  { name: "student 1", score: 98 },
  { name: "student 2", score: 94 },
  { name: "student 3", score: 90 },
  { name: "student 4", score: 85 },
  { name: "student 5", score: 83 },
  { name: "student 6", score: 80 },
];
export function BarGraphFour() {
  return (
    <SimpleBarGraph
      data={simpleData}
      dataBars={Object.keys(simpleData[0]).slice(1)}
      title="Top Student Scores"
      xAxisLabel="Students"
      yAxisLabel="Scores"
      xDataKey="name"
      colorList={[colorOptions[6]]}
      showBrush
    />
  );
}`}
          title="Bar Graph Four Data"
          buttonText="Bar Graph Four Data"
        />
        ,
        <BarGraphFour />,
        <h4>
          Bar Graph Five: A horizontal bar graph with custom bar shapes and
          label positions
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`const simpleData = [
  { name: "student 1", score: 98 },
  { name: "student 2", score: 94 },
  { name: "student 3", score: 90 },
  { name: "student 4", score: 85 },
  { name: "student 5", score: 83 },
  { name: "student 6", score: 80 },
];

export function BarGraphFourA() {
  return (
    <SimpleBarGraph
      data={simpleData}
      dataBars={Object.keys(simpleData[0]).slice(1)}
      title="Top Student Scores"
      xAxisLabel="Students"
      yAxisLabel="Scores"
      xDataKey="name"
      barShape="triangle"
      colorList={[colorOptions[5]]}
      labelPosition="top"
    />
  );
}`}
          title="Bar Graph Four A Data"
          buttonText="Bar Graph Four A Data"
        />
        ,
        <BarGraphFourA />,
        <h4>
          Bar Graph Six: A biaxial bar graph comparing two different data types
          on separate y axes
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`const simpleData = [
  { name: "student 1", score: 98 },
  { name: "student 2", score: 94 },
  { name: "student 3", score: 90 },
  { name: "student 4", score: 85 },
  { name: "student 5", score: 83 },
  { name: "student 6", score: 80 },
];

export function BarGraphFourB() {
  return (
    <SimpleBarGraph
      data={simpleData}
      dataBars={Object.keys(simpleData[0]).slice(1)}
      title="Top Student Scores"
      xAxisLabel="Students"
      yAxisLabel="Scores"
      xDataKey="name"
      barShape="circle"
      colorList={[colorOptions[2]]}
      labelPosition="outside"
      barBackground
    />
  );
}`}
          title="Bar Graph Four B Data"
          buttonText="Bar Graph Four B Data"
        />
        ,
        <BarGraphFourB />,
        <h4>
          Bar Graph Seven: A bar graph with custom bar shapes and label
          positions
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`const simpleData = [
  { name: "student 1", score: 98 },
  { name: "student 2", score: 94 },
  { name: "student 3", score: 90 },
  { name: "student 4", score: 85 },
  { name: "student 5", score: 83 },
  { name: "student 6", score: 80 },
];

export function BarGraphFourC() {
  return (
    <SimpleBarGraph
      data={simpleData}
      dataBars={Object.keys(simpleData[0]).slice(1)}
      title="Top Student Scores"
      xAxisLabel="Students"
      yAxisLabel="Scores"
      xDataKey="name"
      barShape="diamond"
      colorList={[colorOptions[3]]}
      labelPosition="top"
      barBackground
    />
  );
}`}
          title="Bar Graph Four C Data"
          buttonText="Bar Graph Four C Data"
        />
        ,
        <BarGraphFourC />,
        <h4>
          Bar Graph Eight: A bar graph accounting for negative values as well as
          positive
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointEight = {
  category: string;
  value1: number;
  value2: number;
};

const dataEight: DataPointEight[] = [
  { category: "A", value1: 500, value2: -200 },
  { category: "B", value1: -300, value2: 400 },
  { category: "C", value1: 100, value2: -200 },
  { category: "D", value1: -200, value2: 200 },
  { category: "E", value1: 300, value2: -100 },
  { category: "F", value1: -100, value2: 100 },
  { category: "G", value1: 400, value2: -300 },
  { category: "H", value1: -200, value2: 500 },
];

export function BarGraphEight() {
  return (
    <NegValuesGraph
      data={dataEight}
      dataBars={["value1", "value2"]}
      title="Positive and Negative Values"
      xAxisLabel="Categories"
      yAxisLabel="Values"
      xDataKey="category"
    />
  );
}`}
          title="Bar Graph Eight Data"
          buttonText="Bar Graph Eight Data"
        />
        ,
        <BarGraphEight />,
        <h4>
          Bar Graph Nine: A biaxial bar graph comparing two different data types
          on separate y axes
        </h4>
        ,
        <CodeModal
          isCenterFull
          code={`type DataPointFour = {
  month: string;
  attendance: number;
  temperature: number;
};

const dataFour: DataPointFour[] = [
  { month: "Jan", attendance: 50000, temperature: 40 },
  { month: "Feb", attendance: 55000, temperature: 45 },
  { month: "Mar", attendance: 60000, temperature: 50 },
  { month: "Apr", attendance: 70000, temperature: 55 },
  { month: "May", attendance: 80000, temperature: 60 },
  { month: "Jun", attendance: 95000, temperature: 70 },
  { month: "Jul", attendance: 110000, temperature: 80 },
  { month: "Aug", attendance: 100000, temperature: 75 },
  { month: "Sep", attendance: 90000, temperature: 65 },
  { month: "Oct", attendance: 75000, temperature: 60 },
  { month: "Nov", attendance: 60000, temperature: 50 },
  { month: "Dec", attendance: 55000, temperature: 45 },
];

const dataLinesFour = ["attendance", "temperature"];

export function BarGraphNine() {
  return (
    <SimpleBarGraph
      data={dataFour}
      dataBars={dataLinesFour}
      title="Amphitheater Attendance-Temperature Comparison 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Attendance"
      xDataKey="month"
      biaxial
      biaxialDataKey="temperature"
      biaxialLabel="Temperature (°F)"
      colorList={[colorOptions[3], colorOptions[4]]}
      yTicksStroke={colorOptions[3]}
      biaxialTickStroke={colorOptions[4]}
    />
  );
}`}
          title="Bar Graph Nine Data"
          buttonText="Bar Graph Nine Data"
        />
        ,
        <BarGraphNine />, , // ------------------------------ SCATTERPLOTS
        ------------------------------ //
        <>
          {" "}
          <h2>Scatterplots</h2>
          <p>
            Scatterplots are powerful tools for visualizing the relationship
            between two variables. They display data points on a two-dimensional
            graph, where each point represents a single observation.
            Scatterplots are useful for identifying patterns, correlations, or
            outliers in your data. They are commonly used in scientific
            research, market analysis, or any situation where you want to
            explore the connection between two quantitative variables.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import React from "react";
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";

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
`}
          title="Custom Scatterplot Component"
          buttonText="Custom Scatterplot Component"
        />
        ,
        <>
          <ul>
            <li>
              The <strong>ScatterChart</strong> component serves as the main
              container for the scatterplot.
            </li>
            <li>
              Inside the <strong>ScatterChart</strong>, you can define various
              sub-components to customize the appearance and behavior of the
              plot.
            </li>
            <li>
              The <strong>CartesianGrid</strong> component renders the grid
              lines in the background of the chart, providing a visual reference
              for the data points.
            </li>
            <li>
              The <strong>XAxis</strong> and <strong>YAxis</strong> components
              represent the horizontal and vertical axes of the plot,
              respectively.
            </li>
            <ul>
              <li>
                You can specify the data key for each axis using the{" "}
                <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the axis ticks can be customized using the{" "}
                <strong>tick</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>Tooltip</strong> component displays additional
              information when hovering over the data points, providing insights
              into the specific values of each point.
            </li>
            <li>
              The <strong>Legend</strong> component is used to display a legend
              for the different scatter series, helping users identify which
              series represents which data.
            </li>
            <li>
              The actual scatter points are rendered using the{" "}
              <strong>Scatter</strong> component.
            </li>
            <ul>
              <li>
                Each <strong>Scatter</strong> component represents a specific
                data series and is mapped to a unique <strong>name</strong>{" "}
                prop.
              </li>
              <li>
                The appearance of the scatter points can be customized by
                specifying the <strong>fill</strong> color and the{" "}
                <strong>shape</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>data</strong> prop passed to each{" "}
              <strong>Scatter</strong> component represents the actual data
              points for that series.
            </li>
            <ul>
              <li>
                Each data point is an object containing the x and y coordinates.
              </li>
            </ul>
            <li>
              In the provided example, the <strong>data</strong> prop is an
              array of objects, where each object represents a scatter series
              with a <strong>name</strong> and an array of <strong>data</strong>{" "}
              points.
            </li>
            <li>
              The scatterplot can be customized further by specifying the{" "}
              <strong>xAxisType</strong> and <strong>yAxisType</strong> props to
              determine the type of data on each axis (e.g., "number" or
              "category").
            </li>
            <li>Additional customization options include:</li>
            <ul>
              <li>
                Setting the <strong>isVertical</strong> prop to change the
                orientation of the plot.
              </li>
              <li>
                Using the <strong>useDollar</strong> prop to format the tooltip
                values as currency.
              </li>
              <li>
                Enabling a biaxial chart by setting the <strong>biaxial</strong>{" "}
                prop and providing a <strong>biaxialDataKey</strong> for the
                second y-axis.
              </li>
              <li>
                Customizing the colors of the scatter points using the{" "}
                <strong>colorList</strong> prop.
              </li>
              <li>
                Modifying the stroke color of the y-axis ticks using the{" "}
                <strong>yTickStroke</strong> and{" "}
                <strong>biaxialTickStroke</strong> props.
              </li>
              <li>
                Enabling different shapes for the scatter points using the{" "}
                <strong>useShapes</strong> and <strong>shapeList</strong> props.
              </li>
            </ul>
          </ul>
          <h4>
            Scatterplot One: A simple scatterplot with multiple data series
          </h4>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`const data: ScatterDataType[] = [
    {
      name: "Sales Data",
      data: [
        { x: 50, y: 150 },
        { x: 100, y: 300 },
        { x: 150, y: 500 },
        { x: 200, y: 100 },
        { x: 250, y: 350 },
        { x: 300, y: 120 },
        { x: 350, y: 280 },
        { x: 400, y: 220 },
        { x: 450, y: 400 },
        { x: 500, y: 340 },
        { x: 550, y: 180 },
        { x: 600, y: 250 },
        { x: 100, y: 340 },
        { x: 150, y: 130 },
        { x: 200, y: 370 },
        { x: 250, y: 140 },
        { x: 300, y: 310 },
      ],
    },
    {
      name: "Website Traffic",
      data: [
        { x: 60, y: 260 },
        { x: 120, y: 290 },
        { x: 180, y: 350 },
        { x: 240, y: 320 },
        { x: 300, y: 400 },
        { x: 360, y: 380 },
        { x: 420, y: 230 },
        { x: 480, y: 250 },
        { x: 540, y: 200 },
        { x: 600, y: 290 },
        { x: 60, y: 300 },
        { x: 120, y: 270 },
        { x: 180, y: 310 },
        { x: 240, y: 350 },
        { x: 300, y: 320 },
        { x: 360, y: 340 },
        { x: 420, y: 360 },
        { x: 480, y: 390 },
      ],
    },
    {
      name: "Product Reviews",
      data: [
        { x: 70, y: 400 },
        { x: 140, y: 350 },
        { x: 210, y: 500 },
        { x: 280, y: 450 },
        { x: 350, y: 600 },
        { x: 420, y: 480 },
        { x: 490, y: 420 },
        { x: 560, y: 460 },
        { x: 70, y: 390 },
        { x: 140, y: 520 },
        { x: 210, y: 470 },
        { x: 280, y: 550 },
        { x: 350, y: 520 },
        { x: 420, y: 490 },
        { x: 490, y: 610 },
        { x: 560, y: 570 },
        { x: 630, y: 530 },
        { x: 700, y: 590 },
        { x: 770, y: 480 },
      ],
    },
    ];
    
    export function ScatterPlotOne() {
    return (
      <SimpleScatterplot
        data={data}
        title="Combined Metrics"
        xAxisLabel=""
        yAxisLabel=""
        xDataKey="x"
        yDataKey="y"
      />
    );
    }`}
          title="Scatterplot One Data"
          buttonText="Scatterplot One Data"
        />
        ,
        <ScatterPlotOne />,
        <h4>Scatterplot Two: A scatterplot using custom shapes</h4>,
        <CodeModal
          isCenterFull
          code={`const data: ScatterDataType[] = [
  {
    name: "Sales Data",
    data: [
      { x: 50, y: 150 },
      { x: 100, y: 300 },
      { x: 150, y: 500 },
      { x: 200, y: 100 },
      { x: 250, y: 350 },
      { x: 300, y: 120 },
      { x: 350, y: 280 },
      { x: 400, y: 220 },
      { x: 450, y: 400 },
      { x: 500, y: 340 },
      { x: 550, y: 180 },
      { x: 600, y: 250 },
      { x: 100, y: 340 },
      { x: 150, y: 130 },
      { x: 200, y: 370 },
      { x: 250, y: 140 },
      { x: 300, y: 310 },
    ],
  },
  {
    name: "Website Traffic",
    data: [
      { x: 60, y: 260 },
      { x: 120, y: 290 },
      { x: 180, y: 350 },
      { x: 240, y: 320 },
      { x: 300, y: 400 },
      { x: 360, y: 380 },
      { x: 420, y: 230 },
      { x: 480, y: 250 },
      { x: 540, y: 200 },
      { x: 600, y: 290 },
      { x: 60, y: 300 },
      { x: 120, y: 270 },
      { x: 180, y: 310 },
      { x: 240, y: 350 },
      { x: 300, y: 320 },
      { x: 360, y: 340 },
      { x: 420, y: 360 },
      { x: 480, y: 390 },
    ],
  },
  {
    name: "Product Reviews",
    data: [
      { x: 70, y: 400 },
      { x: 140, y: 350 },
      { x: 210, y: 500 },
      { x: 280, y: 450 },
      { x: 350, y: 600 },
      { x: 420, y: 480 },
      { x: 490, y: 420 },
      { x: 560, y: 460 },
      { x: 70, y: 390 },
      { x: 140, y: 520 },
      { x: 210, y: 470 },
      { x: 280, y: 550 },
      { x: 350, y: 520 },
      { x: 420, y: 490 },
      { x: 490, y: 610 },
      { x: 560, y: 570 },
      { x: 630, y: 530 },
      { x: 700, y: 590 },
      { x: 770, y: 480 },
    ],
  },
];

export const scatterShapes: (
  | "circle"
  | "cross"
  | "diamond"
  | "square"
  | "star"
  | "triangle"
  | "wye"
)[] = ["diamond", "triangle", "star", "wye", "circle", "cross", "square"];

export function ScatterPlotTwo() {
    return (
      <SimpleScatterplot
        data={data}
        title="Combined Metrics"
        xAxisLabel=""
        yAxisLabel=""
        xDataKey="x"
        yDataKey="y"
        useShapes
        shapeList={scatterShapes}
      />
    );
    }`}
          title="Scatterplot Two Data"
          buttonText="Scatterplot Two Data"
        />
        ,
        <ScatterPlotTwo />, // ------------------------------ PIE CHARTS
        ------------------------------ //
        <>
          {" "}
          <h2>Pie Charts</h2>
          <p>
            Pie charts are used to represent the proportions or percentages of
            different categories within a whole. They are effective when you
            want to show the relative sizes of various segments or slices. Pie
            charts are visually appealing and can quickly convey the
            distribution of data. However, they can become less readable when
            there are too many categories or when the proportions are very
            similar. Pie charts are often used to display market share, budget
            allocations, or survey responses.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { CustomTooltip, colorOptions } from "./defaults";
import ChartContainer from "./chartContainer";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";

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
              <Cell key={\`cell-\${index}\`} fill={entry.color} />
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
              <Cell key={\`cell-\${index}\`} fill={entry.color} />
            ))}
          </Pie>

          <Legend payload={legendData} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
`}
          title="Custom Pie Chart Component"
          buttonText="Custom Pie Chart Component"
        />
        ,
        <>
          <ul>
            <li>
              The <strong>PieChart</strong> component serves as the main
              container for the pie chart.
            </li>
            <li>
              Inside the <strong>PieChart</strong>, you can define various
              sub-components to customize the appearance and behavior of the
              chart.
            </li>
            <li>
              The <strong>Pie</strong> component represents a pie or donut chart
              and is used to render the slices of the chart.
            </li>
            <ul>
              <li>
                Each <strong>Pie</strong> component is associated with a
                specific data set using the <strong>data</strong> prop.
              </li>
              <li>
                The <strong>dataKey</strong> prop specifies the key in the data
                object that holds the values for each slice.
              </li>
              <li>
                The <strong>cx</strong> and <strong>cy</strong> props define the
                center coordinates of the pie.
              </li>
              <li>
                The <strong>outerRadius</strong> prop sets the outer radius of
                the pie, determining its size.
              </li>
              <li>
                The <strong>innerRadius</strong> prop can be used to create a
                donut chart by specifying the inner radius.
              </li>
            </ul>
            <li>
              The <strong>Cell</strong> component is used within the{" "}
              <strong>Pie</strong> component to customize the appearance of each
              slice.
            </li>
            <ul>
              <li>
                Each <strong>Cell</strong> component is mapped to a specific
                data entry and can be customized individually.
              </li>
              <li>
                The <strong>fill</strong> prop is used to set the color of each
                slice.
              </li>
            </ul>
            <li>
              The <strong>Legend</strong> component is used to display a legend
              for the pie chart, showing the categories or labels for each
              slice.
            </li>
            <ul>
              <li>
                The <strong>payload</strong> prop of the <strong>Legend</strong>{" "}
                component is used to provide the data for the legend.
              </li>
              <li>
                Each legend item is defined as an object with properties like{" "}
                <strong>value</strong> (label), <strong>type</strong> (icon
                type), and <strong>color</strong>.
              </li>
            </ul>
            <li>
              The <strong>label</strong> prop can be used to display labels on
              each slice of the pie chart.
            </li>
            <ul>
              <li>
                The label can be a simple text or a custom render function that
                receives the data entry as a parameter.
              </li>
            </ul>
            <li>
              In the provided example, two separate <strong>Pie</strong>{" "}
              components are used to create a nested pie chart.
            </li>
            <ul>
              <li>
                The first <strong>Pie</strong> component represents the inner
                pie and is associated with the <strong>data01</strong> prop.
              </li>
              <li>
                The second <strong>Pie</strong> component represents the outer
                donut and is associated with the <strong>data02</strong> prop.
              </li>
              <li>
                The <strong>outerRadius</strong> and{" "}
                <strong>innerRadius</strong> props are adjusted to create the
                desired spacing between the two pies.
              </li>
            </ul>
            <li>
              The chart can be customized further by specifying the{" "}
              <strong>height</strong> prop to set the height of the chart
              container.
            </li>
            <li>
              The <strong>radius</strong> prop is used to control the overall
              size of the pie chart.
            </li>
          </ul>

          <h4>Pie Chart One: An extended pie chart with nested pies</h4>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`interface PieDataType {
  name: string;
  value: number;
  color: string;
}

const data01: PieDataType[] = [
  { name: "Electronics", value: 400, color: colorOptions[4] },
  { name: "Groceries", value: 300, color: colorOptions[5] },
  { name: "Clothing", value: 200, color: colorOptions[2] },
  { name: "Entertainment", value: 100, color: colorOptions[3] },
];

const data02: PieDataType[] = [
  { name: "Smartphones", value: 150, color: colorOptions[4] }, // Electronics
  { name: "Laptops", value: 150, color: colorOptions[4] }, // Electronics
  { name: "TVs", value: 100, color: colorOptions[4] }, // Electronics
  { name: "Vegetables", value: 100, color: colorOptions[5] }, // Groceries
  { name: "Fruits", value: 100, color: colorOptions[5] }, // Groceries
  { name: "Meat", value: 100, color: colorOptions[5] }, // Groceries
  { name: "Men's Wear", value: 100, color: colorOptions[2] }, // Clothing
  { name: "Women's Wear", value: 100, color: colorOptions[2] }, // Clothing
  { name: "Movies", value: 60, color: colorOptions[3] }, // Entertainment
  { name: "Concerts", value: 40, color: colorOptions[3] }, // Entertainment
];

export function PieChartOne() {
  return (
    <SimplePieChart data01={data01} data02={data02} title="Example Pie Chart" />
  );
}`}
          title="Pie Chart Data"
          buttonText="Pie Chart Data"
        />
        ,
        <RechartPieChart />, // ------------------------------ RADAR GRAPHS
        ------------------------------ //
        <>
          {" "}
          <h2>Radar Charts</h2>
          <p>
            Radar charts, also known as spider charts or star charts, are used
            to compare multiple variables across different categories. They
            display data points on a circular grid, with each variable
            represented by an axis radiating from the center. Radar charts are
            useful when you want to assess the relative strengths or weaknesses
            of different entities across various dimensions. They are commonly
            used in sports analysis, product comparisons, or skill evaluations.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import React from "react";
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";

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
`}
          title="Custom Radar Chart Component"
          buttonText="Custom Radar Chart Component"
        />
        ,
        <>
          <ul>
            <li>
              The <strong>RadarChart</strong> component serves as the main
              container for the radar chart.
            </li>
            <li>
              Inside the <strong>RadarChart</strong>, you can define various
              sub-components to customize the appearance and behavior of the
              chart.
            </li>
            <li>
              The <strong>PolarGrid</strong> component renders the grid lines in
              the background of the chart, providing a visual reference for the
              data points.
            </li>
            <li>
              The <strong>PolarAngleAxis</strong> component represents the
              angular axis of the radar chart.
            </li>
            <ul>
              <li>
                It is used to display the categories or labels around the
                perimeter of the chart.
              </li>
              <li>
                The <strong>dataKey</strong> prop specifies the key in the data
                object that holds the category names.
              </li>
              <li>
                The appearance of the axis labels can be customized using the{" "}
                <strong>stroke</strong> prop.
              </li>
            </ul>
            <li>
              The <strong>PolarRadiusAxis</strong> component represents the
              radial axis of the radar chart.
            </li>
            <ul>
              <li>
                It is used to display the scale or values along the radial axis.
              </li>
              <li>
                The <strong>domain</strong> prop is used to specify the range of
                values for the radial axis.
              </li>
            </ul>
            <li>
              The <strong>Radar</strong> component is used to render the actual
              data points and the area filled by the data.
            </li>
            <ul>
              <li>
                Each <strong>Radar</strong> component represents a specific data
                series and is mapped to a unique <strong>dataKey</strong> prop.
              </li>
              <li>
                The appearance of the radar area can be customized using the{" "}
                <strong>stroke</strong>, <strong>fill</strong>, and{" "}
                <strong>fillOpacity</strong> props.
              </li>
            </ul>
            <li>
              The <strong>Tooltip</strong> component is used to display
              additional information when hovering over the data points.
            </li>
            <ul>
              <li>
                It can be customized using a custom render function passed to
                the <strong>content</strong> prop.
              </li>
            </ul>
            <li>
              In the provided example, multiple <strong>Radar</strong>{" "}
              components are dynamically rendered based on the keys present in
              the <strong>data</strong> object.
            </li>
            <ul>
              <li>
                The <strong>Object.keys()</strong> method is used to extract the
                keys from the data object.
              </li>
              <li>
                The <strong>filter()</strong> method is used to exclude specific
                keys that are not meant to be plotted.
              </li>
              <li>
                Each <strong>Radar</strong> component is assigned a unique color
                based on the <strong>colors</strong> array.
              </li>
            </ul>
            <li>
              The chart can be customized further by specifying the{" "}
              <strong>height</strong> prop to set the height of the chart
              container.
            </li>
            <li>
              The <strong>axisLabel</strong> prop is used to specify the key in
              the data object that holds the category names for the angular
              axis.
            </li>
          </ul>
          <h4>
            Radar Chart One: A simple radar chart with multiple data series
          </h4>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`const sampleData: RadarDataType[] = [
  {
    language: "English",
    percentage: 90,
    fullMark: 100,
  },
  {
    language: "Spanish",
    percentage: 45,
    fullMark: 100,
  },
  {
    language: "Mandarin",
    percentage: 30,
    fullMark: 100,
  },
  {
    language: "Arabic",
    percentage: 18,
    fullMark: 100,
  },
  {
    language: "Hindi",
    percentage: 25,
    fullMark: 100,
  },
  {
    language: "French",
    percentage: 12,
    fullMark: 100,
  },
  {
    language: "German",
    percentage: 17,
    fullMark: 100,
  },
  {
    language: "Russian",
    percentage: 23,
    fullMark: 100,
  },
];

export default function RadarChartOne() {
  return (
    <SimpleRadarChart
      axisLabel="language"
      data={sampleData}
      title="Languages Spoken by Population Percentage"
      colors={[colorOptions[3]]}
    />
  );
}`}
          title="Radar Chart Data"
          buttonText="Radar Chart Data"
        />
        ,
        <RadarChartOne />, // ------------------------------ COMBINATION GRAPHS
        ------------------------------ //
        <>
          {" "}
          <h2>Combination Charts</h2>
          <p>
            Combination charts allow you to combine multiple chart types into a
            single visualization. They are useful when you want to present
            different types of data or highlight different aspects of your
            analysis. For example, you can combine a line graph and a bar chart
            to show the relationship between two variables while also comparing
            categories. Combination charts provide flexibility and can help you
            tell a more comprehensive story with your data.
          </p>
        </>
        ,
        <CodeModal
          isCenterFull
          code={`import React from "react";
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
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";
import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
} from "./defaults";

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
`}
          title="Custom Combination Graph Component"
          buttonText="Custom Combination Graph Component"
        />
        ,
        <ul>
          <li>
            The <strong>ComposedChart</strong> component serves as the main
            container for the combination chart.
          </li>
          <li>
            Inside the <strong>ComposedChart</strong>, you can define various
            sub-components to create a chart that combines multiple chart types.
          </li>
          <li>
            The <strong>XAxis</strong> and <strong>YAxis</strong> components
            represent the horizontal and vertical axes of the chart,
            respectively.
          </li>
          <ul>
            <li>
              The <strong>dataKey</strong> prop specifies the key in the data
              object that corresponds to the axis values.
            </li>
            <li>
              The <strong>type</strong> prop determines the type of the axis
              (e.g., "number" or "category").
            </li>
            <li>
              The appearance of the axis ticks can be customized using the{" "}
              <strong>tick</strong> prop.
            </li>
          </ul>
          <li>
            The <strong>CartesianGrid</strong> component renders the grid lines
            in the background of the chart, providing a visual reference for the
            data points.
          </li>
          <li>
            The <strong>Tooltip</strong> component is used to display additional
            information when hovering over the data points.
          </li>
          <ul>
            <li>
              It can be customized using a custom render function passed to the{" "}
              <strong>content</strong> prop.
            </li>
          </ul>
          <li>
            The <strong>Legend</strong> component is used to display a legend
            for the different data series in the chart.
          </li>
          <li>
            The <strong>Area</strong> component is used to render an area chart
            within the combination chart.
          </li>
          <ul>
            <li>
              It is defined with a <strong>type</strong> prop to specify the
              curve type (e.g., "monotone" for a smooth curve).
            </li>
            <li>
              The <strong>dataKey</strong> prop specifies the key in the data
              object that corresponds to the area values.
            </li>
            <li>
              The appearance of the area can be customized using the{" "}
              <strong>fill</strong> and <strong>stroke</strong> props.
            </li>
          </ul>
          <li>
            The <strong>Bar</strong> component is used to render a bar chart
            within the combination chart.
          </li>
          <ul>
            <li>
              The <strong>dataKey</strong> prop specifies the key in the data
              object that corresponds to the bar values.
            </li>
            <li>
              The <strong>barSize</strong> prop determines the width of the
              bars.
            </li>
            <li>
              The appearance of the bars can be customized using the{" "}
              <strong>fill</strong> prop.
            </li>
          </ul>
          <li>
            The <strong>Line</strong> component is used to render a line chart
            within the combination chart.
          </li>
          <ul>
            <li>
              It is defined with a <strong>type</strong> prop to specify the
              curve type (e.g., "monotone" for a smooth curve).
            </li>
            <li>
              The <strong>dataKey</strong> prop specifies the key in the data
              object that corresponds to the line values.
            </li>
            <li>
              The appearance of the line can be customized using the{" "}
              <strong>stroke</strong> prop.
            </li>
          </ul>
          <li>
            The <strong>Scatter</strong> component is used to render a scatter
            plot within the combination chart.
          </li>
          <ul>
            <li>
              The <strong>dataKey</strong> prop specifies the key in the data
              object that corresponds to the scatter values.
            </li>
            <li>
              The appearance of the scatter points can be customized using the{" "}
              <strong>fill</strong> prop.
            </li>
          </ul>
          <li>
            The chart can be customized further by specifying various props such
            as <strong>useDollar</strong> for formatting tooltip values as
            currency, <strong>biaxial</strong> for enabling a biaxial chart, and{" "}
            <strong>colorList</strong> for specifying custom colors for the
            chart components.
          </li>
        </ul>
        <h4>
          Combination Graph One: A combination of bar, line, area, and scatter
          plots
        </h4>
        <CodeModal
          isCenterFull
          code={`const dataCombination: CombinationPointType[] = [
  {
    category: "Jan",
    barValue: 400,
    lineValue: 240,
    areaValue: 2400,
    scatterValue: 50,
  },
  {
    category: "Feb",
    barValue: 300,
    lineValue: 139,
    areaValue: 2210,
    scatterValue: 50,
  },
  {
    category: "Mar",
    barValue: 200,
    lineValue: 980,
    areaValue: 2290,
    scatterValue: 50,
  },
  {
    category: "Apr",
    barValue: 278,
    lineValue: 390,
    areaValue: 2000,
    scatterValue: 50,
  },
  {
    category: "May",
    barValue: 189,
    lineValue: 480,
    areaValue: 2181,
    scatterValue: 50,
  },
  {
    category: "Jun",
    barValue: 239,
    lineValue: 380,
    areaValue: 2500,
    scatterValue: 50,
  },
  {
    category: "Jul",
    barValue: 349,
    lineValue: 430,
    areaValue: 2100,
    scatterValue: 50,
  },
  {
    category: "Aug",
    barValue: 300,
    lineValue: 140,
    areaValue: 2000,
    scatterValue: 50,
  },
  {
    category: "Sep",
    barValue: 200,
    lineValue: 980,
    areaValue: 2300,
    scatterValue: 50,
  },
  {
    category: "Oct",
    barValue: 278,
    lineValue: 390,
    areaValue: 2200,
    scatterValue: 50,
  },
  {
    category: "Nov",
    barValue: 189,
    lineValue: 480,
    areaValue: 2100,
    scatterValue: 50,
  },
  {
    category: "Dec",
    barValue: 239,
    lineValue: 380,
    areaValue: 2600,
    scatterValue: 50,
  },
];

export function CombinationGraphOne() {
  return (
    <CombinationGraph
      data={dataCombination}
      xDataKey="category"
      title="Combination Graph"
      xAxisLabel="months"
      yAxisLabel="quantities"
    />
  );
}`}
          title="Combined Chart Data"
          buttonText="Combined Chart Data"
        />
        ,
        <CombinationGraphOne />,<h2>Conclusion</h2>
        <p>
          So, now that we have explored the powerful and flexible Recharts
          library for creating stunning data visualizations in React and Remix,
          are you ready to go graphs some digits? While there may be a learning
          curve when it comes to customization, the extensive features and
          flexibility offered by Recharts make it a valuable tool for data
          visualization enthusiasts. By utilizing the knowledge gained from this
          post, you can create visually appealing and informative charts that
          effectively communicate your data stories. So go ahead, experiment
          with Recharts, and unleash the power of data visualization in your
          React and Remix projects!
        </p>
      </React.Fragment>,
    ],
  };
