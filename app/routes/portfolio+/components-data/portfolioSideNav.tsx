import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Transition, VStack } from "~/buildingBlockComponents/mainContainers";
import { Projects } from "./project-data";
import { NavLink } from "@remix-run/react";
import Tooltip from "~/buildingBlockComponents/tooltip";

export default function PortfolioSideNav({
  projectSlug,
}: {
  projectSlug: string;
}) {
  function PortfolioItem({
    project,
  }: {
    project: {
      slug: string;
      thumbnail: string;
      title: string;
    };
  }) {
    return (
      <NavLink
        key={project.slug}
        className={` w-5vh h-5vh lg:w-7vh lg:h-7vh rounded-full border-900-md relative
                ${projectSlug === project.slug ? "" : "shadowNarrowNormal"}
                hover:rotate-15 transition-300 hover:scale-102 hover:cursor-pointer`}
        to={`/portfolio/${project.slug}`}
      >
        {projectSlug === project.slug && (
          <motion.div
            layoutId="active-project-background"
            className="absolute inset-0 rounded-full boxGlowSm"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <Tooltip
          label={project.title}
          className="w-full h-full"
          placement="left"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full rounded-full relative z-10"
          />
        </Tooltip>
      </NavLink>
    );
  }

  return (
    <Transition
      className="hidden md:flex fixed right-1vh top-1vh h-90svh flex-shrink-0 p-0.5vh z-40 overflow-visible w-7vh lg:w-10vh"
      delay={0.3}
      type="zoom"
    >
      <VStack className="w-full justify-around relative z-45">
        <AnimatePresence>
          {Projects.map((project) => (
            <PortfolioItem project={project} />
          ))}
        </AnimatePresence>
      </VStack>
    </Transition>
  );
}
