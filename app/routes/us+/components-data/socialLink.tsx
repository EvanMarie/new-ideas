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
    <NavLink to={link} target={target} className="p-0.2vh md:p-0.8vh">
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.02, rotate: -2 }}
        transition={{ duration: 0.4 }}
      >
        <HStack
          // className="text-col-500 textShadow border-550-md border-[0.2vh] hover:border-col-500 transition-400 py-0.4vh px-1.3vh hover:cursor-pointer items-center rounded-3vh hover:bg-col-930 insetShadowXl hover:shadowNarrowNormal"
          className="text-col-500 border-500-sm bg-indigo-950/70 rounded-xl metallicEdgesXs px-1vh sm:px-1.3vh pt-0.2vh pb-0.3vh items-center hover:bg-indigo-900 hover:cursor-pointer transition-300"
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
