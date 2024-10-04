import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import {
  AnimatedBadgeExample,
  AnimatedBarChartComponent,
  AnimatedMenuExample,
  AnimatedSubmitButton,
  BackgroundColorExample,
  BlurExample,
  BouncingBallExample,
  BoxShadowExample,
  FlowerOfLifeSvgExample,
  MultipleAnimationsExample,
  OpacityExample,
  PropertyPlayground,
  RotateExample,
  ScaleExample,
  SkewExample,
  WidthAndHeightExample,
  XandYAxes,
} from "../individual-blog-components/framerUseAnimation/framerUseAnimation";

export const framerMotionUseAnimation: BlogPost = {
  id: "65",
  date: "2024-09-18",
  title: "Framer Motion's useAnimation Hook: Master Animation Control",
  slug: "framer-motions-useanimation-hook-master-animation-control",
  author: "Evan Marie Carr",
  avatar: EvanAvatar,
  tags: ["Animation", "Framer", "Web Development"],
  categories: [
    "Programming",
    "Creativity",
    "UX / UI & Frontend Design",
    "Web Animation",
  ],
  image:
    "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog65.webp",
  summary:
    "A comprehensive guide to mastering Framer Motion's useAnimation hook, demonstrating how to create sophisticated, dynamic animations through real-world examples and best practices",
  paragraphs: [
    <React.Fragment key="framer-motions-useanimation-hook-master-animation-control">
      <h1>
        Mastering Animation Control with Framer Motion's useAnimation Hook
      </h1>
      <p>
        In modern web development, smooth animations can make or break a user
        experience. While Framer Motion provides a wide range of out-of-the-box
        animation capabilities, there are times when you need even finer
        control, when a dynamic animation idea comes into your mind and your
        want to make it a part of your application or website. For this, we have
        the useAnimation hook, Framer Motion's imperative animation API that
        empowers developers to directly manipulate animations based on events,
        conditions, or sequences.
      </p>
      <p>
        In this comprehensive guide, we'll dive deep into the world of
        useAnimation, exploring its features, best practices, and real-world
        applications. By the end of this post, you'll have the knowledge and
        tools to create sophisticated, performant animations that will delight
        your users and set your applications apart.
      </p>
      <h2>What is useAnimation?</h2>
      <p>
        useAnimation is a custom hook provided by Framer Motion that returns an
        AnimationControls object. This object allows you to manually start,
        stop, and control animations on one or more motion components. Unlike
        basic Framer Motion animations that are typically triggered by changes
        in props or state, useAnimation gives you fine-grained control over when
        and how animations occur.
      </p>
      <h3>How useAnimation differs from basic Framer Motion animations</h3>
      <p>
        While basic Framer Motion animations are declarative and automatically
        triggered, useAnimation provides an imperative approach. This means you
        have direct control over the animation lifecycle, allowing you to create
        complex sequences, coordinate multiple elements, and respond to user
        interactions or other events in real-time.
      </p>
      <h2>Key methods of AnimationControls</h2>
      <p>
        The AnimationControls object returned by useAnimation comes with several
        powerful methods:
      </p>
      <ul>
        <li>
          <strong>start(definition, transitionOverride?)</strong>: Initiates the
          animation. The definition is an object of properties you want to
          animate, and transitionOverride can be used to customize how the
          animation behaves.
        </li>
        <li>
          <strong>stop()</strong>: Stops all running animations on the attached
          motion components instantly, without completing them.
        </li>
        <li>
          <strong>set(definition)</strong>: Immediately sets values on the
          motion component without an animation. Useful for resetting or
          pre-setting component properties.
        </li>
        <li>
          <strong>mount()</strong>: Automatically handled by Framer Motion to
          attach controls to a component.
        </li>
        <li>
          <strong>unmount()</strong>: Automatically handled by Framer Motion to
          clean up resources when the controls are no longer needed.
        </li>
      </ul>
      <h2>Basic Usage of useAnimation</h2>
      <p>
        Let's start with a simple example to illustrate how useAnimation works.
      </p>
      <XandYAxes />
      <p>
        The XandYAxes component demonstrates the power and flexibility of Framer
        Motion's useAnimation hook. Here's how useAnimation is employed in this
        component:
      </p>
      <ul>
        <li>
          <strong>Initialization</strong>: The component initializes the
          animation controls using const controls = useAnimation().
        </li>
        <li>
          <strong>Sequential Animation</strong>: useAnimation enables the
          creation of complex sequential animations. Here's a simple example
          using both X and Y axis movements.
        </li>
      </ul>
      <pre>
        <code>
          {`const sequence = async () => {
  // Start moving the component 13vh to the right
  await controls.start({ x: "13vh" });
  // Move it back to the left by 13vh
  await controls.start({ x: "-13vh" });
  // Move it down by 13vh
  await controls.start({ y: "13vh" });
  // Move it back up to the original Y position
  await controls.start({ y: "-13vh" });
  // Reset both X and Y coordinates
  await controls.start({ x: 0, y: 0 });
};`}
        </code>
      </pre>
      <p>
        Each controls.start() call returns a promise, allowing the use of await
        to ensure animations occur in sequence.
      </p>
      <ul>
        <li>
          <strong>Triggering the Animation</strong>: The sequence is triggered
          within a useEffect hook, ensuring it runs when the component mounts.
        </li>
      </ul>
      <pre>
        <code>
          {` useEffect(() =&gt; {
  // Call the sequence function when the component mounts
  sequence();
  // Adding controls as a dependency ensures that the sequence is re-run
  // whenever the controls object is updated
}, [controls]);`}
        </code>
      </pre>
      <p>
        By using useAnimation, this component achieves fine-grained control over
        a multi-step animation sequence, demonstrating how to move an element
        along both X and Y axes in a predetermined order.
      </p>
      <hr />
      <h2>Exploring Framer Motion's Animation Properties</h2>
      <p>
        Framer Motion offers a rich set of properties that you can animate,
        allowing you to create diverse and engaging visual effects.
        Understanding these properties is important for mastering animation in
        your React applications. Let's explore the main categories of animatable
        properties:
      </p>
      <h3>Transform Properties</h3>
      <p>
        These properties allow you to manipulate the position, scale, and
        rotation of elements:
      </p>
      <ul>
        <li>
          <strong>x, y, z</strong>: Translate elements in 2D or 3D space.
        </li>
        <li>
          <strong>scale, scaleX, scaleY</strong>: Grow or shrink elements.
        </li>
      </ul>
      <ScaleExample />
      <ul>
        <li>
          <strong>rotate, rotateX, rotateY, rotateZ</strong>: Rotate elements in
          2D or 3D.
        </li>
      </ul>
      <RotateExample />
      <ul>
        <li>
          <strong>skew, skewX, skewY</strong>: Apply skew transformations.
        </li>
      </ul>
      <SkewExample />
      <ul>
        <li>
          <strong>originX, originY, originZ</strong>: Set the origin for
          transformations.
        </li>
      </ul>
      <h3>Positioning Properties</h3>
      <p>Control the position and size of elements:</p>
      <ul>
        <li>
          <strong>top, left, right, bottom</strong>: Set the position of
          absolutely positioned elements.
        </li>
        <li>
          <strong>width, height</strong>: Animate the dimensions of elements.
        </li>
      </ul>
      <WidthAndHeightExample />
      <h3>Opacity</h3>
      <p>Control the transparency of elements:</p>
      <ul>
        <li>
          <strong>opacity</strong>: Fade elements in and out.
        </li>
      </ul>
      <OpacityExample />
      <h3>Color and Background</h3>
      <p>Animate colors and backgrounds:</p>
      <ul>
        <li>
          <strong>backgroundColor, color</strong>: Change background and text
          colors.
        </li>
      </ul>
      <BackgroundColorExample />
      <ul>
        <li>
          <strong>borderColor, borderWidth, borderRadius</strong>: Animate
          border properties.
        </li>
        <li>
          <strong>boxShadow</strong>: Create dynamic shadow effects.
        </li>
      </ul>
      <BoxShadowExample />
      <h3>Layout Properties</h3>
      <p>Useful for animating flex container children:</p>
      <ul>
        <li>
          <strong>flexGrow, flexShrink, order</strong>: Animate flexbox
          properties.
        </li>
      </ul>
      <h3>3D and Perspective</h3>
      <p>Create depth and 3D effects:</p>
      <ul>
        <li>
          <strong>perspective, perspectiveOrigin, transformPerspective</strong>:
          Control 3D transformations.
        </li>
      </ul>
      <h3>Filter Effects</h3>
      <p>Apply and animate CSS filters:</p>
      <ul>
        <li>
          <strong>
            blur, brightness, contrast, grayscale, hueRotate, invert, saturate,
            sepia
          </strong>
          : Create various visual effects.
        </li>
      </ul>
      <BlurExample />
      <h3>Other Visual Properties</h3>
      <p>Additional properties for diverse animations:</p>
      <ul>
        <li>
          <strong>zIndex</strong>: Animate stacking order.
        </li>
        <li>
          <strong>backgroundSize, backgroundPosition</strong>: Animate
          background images.
        </li>
      </ul>
      <h3>SVG-Specific Properties</h3>
      <p>
        SVG elements offer a rich canvas for creating intricate animations, and
        Framer Motion integrates seamlessly with them. Let's look at an example
        of animating an SVG pattern—like the Flower of Life example below —with
        staggered circle animations. This can be especially useful for adding
        subtle depth and visual engagement to your interface.
      </p>
      <ul>
        <li>
          <strong>pathLength, pathOffset</strong>: Control SVG path animations.
        </li>
        <li>
          <strong>strokeWidth, stroke, fill</strong>: Animate SVG styling.
        </li>
        <li>
          <strong>cx, cy, r</strong>: Animate circle properties.
        </li>
        <li>
          <strong>points</strong>: Animate polygon and polyline shapes.
        </li>
        <li>
          <strong>clipPath</strong>: Create shape-based animations.
        </li>
      </ul>
      <FlowerOfLifeSvgExample />
      <p>
        The Animated Flower of Life component demonstrates the power and
        flexibility of Framer Motion when working with SVG animations in Remix
        and React. It takes the sacred geometry pattern known as the Flower of
        Life and brings it to life with subtle, mesmerizing animations.
      </p>
      <ul>
        <li>
          <strong>SVG Geometry</strong>: The component uses SVG to create a
          perfect Flower of Life pattern, consisting of seven intersecting
          circles. This demonstrates precise control over SVG elements and their
          positioning.
        </li>
        <li>
          <strong>Framer Motion Integration</strong>: It transforms static SVG
          elements into dynamic, animated shapes. This showcases how easily
          Framer Motion integrates with SVG in React applications.
        </li>
        <li>
          <strong>Pulsing Animation</strong>: Each circle in the pattern gently
          pulses, scaling slightly larger and becoming more opaque before
          returning to its original state. This creates a breathing effect that
          draws the viewer's attention.
        </li>
        <li>
          <strong>Staggered Animation</strong>: The surrounding circles start
          their animations with a slight delay relative to each other, creating
          a ripple effect that adds depth and interest to the overall animation.
        </li>
        <li>
          <strong>Customizable Properties</strong>: The component allows for
          easy customization of colors, sizes, and animation parameters, making
          it adaptable for various design needs.
        </li>
        <li>
          <strong>Responsive Design</strong>: The SVG viewBox and size settings
          ensure that the Flower of Life scales appropriately across different
          screen sizes.
        </li>
      </ul>
      <p>
        This example serves as an excellent demonstration of how Framer Motion
        can be used to create complex, visually appealing animations with SVG in
        React. It combines mathematical precision in SVG creation with the fluid
        animation capabilities of Framer Motion, resulting in a captivating
        visual element that can enhance any user interface or serve as a
        standalone artistic component.
      </p>
      <h3>Transition Properties</h3>
      <p>Fine-tune how animations behave:</p>
      <ul>
        <li>
          <strong>duration, delay</strong>: Control timing.
        </li>
        <li>
          <strong>type</strong>: The type of animation, which can be 'tween' for
          standard keyframe-based animation or 'spring' for physics-based
          movement.
        </li>
        <li>
          <strong>ease</strong>: Defines the rate of change in the animation
          over time, determining how the animation transitions between its start
          and end points.
        </li>
        <li>
          <strong>stiffness, damping, mass, velocity</strong>: Parameters that
          customize the spring animations. Higher stiffness makes the spring
          more rigid, while damping controls how quickly the spring comes to
          rest.
        </li>
        <li>
          <strong>repeat, repeatType, repeatDelay</strong>: Control animation
          repetition.
        </li>
      </ul>
      <p>
        The Transition Property Playground component below is a powerful and
        interactive tool designed to help developers and designers understand
        and experiment with Framer Motion's animation capabilities. This
        versatile playground brings animation properties to life, allowing users
        to visualize the effects of various settings in real-time.
      </p>
      <PropertyPlayground />
      <ul>
        <li>
          <strong>Interactive Animation Controls</strong>: Users can adjust a
          wide range of animation properties, including duration, delay, ease,
          and more, seeing the effects instantly.
        </li>
        <li>
          <strong>Tween vs Spring Animations</strong>: The component allows
          switching between tween and spring animation types, showcasing the
          unique characteristics of each.
        </li>
        <li>
          <strong>Spring Physics Parameters</strong>: When in spring mode, users
          can fine-tune stiffness, damping, mass, and velocity to understand how
          these physics properties affect motion.
        </li>
        <li>
          <strong>Repeat and Timing Options</strong>: Experiment with different
          repeat counts, repeat types (loop, reverse, mirror), and repeat delays
          to create complex animation sequences.
        </li>
      </ul>
      <p>
        The Transition Property Playground not only demonstrates the flexibility
        of Framer Motion but also serves as an invaluable learning tool. By
        allowing users to manipulate various animation parameters and instantly
        see the results, it bridges the gap between theory and practice in web
        animation.
      </p>
      <hr />
      <h2>Orchestrating Multiple Animations</h2>
      <p>
        One of the strengths of useAnimation is its ability to control multiple
        components simultaneously. Here's an example.
      </p>
      <MultipleAnimationsExample />
      <p>
        In this example, both boxes will scale up and then rotate when the
        button is clicked. This demonstrates how a single AnimationControls
        instance can orchestrate animations across multiple components.
      </p>
      <h2>Chaining Animations</h2>
      <p>
        Creating complex sequences of animations is where useAnimation really
        shines. Let's look at a more intricate example.
      </p>
      <BouncingBallExample />
      <p>
        This example creates a ball that, when the &quot;Bounce&quot; button is
        clicked, falls, compresses slightly on impact, and then bounces back up.
        The bounce function chains multiple animations to create this realistic
        effect.
      </p>
      <h2>Conditional Animations</h2>
      <p>
        useAnimation shines when you need to trigger animations based on certain
        conditions. Here's a real-world scenario.
      </p>
      <AnimatedBadgeExample />
      <p>
        This component creates a notification badge that briefly scales up
        whenever the count changes to a non-zero value, drawing the user's
        attention.
      </p>
      <hr />
      <h2>Real-World Examples of useAnimation in Action</h2>
      <p>
        While understanding the core concepts of useAnimation is essential,
        seeing how it applies in practical scenarios truly highlights its power.
        In this section, we'll explore several real-world examples where
        useAnimation can enhance user interactions, create dynamic visual
        feedback, and add subtle but impactful polish to your web applications.
      </p>
      <p>
        Examples such as interactive navigation menus and animated charts and
        buttons show how to use the fine-grained control offered by
        useAnimation, demonstrating how you can orchestrate complex animation
        sequences, react to user input, and bring static components to life.
      </p>
      <p>
        Let's explore how to apply these animations in everyday applications to
        make your interfaces more engaging and enjoyable.
      </p>
      <h3>Animated Submit Button</h3>
      <AnimatedSubmitButton />
      <p>
        For users, it's often the small details that make a big difference. This
        SubmitButton component is a perfect example of how a simple element can
        be transformed into an engaging, informative, and beneficial user
        interface feature.
      </p>
      <ul>
        <li>
          <strong>State-Aware Animations</strong>: Utilizing Framer Motion, the
          button smoothly transitions between states, providing visual feedback
          for user actions.
        </li>
        <li>
          <strong>Interactive Feedback</strong>: A subtle scale animation occurs
          on click, giving users immediate tactile-like feedback.
        </li>
        <li>
          <strong>Progress Indication</strong>: The button text changes to
          'Submitting...' during the process, keeping users informed of the
          ongoing action.
        </li>
        <li>
          <strong>Success State</strong>: Upon completion, the button transforms
          both in color and text, clearly indicating a successful submission.
        </li>
        <li>
          <strong>Disabled State Handling</strong>: The button becomes
          unclickable during submission, preventing duplicate requests.
        </li>
      </ul>
      <h4>Why It Matters</h4>
      <ul>
        <li>
          <strong>Reduced Perceived Wait Times</strong>: Keeps the user engaged
          during processing, reducing the perceived wait time.
        </li>
        <li>
          <strong>Clear Visual Cues</strong>: Provides clear visual cues about
          the submission status, enhancing user confidence.
        </li>
        <li>
          <strong>Professional Touch</strong>: Adds a touch of polish and
          professionalism to your application.
        </li>
      </ul>
      <h3>Animated Navigation Menu</h3>
      <AnimatedMenuExample />
      <p>
        This example creates a sliding navigation menu that can be toggled open
        and closed with smooth spring animations. The AnimatedMenu component
        brings a touch of elegance to web navigation.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Spring-based animations for natural, fluid movement</li>
        <li>Toggle functionality for easy open/close actions</li>
        <li>Fully responsive design, adapting to various screen sizes</li>
        <li>Customizable menu items with icons for enhanced visual appeal</li>
      </ul>
      <p>
        Perfect for mobile-first designs or as a space-saving navigation
        solution for any web application, the AnimatedMenu combines
        functionality with style. Its use of <code>useAnimation</code> and{" "}
        <code>variants</code> demonstrates advanced Framer Motion techniques,
        resulting in a polished, professional user interface element.
      </p>
      <p>
        By transforming a standard navigation menu into an interactive, animated
        component, AnimatedMenu elevates the user experience, making site
        navigation not just functional, but enjoyable. It's a prime example of
        how subtle animations can significantly enhance the feel and usability
        of a web application.
      </p>
      <h3>Animated Bar Chart</h3>
      <AnimatedBarChartComponent />
      <p>
        The AnimatedBarChart component is a sleek, interactive data
        visualization tool built with React and Framer Motion. This dynamic
        chart breathes life into your data, transforming static numbers into an
        engaging visual story.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Smooth, staggered animations that draw the viewer's attention</li>
        <li>Responsive design that adapts to various screen sizes</li>
        <li>Customizable X and Y axis labels for clear data context</li>
        <li>Gradient styling for enhanced visual appeal</li>
        <li>Built-in error handling for robustness</li>
      </ul>
      <p>This type of component could be extremely useful for:</p>
      <ul>
        <li>
          <strong>Financial Dashboards</strong>: Visualize monthly revenue,
          expenses, or profit margins with animated bars that grow as the fiscal
          year progresses.
        </li>
        <li>
          <strong>Health and Fitness Apps</strong>: Display workout statistics
          or daily step counts, motivating users with vibrant, growing bars
          representing their progress.
        </li>
        <li>
          <strong>E-commerce Analytics</strong>: Show product sales trends over
          time, helping merchants quickly identify best-selling items or peak
          sales periods.
        </li>
        <li>
          <strong>Social Media Insights</strong>: Illustrate engagement metrics
          like likes, shares, or comments across different posts or platforms.
        </li>
        <li>
          <strong>Environmental Monitoring</strong>: Present data on air
          quality, water usage, or energy consumption, making complex
          environmental data more accessible to the public.
        </li>
        <li>
          <strong>Educational Tools</strong>: Create interactive lessons on
          statistics or data analysis, allowing students to input data and see
          real-time visualizations.
        </li>
        <li>
          <strong>Project Management</strong>: Display task completion rates or
          resource allocation across different project phases, providing
          stakeholders with an at-a-glance project status.
        </li>
      </ul>
      <p>
        The AnimatedBarChart component transforms raw data into an intuitive,
        visually appealing format. By using the power of animations, it not only
        presents information but also engages users, making data interpretation
        a more interactive and pleasant experience.
      </p>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Framer Motion's useAnimation hook opens up a world of possibilities for
        creating engaging, dynamic user interfaces in React applications.
        Throughout this guide, we've explored the power and versatility of
        useAnimation, from its basic concepts to advanced techniques and
        real-world applications.
      </p>
      <p>
        We've seen how useAnimation allows for fine-grained control over
        animations, enabling developers to create complex sequences, coordinate
        multiple elements, and respond dynamically to user interactions.
      </p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>
          The flexibility of useAnimation in creating both simple and complex
          animation sequences
        </li>
        <li>
          The importance of understanding and utilizing various animation
          properties for creating polished UI elements
        </li>
        <li>
          The impact of thoughtful animations on user experience and engagement
        </li>
        <li>
          The versatility of Framer Motion in handling different types of
          animations, from SVG to layout changes
        </li>
      </ul>
      <p>
        As you continue to explore Framer Motion and useAnimation, remember that
        the most effective animations are those that enhance user experience
        without overwhelming it. Experiment with the techniques and examples
        provided, and don't be afraid to push the boundaries of what's possible
        in web animation.
      </p>
      <p>
        By mastering useAnimation and Framer Motion, you're well-equipped to
        create web applications that not only function flawlessly but also
        delight users with smooth, engaging interactions. Happy animating!
      </p>
      <h2>References</h2>
      <ol>
        <li>
          <a href="https://framerbook.com/archive/animations/chaining-animations/">
            Chaining Animations with Framer Motion
          </a>
        </li>
        <li>
          <a href="https://github.com/framer/motion/issues/559">
            Framer Motion Issue #559 - Running Multiple Animations in Sequence
          </a>
        </li>
        <li>
          <a href="https://blog.noelcserepy.com/maximizing-the-power-of-framer-motion-with-useanimationcontrols">
            Maximizing the Power of Framer Motion with useAnimationControls
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Ec03ndZle3Q">
            Using useAnimation in Framer Motion - Step-by-Step Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/use-animation-controls/">
            Framer Motion Documentation: useAnimationControls
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/animation/">
            Framer Motion: Animation Basics
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/examples/">
            Official Examples from Framer Motion
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/71890064/question-about-running-multiple-animations-in-sequence-with-framer-motion">
            Running Multiple Animations in Sequence with Framer Motion
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/">
            Framer Motion - The Animation Library
          </a>
        </li>
        <li>
          <a href="https://startup-house.com/blog/mastering-framer-motion">
            Mastering Framer Motion: A Comprehensive Guide
          </a>
        </li>
        <li>
          <a href="https://welleton.com/blog-articles/understanding-and-implementing-framer-motion-in-web-development">
            Understanding and Implementing Framer Motion in Web Development
          </a>
        </li>
        <li>
          <a href="https://www.framer.com/motion/utilities/">
            Utilities in Framer Motion
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/reactjs/comments/mut80r/advanced_animation_patterns_with_framer_motion/">
            Advanced Animation Patterns with Framer Motion
          </a>
        </li>
        <li>
          <a href="https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/">
            Advanced Animation Patterns with Framer Motion
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=znbCa4Rr054">
            Framer Motion Animation Tutorial
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/reactjs/comments/13dritz/thoughts_about_framer_motion/">
            Thoughts About Framer Motion
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=oilSbMPCsow">
            Framer Motion Tutorial - Tips for Developers
          </a>
        </li>
      </ol>
    </React.Fragment>,
  ],
};
