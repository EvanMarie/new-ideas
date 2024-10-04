export default function GetBarChartStyles({
  title = "Chart Title",
  indexAxis = "y" as const,
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
  xTitle,
  yTitle,
}: {
  title?: string;
  indexAxis?: string;
  gridLineColor?: string;
  textColor?: string;
  tickSize?: number;
  xTitle?: string;
  yTitle?: string;
}) {
  const chartDefaults = {
    indexAxis: indexAxis,
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
            weight: "bold" as const,
            color: textColor,
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
            weight: "bold" as const,
            color: textColor,
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
      textShadow: {
        titleFont: "24px Arial",
        titleColor: "#000",
        shadowColor: "rgba(0,0,0,0.75)",
        shadowBlur: 10,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
      },
      legend: {
        position: "top" as const,
        display: true,
        labels: {
          padding: 20,
          color: textColor,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return chartDefaults;
}
