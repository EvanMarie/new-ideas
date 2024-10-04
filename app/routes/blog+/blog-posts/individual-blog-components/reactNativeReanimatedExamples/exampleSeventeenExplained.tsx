import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleSeventeenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Seventeen: Advanced Keyframes Sequence
        </Text>
        <Text className={paragraphTextSize}>
          Example Seventeen demonstrates the use of React Native Reanimated to
          create an advanced animation sequence using keyframes. This component
          animates a text element through a series of keyframes that control its
          opacity, translation, scaling, rotation, and background color. Here’s
          a detailed breakdown of its functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>State Management:</strong> The{" "}
              <code className={paragraphTextSize}>useState</code> hook is used
              to manage the restart state. The restart state is used to
              re-trigger the keyframe animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Keyframes:</strong> The{" "}
              <code className={paragraphTextSize}>Keyframe</code> API from React
              Native Reanimated is used to define the advanced animation
              sequence. The keyframe controls the opacity, translation, scaling,
              rotation, and background color of the text element.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook is used
              to reset the restart state after the animation is triggered.
            </li>
          </ul>
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Component Structure
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>State Initialization:</strong>
              <pre>
                <code>
                  {`const [restart, setRestart] = useState(false);

const keyframeAnimation = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: -100 }, { scale: 0.5 }, { rotate: "0deg" }],
    backgroundColor: col[300],
  },
  20: {
    opacity: 0.5,
    transform: [{ translateY: -50 }, { scale: 0.75 }, { rotate: "90deg" }],
    backgroundColor: col[400],
  },
  40: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "180deg" }],
    backgroundColor: col[500],
  },
  60: {
    opacity: 0.75,
    transform: [{ translateY: 50 }, { scale: 1.25 }, { rotate: "270deg" }],
    backgroundColor: col[600],
  },
  80: {
    opacity: 0.5,
    transform: [{ translateY: 100 }, { scale: 1.5 }, { rotate: "360deg" }],
    backgroundColor: col[500],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "0deg" }],
    backgroundColor: col[400],
  },
}).duration(2000);`}
                </code>
              </pre>
              These lines initialize the state variable{" "}
              <code className={paragraphTextSize}>restart</code> and define the
              keyframe animation with advanced sequential steps controlling
              opacity, translation, scaling, rotation, and background color.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>restartAnimation</code>{" "}
              function toggles the restart state to re-trigger the animation.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  setRestart((prev) => !prev);
};`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook resets
              the restart state after the animation is triggered.
              <pre>
                <code>
                  {`useEffect(() => {
  if (restart) {
    setRestart(false);
  }
}, [restart]);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <AnimationContainer
    height={screenHeight * 0.3}
    title="Advanced Sequence"
    resetAnimation={restartAnimation}
    headingLight
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        key={restart.toString()}
        entering={keyframeAnimation}
        style={[
          boxShadows.xl,
          {
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextLg>Advanced Sequence</TextLg>
        </View>
      </Animated.View>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing text that animates through an
              advanced sequence of keyframes.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
