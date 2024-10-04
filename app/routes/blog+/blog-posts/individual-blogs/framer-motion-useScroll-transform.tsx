import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import ScrollToMoveElement, {
  ElementScrollProgress,
  ExpandingGridItems,
  LayoutOpenElement,
  ScrollToChangeColor,
  ScrollToFadeOut,
  ScrollToRotate,
  Tabs,
  TrackElementPosition,
} from "../individual-blog-components/framerTransformLayoutComponents";
import CodeModal from "../../blog-components/codeModal";

export const FramerMotionUseScrollUseTransform: BlogPost =
  // FRAMER MOTION TRANSFORM AND LAYOUT
  {
    id: "46",
    date: "2024-05-09",
    title: "Framer Motion: useScroll, useTransform, and Layout",
    slug: "framer-motion-use-transform-and-layout",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Framer Motion", "Animation"],
    categories: ["Web Animation", "Programming", "UX / UI & Frontend Design"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogFramer.png",
    summary:
      "Framer Motion is a powerful animation library for React  for creating smooth, performant, and engaging animations with ease. Here, we will explore three key features of Framer Motion: the useTransform hook, the useScroll hook, and layout animations.",
    paragraphs: [
      <React.Fragment key="framer-motion-use-transform-and-layout">
        <p>
          🔗 <a href="https://www.framer.com/motion/">Framer Motion Docs</a>
        </p>
        <p>
          Framer Motion is a powerful animation library for React / Remix that
          enables developers to create smooth, performant, and engaging
          animations with ease. Here, we'll explore three key features of Framer
          Motion: the useTransform hook, the useScroll hook, and layout
          animations. We'll dive into their capabilities, learn how to use them
          effectively, and showcase practical examples to demonstrate their
          potential.
        </p>
        <h2>useScroll Hook:</h2>
        <p>
          The useScroll hook in Framer Motion is used to create scroll-linked
          animations, such as progress indicators and parallax effects. It
          allows you to track the scroll position of the page or a specific
          element and create animations based on the scroll progress.
        </p>
        <h3>useScroll returns four motion values</h3>
        <ul>
          <li>scrollX/Y: The absolute scroll position, in pixels.</li>
          <li>
            scrollXProgress/YProgress: The scroll position between the defined
            offsets, as a value between 0 and 1.
          </li>
        </ul>
        <p>
          By default, useScroll tracks the page scroll. However, you can also
          track the scroll position of a specific element by passing a ref to
          the container option.
        </p>
        <h2>useTransform Hook:</h2>
        <p>
          Motion values in Framer Motion are special variables that track and
          animate values over time. They are used to create dynamic and
          interactive animations by linking them to component styles or other
          properties. Motion values can represent various types of data, such as
          numbers, colors, or complex strings like CSS transforms. They provide
          a declarative way to define animations and allow you to create smooth,
          performant transitions between different states. With motion values,
          you can easily compose and manipulate animations using powerful
          utility functions like useTransform, making it effortless to create
          complex and engaging animations in your applications.
        </p>
        <p>
          The useTransform hook in Framer Motion allows you to create a new
          motion value that transforms the output of one or more other motion
          values. It provides a flexible way to map and manipulate motion values
          based on specific ranges or custom functions.
        </p>
        <h3>With useTransform, you can</h3>
        <ul>
          <li>
            Create a new motion value by transforming the output of existing
            motion values.
          </li>
          <li>
            Map a motion value from one range of values to another, enabling
            smooth transitions and interpolations.
          </li>
          <li>
            Apply easing functions to control the behavior of the
            transformation.
          </li>
          <li>
            Customize the mixing function to handle advanced scenarios, such as
            morphing SVG paths.
          </li>
        </ul>
        <h2>Example 1: ScrollToMoveElement</h2>
        <p>
          In this example, we use the useScroll and useTransform hooks to create
          an animation where an element moves along a path as the user scrolls
          the container. The element's position is transformed based on the
          scroll progress, creating an engaging and interactive experience.
        </p>
        <ScrollToMoveElement />
        <>
          <CodeModal
            isCenterFull
            title="ScrollToMoveElement"
            code={`export default function ScrollToMoveElement() {
    const scrollContainerOne = useRef<HTMLDivElement>(null);
    const scrollYProgress = useScroll({ container: scrollContainerOne });
    const left = useTransform(
      scrollYProgress.scrollYProgress,
      [0, 0.25, 0.5, 0.75, 1],
      ["4vw", "4vw", "68vw", "4vw", "4vw"]
    );
    const top = useTransform(
      scrollYProgress.scrollYProgress,
      [0, 0.25, 0.5, 0.75, 1],
      ["2vh", "30vh", "30vh", "2vh", "2vh"]
    );
    return (
      <Box className="relative">
        <ExampleContainer ref={scrollContainerOne}>
          <Flex className="w-full h-[200svh] min-h-[100svh] items-start">
            <FlexFull>
              <motion.div
                style={{ left, top }}
                className={\`w-[20vh] flex p-[2vh] \ shadowBroadLoose m-[1vh] absolute flex-shrink-0\`}
              >
                <Text>Watch Me Go!!!</Text>
              </motion.div>
            </FlexFull>
          </Flex>
        </ExampleContainer>
      </Box>
    );
    }`}
          />
        </>
        <h2>Example 2: ScrollToChangeColor</h2>
        <p>
          This example demonstrates how to change the background color of an
          element based on the scroll progress of the container using the
          useScroll and useTransform hooks. As the user scrolls, the background
          color smoothly transitions from one color to another.
        </p>
        <ScrollToChangeColor />
        <>
          <CodeModal
            isCenterFull
            title="ScrollToChangeColor"
            code={`export function ScrollToChangeColor() {
  const scrollYContainer = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const backgroundColor = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["#522cd1", "#85007a"]
  );

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className="flex py-[2vh] px-[5vh] h-70% w-70% justify-center items-center text-md md:text-lg xl:text-xl shadowBroadLoose text-nowrap textShadow"
          style={{ backgroundColor }}
        >
          Scroll container to change color.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Example 3: ScrollToFadeOut</h2>
        <p>
          Here, we showcase how to fade out an element as the user scrolls the
          container using the useScroll and useTransform hooks. The opacity of
          the element is transformed based on the scroll progress, creating a
          smooth fading effect.
        </p>
        <ScrollToFadeOut />
        <>
          <CodeModal
            isCenterFull
            title="ScrollToFadeOut"
            code={`export function ScrollToFadeOut() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  // Setup useScroll with the container
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const opacity = useTransform(scrollYProgress.scrollYProgress, [0, 1], [1, 0]);

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className={\`flex py-[2vh] px-[5vh] h-80% w-80% justify-center items-center text-md sm:text-lg md:text-xl  shadowBroadLoose text-nowrap \${elementColor}\`}
          style={{ opacity }}
        >
          Scroll container to fade out.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Example 4: ScrollToRotate</h2>
        <p>
          In this example, the useScroll and useTransform hooks are used to
          rotate an element as the user scrolls the container. The rotation
          angle is transformed based on the scroll progress, creating a visually
          engaging effect.
        </p>
        <p>
          With the useTransform hook, you can create dynamic and responsive
          animations that adapt to changes in your motion values seamlessly.
        </p>
        <ScrollToRotate />
        <>
          <CodeModal
            isCenterFull
            title="ScrollToRotate"
            code={`export function ScrollToRotate() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const rotate = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0, 360]
  );

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className={\`flex py-[2vh] px-[5vh] h-fit w-fit justify-center items-center text-md sm:text-lg md:text-xl shadowBroadLoose text-nowrap \${elementColor}\`}
          style={{ rotate }}
        >
          Scroll container to rotate.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Example 5: Element Scroll Progress</h2>
        <p>
          In this example, we create a scrollable container and track its scroll
          progress using useScroll with the container option set to the
          container ref. We then render a progress bar that is sticky to the top
          of the container and animates its scaleX based on the scroll progress
          within the container.
        </p>
        <ElementScrollProgress />
        <>
          <CodeModal
            isCenterFull
            title="ElementScrollProgress"
            code={`export function ElementScrollProgress() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  return (
    <ExampleContainer ref={scrollContainerRef} className="relative">
      <VStack className="w-full h-[200svh] min-h-[100svh] items-start">
        <Box className="w-full h-[1vh] bg-gray-200 sticky top-0">
          <motion.div
            className=" h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <FlexFull className="justify-center text-xl absolute top-[5vh] text-slate-900 textGlow">
            Scroll Me!
          </FlexFull>
        </Box>
      </VStack>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Example 6: Track Element Position</h2>
        <p>
          Here, we track the progress of an element within the container by
          passing its ref to the target option. Each item has its own progress
          indicator, showcasing how to track individual element positions.
        </p>
        <TrackElementPosition />
        <>
          <CodeModal
            isCenterFull
            title="ElementScrollProgress"
            code={`export function TrackElementPosition() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    elementRefs.current = [...Array(3)].map(() => React.createRef());
  }, []);
  function ElementProgress({
    scrollContainerRef,
    elementRef,
  }: {
    scrollContainerRef: React.RefObject<HTMLDivElement>;
    elementRef: React.RefObject<HTMLDivElement>;
  }) {
    const { scrollYProgress } = useScroll({
      container: scrollContainerRef,
      target: elementRef,
      offset: ["start end", "end start"],
    });

    return (
      <Box className="w-full mt-[2vh]">
        <motion.div
          className="h-[1vh] bg-white/50"
          style={{ scaleX: scrollYProgress }}
        />
      </Box>
    );
  }
  return (
    <ExampleContainer ref={scrollContainerRef} className="relative">
      <Flex className="w-full h-[200svh] min-h-[100svh] flex-col items-center justify-around">
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            ref={elementRefs.current[index]}
            className={\`w-[20vh] h-[20vh] \${elementColor} flex flex-col items-center justify-center text-white text-xl\`}
          >
            <div>Element {index + 1}</div>
            <ElementProgress
              scrollContainerRef={scrollContainerRef}
              elementRef={elementRefs.current[index]}
            />
          </Box>
        ))}
      </Flex>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Layout Animations</h2>
        <p>
          Framer Motion's layout animations simplify the process of animating
          CSS layouts. With layout animations, you can easily animate between
          different layouts using performant transforms.
        </p>
        <p>
          To enable layout animations, you simply need to set the layout prop on
          a motion component. Any layout changes that occur as a result of
          re-renders will be automatically animated.
        </p>
        <h2>Example 7: LayoutOpenElement</h2>
        <p>
          This example demonstrates how to create an expanding and collapsing
          element using the layout prop and the LayoutGroup component. When
          clicked, the element expands to reveal additional content, and when
          clicked again, it collapses back to its original state.
        </p>
        <LayoutOpenElement />
        <>
          <CodeModal
            isCenterFull
            title="LayoutOpenElement"
            code={`export function LayoutOpenElement() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExampleContainer className="flex-col gap-[2vh] relative items-center">
      <motion.div
        layout
        className={\`relative shadowBroadLoose cursor-pointer flex justify-center items-center \${
          isOpen
            ? " transition-400 rounded-[5vh] w-90% h-[30vh] bg-pink-600 absolute z-20"
            : "w-[10vh] rounded-full h-[10vh] bg-cyan-500"
        }\`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={\`absolute shadowBroadLoose cursor-pointer w-[5vh] h-[5vh] rounded-full flex justify-center items-center \${
            isOpen
              ? "bg-cyan-500 top-[2vh] right-[2vh] transition-400 "
              : "bg-pink-600"
          }\`}
        >
          <Icon
            icon={isOpen ? BiCollapseAlt : BiExpandAlt}
            iconClassName="transition-400 text-[2.5vh]"
          />
        </motion.div>
        {isOpen ? <Text>TADA!</Text> : <></>}
      </motion.div>
      <Box
        className={\`p-[1vh] bg-pink-600 border-970-md shadowBroadLooser \${
          isOpen ? "absolute" : "inherit transition-800 "
        } \`}
      >
        Other Content
      </Box>
    </ExampleContainer>
  );
}`}
          />
        </>
        <h2>Example 8: ExpandingGridItems</h2>
        <p>
          In this example, a grid of items is created where each item can expand
          and contract when clicked. The LayoutGroup component is used to
          coordinate the layout animations across multiple components, ensuring
          a seamless and visually appealing experience.
        </p>
        <ExpandingGridItems />
        <>
          <CodeModal
            isCenterFull
            title="ExpandingGridItems"
            code={`function ExpandingGridItem({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setExpanded(!expanded)}
      className={\`\${expanded ? "w-75% bg-pink-600" : "w-35% bg-cyan-500"}
        hover:cursor-pointer h-[15vh] flex justify-center items-center shadowBroadLoose m-[1vh] transition-all duration-500\`}
    >
      <div
        className={\`flex justify-center items-center w-full h-full \${
          expanded ? "text-xxl" : "text-md"
        } transition-500\`}
      >
        {content}
      </div>
    </motion.div>
  );
}`}
          />
        </>
        <h2>Example 9: Tabs</h2>
        <p>
          This example showcases how to create a tab component with smooth
          transitions between different tab contents using the layout prop and
          the LayoutGroup component. When a tab is selected, an underline
          animates to the selected tab, and the corresponding content is
          displayed.
        </p>
        <Tabs />
        <>
          <CodeModal
            isCenterFull
            title="Tabs"
            code={`export function Tabs() {
  const [selected, setSelected] = useState<number | null>(null);
  const tabs = [
    {
      id: 0,
      name: "Tab 1",
      message: "You clicked TAB ONE!",
    },
    {
      id: 1,
      name: "Tab 2",
      message: "You clicked TAB TWO!",
    },
    {
      id: 2,
      name: "Tab 3",
      message: "You clicked TAB THREE!",
    },
  ];

  return (
    <ExampleContainer height="h-[20vh]">
      <LayoutGroup>
        <VStackFull>
          <FlexFull className="relative h-fit">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setSelected(index)}
                className={\`p-[1vh] pt-[2vh] text-xl h-fit w-30% textShadow \${
                  selected === index ? "text-pink-400" : "text-white"
                } transition-400\`}
              >
                {tab.name}
                {selected === index && (
                  <motion.div
                    className="w-30% bg-pink-500 h-[0.3vh] absolute bottom-0 shadowBroadNormal"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </FlexFull>

          {tabs.map(
            (tab) =>
              selected === tab.id && (
                <CenterHorizontalFull
                  key={tab.id}
                  className="h-[15vh] text-lg text-cyan-600 textGlow "
                >
                  {tab.message}
                </CenterHorizontalFull>
              )
          )}
        </VStackFull>
      </LayoutGroup>
    </ExampleContainer>
  );
}`}
          />
        </>
        <p>
          Framer Motion intelligently handles the animation of layout changes,
          ensuring smooth and visually appealing transitions. It also provides
          options for scale correction to prevent distortion of child elements
          and customization of layout animations using the transition prop.
        </p>
        <p>
          Additionally, layout animations can be coordinated across multiple
          components using the LayoutGroup component. This allows for
          synchronization of layout changes and enables shared layout
          animations, where components can seamlessly animate between each other
          based on matching layoutId props.
        </p>
        <p>
          Framer Motion's useTransform and useScroll hooks and layout animations
          are powerful tools that empower developers to create dynamic,
          responsive, and visually stunning animations with ease. By employing
          useTransform, you can transform and map motion values to achieve
          smooth transitions and interpolations. Layout animations, on the other
          hand, simplify the process of animating between different layouts,
          providing a seamless and performant experience.
        </p>
        <p>
          So, if you're building interactive user interfaces, creating engaging
          transitions, or animating complex layouts, Framer Motion's
          useTransform, useScroll, and layout animations have got you covered.
          So go ahead, unleash your creativity, and elevate your animations to
          new heights with Framer Motion!
        </p>
      </React.Fragment>,
    ],
  };
