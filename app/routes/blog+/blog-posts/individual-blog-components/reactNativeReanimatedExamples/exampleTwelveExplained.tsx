import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";
export function ExampleTwelveExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example Twelve: Bouncing Text Animation
        </Text>
        <Text className={paragraphTextSize}>
          Example Twelve demonstrates the use of React Native Reanimated to
          create a bouncing text animation. This component makes a text element
          bounce using a spring animation. Here’s a detailed breakdown of its
          functionality and implementation.
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
              <code className={paragraphTextSize}>translateY</code>) which
              represents the y position of the animated text element. This value
              is essential for tracking and updating the element's position
              during the animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedStyle</code>{" "}
              creates an animated style that updates based on the shared value.
              The style transforms the element by translating it along the
              y-axis according to{" "}
              <code className={paragraphTextSize}>translateY</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Spring Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withSpring</code> function is
              used to animate the shared value with a spring effect, providing a
              smooth and natural bouncing animation.
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
                <code>{`const translateY = useSharedValue(0);`}</code>
              </pre>
              This line initializes the shared value{" "}
              <code className={paragraphTextSize}>translateY</code> to 0.
            </li>
            <li className={paragraphTextSize}>
              <strong>Bouncing Animation Function:</strong> The{" "}
              <code className={paragraphTextSize}>bouncingAnimation</code>{" "}
              function defines the spring animation for the y-axis translation.
              <pre>
                <code>
                  {`const bouncingAnimation = () => {
  translateY.value = withSpring(-screenHeight * 0.13, {
    damping: 5,
    stiffness: 150,
  });
};`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Effect Hook:</strong> The{" "}
              <code className={paragraphTextSize}>useEffect</code> hook triggers
              the bouncing animation when the component mounts.
              <pre>
                <code>
                  {`useEffect(() => {
  bouncingAnimation();
}, []);`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Animated Styles Definition:</strong>
              <pre>
                <code>
                  {`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateY: translateY.value }],
}));`}
                </code>
              </pre>
              This hook creates an animated style that updates the element's
              transform property based on the current value of{" "}
              <code className={paragraphTextSize}>translateY</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Restart Animation:</strong> Function to restart the
              animation by resetting and reanimating the{" "}
              <code className={paragraphTextSize}>translateY</code> value.
              <pre>
                <code>
                  {`const restartAnimation = () => {
  translateY.value = 0;
  bouncingAnimation();
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
    title="Bouncing Text"
    resetAnimation={restartAnimation}
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Animated.Text
        style={[
          animatedStyles,
          textShadows.glow200Sm,
          { fontFamily: "Play-Bold", fontSize: 33 },
        ]}
      >
        Bouncing Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated text element styled with both
              static and animated styles, representing text that bounces using a
              spring animation.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
