import { useState, useEffect } from "react";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";

export default function Clock({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <HStack className={`w-fit flex-shink-0 ${className}`}>
      <Text className="whitespace-nowrap">{formatDate(currentTime)}</Text>
      <Text className="whitespace-nowrap">{formatTime(currentTime)}</Text>
    </HStack>
  );
}
