import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";

import React from "react";
import {
  FadeInComponent,
  MovingBox,
  Reanimate,
  ScaleSpringBox,
  XandYAnimation,
} from "../../blog-components/blogUtilityComponents";

export const AnimationsWithUseSpring: BlogPost =
  // Animations in React and Remix with use-spring
  {
    id: "30",
    date: "2024-04-11",
    title: "Animations in React and Remix with use-spring",
    slug: "animations-in-react-and-remix-with-use-spring",
    author: "Evan Marie Carr",
    categories: ["UX / UI & Frontend Design", "Programming", "Web Animation"],
    avatar: EvanAvatar,
    tags: ["ReactSpring", "Animation", "WebDevelopment", "UseSpringHook"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog30.png",
    summary:
      "Explore the dynamic capabilities of use-spring from react-spring and dive deep into making your React applications come alive with natural, physics-based animations.",
    paragraphs: [
      <React.Fragment key="animation-in-react-and-remix-with-use-spring">
        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Introduction</h2>

        <p>
          In the dynamic world of web development, animations play a crucial
          role in enhancing user experience by making interfaces smoother and
          more interactive. react-spring stands out by providing fluid, natural
          motion animations to React and Remix applications, thanks to its
          spring-physics based system. This post explores the use-spring hook, a
          powerful feature of react-spring that lets you create compelling
          animations with ease.
        </p>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>What is use-spring?</h2>

        <p>
          use-spring is a hook provided by react-spring that allows you to
          animate almost anything in your React or Remix application, from
          opacity and color transitions to complex transformations like
          rotations and scaling. Unlike traditional animation libraries that
          rely on duration-based timings, use-spring uses spring dynamics for a
          more natural feel.
        </p>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Getting Started with use-spring</h2>

        <p>
          To start using use-spring, you'll first need to install react-spring.
          You can add it to your project via npm:
        </p>

        {/* ********************* CODE BLOCK ********************* */}
        <div className="code-wrapper">
          <pre>
            <code>{`npm install react-spring`}</code>
          </pre>
        </div>
        <p>
          Here's a simple example to demonstrate how use-spring can be used to
          animate a component:
        </p>

        {/* ********************* REANIMATE COMPONENT ********************* */}
        <Reanimate title="use-spring basics">
          <FadeInComponent />
        </Reanimate>

        {/* ********************* CODE BLOCK ********************* */}
        <div className="code-wrapper">
          <pre>
            <code>{`import { useSpring, animated } from 'react-spring';
function FadeInComponent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props} className="p-[1vh] bg-violet-800">
      I fade in!
    </animated.div>
  );
}`}</code>
          </pre>
        </div>

        <p>
          In this example, the component fades in from opacity 0 to 1 when it
          mounts.
        </p>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Advanced Usage</h2>

        <p>use-spring can also handle more complex animations:</p>

        {/* ********************* REANIMATE COMPONENT ********************* */}
        <Reanimate title="use-spring basics">
          <MovingBox />
        </Reanimate>

        {/* ********************* CODE BLOCK ********************* */}
        <div className="code-wrapper">
          <pre>
            <code>{`import { useSpring, animated } from 'react-spring';
function MovingBox() {
  const movingProps = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(100%)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });
  return (
    <animated.div style={movingProps} className="p-[1vh] bg-violet-800">
      I move right!
    </animated.div>
  );
}`}</code>
          </pre>
        </div>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Core Concepts</h2>

        <ul>
          <li>
            <strong>Spring Physics Explained:</strong> At its core, use-spring
            utilizes a physics-based model which simulates the characteristics
            of a spring. This model is defined by parameters such as tension,
            which controls the stiffness of the spring; friction, which dampens
            the motion; and mass, which affects the inertia of the animated
            object. By adjusting these parameters, developers can create
            animations that feel natural and responsive to user interactions.
          </li>
          <li>
            <strong>Animation Properties:</strong> The use-spring hook provides
            several properties that help customize the behavior of animations.
            For example, from and to define the starting and ending states of
            the animation, while reset, reverse, and loop control how the
            animation progresses and repeats. Understanding these properties
            allows developers to create more dynamic and interactive animations.
          </li>
        </ul>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Advanced Configuration</h2>

        <p>
          <strong>Configuring Spring Parameters:</strong> Each animation can be
          fine-tuned with its own set of spring parameters. For instance, a
          scaling animation might use low tension and high friction to simulate
          the effect of something loosely bouncing back into place. Here’s how
          you might configure a spring for such an effect:
        </p>

        {/* ********************* REANIMATE COMPONENT ********************* */}
        <Reanimate title="use-spring basics">
          <ScaleSpringBox />
        </Reanimate>

        {/* ********************* CODE BLOCK ********************* */}
        <div className="code-wrapper">
          <pre>
            <code>{`const scaleSpring = useSpring({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(2)' },
  config: { tension: 70, friction: 10 }
});`}</code>
          </pre>
        </div>

        <p>
          <strong>Using config Property:</strong> The config property allows
          developers to quickly apply common types of dynamics to an animation.
          react-spring offers several presets such as molasses, gentle, and
          stiff, which can be used to apply consistent traits across different
          animations.
        </p>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Handling Events and Lifecycles</h2>

        <ul>
          <li>
            <strong>Events in Animations:</strong> The use-spring hook supports
            several events that can help manage the animation lifecycle. onStart
            is triggered when the animation begins, onRest when it comes to a
            stop, and onChange whenever the animated values change. These can be
            crucial for coordinating complex sequences of animations or
            triggering side effects in your application.
          </li>
          <li>
            <strong>Lifecycle Management:</strong> Managing the lifecycle of
            animations in React and Remix is straightforward with use-spring.
            You can easily start, stop, and adjust animations based on component
            lifecycle methods or React hooks such as useEffect. This ensures
            that animations remain in sync with the user interface and state of
            the application.
          </li>
        </ul>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Practical Examples</h2>

        <ul>
          <li>
            <strong>Complex Motion Paths:</strong> Animating an element along a
            path can be achieved by interpolating the motion based on the
            animated value. For instance, you might animate a component along a
            bezier curve by interpolating its left and top properties based on
            the progress of the animation:
          </li>
        </ul>

        {/* ********************* CODE BLOCK ********************* */}
        <div className="code-wrapper">
          <pre>
            <code>{`const XandYAnimation = useSpring({
  from: { x: 0, y: 0 },
  to: { x: 200, y: 60 },
  config: { duration: 3000 }
});`}</code>
          </pre>
        </div>

        {/* ********************* REANIMATE COMPONENT ********************* */}
        <Reanimate title="use-spring basics">
          <XandYAnimation />
        </Reanimate>

        <ul>
          <li>
            <strong>Chained Animations:</strong> To create a sequence of
            animations, you can use useChain to coordinate the timing of
            multiple use-spring animations. This allows you to create
            sophisticated animation sequences that are dependent on each other's
            completion.
          </li>
        </ul>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Performance Optimization</h2>

        <ul>
          <li>
            <strong>Optimizing for Performance:</strong> To ensure animations do
            not hinder performance, it’s important to optimize the number of
            active animations and consider using the will-change CSS property to
            inform the browser of elements that will animate. This can help in
            preparing the browser for potential changes, improving rendering
            performance.
          </li>
          <li>
            <strong>Best Practices:</strong> Some best practices with use-spring
            include minimizing the number of animatable properties, using the
            config presets for consistency, and being mindful of rerenders in
            React and Remix that might trigger animations unintentionally.
          </li>
        </ul>

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>Conclusion</h2>

        <p>
          With all the capabilities of use-spring, developers can create
          incredibly fluid, dynamic, and responsive animations that enhance user
          experience. This expanded guide provides a deeper dive into making the
          most out of react-spring for sophisticated and performance-friendly
          web animations.
        </p>

        <p>
          Thanks for taking this journey with me into the world of use-spring
          and react-spring. I hope you found this guide helpful and inspiring
          for your next animation project. Remember, the possibilities are
          endless when it comes to creating engaging and interactive animations
          with use-spring! So get animating! You might get as addicted to it as
          I am.
        </p>
      </React.Fragment>,
    ],
  };
