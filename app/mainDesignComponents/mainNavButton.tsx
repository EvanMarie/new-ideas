import { NavLink, useLocation } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import {
  HStack,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
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
      className="h-full items-center w-20% relative"
    >
      <HStackFull
        className={`hover:cursor-pointer h-5svh md:h-4svh group items-center justify-center ${
          isActive
            ? "text-indigo-900 bg-cyan-300 shadowNarrowNormal textGlowSm hover:text-indigo-900 font-semibold"
            : "text-cyan-300"
        } hover:text-fuchsia-300 textShadow transition-300 rounded-none`}
        gap="gap-1vh"
      >
        <VStack className="h-full justify-center" gap="gap-0.2vh">
          <span className="md:hidden text-1vh">{label}</span>

          {inactiveIcon && activeIcon && (
            <Icon
              icon={isActive ? activeIcon : inactiveIcon}
              iconClassName={`text-2vh ${
                !isActive &&
                "group-hover:rotate-20 group-hover:text-fuchsia-300"
              } transition-300`}
            />
          )}
        </VStack>
        <span className="hidden md:inline text-2vh xl:text-lg">{text}</span>
      </HStackFull>
    </NavLink>
  );
}
