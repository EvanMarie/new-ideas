import { useState } from "react";
import { PortfolioItem } from "./project-data";
import { useNavigate } from "@remix-run/react";
import { Flex } from "~/buildingBlockComponents/mainContainers";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { TooltipPlacement } from "~/buildingBlockComponents/tooltip";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function ProjectIconButtons({
  project,
  direction = "flex-row",
  gap = "gap-[0.7vh]",
  className = "h-full",
  justify = "justify-evenly",
  align = "items-center",
  tooltipPlacement = "topLeft",
  showInfo = true,
}: {
  project: PortfolioItem;
  direction?: string;
  gap?: string;
  className?: string;
  justify?: string;
  align?: string;
  buttonType?: string;
  tooltipPlacement?: string;
  showInfo?: boolean;
}) {
  return (
    <>
      <Flex className={`${direction} ${gap} ${className} ${justify} ${align}`}>
        {project.link !== "" && (
          <ProjectButton
            icon={IoIosLink}
            label="link"
            tooltipPlacement={tooltipPlacement as TooltipPlacement}
            to={project.link}
            target="_blank"
          />
        )}
        <ProjectButton
          icon={FaGithub}
          label="github"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          to={project.github}
          target="_blank"
        />
      </Flex>
    </>
  );
}
