import React, { useEffect, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import FlexibleOptions from "./airbnbFlexibleOptions";
import {
  Box,
  HStack,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function DateSelector({
  selectedDateOne,
  selectedDateTwo,
  setSelectedDateOne,
  setSelectedDateTwo,
  when,
  setWhen,
}: {
  selectedDateOne: Date | null;
  selectedDateTwo: Date | null;
  setSelectedDateOne: (date: Date | null) => void;
  setSelectedDateTwo: (date: Date | null) => void;
  when: string;
  setWhen: (when: string) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [mode, setMode] = useState<"dates" | "flexible">("dates");
  const [flexibleTime, setFlexibleTime] = useState("weekend");

  useEffect(() => {
    if (mode === "dates" && selectedDateOne && selectedDateTwo) {
      const formattedStart = format(selectedDateOne, "MMM d");
      const formattedEnd = format(selectedDateTwo, "MMM d");
      setWhen(`from ${formattedStart} to ${formattedEnd}`);
    }
  }, [selectedDateOne, selectedDateTwo, setWhen, mode]);

  const handleDateClick = (date: Date) => {
    if (!selectedDateOne || (selectedDateOne && selectedDateTwo)) {
      setSelectedDateOne(date);
      setSelectedDateTwo(null);
    } else if (selectedDateOne && !selectedDateTwo && date >= selectedDateOne) {
      setSelectedDateTwo(date);
    }
  };

  const isWithinRange = (day: Date) => {
    if (selectedDateOne && selectedDateTwo) {
      return day >= selectedDateOne && day <= selectedDateTwo;
    }
    return false;
  };

  const renderDays = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start, end });

    const dayOffset = getDay(start);

    const paddingDays = Array.from({ length: dayOffset }, (_, i) => (
      <div
        key={`padding-${i}`}
        className="w-10vw h-10vw md:w-5.5vh md:h-5.5vh p-1vh text-slate-800"
      ></div> // Render empty divs for padding
    ));

    const dateButtons = days.map((day, index) => {
      const isSelectedStartOrEnd =
        selectedDateOne?.toDateString() === day.toDateString() ||
        selectedDateTwo?.toDateString() === day.toDateString();
      const isInRange = isWithinRange(day);

      return (
        <button
          key={index}
          className={`w-[10vw] h-[10vw] md:w-[5.5vh] md:h-[5.5vh] p-[1vh] text-md sm:text-lg md:text-md leading-tight border-[0.2vh] border-transparent rounded-full hover:border-slate-500 transition-400 text-slate-800 ${
            isSelectedStartOrEnd ? "bg-pink-700 text-white textShadow" : ""
          } ${
            isInRange
              ? "border-pink-900 bg-pink-400/80 text-white textShadow"
              : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {format(day, "d")}
        </button>
      );
    });

    return <>{[...paddingDays, ...dateButtons]}</>; // Combine padding days with actual date buttons
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <Box className="w-full p-[1vh] bg-white rounded-[3vh] shadowNarrowTight space-y-[1vh]">
      <HStackFull className=" justify-evenly items-center py-[1vh] px-[2vh] bg-slate-300/40 rounded-[3vh]">
        <button
          onClick={() => setMode("dates")}
          className={`${
            mode === "dates"
              ? "text-slate-900 bg-white shadowNarrowTight"
              : "text-slate-500"
          } rounded-[2vh] px-[1vh] py-[0.5vh] transition-400`}
        >
          Dates
        </button>

        <button
          onClick={() => {
            setSelectedDateOne(null);
            setSelectedDateTwo(null);
            setMode("flexible");
          }}
          className={`${
            mode === "flexible"
              ? "text-slate-900 bg-white shadowNarrowTight"
              : "text-slate-500"
          } rounded-[2vh] px-[1vh] py-[0.5vh] transition-400`}
        >
          Flexible
        </button>
      </HStackFull>
      {mode === "dates" && (
        <>
          <HStack className="justify-between items-center py-[1vh]">
            <button
              onClick={handlePrevMonth}
              className="text-xl text-slate-600"
            >
              &#9664;
            </button>
            <Text className="flex-1 text-center text-col-800">
              {format(currentMonth, "MMMM yyyy")}
            </Text>
            <button
              onClick={handleNextMonth}
              className="text-xl text-slate-600"
            >
              &#9654;
            </button>
          </HStack>
          <div className="grid grid-cols-7 gap-1 text-center font-semibold text-pink-700">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
        </>
      )}
      {mode === "flexible" && (
        <VStackFull className="overflow-hidden">
          <FlexibleOptions
            flexibleTime={flexibleTime}
            setFlexibleTime={setFlexibleTime}
            when={when}
            setWhen={setWhen}
          />
        </VStackFull>
      )}
    </Box>
  );
}
