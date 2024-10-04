import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export default function ExampleOneExplained() {
  return (
    <CenterHorizontalFull className="lg:px-[1vh] pt-[2vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-col-500`}>
          Example One: X & Y Animations
        </Text>
        <Text className={paragraphTextSize}>
          This example demonstrates the basic use of React Native Reanimated for
          animating elements along the x and y axes. This component provides
          interactive buttons to move a square element in different directions
          using spring animations. Here’s a detailed breakdown of its
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
              to create shared values (
              <code className={paragraphTextSize}>offsetX</code> and{" "}
              <code className={paragraphTextSize}>offsetY</code>) which
              represent the x and y positions of the animated element. These
              values are essential for tracking and updating the element's
              position during animations.
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
              <strong>Spring Animation:</strong> The{" "}
              <code className={paragraphTextSize}>withSpring</code> function is
              used to animate the shared values with a spring effect, providing
              a smooth and natural animation.
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
const offsetY = useSharedValue(0);`}
                </code>
              </pre>
              These lines initialize the shared values <code>offsetX</code> and{" "}
              <code className={paragraphTextSize}>offsetY</code> to zero.
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
              <strong>Utility Functions:</strong>
              <ul className="list-disc pl-5">
                <li className={paragraphTextSize}>
                  <strong>Random Sign Generator:</strong> Generates a random
                  sign (-1 or 1) to randomly determine the direction of
                  movement.
                  <pre>
                    <code>
                      {`const getRandomSign = () => {
  return Math.random() < 0.5 ? -1 : 1;
};`}
                    </code>
                  </pre>
                </li>
                <li className={paragraphTextSize}>
                  <strong>Reset Animation:</strong> Resets the element's
                  position to the origin (0, 0) using a spring animation.
                  <pre>
                    <code>
                      {`const resetAnimation = () => {
  offsetX.value = withSpring(0);
  offsetY.value = withSpring(0);
};`}
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <AnimationContainer resetAnimation={resetAnimation} title="X & Y Animations">
    <Animated.View
      style={[
        animatedElementStyle,
        animatedStyles,
        { width: 40, height: 40 },
      ]}
    />
    <Flex style={{ gap: 20 }}>
      <MyButton
        text="Move Y"
        onPress={() => {
          offsetY.value = withSpring(Math.random() * -200);
        }}
      />
      <MyButton
        text="Move X"
        onPress={() => {
          const randomValue = Math.random() * 200;
          const randomSign = getRandomSign();
          offsetX.value = withSpring(randomValue * randomSign);
        }}
      />
      <MyButton
        text="Move X & Y"
        onPress={() => {
          const randomValueX = Math.random() * 200;
          const randomValueY = Math.random() * -200;
          const randomSignX = getRandomSign();
          const randomSignY = getRandomSign();
          offsetX.value = withSpring(randomValueX * randomSignX);
          offsetY.value = withSpring(randomValueY * randomSignY);
        }}
      />
    </Flex>
  </AnimationContainer>
);`}
                </code>
              </pre>
              The component renders an animated view styled with both static and
              animated styles, representing a square that moves based on user
              interactions.
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
