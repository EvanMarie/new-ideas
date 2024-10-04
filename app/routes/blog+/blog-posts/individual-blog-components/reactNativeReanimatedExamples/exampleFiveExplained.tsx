import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleFiveExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Example Five: Gesture Based Animation Sequence
        </Text>
        <Text className={paragraphTextSize}>
          Example Five demonstrates the use of React Native Reanimated in
          combination with gesture handling to create interactive animations.
          This component allows an element to be dragged and scaled using pan
          and pinch gestures, respectively. Here’s a detailed breakdown of its
          functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Shared Values:</strong> <code>useSharedValue</code> is
              used to create shared values (<code>offsetX</code>,{" "}
              <code className={paragraphTextSize}>offsetY</code>,{" "}
              <code className={paragraphTextSize}>scale</code>,{" "}
              <code className={paragraphTextSize}>startX</code>,{" "}
              <code>startY</code>, and{" "}
              <code className={paragraphTextSize}>startScale</code>) which
              represent the x, y positions, and scale of the animated element.
              These values are essential for tracking and updating the element's
              position and scale during gestures.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared values.
              The style transforms the element by translating it along the x and
              y axes and scaling it according to{" "}
              <code className={paragraphTextSize}>offsetX</code>,{" "}
              <code className={paragraphTextSize}>offsetY</code>, and{" "}
              <code>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Gesture Handling:</strong> The{" "}
              <code className={paragraphTextSize}>Gesture</code> API from{" "}
              <code className={paragraphTextSize}>
                react-native-gesture-handler
              </code>{" "}
              is used to handle pan and pinch gestures, allowing the element to
              be dragged and scaled.
            </li>
            <li className={paragraphTextSize}>
              <strong>Spring Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withSpring</code> function is
              used to animate the shared values with a spring effect, providing
              a smooth and natural animation when the gestures end.
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
                <code>
                  {`const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);
const scale = useSharedValue(1);
const startX = useSharedValue(0);
const startY = useSharedValue(0);
const startScale = useSharedValue(1);`}
                </code>
              </pre>
              These lines initialize the shared values to their default states.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  };
});`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current values of{" "}
              <code className={paragraphTextSize}>offsetX</code>,{" "}
              <code className={paragraphTextSize}>offsetY</code>, and{" "}
              <code className={paragraphTextSize}>scale</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Gesture Handling:</strong> Using the{" "}
              <code className={paragraphTextSize}>Gesture.Pan()</code> and{" "}
              <code className={paragraphTextSize}>Gesture.Pinch()</code> APIs to
              handle drag and scale gestures.
              <pre>
                <code>
                  {`const panGesture = Gesture.Pan()
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
  });

const pinchGesture = Gesture.Pinch()
  .onStart(() => {
    cancelAnimation(scale);
    startScale.value = scale.value;
  })
  .onUpdate((event) => {
    scale.value = startScale.value * event.scale;
  })
  .onEnd(() => {
    scale.value = withSpring(1);
  });

const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);`}
                </code>
              </pre>
              <ul className="list-disc pl-5">
                <li className={paragraphTextSize}>
                  <strong>Pan Gesture:</strong> Handles the drag gesture.
                  <ul className="list-disc pl-5">
                    <li className={paragraphTextSize}>
                      <strong>onStart:</strong> Cancels any ongoing animations
                      and stores the starting position of the gesture.
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
                  <strong>Pinch Gesture:</strong> Handles the scale gesture.
                  <ul className="list-disc pl-5">
                    <li className={paragraphTextSize}>
                      <strong>onStart:</strong> Cancels any ongoing animations
                      and stores the starting scale of the gesture.
                    </li>
                    <li className={paragraphTextSize}>
                      <strong>onUpdate:</strong> Updates the{" "}
                      <code className={paragraphTextSize}>scale</code> value
                      based on the gesture's scale.
                    </li>
                    <li className={paragraphTextSize}>
                      <strong>onEnd:</strong> Animates the element back to its
                      original scale using a spring animation.
                    </li>
                  </ul>
                </li>
                <li className={paragraphTextSize}>
                  <strong>Composed Gesture:</strong> Combines the pan and pinch
                  gestures to allow simultaneous dragging and scaling.
                </li>
              </ul>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <AnimationContainer title="Gesture Based Sequence" headingLight>
    <FlexFull style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View
          style={[
            elementStyleTwo,
            animatedStyles,
            { width: 100, height: 100 },
          ]}
        />
      </GestureDetector>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing an element that can be dragged and
              scaled.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
