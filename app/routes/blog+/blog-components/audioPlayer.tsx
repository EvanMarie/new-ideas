import { useRef, useState } from "react";
import { BsPlayFill, BsStopFill } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";
import Icon from "~/buildingBlockComponents/icon";
import IconButton from "~/buildingBlockComponents/iconButton";
import {
  Box,
  FlexFull,
  HStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";
import { FaPlay, FaStop } from "react-icons/fa";
import { useAudioPlayer } from "~/hooks/useAudioPlayer";

interface AudioPlayerProps {
  buttonOnly?: boolean;
  darkMode?: boolean;
  audioUrl?: string;
  audioName?: string;
  baseAudioUrl?: string;
  border?: string;
  shadow?: string;
  bg?: string;
  title?: string;
  showTitle?: boolean;
  containerPadding?: string;
  showIcon?: boolean;
}

export default function AudioPlayer({
  buttonOnly,
  darkMode = true,
  audioUrl,
  audioName,
  bg = darkMode
    ? "bg-slate-900 bg-gradient-to-br from-indigo-900/30 via-indigo-900/20 to-indigo-900/30"
    : "bg-col-500 bg-gradient-to-br from-indigo-300/30 via-indigo-300/20 to-indigo-300/30",
  border = darkMode ? "border-900-lg" : "border-200-md",
  shadow = darkMode ? "insetShadow6xl" : "insetGlow6xl",
  baseAudioUrl = "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/voiceGens/",
  title,
  showTitle = false,
  containerPadding = "px-[3vh] pt-[0.3vh]",
  showIcon = true,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
  } = useAudioPlayer(audioRef);

  // Use a local state to manually reset the currentTime to 0 on audio end
  const [sliderValue, setSliderValue] = useState(0);

  const url = audioUrl ? audioUrl : `${baseAudioUrl}/${audioName}`;

  // Handle resetting the audio and range slider on audio end
  const handleAudioEnd = () => {
    setSliderValue(0); // Reset slider to 0
  };

  // Sync slider with audio time
  const handleTimeUpdateWithSync = () => {
    if (audioRef.current) {
      setSliderValue(audioRef.current.currentTime); // Sync slider value with current time
    }
    handleTimeUpdate(); // Call the original time update logic
  };

  const iconStyles = `${
    darkMode
      ? "text-col-500"
      : "text-col-900 border-900-sm bg-col-260 hover:bg-col-200 transition-300 shadowNarrowTight"
  } p-[0.4vh] rounded-full text-[2.5vh] h-full flex justify-center items-center hover:metallicEdgesXs transition-300 `;

  const darkModeSlideStyle = `
  bg-purple-300
            [&::-moz-range-thumb]:border-900-sm 
          [&::-moz-range-thumb]:hover:boxGlowXs
          [&::-moz-range-thumb]:hover:bg-sky-400
          [&::-moz-range-thumb]:bg-col-500 
            [&::-webkit-slider-thumb]:border-900-sm 
          [&::-webkit-slider-thumb]:hover:boxGlowXs
         [&::-webkit-slider-thumb]:hover:bg-sky-400
         [&::-webkit-slider-thumb]:bg-col-500 
         transition-300
          `;

  const lightModeSlideStyle = `
  bg-col-800
          [&::-moz-range-thumb]:border-200-md 
          [&::-moz-range-thumb]:hover:boxGlowXs
          [&::-moz-range-thumb]:hover:bg-col-600
          [&::-moz-range-thumb]:bg-col-700 
            [&::-webkit-slider-thumb]:border-200-md 
          [&::-webkit-slider-thumb]:hover:metallicEdgesSm
          [&::-webkit-slider-thumb]:hover:bg-col-600
          [&::-webkit-slider-thumb]:bg-col-700 
          transition-300
          `;
  return (
    <>
      {buttonOnly ? (
        <>
          <audio
            ref={audioRef}
            src={url}
            onTimeUpdate={handleTimeUpdateWithSync} // Sync slider with audio time
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleAudioEnd} // Reset slider when audio ends
            className="w-full"
          />
          <IconButton
            label={isPlaying ? "stop" : "listen"}
            tooltipPlacement="topRight"
            onClick={togglePlayPause}
            type="unstyled"
            icon={isPlaying ? BsStopFill : BsPlayFill}
            iconClassName={`${darkMode ? "text-col-500" : "text-col-900"} `}
            containerClassName={`${
              darkMode
                ? " hover:metallicEdgesXs rounded-[4vh]"
                : "bg-col-260 hover:bg-col-200 border-900-sm shadowNarrowTight "
            } transition-300 h-fit rounded-[2vh] `}
          />
        </>
      ) : (
        <FlexFull
          className={`relative h-fit rounded-[6vh] ${bg} ${border} ${shadow}`}
        >
          {showIcon && (
            <Box
              className={`absolute -top-[1vh] left-[1vh] bg-col-800 border-200-sm metallicEdgesSm p-[0.4vh] rounded-full`}
            >
              <Icon
                icon={HiVolumeUp}
                iconClassName={`text-col-200 text-[2.4vh]`}
              />
            </Box>
          )}
          <VStackFull
            className={`${containerPadding} overflow-hidden`}
            gap="gap-[0px]"
          >
            <audio
              ref={audioRef}
              src={url}
              onTimeUpdate={handleTimeUpdateWithSync} // Sync slider with audio time
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleAudioEnd} // Reset slider when audio ends
              className="w-full"
            />
            {title && showTitle && (
              <FlexFull className=" justify-center items-center pb-[0.5vh]">
                <span
                  className={`text-[2vh] ${
                    darkMode
                      ? "text-col-500 textShadow"
                      : "text-col-900 font-semibold lightTextShadow"
                  }`}
                >
                  {title}
                </span>
              </FlexFull>
            )}
            <input
              type="range"
              value={sliderValue} // Bind slider value to the local state
              min={0}
              max={duration}
              onChange={(e) => {
                handleSeek(e); // Seek when the slider is moved
                setSliderValue(Number(e.target.value)); // Keep sliderValue in sync
              }}
              className={`h-[0.6vh] w-full shadowNarrowNormal
          appearance-none 
           focus:outline-black hover:cursor-pointer 
          [&::-moz-range-thumb]:size-[1.8vh] 
          [&::-moz-range-thumb]:appearance-none 
${darkMode ? darkModeSlideStyle : lightModeSlideStyle}
          [&::-webkit-slider-thumb]:shadowNarrowNormal 
          [&::-moz-range-thumb]:shadowNarrowNormal 
          [&::-moz-range-thumb]:hover:cursor-pointer
          active:[&::-moz-range-thumb]:scale-110  
          [&::-webkit-slider-thumb]:size-[1.8vh] 
          [&::-webkit-slider-thumb]:appearance-none 
          active:[&::-webkit-slider-thumb]:scale-110 
          [&::-moz-range-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:rounded-full 
          transition-300`}
            />
            <FlexFull
              className={`justify-between text-sm text-col-200 px-[1vh] pt-[0.5vh]`}
            >
              <span
                className={`text-[1.5vh] text-col-500 group-hover:text-col-pink transition-300  ${
                  darkMode
                    ? "text-col-500 textShadow"
                    : "text-col-900 font-semibold lightTextShadow"
                }
                  hoverCursor="hover:cursor-pointer`}
              >
                {formatTime(currentTime)}
              </span>
              <motion.button
                className="hover:cursor-pointer"
                onClick={togglePlayPause}
              >
                <HStack
                  className="items-center hover:cursor-pointer group"
                  gap="gap-[0.3vh]"
                >
                  <Icon
                    icon={isPlaying ? FaStop : FaPlay}
                    iconClassName={`text-[1.3vh] text-col-500  transition-300  ${
                      darkMode
                        ? "text-col-500 textShadow group-hover:text-col-pink"
                        : "text-col-900 font-semibold lightTextShadow group-hover:text-indigo-800"
                    }
                  hoverCursor="hover:cursor-pointer`}
                  />
                  <span
                    className={`text-[1.6vh] transition-300  ${
                      darkMode
                        ? "text-col-500 textShadow group-hover:text-col-pink "
                        : "text-col-900 font-semibold lightTextShadow group-hover:text-indigo-800"
                    }
                  hoverCursor="hover:cursor-pointer`}
                  >
                    {isPlaying ? "stop" : "play"}
                  </span>
                </HStack>
              </motion.button>
              <span
                className={`text-[1.5vh] text-col-500 group-hover:text-col-pink transition-300  ${
                  darkMode
                    ? "text-col-500 textShadow"
                    : "text-col-900 font-semibold lightTextShadow"
                }
                  hoverCursor="hover:cursor-pointer`}
              >
                {formatTime(duration)}
              </span>
            </FlexFull>
          </VStackFull>
        </FlexFull>
      )}
    </>
  );
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
