import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import ReturnToPortalsButton from "./components/returnToPortalsButton";
import CenterFull from "~/components/buildingBlocks/centerFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import { useState } from "react";
import Icon from "~/components/buildingBlocks/icon";
import { HomeIcon } from "styles";
import { TbBriefcase, TbMailFast } from "react-icons/tb";
import { PiCalendarDuotone, PiImagesSquareBold } from "react-icons/pi";
import { motion } from "framer-motion";
import Clock from "./components/clock";
import Text from "~/components/buildingBlocks/text";
import HStack from "~/components/buildingBlocks/hStack";
import Flex from "~/components/buildingBlocks/flex";
import DeveloperHome from "./components/developer/developerHome";
import DeveloperResume from "./components/developer/developerWork";
import DeveloperImages from "./components/developer/developerImages";
import DeveloperSchedule from "./components/developer/developerSchedule";
import DeveloperContact from "./components/developer/developerContact";
import { ClientOnly } from "remix-utils/client-only";
import { HeadersFunction } from "@remix-run/node";

// In your route file, e.g., app/routes/myRoute.tsx

export let headers: HeadersFunction = () => {
  return {
    "Access-Control-Allow-Origin": "*",
  };
};

export default function DeveloperPortal() {
  const [location, setLocation] = useState("home");
  const [colorScheme, setColorScheme] = useState("slate");

  const clockStyles = `w-full textShadow text-md sm:text-[1.8vh] md:text-[2vh] h-full rounded-t-[2vh] rounded-br-[0px] rounded-l-[0px] items-center px-[2vh] justify-center sm:w-fit sm:rounded-l-none sm:text-[1.7vh] md:text-[2vh] lg:text-[2.5vh]`;

  const colorOptions = [
    {
      scheme: "slate",
      colorChoiceButton: "bg-slate-400",
      colorChoiceHover: "hover:bg-slate-600",
      background:
        "bg-gradient-to-b from-cyan-300/80 via-indigo-300/80 to-cyan-400/80 ",
      case: "bg-gradient-to-bl from-slate-500 via-slate-300 to-slate-500",
      highlightColor: "text-slate-700 subtleTextShadow",
      heading: "bg-white bg-gradient-to-t from-slate-800/80 to-slate-900/80",
      buttonBg: "bg-cyan-300",
      buttonHover: "hover:bg-cyan-600",
      selectedButton: "bg-cyan-600",
      locationColor: "text-cyan-300 textShadow",
      accentBorder: "border-[0.3vh] border-cyan-300",
      darkBg: "bg-cyan-600",
      imageGradient:
        "bg-gradient-to-b from-cyan-300/80 via-indigo-300/80 to-cyan-400/80",
      scheduleBackground:
        "bg-white bg-gradient-to-b from-cyan-300/80 via-indigo-300/80 to-cyan-300/80 ",
    },
    {
      scheme: "cyan",
      colorChoiceButton: "bg-cyan-400",
      colorChoiceHover: "hover:bg-cyan-600",
      background:
        "bg-gradient-to-b from-indigo-300/80 via-cyan-300/80 to-indigo-400/80 ",
      case: "bg-gradient-to-bl from-cyan-400 via-cyan-200 to-cyan-400",
      highlightColor: "text-cyan-800 subtleTextShadow",
      heading: "bg-white bg-gradient-to-t from-cyan-500/90 to-cyan-600/90",
      buttonBg: "bg-indigo-300",
      buttonHover: "hover:bg-indigo-600",
      imageGradient:
        "bg-gradient-to-b from-indigo-300/80 via-indigo-300/80 to-indigo-400/80",
      selectedButton: "bg-indigo-600",
      locationColor: "text-cyan-900 lightTextShadow",
      accentBorder: "border-[0.3vh] border-cyan-300",
      darkBg: "bg-indigo-600",
      scheduleBackground:
        "bg-white bg-gradient-to-b from-indigo-200/90 via-indigo-400/60 to-indigo-200/90 ",
    },
    {
      scheme: "violet",
      colorChoiceButton: "bg-violet-400",
      colorChoiceHover: "hover:bg-violet-600",
      background:
        "bg-gradient-to-b from-fuchsia-300/80 via-violet-300/80 to-fuchsia-400/80 ",
      case: "bg-gradient-to-bl from-violet-500 via-violet-300 to-violet-500",
      highlightColor: "text-violet-700 subtleTextShadow",
      imageGradient:
        "bg-gradient-to-b from-fuchsia-300/80 via-indigo-300/80 to-fuchsia-400/80",
      heading: "bg-white bg-gradient-to-t from-violet-800/80 to-violet-900/80",
      buttonBg: "bg-fuchsia-300",
      buttonHover: "hover:bg-fuchsia-600",
      selectedButton: "bg-fuchsia-600",
      darkBg: "bg-fuchsia-900",
      locationColor: "text-fuchsia-200 textShadow",
      accentBorder: "border-[0.3vh] border-fuchsia-300",
      scheduleBackground:
        "bg-white bg-gradient-to-b from-fuchsia-300/80 via-violet-400/60 to-fuchsia-300/80 ",
    },
    {
      scheme: "red",
      colorChoiceButton: "bg-red-400",
      colorChoiceHover: "hover:bg-red-600",
      background:
        "bg-gradient-to-t from-amber-300/80 via-red-300/80 to-amber-400/80 ",
      case: "bg-gradient-to-bl from-red-500 via-red-300 to-red-500",
      highlightColor: "text-red-700 subtleTextShadow",
      heading: "bg-white bg-gradient-to-t from-red-800/80 to-red-900/80",
      buttonBg: "bg-yellow-300",
      imageGradient:
        "bg-gradient-to-b from-red-300/80 via-yellow-300/80 to-red-400/80",
      buttonHover: "hover:bg-yellow-600",
      darkBg: "bg-red-800",
      selectedButton: "bg-yellow-600",
      locationColor: "text-yellow-300 textShadow",
      accentBorder: "border-[0.3vh] border-yellow-300",
      scheduleBackground:
        "bg-white bg-gradient-to-b from-yellow-200/80 via-red-300/80 to-yellow-200/80 ",
    },
    {
      scheme: "amber",
      colorChoiceButton: "bg-amber-400",
      colorChoiceHover: "hover:bg-amber-600",
      background:
        "bg-gradient-to-t from-red-300/80 via-stone-400/80 to-red-300/80 ",
      case: "bg-gradient-to-bl from-amber-600 via-amber-300 to-amber-600",
      highlightColor: "text-amber-700 subtleTextShadow",
      imageGradient:
        "bg-gradient-to-b from-red-300/80 via-amber-300/80 to-red-400/80",
      heading: "bg-white bg-gradient-to-t from-amber-800/80 to-amber-900/80",
      buttonBg: "bg-red-300",
      darkBg: "bg-red-700",
      buttonHover: "hover:bg-red-600",
      selectedButton: "bg-red-600",
      locationColor: "text-red-300 textShadow",
      accentBorder: "border-[0.3vh] border-red-300",
      scheduleBackground:
        "bg-white bg-gradient-to-b from-red-200/80 via-amber-200/80 to-red-200/80 ",
    },
  ];

  const currentScheme = colorOptions.find(
    (option) => option.scheme === colorScheme
  );

  function ColorOptionsChoices() {
    const currentScheme = colorOptions.find(
      (option) => option.scheme === colorScheme
    );

    return (
      <Flex className="h-full sm:items-center gap-[1vh] sm:gap-[0px] px-[1vh] pb-[0.3vh] flex-shrink-0 sm:w-40% justify-start">
        <HStack>
          {colorOptions.map((option, index) => (
            <motion.div
              className={`h-[2.1vh] w-[2.1vh] sm:h-[2.5vh] sm:w-[2.5vh] rounded-full border-970-md shadowBroadLoose flex justify-center items-center ${
                option.colorChoiceButton
              } ${option.colorChoiceHover} ${
                currentScheme?.scheme === option.scheme ? "boxGlowSm" : ""
              }`}
              onClick={() => setColorScheme(option.scheme)}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              key={index}
            ></motion.div>
          ))}
        </HStack>
      </Flex>
    );
  }

  function RoundButton({ icon, label }: { icon: any; label: string }) {
    return (
      <motion.div
        className={` h-[5.3vh] w-[5.3vh] rounded-full border-970-md flex justify-center items-center ${
          currentScheme?.buttonHover
        } group transition-200 ${
          location === label
            ? `boxGlowSm ${currentScheme?.selectedButton}`
            : `shadowBroadLoose ${currentScheme?.buttonBg}`
        }`}
        onClick={() => setLocation(label)}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <Icon
          icon={icon}
          iconClassName={`${
            location === label ? "text-slate-100 " : "text-slate-900"
          } text-[3.5vh] group-hover:text-slate-100 transition-200`}
        />
      </motion.div>
    );
  }

  return (
    <>
      <FlexFull
        className={`h-[100svh] bg-white bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/developer-bg.png?width=700&resize=contain&quality=60')] bg-cover bg-center bg-sticky rounded-none`}
      >
        <FlexFull className={`h-full  ${currentScheme?.background}`}>
          <TransitionFull className="rounded-none">
            <CenterFull className="flex w-screen h-[100svh] overflow-y-auto rounded-none p-[1vh] pb-[3.5vh] sm:p-[2vh] sm:pb-[4.5vh] md:p-[3vh] md:pb-[5.5vh] lg:px-[4vh] xl:px-[6vh] xxl:px-[9vh]">
              <ReturnToPortalsButton />
              <VStackFull
                className={`h-full ${currentScheme?.case} shadowBroadLoose rounded-[2.5vh] items-between relative border-970-md overflow-hidden`}
              >
                {/* ****************** HEADER ****************** */}

                <HStackFull
                  className={`${currentScheme?.heading} rounded-t-[2.3vh] h-[7vh] sm:h-[6vh] rounded-b-none items-center justify-between text-slate-100 absolute top-0 right-0 left-0`}
                >
                  <VStackFull
                    gap="gap-[0px]"
                    className="h-full justify-between"
                  >
                    <ClientOnly fallback={<div>Loading...</div>}>
                      {() => <Clock className={`${clockStyles} sm:hidden`} />}
                    </ClientOnly>

                    <HStackFull className="h-full items-center justify-between">
                      <ColorOptionsChoices />
                      <Flex className="w-full sm:w-15% justify-end sm:justify-center">
                        <Text
                          className={`${currentScheme?.locationColor} text-[2.3vh] sm:text-[2.5vh] md:text-[3vh] font-[600] leading-tight px-[1vh] pr-[1.5vh] h-full`}
                        >
                          {location.toUpperCase()}
                        </Text>
                      </Flex>
                      <Flex className="sm:w-43% justify-end">
                        <Clock className={`${clockStyles} hidden sm:flex `} />
                      </Flex>
                    </HStackFull>
                  </VStackFull>
                </HStackFull>

                {/* ****************** CONTENT ****************** */}
                {location === "home" && (
                  <DeveloperHome
                    highlightColor={currentScheme?.highlightColor || ""}
                    border={currentScheme?.accentBorder || ""}
                  />
                )}
                {location === "work" && (
                  <DeveloperResume
                    highlightColor={currentScheme?.highlightColor || ""}
                    border={currentScheme?.accentBorder || ""}
                  />
                )}
                {location === "schedule" && (
                  <DeveloperSchedule
                    highlightColor={currentScheme?.highlightColor || ""}
                    border={currentScheme?.accentBorder || ""}
                    bg={currentScheme?.scheduleBackground || ""}
                  />
                )}
                {location === "images" && (
                  <DeveloperImages
                    highlightColor={currentScheme?.highlightColor || ""}
                    border={currentScheme?.accentBorder || ""}
                    imageGradient={currentScheme?.imageGradient || ""}
                    buttonBg={currentScheme?.buttonBg || ""}
                    buttonHover={currentScheme?.buttonHover || ""}
                    overlayBackground={currentScheme?.scheduleBackground || ""}
                  />
                )}

                {location === "contact" && (
                  <DeveloperContact
                    highlightColor={currentScheme?.highlightColor || ""}
                    border={currentScheme?.accentBorder || ""}
                    bg={currentScheme?.buttonBg || ""}
                    darkBg={currentScheme?.darkBg || ""}
                  />
                )}

                {/* ****************** FOOTER ****************** */}
                <HStackFull
                  className={`${currentScheme?.heading} rounded-b-[2.3vh] h-[7vh] rounded-t-none items-center px-[1vh] justify-evenly text-slate-100 absolute bottom-0 right-0 left-0`}
                >
                  <RoundButton icon={HomeIcon} label="home" />
                  <RoundButton icon={TbBriefcase} label="work" />
                  <RoundButton icon={PiCalendarDuotone} label="schedule" />
                  <RoundButton icon={PiImagesSquareBold} label="images" />
                  <RoundButton icon={TbMailFast} label="contact" />
                </HStackFull>
              </VStackFull>
            </CenterFull>
          </TransitionFull>
        </FlexFull>
      </FlexFull>
    </>
  );
}
