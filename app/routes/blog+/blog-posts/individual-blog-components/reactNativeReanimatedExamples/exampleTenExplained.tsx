import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleTenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Ten: Sequenced Skewed Text
        </Text>
        <Text className={paragraphTextSize}>
          Example Ten demonstrates the use of React Native Reanimated to create
          a sequenced skew animation. This component skews a text element back
          and forth in a sequence using timing animations. Here’s a detailed
          breakdown of its functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values:</strong>{" "}
              <code className={paragraphTextSize}>useSharedValue</code> is used
              to create a shared value (
              <code className={paragraphTextSize}>skewX</code>) which represents
              the skew angle of the animated text element. This value is
              essential for tracking and updating the element's skew during the
              animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared value.
              The style transforms the element by skewing it along the x-axis
              according to <code className={paragraphTextSize}>skewX</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Timing Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withTiming</code> function is
              used to animate the shared value with a timing effect, providing a
              smooth and controlled animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Sequenced Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withSequence</code> function
              is used to create a sequence of animations that play one after the
              other.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook is used
              to trigger the animation when the component mounts.
            </li>
          </ul>
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Component Structure
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values Initialization:</strong>
              <pre>
                <code>{`const skewX = useSharedValue(0);`}</code>
              </pre>
              This line initializes the shared value{" "}
              <code className={paragraphTextSize}>skewX</code> to 0.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook triggers
              the animation sequence when the component mounts.
              <pre>
                <code>
                  {`useEffect(() => {
  skewX.value = withSequence(
    withTiming(20, { duration: 1000 }),
    withTiming(-20, { duration: 1000 }),
    withTiming(10, { duration: 1000 }),
    withTiming(-10, { duration: 1000 }),
    withTiming(0, { duration: 1000 })
  );
}, []);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ skewX: \`\${skewX.value}deg\` }],
}));`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current value of{" "}
              <code className={paragraphTextSize}>skewX</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>skewX</code> value.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  skewX.value = 0;
  skewX.value = withSequence(
    withTiming(30, { duration: 1000 }),
    withTiming(-30, { duration: 1000 }),
    withTiming(20, { duration: 1000 }),
    withTiming(-20, { duration: 1000 }),
    withTiming(0, { duration: 1000 })
  );
};`}
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
    title="Sequenced Skewed Text"
    resetAnimation={restartAnimation}
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Text
        style={[
          animatedStyles,
          textShadows.glow200Sm,
          { fontFamily: "Play-Bold", fontSize: 33 },
        ]}
      >
        Skewed Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that skews back and
              forth in a sequence.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
