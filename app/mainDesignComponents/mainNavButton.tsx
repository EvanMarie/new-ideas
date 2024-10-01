import { NavLink } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";

export default function MainNavButton({
  text,
  icon,
  to,
  isExternal = false,
  className = "bg-col-100 bg-linear3op25 text-col-900 hover:bg-col-300  hover:text-col-900 text-stroke-7-900",
}: {
  to: string;
  text?: string;
  isExternal?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <NavLink to={to} target={isExternal ? "_blank" : undefined}>
      <HStack
        className={`px-[1.5vh] py-[0.5vh] transition-400 text-center ${className} items-center group hover:cursor-pointer shadowBroadNormal hover:metallicEdgesMd`}
      >
        {icon && (
          <Icon
            icon={icon}
            iconClassName="text-col-900 text-[2.5vh] group-hover:text-col-900 group-hover:transition-400 shadowBroadLoose"
          />
        )}
        <span>{text}</span>
      </HStack>
    </NavLink>
  );
}
