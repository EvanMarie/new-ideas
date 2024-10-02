import { useState, ReactNode, useRef, useEffect } from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoArrowUndo } from "react-icons/io5";
import Icon from "~/buildingBlockComponents/icon";
import {
  Box,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import ProjectButton from "~/mainDesignComponents/projectButton";

interface AccordionProps {
  title: string;
  children: ReactNode;
  titleStyles?: string;
  contentStyles?: string;
}

export default function PortfolioAccordion({
  title,
  children,
  titleStyles = "bg-slate-800 bg-gradient-to-bl from-slate-900/50 via-indigo-950/50 to-slate-900/50 hover:bg-indigo-950 transition-300 text-fuchsia-300 textShadow",
  contentStyles = "bg-slate-800 bg-gradient-to-bl from-indigo-500/40 via-fuchsia-500/40 to-indigo-500/40 text-col-100 textShadow",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, contentRef.current?.scrollHeight]);

  return (
    <VStackFull
      className="overflow-hidden shadowNarrowNormal relative"
      gap="gap-0"
      align="items-start"
    >
      <Box className="absolute bottom-0 right-0">
        <ProjectButton icon={IoArrowUndo} onClick={() => setIsOpen(false)} />
      </Box>
      <button
        className={`w-full text-left px-1.5vh py-1vh ${titleStyles} transition-300 rounded-none shadowNarrowNormal`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HStackFull className="rounded-none justify-between h-full items-center hover:cursor-pointer">
          <span className="text-lg-tight">{title}</span>

          <Icon
            icon={isOpen ? BiChevronUp : BiChevronDown}
            iconClassName="text-[3vh]"
          />
        </HStackFull>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`transition-500 rounded-none ${
          isOpen ? "overflow-visible" : "overflow-hidden"
        } w-full `}
      >
        <div
          className={`px-[2vh] py-[1vh] w-full ${contentStyles} rounded-none `}
        >
          {children}
        </div>
      </div>
    </VStackFull>
  );
}
