import { NavLink, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";
import Tooltip, { TooltipPlacement } from "~/buildingBlockComponents/tooltip";

export default function ProjectButton({
  to,
  icon,
  onClick,
  position,
  text,
  label,
  tooltipPlacement,
  target,
  type,
  isDisabled,
}: {
  to?: string;
  position?: string;
  onClick?: () => void;
  text?: string;
  label?: string;
  tooltipPlacement?: string;
  target?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  icon: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
}) {
  return (
    <Tooltip label={label} placement={tooltipPlacement as TooltipPlacement}>
      {/* @ts-ignore  */}
      <NavLink to={to} target={target}>
        <motion.button
          disabled={isDisabled}
          className={`bg-col-500 ${
            text ? "rounded-2vh" : "rounded-full"
          } p-0.4vh border-900-md shadowNarrowTight group hover:bg-slate-800 transition-300 ${position}`}
          onClick={onClick ? onClick : () => {}}
          type={type}
        >
          {text ? (
            <HStack className="gap-0.5vh px-0.5vh group hover:cursor-pointer">
              <Icon
                icon={icon}
                iconClassName="text-lg text-slate-800 group-hover:text-col-500"
              />
              <span className="text-sm text-col-900 group-hover:text-col-500 hover:cursor-pointer">
                {text}
              </span>
            </HStack>
          ) : (
            <Icon
              icon={icon}
              iconClassName="text-lg text-slate-800 group-hover:text-col-500"
            />
          )}
        </motion.button>
      </NavLink>
    </Tooltip>
  );
}
