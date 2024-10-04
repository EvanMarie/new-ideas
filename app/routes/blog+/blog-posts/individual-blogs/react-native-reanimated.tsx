import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const ReactNativeReanimated: BlogPost = {
  id: "53",
  date: "2024-06-05",
  title: "React Native Reanimated: A Deep Dive",
  slug: "react-native-reanimated-a-deep-dive",
  author: "Evan Marie Carr",
  avatar: EvanAvatar,
  tags: ["App Design", "Mobile Apps", "React Native", "Expo"],
  categories: ["Programming", "Mobile Apps", "UX / UI & Frontend Design"],
  image:
    "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog53.webp",
  summary:
    "Explore the powerful capabilities of React Native Reanimated: smooth and complex animations, manage gestures, and enhance your user interface with movement, text animations, keyframes, and scroll-triggered effects",
  paragraphs: [
    <React.Fragment key="react-native-reanimated-a-deep-dive">
      <p>
        React Native Reanimated is a powerful library for creating smooth and
        complex animations in React Native applications. It uses native threads
        for performance, providing a declarative API for animations and
        gestures. Here, we will explore various features and functionalities of
        React Native Reanimated, and I will offer detailed explanations and
        examples.
      </p>
      <h3>Key features of React Native Reanimated</h3>
      <ul>
        <li>
          <strong>Native Performance:</strong> Reanimated uses the power of the
          native UI thread, allowing animations to run smoothly and efficiently
          without blocking the JavaScript thread.
        </li>
        <li>
          <strong>Declarative API:</strong> Reanimated provides a declarative
          API for defining animations and gestures, making it easier to reason
          about and maintain your animation logic.
        </li>
        <li>
          <strong>Gesture Handling:</strong> Reanimated includes a gesture
          system that enables you to handle complex touch interactions, such as
          pan, pinch, and rotate, with ease.
        </li>
        <li>
          <strong>Shared Values:</strong> Reanimated introduces the concept of
          shared values, which allow you to create dependencies between animated
          values and update them synchronously.
        </li>
        <li>
          <strong>Worklets:</strong> Worklets are small, isolated JavaScript
          functions that run on the UI thread, enabling you to perform complex
          calculations and logic without impacting performance.
        </li>
        <li>
          <strong>Animations:</strong> Reanimated provides a wide range of
          animation primitives, such as timing, spring, and decay animations,
          along with more advanced concepts like keyframes and composition.
        </li>
        <li>
          <strong>Layout Animations:</strong> Reanimated supports layout
          animations, allowing you to animate the position and size of
          components when the layout changes.
        </li>
      </ul>
      <h2>Reanimated 3</h2>
      <p>
        Reanimated 3 is the latest version of the React Native Reanimated
        library, offering enhanced performance, new features, and improved ease
        of use for creating complex animations in React Native applications.
      </p>
      <h3>Highlights introduced in Reanimated 3</h3>
      <ul>
        <li>
          <strong>Improved Performance:</strong> Reanimated 3 further optimizes
          animations by leveraging the native thread, ensuring smooth and
          responsive animations even under heavy load.
        </li>
        <li>
          <strong>Simplified API:</strong> The API has been streamlined to make
          it easier to use and more intuitive. This includes more
          straightforward hooks and functions for common animation tasks.
        </li>
        <li>
          <strong>Enhanced Gesture Handling:</strong> Integration with
          react-native-gesture-handler has been improved, providing more robust
          and flexible gesture handling capabilities. This makes it easier to
          create interactive and responsive UIs.
        </li>
        <li>
          <strong>New Animation Types:</strong> Reanimated 3 introduces new
          types of animations, allowing for more creative and diverse animation
          effects. These include advanced keyframe animations and more
          sophisticated timing functions.
        </li>
        <li>
          <strong>Better Interoperability:</strong> Improved compatibility with
          other React Native libraries and components, making it easier to
          integrate Reanimated animations into existing projects.
        </li>
        <li>
          <strong>Developer Experience:</strong> Enhanced debugging and
          development tools, providing better visibility into animations and
          easier troubleshooting. This includes improved logging and error
          messages.
        </li>
        <li>
          <strong>Community and Support:</strong> Stronger community support and
          more comprehensive documentation, making it easier for developers to
          get started and find solutions to common issues.
        </li>
      </ul>
      <h3>Shared Values</h3>
      <p>
        Core to Reanimated, shared values allow you to define and animate state
        variables that run on the UI thread for better performance.
      </p>
      <pre>
        <code>{`const offsetX = useSharedValue(0);`}</code>
      </pre>
      <h3>Animated Styles</h3>
      <p>
        Hooks like <code>useAnimatedStyle</code> enable you to create styles
        that update automatically in response to shared value changes.
      </p>
      <pre>
        <code>
          {`const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetX.value }],
      }));`}
        </code>
      </pre>
      <h3>Gesture Handling</h3>
      <p>
        Seamless integration with react-native-gesture-handler allows for
        creating complex gesture-driven animations.
      </p>
      <pre>
        <code>
          {`const gesture = Gesture.Pan().onUpdate((event) => {
        offsetX.value = event.translationX;
      });`}
        </code>
      </pre>
      <h3>Animation Functions</h3>
      <p>
        New and improved functions like <code>withSpring</code>,{" "}
        <code>withTiming</code>, and <code>withDecay</code> offer a variety of
        ways to animate properties.
      </p>
      <pre>
        <code>{`offsetX.value = withSpring(100);`}</code>
      </pre>
      <h3>Animating Movements Along the X and Y Axis</h3>
      <ul>
        <li>
          <strong>useSharedValue:</strong> This hook creates a shared value that
          can be animated.
        </li>
        <li>
          <strong>useAnimatedStyle:</strong> This hook creates an animated style
          that reacts to changes in shared values.
        </li>
        <li>
          <strong>Animation Functions:</strong> Functions like withSpring,
          withTiming, and withDecay define the type of animation.
        </li>
      </ul>
      <hr />
      <h2>Animation Examples and Explanations</h2>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex01.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Animating Movements Along the X Axis"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE ONE EXPLAINED *************** */}
      <h3>Example One: X & Y Animations</h3>
      <p>
        This example demonstrates the basic use of React Native Reanimated for
        animating elements along the x and y axes. This component provides
        interactive buttons to move a square element in different directions
        using spring animations. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>offsetX</code> and <code>offsetY</code>)
          which represent the x and y positions of the animated element. These
          values are essential for tracking and updating the element's position
          during animations.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style transforms the element by translating it along the x and y axes
          according to <code>offsetX</code> and <code>offsetY</code>.
        </li>
        <li>
          <strong>Spring Animation:</strong> The <code>withSpring</code>{" "}
          function is used to animate the shared values with a spring effect,
          providing a smooth and natural animation.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const offsetX = useSharedValue(0);`}</code>
            <br />
            <code>{`const offsetY = useSharedValue(0);`}</code>
          </pre>
          These lines initialize the shared values <code>offsetX</code> and{" "}
          <code>offsetY</code> to zero.
        </li>
        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  };
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current values of <code>offsetX</code>{" "}
          and <code>offsetY</code>.
        </li>
        <li>
          <strong>Utility Functions:</strong>
          <ul>
            <li>
              <strong>Random Sign Generator:</strong> Generates a random sign
              (-1 or 1) to randomly determine the direction of movement.
              <pre>
                <code>{`const getRandomSign = () => {
  return Math.random() < 0.5 ? -1 : 1;
};`}</code>
              </pre>
            </li>
            <li>
              <strong>Reset Animation:</strong> Resets the element's position to
              the origin (0, 0) using a spring animation.
              <pre>
                <code>{`const resetAnimation = () => {
  offsetX.value = withSpring(0);
  offsetY.value = withSpring(0);
};`}</code>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing a square that moves based on user
          interactions.
        </li>
      </ul>
      <hr />
      <h3>Example Two: Animation with Timing</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex02.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Animating Movements Along the X Axis"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE TWO EXPLAINED *************** */}
      <p>
        Example Two showcases the use of React Native Reanimated for creating
        timed animations. This component allows an element to move along the
        x-axis with a smooth timing animation when a button is pressed. Here’s a
        detailed breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>offset</code>) which represents the x
          position of the animated element. This value is essential for tracking
          and updating the element's position during animations.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by translating it along the x-axis
          according to <code>offset</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared value with a timed effect,
          providing a smooth and controlled animation.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const offset = useSharedValue(-150);`}</code>
          </pre>
          This line initializes the shared value <code>offset</code> to -150.
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offset.value }],
  };
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of <code>offset</code>.
        </li>

        <li>
          <strong>Reset Animation:</strong> Resets the element's position to the
          initial state (-150).
          <pre>
            <code>{`const resetAnimation = () => {
  offset.value = -150;
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing a rectangle that moves based on user
          interactions.
        </li>
      </ul>
      {/* Gesture-Based Animations */}
      <h3>Gesture-Based Animations</h3>
      <p>
        Gestures play a crucial role in creating interactive and responsive UIs.
        React Native Reanimated, combined with react-native-gesture-handler,
        allows for complex gesture-based animations.
      </p>
      <h3>Key Concepts</h3>
      <ul>
        <li>
          <strong>Gesture Handlers:</strong> Handling gestures like pan, pinch,
          and tap.
        </li>
        <li>
          <strong>Gesture State Management:</strong> Managing the state and
          response of gestures.
        </li>
        <li>
          <strong>Composed Gestures:</strong> Combining multiple gestures for
          complex interactions.
        </li>
      </ul>
      <hr /> <h3>Example Three: Gesture Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex03.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Gesture Example One"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE THREE EXPLAINED *************** */}
      <p>
        Example Three demonstrates the use of React Native Reanimated in
        combination with gesture handling to create interactive animations. This
        component allows an element to be dragged around the screen, snapping
        back to its original position with a spring animation when released.
        Here’s a detailed breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>offsetX</code>, <code>offsetY</code>,{" "}
          <code>startX</code>, and <code>startY</code>) which represent the x
          and y positions of the animated element. These values are essential
          for tracking and updating the element's position during gestures.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style transforms the element by translating it along the x and y axes
          according to <code>offsetX</code> and <code>offsetY</code>.
        </li>
        <li>
          <strong>Gesture Handling:</strong> The <code>Gesture</code> API from{" "}
          <code>react-native-gesture-handler</code> is used to handle pan
          gestures, allowing the element to be dragged around the screen.
        </li>
        <li>
          <strong>Spring Animation:</strong> The <code>withSpring</code>{" "}
          function is used to animate the shared values with a spring effect,
          providing a smooth and natural animation when the gesture ends.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);
const startX = useSharedValue(0);
const startY = useSharedValue(0);`}</code>
          </pre>
          These lines initialize the shared values to zero.
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  };
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current values of <code>offsetX</code>{" "}
          and <code>offsetY</code>.
        </li>

        <li>
          <strong>Gesture Handling:</strong> Using the{" "}
          <code>Gesture.Pan()</code> API to handle drag gestures.
          <pre>
            <code>{`const gesture = Gesture.Pan()
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
  });`}</code>
          </pre>
          <ul>
            <li>
              <strong>onStart:</strong> Cancels any ongoing animations and
              stores the starting position of the gesture.
            </li>
            <li>
              <strong>onUpdate:</strong> Updates the <code>offsetX</code> and{" "}
              <code>offsetY</code> values based on the gesture's translation.
            </li>
            <li>
              <strong>onEnd:</strong> Animates the element back to its original
              position using a spring animation.
            </li>
          </ul>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing a draggable element. The text inside the
          element indicates that it can be dragged.
        </li>
      </ul>{" "}
      <hr /> <h3>Example Four: Gesture Handling with Decay</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex04.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Gesture Example Two"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE FOUR EXPLAINED *************** */}
      <p>
        Example Four demonstrates the use of React Native Reanimated in
        combination with gesture handling to create interactive animations. This
        component allows an element to be dragged around the screen and flung
        with a decay animation when released. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>offsetX</code>, <code>offsetY</code>,{" "}
          <code>startX</code>, and <code>startY</code>) which represent the x
          and y positions of the animated element. These values are essential
          for tracking and updating the element's position during gestures.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style transforms the element by translating it along the x and y axes
          according to <code>offsetX</code> and <code>offsetY</code>.
        </li>
        <li>
          <strong>Gesture Handling:</strong> The <code>Gesture</code> API from{" "}
          <code>react-native-gesture-handler</code> is used to handle pan
          gestures, allowing the element to be dragged around the screen.
        </li>
        <li>
          <strong>Decay Animation:</strong> The <code>withDecay</code> function
          is used to animate the shared values with a decay effect, providing a
          smooth and natural animation when the gesture ends.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);
const startX = useSharedValue(0);
const startY = useSharedValue(0);`}</code>
          </pre>
          These lines initialize the shared values to zero.
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  };
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current values of <code>offsetX</code>{" "}
          and <code>offsetY</code>.
        </li>

        <li>
          <strong>Gesture Handling:</strong> Using the{" "}
          <code>Gesture.Pan()</code> API to handle drag gestures.
          <pre>
            <code>{`const gesture = Gesture.Pan()
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
  .onEnd((event) => {
    offsetX.value = withDecay({
      velocity: event.velocityX,
      deceleration: 0.998,
    });
    offsetY.value = withDecay({
      velocity: event.velocityY,
      deceleration: 0.998,
    });
  });`}</code>
          </pre>
          <ul>
            <li>
              <strong>onStart:</strong> Cancels any ongoing animations and
              stores the starting position of the gesture.
            </li>
            <li>
              <strong>onUpdate:</strong> Updates the <code>offsetX</code> and{" "}
              <code>offsetY</code> values based on the gesture's translation.
            </li>
            <li>
              <strong>onEnd:</strong> Animates the element with a decay effect
              based on the gesture's velocity.
            </li>
          </ul>
        </li>

        <li>
          <strong>Reset Animation:</strong> Resets the element's position to the
          origin (0, 0).
          <pre>
            <code>{`const resetAnimation = () => {
  offsetX.value = 0;
  offsetY.value = 0;
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer resetAnimation={resetAnimation} title="Gesture Handling with Decay" headingLight>
    <FlexFull style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            animatedStyles,
            elementStyleTwo,
            { width: 60, height: 60, justifyContent: "center" },
          ]}
        >
          <TextXs style={{ textAlign: "center", fontWeight: 600 }}>Fling Me</TextXs>
        </Animated.View>
      </GestureDetector>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing a draggable element. The text inside the
          element indicates that it can be flung.
        </li>
      </ul>
      <hr /> <h3>Example Five: Gesture Based Animation Sequence</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex05.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Gesture Example Three"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE FIVE EXPLAINED *************** */}
      <p>
        Example Five demonstrates the use of React Native Reanimated in
        combination with gesture handling to create interactive animations. This
        component allows an element to be dragged and scaled using pan and pinch
        gestures, respectively. Here’s a detailed breakdown of its functionality
        and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>offsetX</code>, <code>offsetY</code>,{" "}
          <code>scale</code>, <code>startX</code>, <code>startY</code>, and{" "}
          <code>startScale</code>) which represent the x, y positions, and scale
          of the animated element. These values are essential for tracking and
          updating the element's position and scale during gestures.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style transforms the element by translating it along the x and y axes
          and scaling it according to <code>offsetX</code>, <code>offsetY</code>
          , and <code>scale</code>.
        </li>
        <li>
          <strong>Gesture Handling:</strong> The <code>Gesture</code> API from{" "}
          <code>react-native-gesture-handler</code> is used to handle pan and
          pinch gestures, allowing the element to be dragged and scaled.
        </li>
        <li>
          <strong>Spring Animation:</strong> The <code>withSpring</code>{" "}
          function is used to animate the shared values with a spring effect,
          providing a smooth and natural animation when the gestures end.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);
const scale = useSharedValue(1);
const startX = useSharedValue(0);
const startY = useSharedValue(0);
const startScale = useSharedValue(1);`}</code>
          </pre>
          These lines initialize the shared values to their default states.
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  return {
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  };
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current values of <code>offsetX</code>
          , <code>offsetY</code>, and <code>scale</code>.
        </li>

        <li>
          <strong>Gesture Handling:</strong> Using the{" "}
          <code>Gesture.Pan()</code> and <code>Gesture.Pinch()</code> APIs to
          handle drag and scale gestures.
          <pre>
            <code>{`const panGesture = Gesture.Pan()
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

const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);`}</code>
          </pre>
          <ul>
            <li>
              <strong>Pan Gesture:</strong> Handles the drag gesture.
              <ul>
                <li>
                  <strong>onStart:</strong> Cancels any ongoing animations and
                  stores the starting position of the gesture.
                </li>
                <li>
                  <strong>onUpdate:</strong> Updates the <code>offsetX</code>{" "}
                  and <code>offsetY</code> values based on the gesture's
                  translation.
                </li>
                <li>
                  <strong>onEnd:</strong> Animates the element back to its
                  original position using a spring animation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Pinch Gesture:</strong> Handles the scale gesture.
              <ul>
                <li>
                  <strong>onStart:</strong> Cancels any ongoing animations and
                  stores the starting scale of the gesture.
                </li>
                <li>
                  <strong>onUpdate:</strong> Updates the <code>scale</code>{" "}
                  value based on the gesture's scale.
                </li>
                <li>
                  <strong>onEnd:</strong> Animates the element back to its
                  original scale using a spring animation.
                </li>
              </ul>
            </li>
            <li>
              <strong>Composed Gesture:</strong> Combines the pan and pinch
              gestures to allow simultaneous dragging and scaling.
            </li>
          </ul>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing an element that can be dragged and
          scaled.
        </li>
      </ul>
      {/* Text Animations Section */}
      <h3>Text Animations</h3>
      <p>
        Animating text can enhance user experience by drawing attention or
        providing feedback. Reanimated offers various ways to animate text
        properties such as opacity, color, and scale.
      </p>
      <h3>Key Concepts</h3>
      <ul>
        <li>
          <strong>Text Property Animations:</strong> Animating properties like
          opacity, color, and transform.
        </li>
        <li>
          <strong>Combination of Animations:</strong> Combining multiple
          animations for complex effects.
        </li>
        <li>
          <strong>Using Hooks and Styles:</strong> Leveraging{" "}
          <code>useSharedValue</code> and <code>useAnimatedStyle</code> for text
          animations.
        </li>
      </ul>
      <hr /> <h3>Example Six: Sliding Text Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex06.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation One"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE SIX EXPLAINED *************** */}
      <p>
        Example Six demonstrates the use of React Native Reanimated to create a
        sliding text animation. This component slides a text element from the
        left to the center of the screen using a timing animation. Here’s a
        detailed breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>translateX</code>) which represents the x
          position of the animated text element. This value is essential for
          tracking and updating the element's position during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by translating it along the x-axis
          according to <code>translateX</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared value with a timing effect,
          providing a smooth and controlled animation.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const translateX = useSharedValue(-350);`}</code>
          </pre>
          This line initializes the shared value <code>translateX</code> to
          -350, starting the text element off-screen to the left.
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  translateX.value = withTiming(0, { duration: 2000 });
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateX: translateX.value }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of{" "}
          <code>translateX</code>.
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>translateX</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  translateX.value = -350;
  translateX.value = withTiming(0, { duration: 2000 });
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.2}
    title="Sliding Text"
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
        Slide to the right!
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that slides in from the left.
        </li>
      </ul>
      <hr /> <h3>Example Seven: Color Shifting Text</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex07.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Two"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE SEVEN EXPLAINED *************** */}
      <p>
        Example Seven demonstrates the use of React Native Reanimated to create
        a color-shifting text animation. This component changes the color of a
        text element in a looping sequence using timing and repeat animations.
        Here’s a detailed breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>color</code>) which represents the color
          transition state of the animated text element. This value is essential
          for tracking and updating the element's color during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style interpolates the color based on the value of <code>color</code>.
        </li>
        <li>
          <strong>Timing and Repeat Animations:</strong> The{" "}
          <code>withTiming</code> function is used to animate the shared value
          with a timing effect, and <code>withRepeat</code> is used to repeat
          the animation indefinitely.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
        <li>
          <strong>Interpolate Color:</strong> The <code>interpolateColor</code>{" "}
          function is used to interpolate the color values based on the shared
          value.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const color = useSharedValue(0);`}</code>
          </pre>
          This line initializes the shared value <code>color</code> to 0.
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the color-shifting animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true);
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
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
});`}</code>
          </pre>
          This hook creates an animated style that updates the element's color
          based on the interpolated value of <code>color</code>.
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>color</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  cancelAnimation(color);
  color.value = 0;
  color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true);
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that changes color in a looping
          sequence.
        </li>
      </ul>
      <hr />
      <h3>Example Eight: Rotating Text Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex08.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Three"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE EIGHT EXPLAINED *************** */}
      <p>
        Example Eight demonstrates the use of React Native Reanimated to create
        a rotating text animation. This component rotates a text element 360
        degrees using a timing animation. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>rotation</code>) which represents the
          rotation angle of the animated text element. This value is essential
          for tracking and updating the element's rotation during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by rotating it according to{" "}
          <code>rotation</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared value with a timing effect,
          providing a smooth and controlled animation.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const rotation = useSharedValue(0);`}</code>
          </pre>
          This line initializes the shared value <code>rotation</code> to 0.
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  rotation.value = withTiming(360, { duration: 2000 });
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ rotate: \`\${rotation.value}deg\` }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of <code>rotation</code>
          .
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>rotation</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  rotation.value = 0;
  rotation.value = withTiming(360, { duration: 2000 });
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.3}
    title="Rotating Text"
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
        Rotating Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that rotates 360 degrees.
        </li>
      </ul>
      <hr /> <h3>Example Nine: Skewed Text Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex09.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Four"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE NINE EXPLAINED ******** */}
      <p>
        Example Nine demonstrates the use of React Native Reanimated to create a
        skewed text animation. This component skews a text element along the
        x-axis using a timing animation. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>skewX</code>) which represents the skew
          angle of the animated text element. This value is essential for
          tracking and updating the element's skew during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by skewing it along the x-axis according
          to <code>skewX</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared value with a timing effect,
          providing a smooth and controlled animation.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const skewX = useSharedValue(0);`}</code>
          </pre>
          This line initializes the shared value <code>skewX</code> to 0.
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  skewX.value = withTiming(20, { duration: 2000 });
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ skewX: \`\${skewX.value}deg\` }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of <code>skewX</code>.
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>skewX</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  skewX.value = 0;
  skewX.value = withTiming(20, { duration: 2000 });
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.1}
    title="Skewed Text"
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
        Skewed Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that skews along the x-axis.
        </li>
      </ul>
      {/* Text Animation Videos and Examples */}
      <hr /> <h3>Example Ten: Sequenced Skewed Text</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex10.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Five"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE TEN EXPLAINED *************** */}
      <p>
        Example Ten demonstrates the use of React Native Reanimated to create a
        sequenced skew animation. This component skews a text element back and
        forth in a sequence using timing animations. Here’s a detailed breakdown
        of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>skewX</code>) which represents the skew
          angle of the animated text element. This value is essential for
          tracking and updating the element's skew during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by skewing it along the x-axis according
          to <code>skewX</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared value with a timing effect,
          providing a smooth and controlled animation.
        </li>
        <li>
          <strong>Sequenced Animation:</strong> The <code>withSequence</code>{" "}
          function is used to create a sequence of animations that play one
          after the other.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const skewX = useSharedValue(0);`}</code>
          </pre>
          This line initializes the shared value <code>skewX</code> to 0.
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation sequence when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  skewX.value = withSequence(
    withTiming(20, { duration: 1000 }),
    withTiming(-20, { duration: 1000 }),
    withTiming(10, { duration: 1000 }),
    withTiming(-10, { duration: 1000 }),
    withTiming(0, { duration: 1000 })
  );
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ skewX: \`\${skewX.value}deg\` }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of <code>skewX</code>.
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>skewX</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  skewX.value = 0;
  skewX.value = withSequence(
    withTiming(30, { duration: 1000 }),
    withTiming(-30, { duration: 1000 }),
    withTiming(20, { duration: 1000 }),
    withTiming(-20, { duration: 1000 }),
    withTiming(0, { duration: 1000 })
  );
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.1}
    title="Sequenced Skewed Text"
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
        Skewed Text
      </Animated.Text>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that skews back and forth in a
          sequence.
        </li>
      </ul>
      <hr /> <h3>Example Eleven: Opacity & Scale Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex11.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Five"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE ELEVEN EXPLAINED *************** */}
      <p>
        Example Eleven demonstrates the use of React Native Reanimated to create
        an animation that combines opacity and scale transformations. This
        component smoothly fades in and scales up a text element using timing
        animations. Here’s a detailed breakdown of its functionality and
        implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>opacity</code> and <code>scale</code>)
          which represent the opacity and scale of the animated text element.
          These values are essential for tracking and updating the element's
          opacity and scale during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style sets the element's opacity and transforms it by scaling
          according to <code>opacity</code> and <code>scale</code>.
        </li>
        <li>
          <strong>Timing Animation:</strong> The <code>withTiming</code>{" "}
          function is used to animate the shared values with a timing effect,
          providing smooth and controlled animations.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const opacity = useSharedValue(0);
const scale = useSharedValue(0.5);`}</code>
          </pre>
          These lines initialize the shared values <code>opacity</code> to 0 and{" "}
          <code>scale</code> to 0.5.
        </li>
        <li>
          <strong>Animation Function:</strong> The <code>opacityScale</code>{" "}
          function defines the timing animations for opacity and scale.
          <pre>
            <code>{`const opacityScale = () => {
  opacity.value = withTiming(1, { duration: 2000 });
  scale.value = withTiming(1, { duration: 2000 });
};`}</code>
          </pre>
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  opacityScale();
}, []);`}</code>
          </pre>
        </li>
        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  opacity: opacity.value,
  transform: [{ scale: scale.value }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's opacity
          and transform properties based on the current values of{" "}
          <code>opacity</code> and <code>scale</code>.
        </li>
        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>opacity</code> and{" "}
          <code>scale</code> values.
          <pre>
            <code>{`const restartAnimation = () => {
  opacity.value = 0;
  scale.value = 0.5;
  opacityScale();
};`}</code>
          </pre>
        </li>
        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that smoothly fades in and
          scales up.
        </li>
      </ul>
      <hr /> <h3>Example Twelve: Bouncing Text Animation</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex12.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Five"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE TWELVE EXPLAINED *************** */}
      <p>
        Example Twelve demonstrates the use of React Native Reanimated to create
        a bouncing text animation. This component makes a text element bounce
        using a spring animation. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>translateY</code>) which represents the y
          position of the animated text element. This value is essential for
          tracking and updating the element's position during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by translating it along the y-axis
          according to <code>translateY</code>.
        </li>
        <li>
          <strong>Spring Animation:</strong> The <code>withSpring</code>{" "}
          function is used to animate the shared value with a spring effect,
          providing a smooth and natural bouncing animation.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const translateY = useSharedValue(0);`}</code>
          </pre>
          This line initializes the shared value <code>translateY</code> to 0.
        </li>
        <li>
          <strong>Bouncing Animation Function:</strong> The{" "}
          <code>bouncingAnimation</code> function defines the spring animation
          for the y-axis translation.
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
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the bouncing animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  bouncingAnimation();
}, []);`}</code>
          </pre>
        </li>
        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateY: translateY.value }],
}));`}</code>
          </pre>
        </li>
        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>translateY</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  translateY.value = 0;
  bouncingAnimation();
};`}</code>
          </pre>
        </li>
        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that bounces using a spring
          animation.
        </li>
      </ul>
      <hr /> <h3>Example Thirteen: Rotating Color Text</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex13.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Seven"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE THIRTEEN EXPLAINED *************** */}
      <p>
        Example Thirteen demonstrates the use of React Native Reanimated to
        create an animation that combines rotation and color transformation.
        This component rotates a text element while continuously changing its
        color using timing, repeat, and sequence animations. Here’s a detailed
        breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create shared values (<code>rotate</code> and <code>color</code>)
          which represent the rotation angle and color transition state of the
          animated text element. These values are essential for tracking and
          updating the element's rotation and color during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared values. The
          style sets the element's rotation and color according to{" "}
          <code>rotate</code> and <code>color</code>.
        </li>
        <li>
          <strong>Timing, Repeat, and Sequence Animations:</strong> The{" "}
          <code>withTiming</code> function is used to animate the shared values
          with a timing effect, <code>withRepeat</code> is used to repeat the
          animation, and <code>withSequence</code> is used to create a sequence
          of animations that play one after the other.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
        <li>
          <strong>Interpolate Color:</strong> The <code>interpolateColor</code>{" "}
          function is used to interpolate the color values based on the shared
          value.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>
              {`const rotate = useSharedValue(0);
const color = useSharedValue(0);`}
            </code>
          </pre>
          These lines initialize the shared values <code>rotate</code> and{" "}
          <code>color</code> to 0.
        </li>
        <li>
          <strong>Animation Function:</strong> The <code>rotatingColor</code>{" "}
          function defines the rotation and color animations using a combination
          of timing, repeat, and sequence animations.
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
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  rotatingColor();
}, []);`}</code>
          </pre>
        </li>
        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => {
  const textColor = interpolateColor(
    color.value,
    [0, 0.5, 1],
    [col[300], col[400], col[500]]
  );
  return {
    transform: [{ rotate: \`\${rotate.value}deg\` }],
    color: textColor,
  };
});`}</code>
          </pre>
        </li>
        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>rotate</code> and{" "}
          <code>color</code> values.
          <pre>
            <code>{`const restartAnimation = () => {
  rotate.value = 0;
  color.value = 0;
  rotatingColor();
};`}</code>
          </pre>
        </li>
        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
        </li>
      </ul>
      <hr /> <h3>Example Fourteen: Pulsating Text</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex14.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Text Animation Eight"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE FOURTEEN EXPLAINED *************** */}
      <p>
        Example Fourteen demonstrates the use of React Native Reanimated to
        create a pulsating text animation. This component scales a text element
        up and down continuously to create a pulsating effect using timing and
        repeat animations. Here’s a detailed breakdown of its functionality and
        implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>scale</code>) which represents the scale
          of the animated text element. This value is essential for tracking and
          updating the element's scale during the animation.
        </li>
        <li>
          <strong>Animated Styles:</strong> <code>useAnimatedStyle</code>{" "}
          creates an animated style that updates based on the shared value. The
          style transforms the element by scaling it according to{" "}
          <code>scale</code>.
        </li>
        <li>
          <strong>Timing and Repeat Animations:</strong> The{" "}
          <code>withTiming</code> function is used to animate the shared value
          with a timing effect, and <code>withRepeat</code> is used to repeat
          the animation indefinitely.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to trigger the animation when the component mounts.
        </li>
        <li>
          <strong>Easing:</strong> The <code>Easing.ease</code> function is used
          to create a smooth easing effect for the timing animation.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Shared Values Initialization:</strong>
          <pre>
            <code>{`const scale = useSharedValue(1);`}</code>
          </pre>
          This line initializes the shared value <code>scale</code> to 1.
        </li>

        <li>
          <strong>Animation Function:</strong> The <code>pulsatingText</code>{" "}
          function defines the scaling animation using a combination of timing
          and repeat animations with easing.
          <pre>
            <code>{`const pulsatingText = () => {
  scale.value = withRepeat(
    withTiming(1.4, { duration: 1000, easing: Easing.ease }),
    -1,
    true
  );
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook triggers
          the animation when the component mounts.
          <pre>
            <code>{`useEffect(() => {
  pulsatingText();
}, []);`}</code>
          </pre>
        </li>

        <li>
          <strong>Animated Styles Definition:</strong>
          <pre>
            <code>{`const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));`}</code>
          </pre>
          This hook creates an animated style that updates the element's
          transform property based on the current value of <code>scale</code>.
        </li>

        <li>
          <strong>Restart Animation:</strong> Function to restart the animation
          by resetting and reanimating the <code>scale</code> value.
          <pre>
            <code>{`const restartAnimation = () => {
  scale.value = 1;
  pulsatingText();
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders an animated text element styled with both static
          and animated styles, representing text that scales up and down
          continuously to create a pulsating effect.
        </li>
      </ul>
      {/* Keyframes Section */}
      <h3>Keyframes Animations</h3>
      <p>
        Keyframe animations allow for more complex and predefined animation
        sequences. Reanimated’s keyframe API makes it easy to define animations
        that change multiple properties over time.
      </p>
      <h3>Key Concepts</h3>
      <ul>
        <li>
          <strong>Defining Keyframes:</strong> Using keyframes to specify
          animation states and transitions.
        </li>
        <li>
          <strong>Combining Keyframes with Styles:</strong> Applying keyframe
          animations to styles.
        </li>
        <li>
          <strong>Chaining Animations:</strong> Creating smooth transitions
          between keyframes.
        </li>
      </ul>
      <hr /> <h3>Example Fifteen: Entering Keyframes</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex15.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Keyframes Example One"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE FIFTEEN EXPLAINED *************** */}
      <p>
        Example Fifteen demonstrates the use of React Native Reanimated to
        create an animation using keyframes. This component animates a text
        element using entering keyframes that control its opacity and
        translation along the y-axis. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>State Management:</strong> The <code>useState</code> hook is
          used to manage the restart state and the entering keyframe. The
          restart state is used to re-trigger the keyframe animation, while the
          entering keyframe defines the animation sequence.
        </li>
        <li>
          <strong>Keyframes:</strong> The <code>Keyframe</code> API from React
          Native Reanimated is used to define the entering animation sequence.
          The keyframe controls the opacity and translation of the text element
          along the y-axis.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to reset the restart state after the animation is triggered.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>State Initialization:</strong>
          <pre>
            <code>{`const [restart, setRestart] = useState(false);
const [enteringKeyframe, setEnteringKeyframe] = useState(
  new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -50 }],
    },
    100: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  })
);`}</code>
          </pre>
          These lines initialize the state variables <code>restart</code> and{" "}
          <code>enteringKeyframe</code>. The keyframe animation is defined with
          an initial opacity of 0 and a translation of -50 units along the
          y-axis, and it transitions to an opacity of 1 and a translation of 0
          units.
        </li>

        <li>
          <strong>Restart Animation Function:</strong> The{" "}
          <code>restartAnimation</code> function redefines the entering keyframe
          and toggles the restart state to re-trigger the animation.
          <pre>
            <code>{`const restartAnimation = () => {
  setEnteringKeyframe(
    new Keyframe({
      0: {
        opacity: 0,
        transform: [{ translateY: -50 }],
      },
      100: {
        opacity: 1,
        transform: [{ translateY: 0 }],
      },
    })
  );
  setRestart((prev) => !prev);
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook resets
          the restart state after the animation is triggered.
          <pre>
            <code>{`useEffect(() => {
  if (restart) {
    setRestart(false);
  }
}, [restart]);`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.1}
    title="Entering Keyframes"
    resetAnimation={restartAnimation}
    headingLight
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        key={restart.toString()}
        entering={enteringKeyframe}
        style={[elementStyleTwo, { paddingHorizontal: 10 }]}
      >
        <TextLg>Entering Keyframes</TextLg>
      </Animated.View>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing text that animates using entering
          keyframes.
        </li>
      </ul>
      <hr /> <h3>Example Sixteen: Sequential Keyframes</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex16.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Keyframes Example Two"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE SIXTEEN EXPLAINED *************** */}
      <p>
        Example Sixteen demonstrates the use of React Native Reanimated to
        create an animation using sequential keyframes. This component animates
        a text element through a sequence of keyframes that control its opacity,
        translation, scaling, and rotation. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>State Management:</strong> The <code>useState</code> hook is
          used to manage the restart state and the entering keyframe. The
          restart state is used to re-trigger the keyframe animation, while the
          entering keyframe defines the animation sequence.
        </li>
        <li>
          <strong>Keyframes:</strong> The <code>Keyframe</code> API from React
          Native Reanimated is used to define the sequential animation sequence.
          The keyframe controls the opacity, translation, scaling, and rotation
          of the text element.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to reset the restart state after the animation is triggered.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>State Initialization:</strong>
          <pre>
            <code>{`const [restart, setRestart] = useState(false);

const keyframeAnimation = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: -50 }, { scale: 0.5 }, { rotate: "0deg" }],
  },
  25: {
    opacity: 0.5,
    transform: [{ translateY: -50 }, { scale: 0.75 }, { rotate: "90deg" }],
  },
  50: {
    opacity: 0.75,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "180deg" }],
  },
  75: {
    opacity: 1,
    transform: [{ translateY: 50 }, { scale: 1.25 }, { rotate: "270deg" }],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "360deg" }],
  },
}).duration(500);

const [enteringKeyframe, setEnteringKeyframe] = useState(keyframeAnimation);`}</code>
          </pre>
          These lines initialize the state variables <code>restart</code> and{" "}
          <code>enteringKeyframe</code>. The keyframe animation is defined with
          sequential steps controlling opacity, translation, scaling, and
          rotation.
        </li>

        <li>
          <strong>Restart Animation Function:</strong> The{" "}
          <code>restartAnimation</code> function redefines the entering keyframe
          and toggles the restart state to re-trigger the animation.
          <pre>
            <code>{`const restartAnimation = () => {
  setEnteringKeyframe(keyframeAnimation);
  setRestart((prev) => !prev);
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook resets
          the restart state after the animation is triggered.
          <pre>
            <code>{`useEffect(() => {
  if (restart) {
    setRestart(false);
  }
}, [restart]);`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.3}
    title="Sequential Keyframes"
    resetAnimation={restartAnimation}
    headingLight
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        key={restart.toString()}
        entering={enteringKeyframe}
        style={[elementStyleTwo, { paddingHorizontal: 10 }]}
      >
        <TextLg>Sequential Keyframes</TextLg>
      </Animated.View>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing text that animates through a sequence of
          keyframes.
        </li>
      </ul>
      <hr />
      <h3>Example Seventeen: Advanced Keyframes Sequence</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex17.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Keyframes Example Three"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE SEVENTEEN EXPLAINED *************** */}
      <p>
        Example Seventeen demonstrates the use of React Native Reanimated to
        create an advanced animation sequence using keyframes. This component
        animates a text element through a series of keyframes that control its
        opacity, translation, scaling, rotation, and background color. Here’s a
        detailed breakdown of its functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>State Management:</strong> The <code>useState</code> hook is
          used to manage the restart state. The restart state is used to
          re-trigger the keyframe animation.
        </li>
        <li>
          <strong>Keyframes:</strong> The <code>Keyframe</code> API from React
          Native Reanimated is used to define the advanced animation sequence.
          The keyframe controls the opacity, translation, scaling, rotation, and
          background color of the text element.
        </li>
        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook is used
          to reset the restart state after the animation is triggered.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>State Initialization:</strong>
          <pre>
            <code>{`const [restart, setRestart] = useState(false);

const keyframeAnimation = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: -100 }, { scale: 0.5 }, { rotate: "0deg" }],
    backgroundColor: col[300],
  },
  20: {
    opacity: 0.5,
    transform: [{ translateY: -50 }, { scale: 0.75 }, { rotate: "90deg" }],
    backgroundColor: col[400],
  },
  40: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "180deg" }],
    backgroundColor: col[500],
  },
  60: {
    opacity: 0.75,
    transform: [{ translateY: 50 }, { scale: 1.25 }, { rotate: "270deg" }],
    backgroundColor: col[600],
  },
  80: {
    opacity: 0.5,
    transform: [{ translateY: 100 }, { scale: 1.5 }, { rotate: "360deg" }],
    backgroundColor: col[500],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "0deg" }],
    backgroundColor: col[400],
  },
}).duration(2000);`}</code>
          </pre>
          These lines initialize the state variable <code>restart</code> and
          define the keyframe animation with advanced sequential steps
          controlling opacity, translation, scaling, rotation, and background
          color.
        </li>

        <li>
          <strong>Restart Animation Function:</strong> The{" "}
          <code>restartAnimation</code> function toggles the restart state to
          re-trigger the animation.
          <pre>
            <code>{`const restartAnimation = () => {
  setRestart((prev) => !prev);
};`}</code>
          </pre>
        </li>

        <li>
          <strong>Effect Hook:</strong> The <code>useEffect</code> hook resets
          the restart state after the animation is triggered.
          <pre>
            <code>{`useEffect(() => {
  if (restart) {
    setRestart(false);
  }
}, [restart]);`}</code>
          </pre>
        </li>

        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
  <AnimationContainer
    height={screenHeight * 0.3}
    title="Advanced Sequence"
    resetAnimation={restartAnimation}
    headingLight
  >
    <FlexFull
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        key={restart.toString()}
        entering={keyframeAnimation}
        style={[
          boxShadows.xl,
          {
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextLg>Advanced Sequence</TextLg>
        </View>
      </Animated.View>
    </FlexFull>
  </AnimationContainer>
);`}</code>
          </pre>
          The component renders an animated view styled with both static and
          animated styles, representing text that animates through an advanced
          sequence of keyframes.
        </li>
      </ul>
      {/* Scroll-Triggered Animations */}
      <h3>Scroll-Triggered Animations</h3>
      <p>
        Animating based on scroll position can create engaging and intuitive
        UIs. Reanimated provides tools to trigger animations based on the scroll
        position.
      </p>
      <h3>Key Concepts</h3>
      <ul>
        <li>
          <strong>Scroll Position Tracking:</strong> Using shared values to
          track scroll position.
        </li>
        <li>
          <strong>Animating Elements Based on Scroll:</strong> Applying
          animations as the user scrolls.
        </li>
        <li>
          <strong>Smooth Transitions:</strong> Ensuring smooth and performant
          scroll animations.
        </li>
      </ul>
      <hr /> <h3>Example Eighteen: ScrollTo Component</h3>
      <iframe
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/videos/blog_53_ex18.mp4?t=2024-06-06T01%3A20%3A07.705Z"
        title="Scroll Animation Example"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* *************** EXAMPLE EIGHTEEN EXPLAINED *************** */}
      <p>
        Our final example demonstrates the use of React Native Reanimated to
        create a scrollable list that can be programmatically scrolled to
        specific items. This component utilizes animated references and shared
        values to control the scroll position of an{" "}
        <code>Animated.ScrollView</code>. Here’s a detailed breakdown of its
        functionality and implementation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          <strong>Animated References:</strong> <code>useAnimatedRef</code> is
          used to create a reference to the <code>Animated.ScrollView</code>.
          This reference is essential for controlling the scroll position
          programmatically.
        </li>
        <li>
          <strong>Shared Values:</strong> <code>useSharedValue</code> is used to
          create a shared value (<code>scroll</code>) which represents the
          current scroll position. This value is essential for tracking and
          updating the scroll position during the animation.
        </li>
        <li>
          <strong>Derived Values:</strong> <code>useDerivedValue</code> is used
          to derive the scroll position from the shared value and trigger the
          scrollTo function to update the scroll position of the{" "}
          <code>Animated.ScrollView</code>.
        </li>
        <li>
          <strong>ScrollTo Function:</strong> The <code>scrollTo</code> function
          is used to programmatically scroll to a specific position in the{" "}
          <code>Animated.ScrollView</code> based on the shared value.
        </li>
      </ul>
      <h4>Component Structure</h4>
      <ul>
        <li>
          <strong>Animated References and Shared Values Initialization:</strong>
          <pre>
            <code>{`const animatedRef = useAnimatedRef<Animated.ScrollView>();
const scroll = useSharedValue<number>(0);`}</code>
          </pre>
          These lines initialize the animated reference <code>animatedRef</code>{" "}
          and the shared value <code>scroll</code>.
        </li>
        <li>
          <strong>Derived Value and ScrollTo Function:</strong> The{" "}
          <code>useDerivedValue</code> hook derives the scroll position from the
          shared value and triggers the <code>scrollTo</code> function to update
          the scroll position.
          <pre>
            <code>{`useDerivedValue(() => {
  scrollTo(
    animatedRef,
    0,
    scroll.value * SCROLL_CONTAINER_HEIGHT - 100,
    true
  );
});`}</code>
          </pre>
        </li>
        <li>
          <strong>Items Array:</strong> An array of 100 items is created to
          populate the scrollable list.
          <pre>
            <code>{`const items = Array.from(Array(100).keys());`}</code>
          </pre>
        </li>
        <li>
          <strong>Rendering the Component:</strong>
          <pre>
            <code>{`return (
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
);`}</code>
          </pre>
          The component renders a gradient background with a scrollable list of
          items. Navigation buttons are provided to scroll up and down through
          the list.
        </li>
        <li>
          <strong>NavButton Component:</strong> A custom button component is
          used to navigate through the list by updating the shared scroll value.
          <pre>
            <code>{`const NavButton = ({
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
);`}</code>
          </pre>
        </li>
      </ul>
      {/* Wrapping Up Section */}
      <h3>Wrapping up</h3>
      <p>
        We've delved deeply into the capabilities and nuances of React Native
        Reanimated, showcasing a variety of animation techniques and their
        practical applications. From simple movements along the X and Y axes to
        sophisticated gesture-based interactions and advanced keyframe
        sequences, we've explored how React Native Reanimated can transform the
        user experience with smooth, interactive animations.
      </p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>
          <strong>Shared Values and Animated Styles:</strong> We've seen how
          shared values (<code>useSharedValue</code>) and animated styles (
          <code>useAnimatedStyle</code>) form the backbone of reanimated
          components, enabling dynamic and responsive animations.
        </li>
        <li>
          <strong>Timing and Spring Animations:</strong> Using{" "}
          <code>withTiming</code> and <code>withSpring</code>, we've created
          animations that smoothly transition between states or simulate natural
          physical behaviors like bouncing.
        </li>
        <li>
          <strong>Gestures Integration:</strong> By combining Reanimated with{" "}
          <code>react-native-gesture-handler</code>, we've crafted interactive
          components that respond to user gestures, enhancing the interactivity
          of our apps.
        </li>
        <li>
          <strong>Keyframes for Complex Animations:</strong> Keyframes allow for
          creating intricate animation sequences, giving fine-grained control
          over how elements transition between states. We demonstrated this with
          examples of text elements that transform through opacity, scale,
          rotation, and background color changes.
        </li>
        <li>
          <strong>Scroll Control:</strong> Leveraging <code>scrollTo</code> and
          animated references, we've learned how to create scrollable lists that
          can be programmatically controlled, offering a more guided and
          interactive scrolling experience.
        </li>
        <li>
          <strong>Text Animations:</strong> Various text animations showcased
          how to animate text properties like color, scale, rotation, and
          position, providing visually engaging effects that can be used to
          enhance UI elements.
        </li>
        <li>
          <strong>Reanimated’s Flexibility:</strong> The examples demonstrate
          Reanimated’s flexibility and power in creating animations that range
          from simple transitions to complex sequences, making it an invaluable
          tool for React Native developers looking to add flair and
          interactivity to their applications.
        </li>
      </ul>
      <h3>Practical Application</h3>
      <p>
        Through these examples, you should now have a solid foundation to start
        implementing your own animations in React Native. The versatility of
        Reanimated opens up numerous possibilities for creating engaging,
        dynamic user interfaces. Whether you are building a simple app or a
        complex interactive experience, understanding and utilizing the
        techniques covered in this post will help you deliver a more polished
        and professional product.
      </p>
      <h3>Final Thoughts</h3>
      <p>
        Animation is a critical aspect of modern mobile app development,
        enhancing the user experience by making interactions more intuitive and
        visually appealing. React Native Reanimated stands out as a powerful
        library that not only makes it easier to implement these animations but
        also offers the performance and control needed to create sophisticated,
        fluid animations. By integrating these techniques into your projects,
        you can elevate the user experience and create applications that truly
        stand out.
      </p>
      <p>
        Thank you for following along with this exploration of React Native
        Reanimated. I hope these insights and examples inspire you to experiment
        and create your own stunning animations. Keep pushing the boundaries of
        what’s possible, and happy animating!
      </p>
      <p>
        🔗{" "}
        <a
          href="https://www.reanimated2.com/docs/fundamentals/getting-started"
          target="_blank"
        >
          React Native Reanimated - Getting Started
        </a>
      </p>
    </React.Fragment>,
  ],
};
