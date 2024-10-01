import { NavLink, useLocation } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";
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
      className="h-full items-center"
    >
      <Tooltip label={label} placement={labelPosition}>
        <HStack
          className={`hover:cursor-pointer h-5svh group items-center ${
            isActive ? "text-violet-300" : "text-cyan-300"
          } hover:text-violet-300 textShadow`}
          gap="gap-1vh"
        >
          {inactiveIcon && activeIcon && (
            <Icon
              icon={isActive ? activeIcon : inactiveIcon}
              iconClassName="text-xl group-hover:rotate-20 transition-300"
            />
          )}
          <span className="hidden md:inline">{text}</span>
        </HStack>
      </Tooltip>
    </NavLink>
  );
}
