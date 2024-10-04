import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleTwoExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Example Two: Animation with Timing
        </Text>
        <Text className={paragraphTextSize}>
          Example Two showcases the use of React Native Reanimated for creating
          timed animations. This component allows an element to move along the
          x-axis with a smooth timing animation when a button is pressed. Here’s
          a detailed breakdown of its functionality and implementation.
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
              <code className={paragraphTextSize}>offset</code>) which
              represents the x position of the animated element. This value is
              essential for tracking and updating the element's position during
              animations.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared value.
              The style transforms the element by translating it along the
              x-axis according to{" "}
              <code className={paragraphTextSize}>offset</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Timing Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withTiming</code> function is
              used to animate the shared value with a timed effect, providing a
              smooth and controlled animation.
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
                <code>{`const offset = useSharedValue(-150);`}</code>
              </pre>
              This line initializes the shared value{" "}
              <code className={paragraphTextSize}>offset</code> to -150.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offset.value }],
  };
});`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current value of{" "}
              <code className={paragraphTextSize}>offset</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Reset Animation:</strong> Resets the element's position to
              the initial state (-150).
              <pre>
                <code>
                  {`const resetAnimation = () => {
  offset.value = -150;
};`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <AnimationContainer resetAnimation={resetAnimation} height={screenHeight * 0.25} title="Animation with Timing">
    <Animated.View
      style={[
        animatedStyles,
        animatedElementStyle,
        { width: 80, height: 80 },
      ]}
    />
    <MyButton
      text="Move with Timing"
      onPress={() => {
        offset.value = withTiming(400, { duration: 1000 });
      }}
    />
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing a rectangle that moves based on user
              interactions.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
