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
      <HStack className={`items-center`} gap="gap-1vh">
        {icon && <Icon icon={icon} iconClassName="" />}
        <span>{text}</span>
      </HStack>
    </NavLink>
  );
}
