import { Flex } from "./mainContainers";

interface DividerProps {
  bg?: string;
  h?: string;
  w?: string;
  m?: string;
  p?: string;
  className?: string;
  shadow?: string;
}

export default function Divider({
  bg = "bg-fuchsia-300",
  h = "h-0.1vh",
  w = "w-98%",
  shadow = "shadowNarrowTight",
  m = "",
  p = "",
  className = "",
}: DividerProps) {
  return (
    <Flex
      className={`${bg} ${h} ${w} ${m} ${p} ${className} ${shadow} text-transparent`}
    >
      .
    </Flex>
  );
}
