import { Path } from "./violetAnimationComponent";

export const purpleFuchsiaGradient: Path["fill"] = `url("data:image/svg+xml,%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23800080'/%3E%3Cstop offset='100%25' stop-color='%23ff00ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23gradient)'/%3E")`;

const overallFillDelay = 2;
const overallDuration = 3;
const overallStrokeWidth = 6;
// const fillColor = "url(#purpleFuchsiaGradient)";
const fillColor = "#800080";
const fillDuration = 0.5;
const strokeColor = "#a200ff";
const zIndex = 10;
const overallDelay = 1;

export const violetFlowerAnimationPaths = [
  {
    path: "M368.738,147.224c7.356-18.313,7.362-36.373-1.709-48.867c-16.381-22.556-56.126-18.441-88.78,9.187 c-32.935,27.868-37.662,71.655-34.661,80.346c2.68,8.795,32.242,41.438,75.267,44.629c42.656,3.157,77.229-16.876,77.225-44.753 C396.075,172.322,385.455,157.714,368.738,147.224z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
  {
    path: "M313.314,249.568c-36.682-22.711-79.787-13.676-87.125-8.136c-7.535,5.267-29.447,43.469-19.186,85.374 c10.18,41.545,39.915,68.232,66.426,59.614c14.685-4.776,25.294-19.39,30.106-38.53c19.69,1.339,36.869-4.237,45.949-16.726 C365.874,308.615,349.682,272.086,313.314,249.568z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay + 0.25,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
  {
    path: "M169.89,241.434c-7.338-5.54-50.442-14.573-87.124,8.136c-36.366,22.519-52.56,59.047-36.171,81.598 c9.08,12.488,26.258,18.063,45.948,16.726c4.813,19.142,15.424,33.756,30.107,38.53c26.511,8.618,56.248-18.069,66.425-59.614 C199.339,284.902,177.425,246.699,169.89,241.434z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay + 0.5,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
  {
    path: "M77.225,232.517c43.024-3.188,72.586-35.834,75.267-44.628c3-8.692-1.728-52.477-34.662-80.347 c-32.653-27.628-72.398-31.741-88.78-9.187c-9.073,12.495-9.066,30.555-1.708,48.868C10.625,157.714,0.005,172.322,0,187.763 C-0.003,215.641,34.568,235.674,77.225,232.517z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay + 0.75,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
  {
    path: "M198.04,154.794c9.192,0.168,49.374-17.856,65.703-57.792c16.185-39.593,7.813-78.664-18.699-87.273 c-14.687-4.769-31.86,0.818-47.004,13.477c-15.144-12.657-32.318-18.244-47.004-13.477c-26.513,8.609-34.884,47.682-18.698,87.273 C148.664,136.937,188.848,154.962,198.04,154.794z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay + 1.25,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
  {
    path: "M 233.04 203.039 C 233.04 222.37 217.371 238.039 198.04 238.039 C 178.709 238.039 163.04 222.37 163.04 203.039 C 163.04 183.708 178.709 168.039 198.04 168.039 C 217.371 168.039 233.04 183.708 233.04 203.039 Z",
    stroke: strokeColor,
    strokeWidth: overallStrokeWidth,
    delay: overallDelay + 1.5,
    duration: overallDuration,
    fill: fillColor,
    fillDelay: overallFillDelay + overallDelay,
    fillDuration: fillDuration,
    zIndex: zIndex,
  },
];
