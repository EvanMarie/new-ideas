import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleThirteenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Thirteen: Rotating Color Text
        </Text>
        <Text className={paragraphTextSize}>
          Example Thirteen demonstrates the use of React Native Reanimated to
          create an animation that combines rotation and color transformation.
          This component rotates a text element while continuously changing its
          color using timing, repeat, and sequence animations. Here’s a detailed
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
              to create shared values (
              <code className={paragraphTextSize}>rotate</code> and{" "}
              <code className={paragraphTextSize}>color</code>) which represent
              the rotation angle and color transition state of the animated text
              element. These values are essential for tracking and updating the
              element's rotation and color during the animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared values.
              The style sets the element's rotation and color according to{" "}
              <code className={paragraphTextSize}>rotate</code> and{" "}
              <code>color</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Timing, Repeat, and Sequence Animations:</strong> The{" "}
              <code className={paragraphTextSize}>withTiming</code> function is
              used to animate the shared values with a timing effect,{" "}
              <code className={paragraphTextSize}>withRepeat</code> is used to
              repeat the animation, and{" "}
              <code className={paragraphTextSize}>withSequence</code> is used to
              create a sequence of animations that play one after the other.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook is used
              to trigger the animation when the component mounts.
            </li>
            <li className={paragraphTextSize}>
              <strong>Interpolate Color:</strong> The{" "}
              <code className={paragraphTextSize}>interpolateColor</code>{" "}
              function is used to interpolate the color values based on the
              shared value.
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
                  {`const rotate = useSharedValue(0);
const color = useSharedValue(0);`}
                </code>
              </pre>
              These lines initialize the shared values{" "}
              <code className={paragraphTextSize}>rotate</code> and{" "}
              <code className={paragraphTextSize}>color</code> to 0.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>rotatingColor</code> function
              defines the rotation and color animations using a combination of
              timing, repeat, and sequence animations.
              <pre>
                <code>
                  {`const rotatingColor = () => {
  rotate.value = withRepeat(
    withSequence(
      withTiming(360, { duration: 2000 }),
      withTiming(0, { duration: 0 })
    ),
    -1,
    false
  );
  color.value = withRepeat(withTiming(1, { duration: 5000 }), -1, true);
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
  rotatingColor();
}, []);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => {
  const textColor = interpolateColor(
    color.value,
    [0, 0.5, 1],
    [col[300], col[400], col[500]]
  );
  return {
    transform: [{ rotate: \`\${rotate.value}deg\` }],
    color: textColor,
  };
});`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform and color properties based on the current values of{" "}
              <code className={paragraphTextSize}>rotate</code> and{" "}
              <code className={paragraphTextSize}>color</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>rotate</code> and{" "}
              <code className={paragraphTextSize}>color</code> values.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  rotate.value = 0;
  color.value = 0;
  rotatingColor();
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
    height={screenHeight * 0.3}
    title="Rotating Color Text"
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
        Rotating Color
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that rotates and
              changes color in a continuous loop.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
