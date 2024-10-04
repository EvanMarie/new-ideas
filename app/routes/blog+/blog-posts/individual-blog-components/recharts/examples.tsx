// -------------------------- EXAMPLE ONE SIMPLE -------------------------- //

import SimpleAreaGraph from "./areaGraph";
import SimpleBarGraph from "./barGraph";
import { colorOptions, scatterShapes } from "./defaults";
import SimpleLineGraph from "./lineGraph";
import CombinedGraph, { CombinationPointType } from "./combinationGraph";
import NegValuesGraph from "./negValuesBarGraph";
import CombinationGraph from "./combinationGraph";
import SimpleScatterplot, { ScatterDataType } from "./scatterPlot";
import SimplePieChart from "./pieChart";
import SimpleRadarChart, { RadarDataType } from "./radarChart";

type DataPointOne = {
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
}
// -------------------------- EXAMPLE TWO DASHES -------------------------- //

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
}

// -------------------------- EXAMPLE THREE VERTICAL -------------------------- //
type DataPointThree = {
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
}
// -------------------------- EXAMPLE FOUR BIAXIAL -------------------------- //

type DataPointFour = {
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
}

// -------------------------- EXAMPLE FIVE -------------------------- //

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
}

// -------------------------- EXAMPLE SIX SIMPLE -------------------------- //

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
}

// -------------------------- EXAMPLE SEVEN STACKED-------------------------- //

type DataPointSix = {
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
}

// -------------------------- EXAMPLE EIGHT MIXED -------------------------- //

type DataPointSeven = {
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
}

// -------------------------- EXAMPLE NINE BRUSH & SHAPES -------------------------- //

const simpleData = [
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
}

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
}

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
}

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
}

// -------------------------- EXAMPLE TEN POS NEG -------------------------- //

type DataPointEight = {
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
}

// -------------------------- EXAMPLE ELEVEN BAR BIAXIAL -------------------------- //

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
}

// -------------------------- EXAMPLE TWELVE COMBINATION -------------------------- //

const dataCombination: CombinationPointType[] = [
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
}

// -------------------------- EXAMPLE THIRTEEN -------------------------- //

const data: ScatterDataType[] = [
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
}

// -------------------------- EXAMPLE FOURTEEN -------------------------- //

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
}

// -------------------------- EXAMPLE FIFTEEN -------------------------- //

interface PieDataType {
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
}

// -------------------------- EXAMPLE SIXTEEN -------------------------- //

const sampleData: RadarDataType[] = [
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
}
