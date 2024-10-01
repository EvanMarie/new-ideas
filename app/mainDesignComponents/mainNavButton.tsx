import { NavLink, useLocation } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import { HStack, HStackFull } from "~/buildingBlockComponents/mainContainers";
import Tooltip, { TooltipPlacement } from "~/buildingBlockComponents/tooltip";

export default function MainNavButton({
  text,
  inactiveIcon,
  activeIcon,
  to,
  isExternal = false,
  label,
  labelPosition = "top",
}: {
  to: string;
  text?: string;
  isExternal?: boolean;
  inactiveIcon?: React.ComponentType<{ className?: string }>;
  activeIcon?: React.ComponentType<{ className?: string }>;
  className?: string;
  label?: string;
  labelPosition?: TooltipPlacement;
}) {
  const isActive = useLocation().pathname.includes(to);
  return (
    <NavLink
      to={to}
      target={isExternal ? "_blank" : undefined}
      className="h-full items-center w-20%"
    >
      <Tooltip label={label} placement={labelPosition} className="w-full">
        <HStackFull
          className={`hover:cursor-pointer h-4svh group items-center justify-center ${
            isActive
              ? "text-cyan-300 bg-slate-800 shadowNarrowNormal"
              : "text-fuchsia-300"
          } hover:text-cyan-300 textShadow transition-300 rounded-none`}
          gap="gap-1vh"
        >
          {inactiveIcon && activeIcon && (
            <Icon
              icon={isActive ? activeIcon : inactiveIcon}
              iconClassName={`text-2vh ${
                !isActive && "group-hover:rotate-20 group-hover:text-cyan-300"
              } transition-300`}
            />
          )}
          <span className="hidden md:inline text-2vh xl:text-lg">{text}</span>
        </HStackFull>
      </Tooltip>
    </NavLink>
  );
}
