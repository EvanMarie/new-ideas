import { ChartOptions } from "chart.js";

export default function GetPieChartStyles({
  title = "Pie Chart Title",
  textColor = "rgba(255, 255, 255, 1)",
}: {
  title?: string;
  textColor?: string;
}): ChartOptions<"pie"> {
  const pieChartDefaults: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: textColor,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
          family: "Arial",
          weight: "bold",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return pieChartDefaults;
}
