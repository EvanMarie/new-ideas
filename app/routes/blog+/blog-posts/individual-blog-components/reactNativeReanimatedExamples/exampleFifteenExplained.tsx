import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleFifteenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Fifteen: Entering Keyframes
        </Text>
        <Text className={paragraphTextSize}>
          Example Fifteen demonstrates the use of React Native Reanimated to
          create an animation using keyframes. This component animates a text
          element using entering keyframes that control its opacity and
          translation along the y-axis. Here’s a detailed breakdown of its
          functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>State Management:</strong> The{" "}
              <code className={paragraphTextSize}>useState</code> hook is used
              to manage the restart state and the entering keyframe. The restart
              state is used to re-trigger the keyframe animation, while the
              entering keyframe defines the animation sequence.
            </li>
            <li className={paragraphTextSize}>
              <strong>Keyframes:</strong> The{" "}
              <code className={paragraphTextSize}>Keyframe</code> API from React
              Native Reanimated is used to define the entering animation
              sequence. The keyframe controls the opacity and translation of the
              text element along the y-axis.
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
const [enteringKeyframe, setEnteringKeyframe] = useState(
  new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -50 }],
    },
    100: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  })
);`}
                </code>
              </pre>
              These lines initialize the state variables{" "}
              <code className={paragraphTextSize}>restart</code> and{" "}
              <code className={paragraphTextSize}>enteringKeyframe</code>. The
              keyframe animation is defined with an initial opacity of 0 and a
              translation of -50 units along the y-axis, and it transitions to
              an opacity of 1 and a translation of 0 units.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>restartAnimation</code>{" "}
              function redefines the entering keyframe and toggles the restart
              state to re-trigger the animation.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  setEnteringKeyframe(
    new Keyframe({
      0: {
        opacity: 0,
        transform: [{ translateY: -50 }],
      },
      100: {
        opacity: 1,
        transform: [{ translateY: 0 }],
      },
    })
  );
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
    height={screenHeight * 0.1}
    title="Entering Keyframes"
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
        entering={enteringKeyframe}
        style={[elementStyleTwo, { paddingHorizontal: 10 }]}
      >
        <TextLg>Entering Keyframes</TextLg>
      </Animated.View>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing text that animates using entering
              keyframes.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
