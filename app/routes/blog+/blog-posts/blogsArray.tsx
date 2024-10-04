// template

import { OnTheComingRevolution } from "./individual-blogs/on-the-coming-revolution";
import { SimplifyWithRedis } from "./individual-blogs/simplify-with-redis";
import { SimplifyWithRedis2 } from "./individual-blogs/simplify-with-redis-2";
import { ParallaxShiftingImages } from "./individual-blogs/parallax-shifting-image";
import { CSSAnimationExperiments } from "./individual-blogs/css-animation-experiments";
import { ECommerceDoneRight } from "./individual-blogs/e-commerce-done-right";
import { NewDimensionsInAiRolePlay } from "./individual-blogs/new-dimension-in-ai-role-playing";
import { QuantumCoherenceandObserserverAgreement } from "./individual-blogs/quantum-coherence-and-observer-agreement";
import { SixReasonsRemixIsAGameChanger } from "./individual-blogs/six-reasons-remix-is-a-game-changer";
import { PixelPlayground } from "./individual-blogs/pixel-playground";
import { WomenInAi } from "./individual-blogs/women-in-ai";
import { integratingRustWasmRemix } from "./individual-blogs/integrating-rust-wasm";
import { aiForDevelopers } from "./individual-blogs/ai-for-developers";
import { framerMotionUseAnimation } from "./individual-blogs/useAnimation-hook";
import { PowerpointToCode } from "./individual-blogs/powerpoint-to-code";
import { JSONEditing } from "./individual-blogs/json-editing";
import { ComponentDrivenDesign } from "./individual-blogs/component-driven-design";
import { ReactVsSvelte } from "./individual-blogs/react-vs-svelte";
import { OperaToCode } from "./individual-blogs/opera-to-code";
import { EnigmaOfAIConsciousness } from "./individual-blogs/enigma-of-ai-consciousness";
import { RemixDeepDive } from "./individual-blogs/remix-deep-dive";
import { FormattingComplexChatBotResponses } from "./individual-blogs/formatting-complex-chatbot-responses";
import { ReactPDFRendering } from "./individual-blogs/dynamic-pdf-rendering";
import { AIPoweredLearning } from "./individual-blogs/ai-personalized-learning";
import { EducationWithInnovation } from "./individual-blogs/education-with-innovation";
import { ReactNativeReanimated } from "./individual-blogs/react-native-reanimated";
import { StructureOfThoughtDimension } from "./individual-blogs/structure-of-thought-dimension";
import { DifferenceBetweenUIAndUX } from "./individual-blogs/difference-between-ui-and-ux";
import { NextGenMobileAppDev } from "./individual-blogs/next-gen-mobile-app-dev";
import { QuantumInspiredFrameworkThought } from "./individual-blogs/quantum-inspired-framework-thought";
import { ExploringRecharts } from "./individual-blogs/exploring-recharts";
import { FramerMotionUseScrollUseTransform } from "./individual-blogs/framer-motion-useScroll-transform";
import { JourneysOfDarkVioletAndMoonChapterOne } from "./individual-blogs/journeys-of-dark-violet-and-moonCh1";
import { AirBnbMockup } from "./individual-blogs/airbnb-mockup";
import { DarkVioletDivinationsBlog } from "./individual-blogs/dark-violet-divinations";
import { ImpactOfInertia } from "./individual-blogs/impact-of-inertia";
import { RationaleForDivination } from "./individual-blogs/rationale-for-divination";
import { BuildChatAppWithRemixHooks } from "./individual-blogs/build-chat-app-with-remix-hooks";
import { ExploringTheDimensionOfThought } from "./individual-blogs/exploring-the-dimension-of-thought";
import { CoolCatQuizzes } from "./individual-blogs/cool-cat-quizzes";
import { DataVisualizationReachChartsJs } from "./individual-blogs/data-visualization-react-chartjs2";
import { ArtificialIntelligencePhysicsLanguage } from "./individual-blogs/artificial-intelligence-physics-language";
import { TeslaWebsiteMockup } from "./individual-blogs/tesla-website-mockup";
import { DynamicWebPortal } from "./individual-blogs/dynamic-web-portal-with-chatbot";
import { WebsiteMockupsAndClones } from "./individual-blogs/website-mockups-and-clones-with-remix";
import { BuildingSimpleChatbotWithRemix } from "./individual-blogs/building-simple-chatbot-with-remix";
import { AnimationsWithUseSpring } from "./individual-blogs/animations-with-useSpring";
import { AdvancedChatbotWithRag } from "./individual-blogs/building-complex-chat-with-rag";
import { ReactElement } from "react";

// Please refactor the following paragraphs array to match the format of the example HTML elements that follow. If there is a component that does not fit into one of the examples within the Example Paragraphs, then you can keep it as is. Most aspects can be translated into an element from Example Paragraphs, keep in mind. Do not retain any of the className information for translated items, as the classes are all taken care of in my tailwind config. Please wrap sections, often the entire blog, of HTML elements inside of a React fragment. If an image or other element that is being replaced with one of the HTML elements is wrapped in some other wrapper element in the original code being translated, do not include that wrapper element in the new version, as the tailwind config takes care of these styles as well. Please convert the ENTIRE article to the new format, not just the first few paragraphs. Do not tell me to continue with the remaining content. Actually give me the ENTIRE content. All portions that are translated to new HTML elements should be included, and all elements that must remain as they are must be included. Leave NOTHING out. EVER SINGLE WORD. Thank you!
ExampleParagraphs: [
  <>
    <p>
      The overall content should be an array that contains a react fragment with
      all the HTML content inside it.
    </p>
    {/* ********************* TEXT ELEMENTS ********************* */}
    <p>
      Any content that is within a Text element or in the paragraph array as a
      string should be put into a p tag
    </p>
    {/* ********************* LONE LINKS ********************* */}
    <p>
      <a href="#">
        🔗 any link that is on its own should be in a p and a tag with a link
        emoji
      </a>
    </p>
    {/* ********************* MAIN HEADINGS ********************* */}
    <h2>Any main heading should be in an h2 tag</h2>
    {/* ********************* SUB HEADINGS ********************* */}
    <h3>Any sub heading should be in an h3 tag</h3>
    {/* ********************* TERM VALUE PAIRS or List-Like Data ********************* */}
    <p>
      Any items thta are in TermValuePair components or that are clearly lists
      of information should be rendered as follows:
    </p>
    <h3>
      If there is a heading, use an h3 tag, of not just render the list as
      follows:
    </h3>
    <ul>
      <li>
        If there is no hightlighted or otherwise isolated text, just use an li
        element like this
      </li>
      <li>
        <strong>Term or Main Text:</strong> Value or Description
      </li>
      <li>
        <strong>Term or Main Text:</strong> Value or Description
      </li>
    </ul>
    {/* ********************* CODE ********************* */}
    <p>Code should be put into pre and code elements as follows: </p>
    <pre>
      <code>
        {`export async function getUserByName(name: string): Promise<User | null> {
  const userId = await db.get(userIdKey(name)); 
  if (!userId) return null;
  return getUser(userId);
}`}
      </code>
    </pre>
    {/* ********************* HL within text ********************* */}
    <p>
      If there is a need for a highlight, or HL element, within a paragraph, use
      the strong tag, but when it is an HL in a list, use the described method
      of listing above.
    </p>
    {/* ********************* IMAGE ********************* */}
    <p>Images should be put into img elements as follows: </p>
    <img src="" alt="Screen Recording 2024-03-11" />
    {/* ********************* VIDEO ********************* */}
    <p>Videos should be put into iframe elements as follows: </p>
    <iframe
      src="https://www.youtube.com/embed/TBlwUf8e7Tg"
      title="Title deduced from surrounding content"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    {/* ********************* REFERENCES ********************* */}
    <p>References should be refactored in HTML elements as follows: </p>
    <h3>Further Reading</h3>
    <ul>
      <li>
        <a href="#" target="_blank">
          Each link text should be done like this.
        </a>
      </li>
    </ul>
    {/* ********************* DIVIDERS ********************* */}
    <p>Use an hr element when there are Divider elements to be translated. </p>
    <hr />
  </>,
];

export const blogArray: BlogPost[] = [
  SimplifyWithRedis, // 0
  SimplifyWithRedis2, // 1
  OnTheComingRevolution, // 2
  ParallaxShiftingImages, // 3
  CSSAnimationExperiments, // 4
  ECommerceDoneRight, // 5
  NewDimensionsInAiRolePlay, // 6
  QuantumCoherenceandObserserverAgreement, // 7
  SixReasonsRemixIsAGameChanger, // 8
  AnimationsWithUseSpring, // 9
  BuildingSimpleChatbotWithRemix, // 10
  WebsiteMockupsAndClones, // 11
  DynamicWebPortal, // 12
  PixelPlayground, // 13
  AdvancedChatbotWithRag, // 14
  TeslaWebsiteMockup, // 15
  ArtificialIntelligencePhysicsLanguage, // 16
  DataVisualizationReachChartsJs, // 17
  CoolCatQuizzes, // 18
  ExploringTheDimensionOfThought, // 19
  BuildChatAppWithRemixHooks, // 20
  RationaleForDivination, // 21
  ImpactOfInertia, // 22
  DarkVioletDivinationsBlog, // 23
  AirBnbMockup, // 24
  JourneysOfDarkVioletAndMoonChapterOne, // 25
  FramerMotionUseScrollUseTransform, // 26
  ExploringRecharts, // 27
  QuantumInspiredFrameworkThought, // 28
  NextGenMobileAppDev, // 29
  DifferenceBetweenUIAndUX, // 30
  StructureOfThoughtDimension, // 31
  ReactNativeReanimated, // 32
  EducationWithInnovation, // 33
  AIPoweredLearning, // 34
  ReactPDFRendering, // 35
  FormattingComplexChatBotResponses, // 36
  RemixDeepDive, // 37
  EnigmaOfAIConsciousness, // 38
  OperaToCode, // 39
  ReactVsSvelte, // 40
  ComponentDrivenDesign, // 41
  JSONEditing, // 42
  PowerpointToCode, // 43
  framerMotionUseAnimation, // 44
  aiForDevelopers, // 45
  integratingRustWasmRemix, // 46
  WomenInAi, // 47
];

export type ParagraphContent = ReactElement;

export type Categories =
  | "Programming"
  | "Creativity"
  | "Science & Philosophy"
  | "Artificial Intelligence"
  | "UX / UI & Frontend Design"
  | "Web Animation"
  | "Mobile Apps"
  | "Apps"
  | "Data"
  | "Data Visualization";

export type BlogPost = {
  id: string;
  isPresentation?: boolean;
  date: Date | string;
  title: string;
  slug: string;
  presentationSlug?: string;
  author: string;
  avatar: string;
  tags: string[];
  image: string;
  summary: string;
  paragraphs?: ReactElement[];
  categories: Categories[];
};
