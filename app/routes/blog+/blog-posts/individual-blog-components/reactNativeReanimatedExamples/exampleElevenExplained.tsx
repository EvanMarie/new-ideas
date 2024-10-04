import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleElevenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Eleven: Opacity & Scale Animation
        </Text>
        <Text className={paragraphTextSize}>
          Example Eleven demonstrates the use of React Native Reanimated to
          create an animation that combines opacity and scale transformations.
          This component smoothly fades in and scales up a text element using
          timing animations. Here’s a detailed breakdown of its functionality
          and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-col-500`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values:</strong>{" "}
              <code className={paragraphTextSize}>useSharedValue</code> is used
              to create shared values (
              <code className={paragraphTextSize}>opacity</code> and{" "}
              <code className={paragraphTextSize}>scale</code>) which represent
              the opacity and scale of the animated text element. These values
              are essential for tracking and updating the element's opacity and
              scale during the animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared values.
              The style sets the element's opacity and transforms it by scaling
              according to <code className={paragraphTextSize}>opacity</code>{" "}
              and <code>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Timing Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withTiming</code> function is
              used to animate the shared values with a timing effect, providing
              smooth and controlled animations.
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
                <code>
                  {`const opacity = useSharedValue(0);
const scale = useSharedValue(0.5);`}
                </code>
              </pre>
              These lines initialize the shared values{" "}
              <code className={paragraphTextSize}>opacity</code> to 0 and{" "}
              <code className={paragraphTextSize}>scale</code> to 0.5.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>opacityScale</code> function
              defines the timing animations for opacity and scale.
              <pre>
                <code>
                  {`const opacityScale = () => {
  opacity.value = withTiming(1, { duration: 2000 });
  scale.value = withTiming(1, { duration: 2000 });
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
  opacityScale();
}, []);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => ({
  opacity: opacity.value,
  transform: [{ scale: scale.value }],
}));`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              opacity and transform properties based on the current values of{" "}
              <code className={paragraphTextSize}>opacity</code> and{" "}
              <code className={paragraphTextSize}>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>opacity</code> and{" "}
              <code className={paragraphTextSize}>scale</code> values.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  opacity.value = 0;
  scale.value = 0.5;
  opacityScale();
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
    title="Opacity & Scale"
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
        Opacity & Scale
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that smoothly fades
              in and scales up.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
