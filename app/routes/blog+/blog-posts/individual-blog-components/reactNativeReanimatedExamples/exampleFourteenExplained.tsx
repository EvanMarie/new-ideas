import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleFourteenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Example Fourteen: Pulsating Text
        </Text>
        <Text className={paragraphTextSize}>
          Example Fourteen demonstrates the use of React Native Reanimated to
          create a pulsating text animation. This component scales a text
          element up and down continuously to create a pulsating effect using
          timing and repeat animations. Here’s a detailed breakdown of its
          functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values:</strong>{" "}
              <code className={paragraphTextSize}>useSharedValue</code> is used
              to create a shared value (
              <code className={paragraphTextSize}>scale</code>) which represents
              the scale of the animated text element. This value is essential
              for tracking and updating the element's scale during the
              animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared value.
              The style transforms the element by scaling it according to{" "}
              <code className={paragraphTextSize}>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Timing and Repeat Animations:</strong> The{" "}
              <code className={paragraphTextSize}>withTiming</code> function is
              used to animate the shared value with a timing effect, and{" "}
              <code className={paragraphTextSize}>withRepeat</code> is used to
              repeat the animation indefinitely.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook is used
              to trigger the animation when the component mounts.
            </li>
            <li className={paragraphTextSize}>
              <strong>Easing:</strong> The{" "}
              <code className={paragraphTextSize}>Easing.ease</code> function is
              used to create a smooth easing effect for the timing animation.
            </li>
          </ul>
        </Text>
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Component Structure
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values Initialization:</strong>
              <pre>
                <code>{`const scale = useSharedValue(1);`}</code>
              </pre>
              This line initializes the shared value{" "}
              <code className={paragraphTextSize}>scale</code> to 1.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>pulsatingText</code> function
              defines the scaling animation using a combination of timing and
              repeat animations with easing.
              <pre>
                <code>
                  {`const pulsatingText = () => {
  scale.value = withRepeat(
    withTiming(1.4, { duration: 1000, easing: Easing.ease }),
    -1,
    true
  );
};`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook triggers
              the animation when the component mounts.
              <pre>
                <code>
                  {`useEffect(() => {
  pulsatingText();
}, []);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current value of{" "}
              <code className={paragraphTextSize}>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>scale</code> value.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  scale.value = 1;
  pulsatingText();
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
    title="Pulsating Text"
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
        Pulsating Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that scales up and
              down continuously to create a pulsating effect.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
