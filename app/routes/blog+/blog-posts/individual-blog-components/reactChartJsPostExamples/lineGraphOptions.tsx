import { ChartOptions } from "chart.js";

export default function GetLineGraphStyles({
  title = "Chart Title",
  xTitle,
  yTitle,
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
  pointStyle = "circle" as const, // Default point style
}: {
  title?: string;
  gridLineColor?: string;
  xTitle?: string;
  yTitle?: string;
  textColor?: string;
  tickSize?: number;
  pointStyle?:
    | "circle"
    | "cross"
    | "crossRot"
    | "dash"
    | "line"
    | "rect"
    | "rectRounded"
    | "rectRot"
    | "star"
    | "triangle";
}): ChartOptions {
  const lineGraphDefaults: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
        title: {
          display: true,
          text: xTitle,
          color: textColor,
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
      y: {
        grid: {
          color: gridLineColor,
        },
        beginAtZero: true,
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
        title: {
          display: true,
          text: yTitle,
          color: textColor,
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: true,

        labels: {
          padding: 20,
          color: textColor,
          usePointStyle: true,
          pointStyle: pointStyle,
          font: {
            family: "Arial",
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
          family: "Arial",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return lineGraphDefaults;
}
