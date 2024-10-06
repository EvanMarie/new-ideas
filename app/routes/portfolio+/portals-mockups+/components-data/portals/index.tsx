// import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
// import NavContainer from "~/components/buildingBlocks/navContainer";
// import {
//   routeIndexGradient,
//   shineyGradient,
// } from "../components/styleVariables";
// import HStackFull from "~/components/buildingBlocks/hStackFull";
// import HStack from "~/components/buildingBlocks/hStack";
// import { NavLink } from "@remix-run/react";
// import AnimateInPlaceText from "../components/animateInPlaceText";
// import Text from "~/components/buildingBlocks/text";
// import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
// import { HomeIcon } from "styles";
// import VStackFull from "~/components/buildingBlocks/vStackFull";
// import Wrap from "~/components/buildingBlocks/wrap";
// import TransitionFull from "~/components/buildingBlocks/TransitionFull";
// import { aiPortalsList } from "./data/portalsData";
// import AIPoweredMenuCard from "./components/aiPortalMenuCard";

// export default function AIPoweredPortals() {
//   return (
//     <TransitionFull
//       className={`${routeIndexGradient} rounded-none backdrop-blur-sm pb-[2vh]`}
//     >
//       <LayoutContainer className="text-slate-100 relative">
//         <NavContainer h="h-[5svh] sm:h-[6vh]" bg={shineyGradient}>
//           <HStackFull className="pl-[1vh] h-full items-center justify-between">
//             {" "}
//             <HStack
//               className="w-full items-end"
//               gap="gap-[0.5vh] sm:gap-[2vh] md:gap-[2vh]"
//             >
//               <NavLink to="/home" className="h-full flex items-end ">
//                 <AnimateInPlaceText
//                   isScale
//                   text="DarkViolet.ai"
//                   textClassName="text-fuchsia-400 text-[3.2vh] leading-[1.8vh] sm:text-[5.5vh] leading-[4.7vh] textShadow "
//                   fontStyle="kufam-font"
//                 />
//               </NavLink>
//               <Text className="text-[3vh] sm:text-[5vh] sm:leading-[4vh] md:text-[5vh]">
//                 |
//               </Text>
//               <Text className="text-[2.7vh] sm:text-[4vh] leading-[4.8vh]">
//                 {" "}
//                 portals
//               </Text>
//             </HStack>
//             <HStack className="h-full items-center" gap="gap-[1.5vh]">
//               <NavIconButton
//                 icon={HomeIcon}
//                 to="/home#blog"
//                 label="home"
//                 tooltipPlacement="bottomLeft"
//               />
//             </HStack>
//           </HStackFull>
//         </NavContainer>
//         <VStackFull
//           className="h-[95svh] sm:h-[94vh] fixed top-[5vh] sm:top-[6vh] overflow-y-auto pb-[3vh]"
//           gap="gap-[0px]"
//         >
//           <VStackFull className="p-[2vh] sm:px-[3vh] md:px-[4vh] lg:px-[5vh] xl:max-w-[80vw]">
//             <Text className="text-[2vh] xl:text-[2.5vh]">
//               Welcome to our gallery of cutting-edge web portals that seamlessly
//               integrate artificial intelligence technology, such as intelligent
//               chatbots, image generation, and other innovative AI features. Each
//               portal offers a glimpse into the possibilities of interactive and
//               personalized user experiences. Start imagining how we could
//               assemble a custom AI-powered portal for your business or project!
//             </Text>
//             <Text className="text-[1.5vh] xl:text-[1.8vh]">
//               * The characters and entities portrayed within our portals are
//               fictional and have been crafted solely to demonstrate the vast
//               design possibilities and capabilities we offer and do not
//               represent actual individuals.
//             </Text>
//           </VStackFull>
//           <Wrap className="w-full gap-[2vh] py-[1vh] justify-center">
//             {aiPortalsList.map((demo, index) => (
//               <AIPoweredMenuCard
//                 key={index}
//                 title={demo.title}
//                 aiIntegration={demo.aiIntegration}
//                 description={demo.description}
//                 image={demo.image}
//                 demoLink={demo.demoLink}
//               />
//             ))}
//           </Wrap>
//         </VStackFull>
//       </LayoutContainer>
//     </TransitionFull>
//   );
// }
