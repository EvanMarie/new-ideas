// import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
// import NavContainer from "~/components/buildingBlocks/navContainer";
// import {
//   routeIndexGradient,
//   shineyGradient,
// } from "../components/styleVariables";
// import HStackFull from "~/components/buildingBlocks/hStackFull";
// import HStack from "~/components/buildingBlocks/hStack";
// import { NavLink, Outlet, useParams } from "@remix-run/react";
// import AnimateInPlaceText from "../components/animateInPlaceText";
// import Text from "~/components/buildingBlocks/text";
// import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
// import { HomeIcon } from "styles";
// import VStackFull from "~/components/buildingBlocks/vStackFull";
// import { demoList } from "./components/mockupList";
// import MockupMenuContainer from "./components/menuContainer";
// import FlexFull from "~/components/buildingBlocks/flexFull";
// import Wrap from "~/components/buildingBlocks/wrap";
// import TransitionFull from "~/components/buildingBlocks/TransitionFull";

// export default function MockupsLayout() {
//   return (
//     <TransitionFull className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none">
//       <LayoutContainer
//         className={`${routeIndexGradient} rounded-none  pb-[2vh]`}
//       >
//         <LayoutContainer className="text-slate-100 relative">
//           <NavContainer h="h-[5svh] sm:h-[6vh]" bg={shineyGradient}>
//             <HStackFull className="pl-[1vh] h-full items-center justify-between">
//               {" "}
//               <HStack
//                 className="w-full items-end"
//                 gap="gap-[0.5vh] sm:gap-[2vh] md:gap-[2vh]"
//               >
//                 <NavLink to="/home" className="h-full flex items-end ">
//                   <AnimateInPlaceText
//                     isScale
//                     text="DarkViolet.ai"
//                     textClassName="text-fuchsia-400 text-[3.2vh] leading-[1.8vh] sm:text-[5.5vh] leading-[4.7vh] textShadow "
//                     fontStyle="kufam-font"
//                   />
//                 </NavLink>
//                 <Text className="text-[3vh] sm:text-[5vh] sm:leading-[4vh] md:text-[5vh]">
//                   |
//                 </Text>
//                 <Text className="text-[2.7vh] sm:text-[4vh] leading-[4.8vh]">
//                   {" "}
//                   mockups
//                 </Text>
//               </HStack>
//               <HStack className="h-full items-center" gap="gap-[1.5vh]">
//                 <NavIconButton
//                   icon={HomeIcon}
//                   to="/home#blog"
//                   label="home"
//                   tooltipPlacement="bottomLeft"
//                 />
//               </HStack>
//             </HStackFull>
//           </NavContainer>
//           <VStackFull
//             className="h-[95svh] sm:h-[94vh] fixed top-[5vh] sm:top-[6vh] overflow-y-auto pb-[3vh]"
//             gap="gap-[0px]"
//           >
//             <FlexFull className="p-[2vh] sm:px-[3vh] md:px-[4vh] lg:px-[5vh] xl:max-w-[80vw]">
//               <Text className="text-[2vh] xl:text-[2.5vh]">
//                 Welcome to our gallery of mockups of some of the more popular
//                 AI-related, development-related, or otherwise stylish,
//                 well-crafted sites that are currently out there. These are not
//                 identical clones, but rather a new little twist on the originals
//                 built by Evan Marie with Remix and Tailwind CSS. If there is one
//                 you'd like to see that is not currently in the mockup gallery,
//                 do not hesitate to{" "}
//                 <a
//                   href="/home#contact"
//                   className="text-cyan-300 hover:text-fuchsia-300 transition-400 textShadow"
//                 >
//                   contact us
//                 </a>{" "}
//                 and let us know! Click on the mockups below to navigate to each
//                 page, and you can compare them to the originals also linked
//                 below.
//               </Text>
//             </FlexFull>
//             <Wrap className="w-full gap-[2vh] pt-[1vh] pb-[2vh] justify-center">
//               {demoList.map((demo, index) => (
//                 <MockupMenuContainer
//                   key={index}
//                   originalImage={demo.originalImage}
//                   originalTitle={demo.originalTitle}
//                   demoImage={demo.demoImage}
//                   demoTitle={demo.demoTitle}
//                   description={demo.description}
//                   demoLink={demo.demoLink}
//                   originalLink={demo.originalLink}
//                   githubLink={demo.githubLink}
//                 />
//               ))}
//             </Wrap>
//           </VStackFull>
//         </LayoutContainer>
//       </LayoutContainer>
//     </TransitionFull>
//   );
// }
