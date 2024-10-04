import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleSevenExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Seven: Color Shifting Text
        </Text>
        <Text className={paragraphTextSize}>
          Example Seven demonstrates the use of React Native Reanimated to
          create a color-shifting text animation. This component changes the
          color of a text element in a looping sequence using timing and repeat
          animations. Here’s a detailed breakdown of its functionality and
          implementation.
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
              <code className={paragraphTextSize}>color</code>) which represents
              the color transition state of the animated text element. This
              value is essential for tracking and updating the element's color
              during the animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared value.
              The style interpolates the color based on the value of{" "}
              <code>color</code>.
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
                <code>{`const color = useSharedValue(0);`}</code>
              </pre>
              This line initializes the shared value{" "}
              <code className={paragraphTextSize}>color</code> to 0.
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook triggers
              the color-shifting animation when the component mounts.
              <pre>
                <code>
                  {`useEffect(() => {
  color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true);
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
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    [
      col[200],
      col[300],
      col[400],
      col[500],
      col[600],
      col[700],
      col[800],
      col[900],
    ]
  );
  return { color: textColor };
});`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              color based on the interpolated value of{" "}
              <code className={paragraphTextSize}>color</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>color</code> value.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  cancelAnimation(color);
  color.value = 0;
  color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true);
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
    height={screenHeight * 0.2}
    title="Color Shifting Text"
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
        Color shifting
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that changes color
              in a looping sequence.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
