import Box from "~/components/buildingBlocks/box";
import DropDownMenu from "~/components/buildingBlocks/dropDownMenu";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  QuizGameScreens,
  QuizQuestion,
  quizGameData,
  quizOptions,
} from "./quizGameData";
import Transition from "~/components/buildingBlocks/transition";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Wrap from "~/components/buildingBlocks/wrap";
import RenderParagraphs from "~/components/buildingBlocks/renderParagraphs";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import { motion, useScroll } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Icon from "~/components/buildingBlocks/icon";
import { BoxIcon, CheckIcon } from "styles";
import Image from "~/components/buildingBlocks/image";
import CenterFull from "~/components/buildingBlocks/centerFull";
import BouncingDots from "~/components/specialty/bouncingDots";
import { useNavigate } from "@remix-run/react";
import CoolCatQuizzesImage from "./coolCatQuizzesImage";

export function QuizGameSelectPanel({
  selectedQuiz,
  setSelectedQuiz,
  setPromptData,
}: {
  selectedQuiz: string;
  setSelectedQuiz: (value: string) => void;
  setPromptData: (value: string) => void;
}) {
  const handleSelectQuiz = (value: string) => {
    setSelectedQuiz(value);
    setPromptData(
      quizGameData.find((quiz) => quiz.quizName === value)?.aiPrompt || ""
    );
  };
  return (
    <TransitionFull className="h-full">
      <VStackFull className="relative">
        <Box className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[65vh]">
          <DropDownMenu
            options={quizOptions}
            selectedOption={selectedQuiz}
            setSelectedOption={handleSelectQuiz}
            bgSettings="bg-orange-400 hover:bg-orange-200 transition-500"
            maxHeight="h-[30vh] overflow-y-auto"
          />
        </Box>

        <Box className="absolute bottom-0 w-90%">
          <Image
            src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/coolCats.png?quality=70"
            alt="cool cats"
            ariaLabel="Cool cats personality quizzes."
            className="w-full h-auto"
          />
        </Box>
      </VStackFull>
    </TransitionFull>
  );
}

export function QuizQuestionComponent({
  questionData,
  index,
  selectedAnswer,
  setSelectedAnswer,
}: {
  questionData: QuizQuestion;
  index: number;
  selectedAnswer: number | null;
  setSelectedAnswer: (value: number | null) => void;
}) {
  function AnswerOption({ answer, index }: { answer: string; index: number }) {
    const isSelected = selectedAnswer === index;

    const handleClick = () => {
      setSelectedAnswer(isSelected ? null : index);
    };

    return (
      <Flex className="p-[0.7vh]">
        <motion.div
          key={index}
          onClick={handleClick}
          whileHover={isSelected ? {} : { scale: 1.03 }}
          whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
          className={`flex flex-row items-center hover:cursor-pointer px-[1vh] py-[0.2vh] text-[1.8vh] md:text-[2vh] border-970-md  gap-[0.3vh] ${
            isSelected
              ? "bg-purple-800 text-white textShadow metallicEdgesSm"
              : "bg-orange-300 text-black shadowBroadTight hover:bg-orange-200 "
          } transition-bg duration-400`}
        >
          {isSelected ? (
            <Icon
              icon={CheckIcon}
              iconClassName="text-[1.8vh] md:text-[2vh] "
            />
          ) : (
            <Icon icon={BoxIcon} iconClassName="text-[1.8vh] md:text-[2vh] " />
          )}
          <Text>{answer}</Text>
        </motion.div>
      </Flex>
    );
  }

  return (
    <VStackFull className="h-fit insetShadowXl bg-cyan-800/70 p-[1vh] border-970-md">
      <HStackFull className=" px-[1vh] py-[0.5vh] flex-shrink-0 text-white textShadow text-[2vh] md:text-[2.3vh]">
        <Text>
          {String(index + 1)}
          <span>.)</span>
        </Text>
        <Text>{questionData.question}</Text>
      </HStackFull>
      <Wrap className="w-full justify-evenly">
        {questionData.answerOptions.map((answer, index) => (
          <AnswerOption key={index} answer={answer} index={index} />
        ))}
      </Wrap>
    </VStackFull>
  );
}

interface QuizGameQuestionsPanelProps {
  selectedQuiz: string;
  promptData: string;
  setPromptData: (value: string) => void;
  submitChat: (chatMessage: string) => void;
}
interface QuizData {
  quizName: string;
  quizQuestions: QuizQuestion[];
}

export function QuizGameQuestionsPanel({
  selectedQuiz,
  promptData,
  setPromptData,
  submitChat,
}: QuizGameQuestionsPanelProps) {
  const quizData = quizGameData.find(
    (quiz: QuizData) => quiz.quizName === selectedQuiz
  );
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    quizData?.quizQuestions.map(() => null) || []
  );

  const allQuestionsAnswered = selectedAnswers.every(
    (answer) => answer !== null
  );

  const collectedPromptData = selectedAnswers
    .map((answerIndex, questionIndex) => {
      if (answerIndex !== null) {
        const question = quizData?.quizQuestions[questionIndex].question;
        const selectedAnswer =
          quizData?.quizQuestions[questionIndex].answerOptions[answerIndex];
        return `Question: ${question}\nSelected Answer: ${selectedAnswer}`;
      }
      return null;
    })
    .filter(Boolean)
    .join("\n\n");

  const handleGetResult = () => {
    if (allQuestionsAnswered) {
      const finalPrompt = promptData + "\n\n" + collectedPromptData;
      setPromptData(finalPrompt);
      submitChat(finalPrompt);
    }
  };

  const scrollYRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollYRef,
  });

  return (
    <TransitionFull className="h-full">
      <VStackFull className="relative">
        <FlexFull className="absolute top-0 left-0">
          <motion.div
            className="h-[0.8vh] rounded-l-none w-full bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left",
            }}
          />
        </FlexFull>
        <FlexFull
          className="h-full max-h-full overflow-y-auto p-[1.5vh] insetShadowXl bg-slate-300/50 border-970-md "
          ref={scrollYRef}
        >
          <VStackFull className="h-fit p-[1vh] ">
            {quizData?.quizQuestions.map((question, index) => (
              <QuizQuestionComponent
                key={index}
                index={index}
                questionData={question}
                selectedAnswer={selectedAnswers[index]}
                setSelectedAnswer={(value: number | null) => {
                  const newSelectedAnswers = [...selectedAnswers];
                  newSelectedAnswers[index] = value;
                  setSelectedAnswers(newSelectedAnswers);
                }}
              />
            ))}
            <motion.div
              onClick={handleGetResult}
              whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
              className={`px-[1vh] py-[0.5vh] text-[2vh] ${
                allQuestionsAnswered
                  ? "bg-cyan-700 hover:bg-cyan-300 hover:text-slate-900 cursor-pointer"
                  : "bg-gray-500/50 text-gray-900/90 cursor-not-allowed"
              } text-white transition-400 border-970-md shadowBroadNormal`}
            >
              {allQuestionsAnswered
                ? "What am I?"
                : "Please, answer each question first."}
            </motion.div>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </TransitionFull>
  );
}

export function QuizGameResultsPanel({
  isLoading,
  quizResults,
  setScreen,
}: {
  isLoading: boolean;
  quizResults: string;
  setScreen: Dispatch<SetStateAction<QuizGameScreens>>;
}) {
  const scrollYRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const { scrollYProgress } = useScroll({
    container: scrollYRef,
  });

  // Check for overflow in the container
  useEffect(() => {
    const checkOverflow = () => {
      const current = scrollYRef.current;
      // Make sure to set it to false as default if current is null
      const isOverflow = current
        ? current.scrollHeight > current.clientHeight
        : false;
      setIsOverflowing(isOverflow);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [quizResults, isLoading]);
  const navigate = useNavigate();
  return (
    <TransitionFull>
      <VStackFull className="relative">
        {isOverflowing && !isLoading && (
          <FlexFull className="absolute top-0 left-0">
            <motion.div
              className="h-[0.8vh] rounded-l-none w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
              }}
            />
          </FlexFull>
        )}
        <VStackFull
          className="h-full bg-slate-900/70 text-sky-100 subtleTextShadow p-[1vh] md:p-[2vh] xl:p-[3vh] insetShadowXl border-970-md overflow-y-auto hide-scrollbar"
          ref={scrollYRef}
        >
          {isLoading ? (
            <CenterFull className="min-h-[30vh]">
              <BouncingDots />
            </CenterFull>
          ) : (
            <VStackFull className="h-fit">
              <CoolCatQuizzesImage itemDescription={quizResults} />
              <RenderParagraphs
                textItem={quizResults}
                textClassName="text-cyan-100 text-[2.1vh] sm:text-[2.3vh] xl:text-[2.5vh] subtleTextShadow"
              />
            </VStackFull>
          )}
          {!isLoading && (
            <motion.div
              onClick={() => setScreen("select")}
              whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
              className={`text-[2vh] px-[1vh] py-[0.5vh]
           bg-cyan-700 hover:bg-cyan-300 hover:text-slate-900 cursor-pointer hover:lightTextShadow text-white transition-400 border-970-md shadowBroadNormal`}
            >
              Take Another Quiz
            </motion.div>
          )}
        </VStackFull>
      </VStackFull>
    </TransitionFull>
  );
}
