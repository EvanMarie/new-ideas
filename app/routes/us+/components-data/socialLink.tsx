import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";

export default function SocialLink({
  text,
  link,
  icon,
  target = "_blank",
}: {
  text: string;
  link: string;
  icon: any;
  target?: string;
}) {
  return (
    <NavLink to={link} target={target}>
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.02, rotate: -2 }}
        transition={{ duration: 0.4 }}
      >
        <HStack
          className="text-cyan-200 textShadow border-col-550 border-[0.2vh] hover:border-cyan-300 transition-400 py-[0.2vh] px-[0.2vh] sm:px-[0.7vh] md:px-[1.5vh] hover:cursor-pointer items-center rounded-[3vh] hover:bg-col-930 hover:shadowNarrowNormal"
          gap="gap-[0.3vh]"
        >
          <Icon
            icon={icon}
            iconClassName="text-[1.5vh] sm:text-[1.9vh] lg:text-[2vh]"
          />
          <span className="text-sm">{text}</span>
        </HStack>
      </motion.div>
    </NavLink>
  );
}
