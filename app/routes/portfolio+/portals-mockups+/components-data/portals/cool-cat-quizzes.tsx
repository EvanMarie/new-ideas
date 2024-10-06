import {
  QuizGameScreens,
  quizGameData,
} from "./components/coolCatQuizzes/quizGameData";
import { useState } from "react";
import {
  QuizGameQuestionsPanel,
  QuizGameResultsPanel,
  QuizGameSelectPanel,
} from "./components/coolCatQuizzes/quizGamePanels";
import { motion } from "framer-motion";
import { useSearchParams } from "@remix-run/react";
import {
  CenterFull,
  Flex,
  FlexFull,
  Transition,
  TransitionFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import AnimateInPlaceText from "~/buildingBlockComponents/animateInPlaceText";
import Icon from "~/buildingBlockComponents/icon";
import { IoArrowUndoOutline } from "react-icons/io5";
import Text from "~/buildingBlockComponents/text";
import { useSingleTextGen } from "~/hooks/useSingleTextGen";
import ReturnPortalsMockups from "../returnPortalsMockups";

// Cool cat quizzes
export default function QuizGame() {
  const [screen, setScreen] = useState<QuizGameScreens>("select");
  const [selectedQuiz, setSelectedQuiz] = useState<string>("Choose a Quiz");
  const isSelectScreen = screen === "select";
  const isQuizQuestions = screen === "questions";
  const [quizResults, setQuizResults] = useState<string[]>([]);
  const setSelectedOption = (value: string) => {
    setSelectedQuiz(value);
    setScreen("questions");
    setQuizResults([]);
  };
  const selectedQuizData = quizGameData.find(
    (quiz) => quiz.quizName === selectedQuiz
  );
  const [promptData, setPromptData] = useState<string>(
    selectedQuizData?.aiPrompt || ""
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const quizData = quizGameData.find((quiz) => quiz.quizName === selectedQuiz);
  const { isLoading, submitChatMessage, response } = useSingleTextGen({
    systemPrompt: `"Utilize the provided quiz data to deliver a quirky and engaging analysis in response to the quiz, denoted by ${quizData?.quizName}. Craft a narrative that feels personal and spirited, directly addressing the quiz-taker as 'you'. Avoid referencing specific quiz questions or answers. Instead, weave the information into a seamless story, as if you're an insightful oracle familiar with their character. Present their result in a lively and playful manner right at the beginning, possibly incorporating emojis to enhance the fun. Your response should be broken into several paragraphs for clarity. Although a few result options are suggested, feel free to creatively select or invent a fitting category that best captures their essence.`,
  });
  console.log("response", response);

  const onSubmitChat = async (chatMessage: string) => {
    const message = promptData;
    submitChatMessage(chatMessage);
    setScreen("results");
  };
  const isQuizResults = screen === "results";

  return (
    <FlexFull className="bg-white rounded-none">
      <TransitionFull className="bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/coolCatQuizzesBg.png?resize=contain&quality=80')] bg-cover bg-no-repeat bg-sticky bg-center rounded-none">
        <FlexFull
          className={`h-[100svh] p-[1vh] pb-[3svh] sm:p-[2vh] justify-center md:pb-[5svh] bg-green-300/60 backdrop-blur-sm rounded-none ${
            isSelectScreen && "items-center"
          }`}
        >
          <VStackFull
            className={`bg-white/70 bg-gradient-to-b from-sky-200/70 via-emerald-400/70 to-purple-300/70 ${
              isSelectScreen && "h-[70vh]"
            } max-h-[95svh] sm:max-h-[94svh] md:h-full md:max-h-[93svh] md:w-[85vw] lg:w-[75vw] xl:w-[70vw] xxl:w-[65vw] rounded-[1.7vh] border-970-md shadowBroadLoose p-[1vh] md:p-[2vh] relative`}
          >
            {/* RETURN BUTTON  */}
            <ReturnPortalsMockups />

            {screen !== "select" && (
              <motion.div
                className="absolute top-0.5vh right-0.5vh md:top-1vh md:right-1vh p-0.3vh md:p-0.5vh bg-violet-800 rounded-3vh border-970-md shadowBroadNormal hover:cursor-pointer group"
                onClick={() => {
                  setScreen("select");
                  setSelectedQuiz("Choose a Quiz");
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
              >
                <Icon
                  icon={IoArrowUndoOutline}
                  iconClassName="text-[3vh] group-hover:-translate-y-[0.3vh] transition-400 "
                />
              </motion.div>
            )}
            {/* HEADER INFO  */}
            <CenterFull className="h-fit flex-shrink-0">
              <VStack gap="gap-1vh">
                <AnimateInPlaceText
                  text="Cool Cat Quizzes"
                  isWave
                  textClassName="text-[5vh] sm:text-[7vh] md:text-[7vh] text-purple-900 "
                  fontStyle="graffiti-font"
                  letterDelay={0.08}
                  textShadow="textShadow"
                />{" "}
                {isSelectScreen ? (
                  <Text className="text-[2.3vh] md:text-[3vh] mPlus-font text-purple-800 font-semibold">
                    What ARE you?
                  </Text>
                ) : (
                  <Transition>
                    <Flex className="text-[2.3vh] text-center md:text-[3vh] font-semibold text-purple-800 textGlowXs">
                      {quizData?.quizName}
                    </Flex>
                  </Transition>
                )}
              </VStack>
            </CenterFull>
            {/* PANELS  */}
            {isSelectScreen && (
              <QuizGameSelectPanel
                selectedQuiz={selectedQuiz}
                setSelectedQuiz={setSelectedOption}
                setPromptData={setPromptData}
              />
            )}
            {isQuizQuestions && (
              <QuizGameQuestionsPanel
                selectedQuiz={selectedQuiz}
                promptData={promptData}
                setPromptData={setPromptData}
                submitChat={onSubmitChat}
              />
            )}
            {isQuizResults && (
              <QuizGameResultsPanel
                quizResults={response || ""}
                setScreen={setScreen}
                isLoading={isLoading}
              />
            )}
          </VStackFull>
        </FlexFull>
      </TransitionFull>
    </FlexFull>
  );
}
