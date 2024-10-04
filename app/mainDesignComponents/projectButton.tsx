import { NavLink, useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import Icon from "~/buildingBlockComponents/icon";
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
}: {
  to?: string;
  position?: string;
  onClick?: () => void;
  text?: string;
  label?: string;
  tooltipPlacement?: string;
  target?: string;
  icon: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
}) {
  const navigate = useNavigate();
  return (
    <Tooltip label={label} placement={tooltipPlacement as TooltipPlacement}>
      {/* @ts-ignore  */}
      <NavLink to={to} target={target}>
        <motion.button
          className={`bg-col-500 rounded-full p-0.4vh border-900-md shadowNarrowTight group hover:bg-slate-800 transition-300 ${position}`}
          onClick={onClick ? onClick : () => {}}
        >
          <Icon
            icon={icon}
            iconClassName="text-lg text-slate-800 group-hover:text-col-500"
          />
          {text && <span className="sr-only">{text}</span>}
        </motion.button>
      </NavLink>
    </Tooltip>
  );
}
