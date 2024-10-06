import { useEffect, useState } from "react";
import { format, addMonths } from "date-fns";
import {
  Box,
  CenterFull,
  FlexFull,
  HStack,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function FlexibleOptions({
  flexibleTime,
  setFlexibleTime,
  when,
  setWhen,
}: {
  flexibleTime: string;
  setFlexibleTime: (time: string) => void;
  when: string;
  setWhen: (when: string) => void;
}) {
  const [selectedDuration, setSelectedDuration] = useState<string>("weekend");
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  const months: Date[] = Array.from({ length: 12 }, (_, i) =>
    addMonths(new Date(), i)
  );

  useEffect(() => {
    const formattedMonth = format(selectedMonth, "MMMM");
    let newTimeDescription = "";
    switch (selectedDuration) {
      case "weekend":
        newTimeDescription = `a weekend in ${formattedMonth}`;
        break;
      case "week":
        newTimeDescription = `a week in ${formattedMonth}`;
        break;
      case "month":
        newTimeDescription = `the month of ${formattedMonth}`;
        break;
      default:
        newTimeDescription = `${selectedDuration} in ${formattedMonth}`;
    }
    setFlexibleTime(newTimeDescription);
    setWhen(newTimeDescription); // Set 'when' to the same value as 'flexibleTime'
  }, [selectedDuration, selectedMonth, setFlexibleTime, setWhen]);

  const handleSelectMonth = (month: Date) => {
    setSelectedMonth(month);
  };

  const baseStyles = "px-4 py-2 rounded-[2vh] border-[0.2vh] transition-300";
  const selectedStyles =
    "border-black bg-slate-400 text-white subtleTextShadow";
  const unselectedStyles = "border-transparent bg-gray-200";

  return (
    <VStackFull className="gap-y-[1vh] h-full text-slate-900">
      <Text className="text-md">Stay for a</Text>
      <HStackFull className="gap-x-[1vh] justify-between px-[1vh]">
        <button
          onClick={() => setSelectedDuration("weekend")}
          className={`${baseStyles} ${
            selectedDuration === "weekend" ? selectedStyles : unselectedStyles
          }`}
        >
          Weekend
        </button>
        <button
          onClick={() => setSelectedDuration("week")}
          className={`${baseStyles} ${
            selectedDuration === "week" ? selectedStyles : unselectedStyles
          }`}
        >
          Week
        </button>
        <button
          onClick={() => setSelectedDuration("month")}
          className={`${baseStyles} ${
            selectedDuration === "month" ? selectedStyles : unselectedStyles
          }`}
        >
          Month
        </button>
      </HStackFull>
      <Box className="w-full overflow-hidden">
        <FlexFull className="overflow-x-auto py-[2vh]">
          <HStack className="w-fit py-2">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => handleSelectMonth(month)}
                className={`px-6 py-2 rounded-lg border-2 ${
                  format(month, "MMMM yyyy") ===
                  format(selectedMonth, "MMMM yyyy")
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                {format(month, "MMMM yyyy")}
              </button>
            ))}
          </HStack>
        </FlexFull>
      </Box>
      <CenterFull>{when && <Text>{when}</Text>}</CenterFull>
    </VStackFull>
  );
}
