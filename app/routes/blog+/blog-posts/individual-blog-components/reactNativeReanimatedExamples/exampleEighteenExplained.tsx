import React from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { paragraphTextSize } from "~/routes/blog+/components/blogItemComponent";

export function ExampleEighteenExplained() {
  return (
    <CenterHorizontalFull className="px-[2vh] pt-[4vh]">
      <Flex className="bg-slate-900 border-900-md shadowBroadNormal px-[1vh] py-[2vh] gap-[2vh] flex-col">
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Example Eighteen: ScrollTo Component
        </Text>
        <Text className={paragraphTextSize}>
          Our final example demonstrates the use of React Native Reanimated to
          create a scrollable list that can be programmatically scrolled to
          specific items. This component utilizes animated references and shared
          values to control the scroll position of an{" "}
          <code className={paragraphTextSize}>Animated.ScrollView</code>. Here’s
          a detailed breakdown of its functionality and implementation.
        </Text>
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Key Features
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>Animated References:</strong>{" "}
              <code className={paragraphTextSize}>useAnimatedRef</code> is used
              to create a reference to the{" "}
              <code className={paragraphTextSize}>Animated.ScrollView</code>.
              This reference is essential for controlling the scroll position
              programmatically.
            </li>
            <li className={paragraphTextSize}>
              <strong>Shared Values:</strong>{" "}
              <code className={paragraphTextSize}>useSharedValue</code> is used
              to create a shared value (
              <code className={paragraphTextSize}>scroll</code>) which
              represents the current scroll position. This value is essential
              for tracking and updating the scroll position during the
              animation.
            </li>
            <li className={paragraphTextSize}>
              <strong>Derived Values:</strong>{" "}
              <code className={paragraphTextSize}>useDerivedValue</code> is used
              to derive the scroll position from the shared value and trigger
              the scrollTo function to update the scroll position of the{" "}
              <code className={paragraphTextSize}>Animated.ScrollView</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>ScrollTo Function:</strong> The{" "}
              <code className={paragraphTextSize}>scrollTo</code> function is
              used to programmatically scroll to a specific position in the{" "}
              <code className={paragraphTextSize}>Animated.ScrollView</code>{" "}
              based on the shared value.
            </li>
          </ul>
        </Text>
        <Text className={`${paragraphTextSize} text-cyan-300`}>
          Component Structure
        </Text>
        <Text className={paragraphTextSize}>
          <ul className="list-disc pl-5">
            <li className={paragraphTextSize}>
              <strong>
                Animated References and Shared Values Initialization:
              </strong>
              <pre>
                <code>
                  {`const animatedRef = useAnimatedRef<Animated.ScrollView>();
const scroll = useSharedValue<number>(0);`}
                </code>
              </pre>
              These lines initialize the animated reference{" "}
              <code className={paragraphTextSize}>animatedRef</code> and the
              shared value <code className={paragraphTextSize}>scroll</code>.
            </li>
            <li className={paragraphTextSize}>
              <strong>Derived Value and ScrollTo Function:</strong>
              The <code className={paragraphTextSize}>
                useDerivedValue
              </code>{" "}
              hook derives the scroll position from the shared value and
              triggers the <code className={paragraphTextSize}>scrollTo</code>{" "}
              function to update the scroll position.
              <pre>
                <code>
                  {`useDerivedValue(() => {
  scrollTo(
    animatedRef,
    0,
    scroll.value * SCROLL_CONTAINER_HEIGHT - 100,
    true
  );
});`}
                </code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Items Array:</strong> An array of 100 items is created to
              populate the scrollable list.
              <pre>
                <code>{`const items = Array.from(Array(100).keys());`}</code>
              </pre>
            </li>
            <li className={paragraphTextSize}>
              <strong>Rendering the Component:</strong>
              <pre>
                <code>
                  {`return (
  <GradientTen style={{ paddingTop: 70 }}>
    <VStackFull style={{ height: screenHeight * 0.9, gap: 10 }}>
      <NavButton increment={-1} scroll={scroll} />
      <CenterHorizontalFull style={{ height: SCROLL_CONTAINER_HEIGHT }}>
        <Animated.ScrollView ref={animatedRef}>
          <VStackFull style={{ gap: 25, paddingVertical: 10 }}>
            {items.map((_, i) => (
              <CenterHorizontalFull key={i}>
                <View
                  style={[
                    elementStyleTwo,
                    {
                      height: 70,
                      width: screenWidth * 0.75,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <TextXl style={{ textAlign: "center" }}>Item: {i}</TextXl>
                </View>
              </CenterHorizontalFull>
            ))}
          </VStackFull>
        </Animated.ScrollView>
      </CenterHorizontalFull>
      <NavButton increment={1} scroll={scroll} />
    </VStackFull>
  </GradientTen>
);`}
                </code>
              </pre>
              The component renders a gradient background with a scrollable list
              of items. Navigation buttons are provided to scroll up and down
              through the list.
            </li>
            <li className={paragraphTextSize}>
              <strong>NavButton Component:</strong> A custom button component is
              used to navigate through the list by updating the shared scroll
              value.
              <pre>
                <code>
                  {`const NavButton = ({
  increment,
  scroll,
}: {
  increment: number;
  scroll: SharedValue<number>;
}) => (
  <CenterHorizontalFull>
    <MyButton
      icon={
        increment > 0 ? "caret-down-circle-outline" : "caret-up-circle-outline"
      }
      onPress={() => {
        scroll.value =
          scroll.value + increment > 0
            ? scroll.value + increment
            : 100 - 1 + increment;

        if (scroll.value >= 100 - 2) scroll.value = 0;
      }}
      text={\`Page  \${increment > 0 ? "down" : "up"}\`}
    />
  </CenterHorizontalFull>
);`}
                </code>
              </pre>
            </li>
          </ul>
        </Text>
      </Flex>
    </CenterHorizontalFull>
  );
}
