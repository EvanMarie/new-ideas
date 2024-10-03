import { useState } from "react";
import { PortfolioItem } from "./project-data";
import { useNavigate } from "@remix-run/react";
import {
  CenterFull,
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { TooltipPlacement } from "~/buildingBlockComponents/tooltip";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { FaAsterisk, FaGithub, FaLink } from "react-icons/fa";
import Modal from "~/buildingBlockComponents/modal";
import Heading from "~/buildingBlockComponents/headingText";
import Text from "~/buildingBlockComponents/text";
import { CloseIcon } from "styles";
import { IoIosLink } from "react-icons/io";

export default function ProjectIconButtons({
  project,
  direction = "flex-row",
  gap = "gap-[0.7vh]",
  className = "h-full",
  justify = "justify-evenly",
  align = "items-center",
  tooltipPlacement = "topLeft",
  showInfo = true,
}: {
  project: PortfolioItem;
  direction?: string;
  gap?: string;
  className?: string;
  justify?: string;
  align?: string;
  buttonType?: string;
  tooltipPlacement?: string;
  showInfo?: boolean;
}) {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const comingSoon = project.link === "coming soon";
  const moreInfo = project.link === "more info";
  const navigate = useNavigate();
  return (
    <>
      <Flex className={`${direction} ${gap} ${className} ${justify} ${align}`}>
        <ProjectButton
          icon={IoIosLink}
          label="link"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          to={project.link}
          target="_blank"
        />
        <ProjectButton
          icon={FaGithub}
          label="github"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          to={project.github}
          target="_blank"
        />
      </Flex>
    </>

    // <>
    //   <Flex
    //     className={`${direction} ${gap} ${className} ${justify} ${align}`}
    //   >
    //     {showInfo && (
    //       <ProjectButton
    //         icon={IoNotificationsCircleOutline}
    //         label="info"
    //         tooltipPlacement={tooltipPlacement as TooltipPlacement}
    //         to={`/portfolio/${project.title}`}
    //       />
    //     )}
    //     {moreInfo && (
    //       <ProjectButton
    //         icon={FaAsterisk}
    //         label="more info"
    //         tooltipPlacement={tooltipPlacement as TooltipPlacement}
    //         onClick={() => setMoreInfoOpen(true)}
    //       />
    //     )}
    //     {comingSoon && (
    //       <ProjectButton
    //         icon={FaAsterisk}
    //         label="more"
    //         tooltipPlacement={tooltipPlacement as TooltipPlacement}
    //         onClick={() => setMoreInfoOpen(true)}
    //       />
    //     )}
    //     {!comingSoon && !moreInfo && (
    //       <ProjectButton
    //         icon={IoIosLink}
    //         label="link"
    //         tooltipPlacement={tooltipPlacement as TooltipPlacement}
    //         to={project.link}
    //         // target="_blank"
    //       />
    //     )}

    //     <ProjectButton
    //       icon={FaGithub}
    //       //   label="github"
    //       //   tooltipPlacement={tooltipPlacement as TooltipPlacement}
    //       to={project.github}
    //       //   target="_blank"
    //     />
    //   </Flex>

    //   <Modal
    //     isOpen={moreInfoOpen}
    //     setModalOpen={setMoreInfoOpen}
    //     onClose={() => setMoreInfoOpen(false)}
    //     modalSize="w-[95vw] h-[35vh] sm:w-[80vw] sm:h-[45vh] md:h-1/2 md:w-2/3 lg:h-1/3 xl:w-1/3 xl:h-1/2"
    //     footerClassName="bg-col-980"
    //     showBottomClose={false}
    //   >
    //     <FlexFull
    //       className={`h-full z-10 absolute top-0 left-0 shadowBroadNormal p-[0.3vh]
    // `}
    //     >
    //       <CenterFull className="bg-slate-900 bg-gradient-to-br from-violet-800/50 via-indigo-800/50 to-cyan-800/50">
    //         <VStackFull className="h-full justify-between">
    //           <FlexFull className="bg-col-990 px-[2vh] py-[0.5vh] rounded-b-none">
    //             <Heading
    //               text={
    //                 comingSoon
    //                   ? "Coming soon!"
    //                   : moreInfo
    //                   ? project.moreInfoText?.heading
    //                   : ""
    //               }
    //               layout="text-xl-normal"
    //               color="text-cyan-200"
    //               shadow="textShadow"
    //             />
    //           </FlexFull>
    //           <VStackFull className="h-full justify-center items-center text-cyan-200 text-[2.5vh] sm:text-[3vh] xl:text-[3.5vh]">
    //             {" "}
    //             <Text className="text-center">
    //               {comingSoon
    //                 ? "😄 We are working hard on this."
    //                 : moreInfo
    //                 ? project.moreInfoText?.lineOne
    //                 : ""}
    //             </Text>
    //             <Text className="text-center">
    //               {comingSoon
    //                 ? "So please, check back for developments."
    //                 : moreInfo
    //                 ? project.moreInfoText?.lineTwo
    //                 : ""}
    //             </Text>
    //           </VStackFull>
    //           <FlexFull className="h-[5vh] bg-col-990 rounded-t-none justify-center items-center">
    //             <ProjectButton
    //               icon={CloseIcon}
    //               text="Close"
    //               onClick={() => setMoreInfoOpen(false)}
    //             />
    //           </FlexFull>
    //         </VStackFull>
    //       </CenterFull>
    //     </FlexFull>
    //   </Modal>
    // </>
  );
}
