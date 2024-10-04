import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleThreeExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Three: Gesture Animation
        </Text>
        <Text className={paragraphTextSize}>
          Example Three demonstrates the use of React Native Reanimated in
          combination with gesture handling to create interactive animations.
          This component allows an element to be dragged around the screen,
          snapping back to its original position with a spring animation when
          released. Here’s a detailed breakdown of its functionality and
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
              to create shared values (
              <code className={paragraphTextSize}>offsetX</code>,{" "}
              <code className={paragraphTextSize}>offsetY</code>,{" "}
              <code className={paragraphTextSize}>startX</code>, and{" "}
              <code className={paragraphTextSize}>startY</code>) which represent
              the x and y positions of the animated element. These values are
              essential for tracking and updating the element's position during
              gestures.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared values.
              The style transforms the element by translating it along the x and
              y axes according to{" "}
              <code className={paragraphTextSize}>offsetX</code> and{" "}
              <code className={paragraphTextSize}>offsetY</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Gesture Handling:</strong> The{" "}
              <code className={paragraphTextSize}>Gesture</code> API from{" "}
              <code className={paragraphTextSize}>
                react-native-gesture-handler
              </code>{" "}
              is used to handle pan gestures, allowing the element to be dragged
              around the screen.
            </li>
            <li className={paragraphTextSize}>
              <strong>Spring Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withSpring</code> function is
              used to animate the shared values with a spring effect, providing
              a smooth and natural animation when the gesture ends.
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
                  {`const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);
const startX = useSharedValue(0);
const startY = useSharedValue(0);`}
                </code>
              </pre>
              These lines initialize the shared values to zero.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  };
});`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current values of{" "}
              <code className={paragraphTextSize}>offsetX</code> and{" "}
              <code className={paragraphTextSize}>offsetY</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Gesture Handling:</strong> Using the{" "}
              <code className={paragraphTextSize}>Gesture.Pan()</code> API to
              handle drag gestures.
              <pre>
                <code>
                  {`const gesture = Gesture.Pan()
  .onStart(() => {
    cancelAnimation(offsetX);
    cancelAnimation(offsetY);
    startX.value = offsetX.value;
    startY.value = offsetY.value;
  })
  .onUpdate((event) => {
    offsetX.value = startX.value + event.translationX;
    offsetY.value = startY.value + event.translationY;
  })
  .onEnd(() => {
    offsetX.value = withSpring(0);
    offsetY.value = withSpring(0);
  });`}
                </code>
              </pre>
              <ul className="list-disc pl-5">
                <li className={paragraphTextSize}>
                  <strong>onStart:</strong> Cancels any ongoing animations and
                  stores the starting position of the gesture.
                </li>
                <li className={paragraphTextSize}>
                  <strong>onUpdate:</strong> Updates the{" "}
                  <code className={paragraphTextSize}>offsetX</code> and{" "}
                  <code className={paragraphTextSize}>offsetY</code> values
                  based on the gesture's translation.
                </li>
                <li className={paragraphTextSize}>
                  <strong>onEnd:</strong> Animates the element back to its
                  original position using a spring animation.
                </li>
              </ul>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <AnimationContainer title="Spring Physics Gesture" headingLight>
    <FlexFull style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            animatedStyles,
            elementStyleTwo,
            { width: 60, height: 60, justifyContent: "center" },
          ]}
        >
          <TextXs style={{ textAlign: "center", fontWeight: 600 }}>Drag Me</TextXs>
        </Animated.View>
      </GestureDetector>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing a draggable element. The text inside
              the element indicates that it can be dragged.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
