import { BsCalendar3, BsChatDots } from "react-icons/bs";
import { HiRefresh } from "react-icons/hi";
import { ImCheckboxUnchecked } from "react-icons/im";
import {
  IoCheckboxOutline,
  IoCloseCircleOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

export const imageFallback = "";

export const CloseIcon = IoCloseCircleOutline;
export const CalendarIcon = BsCalendar3;
export const ArrowLeftIcon = RiArrowLeftSFill;
export const ArrowRightIcon = RiArrowRightSFill;
export const HomeIcon = IoHomeOutline;
export const darkFlexInnerPadding = "p-0.5vh sm:px-1vh md:px-1.5vh lg:p-2.5vh";

export const themeColors = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",
  pink: "#c300ff",
  100: "rgba(227, 242, 254, 1)",
  110: "rgba(227, 242, 254, 0.1)",
  120: "rgba(227, 242, 254, 0.2)",
  130: "rgba(227, 242, 254, 0.3)",
  140: "rgba(227, 242, 254, 0.4)",
  150: "rgba(227, 242, 254, 0.5)",
  160: "rgba(227, 242, 254, 0.6)",
  170: "rgba(227, 242, 254, 0.7)",
  180: "rgba(227, 242, 254, 0.8)",
  190: "rgba(227, 242, 254, 0.9)",

  200: "rgba(224, 219, 253, 1)",
  210: "rgba(224, 219, 253, 0.1)",
  220: "rgba(224, 219, 253, 0.2)",
  230: "rgba(224, 219, 253, 0.3)",
  240: "rgba(224, 219, 253, 0.4)",
  250: "rgba(224, 219, 253, 0.5)",
  260: "rgba(224, 219, 253, 0.6)",
  270: "rgba(224, 219, 253, 0.7)",
  280: "rgba(224, 219, 253, 0.8)",
  290: "rgba(224, 219, 253, 0.9)",

  300: "rgba(198, 235, 255, 1)",
  310: "rgba(198, 235, 255, 0.1)",
  320: "rgba(198, 235, 255, 0.2)",
  330: "rgba(198, 235, 255, 0.3)",
  340: "rgba(198, 235, 255, 0.4)",
  350: "rgba(198, 235, 255, 0.5)",
  360: "rgba(198, 235, 255, 0.6)",
  370: "rgba(198, 235, 255, 0.7)",
  380: "rgba(198, 235, 255, 0.8)",
  390: "rgba(198, 235, 255, 0.9)",

  400: "rgba(212, 186, 250, 1)",
  410: "rgba(212, 186, 250, 0.1)",
  420: "rgba(212, 186, 250, 0.2)",
  430: "rgba(212, 186, 250, 0.3)",
  440: "rgba(212, 186, 250, 0.4)",
  450: "rgba(212, 186, 250, 0.5)",
  460: "rgba(212, 186, 250, 0.6)",
  470: "rgba(212, 186, 250, 0.7)",
  480: "rgba(212, 186, 250, 0.8)",
  490: "rgba(212, 186, 250, 0.9)",

  500: "rgba(177, 210, 255, 1)",
  510: "rgba(177, 210, 255, 0.1)",
  520: "rgba(177, 210, 255, 0.2)",
  530: "rgba(177, 210, 255, 0.3)",
  540: "rgba(177, 210, 255, 0.4)",
  550: "rgba(177, 210, 255, 0.5)",
  560: "rgba(177, 210, 255, 0.6)",
  570: "rgba(177, 210, 255, 0.7)",
  580: "rgba(177, 210, 255, 0.8)",
  590: "rgba(177, 210, 255, 0.9)",

  600: "rgba(86, 54, 133, 1)",
  610: "rgba(86, 54, 133, 0.1)",
  620: "rgba(86, 54, 133, 0.2)",
  630: "rgba(86, 54, 133, 0.3)",
  640: "rgba(86, 54, 133, 0.4)",
  650: "rgba(86, 54, 133, 0.5)",
  660: "rgba(86, 54, 133, 0.6)",
  670: "rgba(86, 54, 133, 0.7)",
  680: "rgba(86, 54, 133, 0.8)",
  690: "rgba(86, 54, 133, 0.9)",

  700: "rgba(46, 85, 140, 1)",
  710: "rgba(46, 85, 140, 0.1)",
  720: "rgba(46, 85, 140, 0.2)",
  730: "rgba(46, 85, 140, 0.3)",
  740: "rgba(46, 85, 140, 0.4)",
  750: "rgba(46, 85, 140, 0.5)",
  760: "rgba(46, 85, 140, 0.6)",
  770: "rgba(46, 85, 140, 0.7)",
  780: "rgba(46, 85, 140, 0.8)",
  790: "rgba(46, 85, 140, 0.9)",

  800: "rgba(45, 19, 84, 1)",
  810: "rgba(45, 19, 84, 0.1)",
  820: "rgba(45, 19, 84, 0.2)",
  830: "rgba(45, 19, 84, 0.3)",
  840: "rgba(45, 19, 84, 0.4)",
  850: "rgba(45, 19, 84, 0.5)",
  860: "rgba(45, 19, 84, 0.6)",
  870: "rgba(45, 19, 84, 0.7)",
  880: "rgba(45, 19, 84, 0.8)",
  890: "rgba(45, 19, 84, 0.9)",

  900: "rgba(2, 22, 51, 1)",
  910: "rgba(2, 22, 51, 0.1)",
  920: "rgba(2, 22, 51, 0.2)",
  930: "rgba(2, 22, 51, 0.3)",
  940: "rgba(2, 22, 51, 0.4)",
  950: "rgba(2, 22, 51, 0.5)",
  960: "rgba(2, 22, 51, 0.6)",
  970: "rgba(2, 22, 51, 0.7)",
  980: "rgba(2, 22, 51, 0.8)",
  990: "rgba(2, 22, 51, 0.9)",
};

export const BoxCheckedIcon = IoCheckboxOutline;
export const BoxUncheckedIcon = ImCheckboxUnchecked;
export const RefreshIcon = HiRefresh;
export const ChatIcon = BsChatDots;
