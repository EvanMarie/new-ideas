import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";

import React from "react";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import GistRender from "../../blog-components/gistRender";
import AudioPlayer from "../../blog-components/audioPlayer";
import { ImageWithZoom } from "../../blog-components/imageWithZoom";

export const PowerpointToCode: BlogPost =
  // Presentation Web-Based Remix
  {
    id: "64",
    date: "2024-09-14",
    title: "Graduating from PowerPoint to Code: A New Way to Present",
    slug: "the-future-of-presentation-web-based-remix",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Presentations", "Slide-Shows", "Web Development"],
    categories: [
      "Programming",
      "Creativity",
      "UX / UI & Frontend Design",
      "Web Animation",
      "Data",
      "Data Visualization",
    ],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog64.webp",
    summary:
      "Discover how web technologies like Remix, Tailwind CSS, and Framer Motion are revolutionizing presentations, offering enhanced accessibility, real-time collaboration, dynamic content, and AI-powered features that leave traditional PowerPoint in the dust.",
    paragraphs: [
      <React.Fragment key="the-future-of-presentation-web-based-remix">
        <h2>
          Graduating From PowerPoint to Code: Building Dynamic Presentations
          with Remix, Tailwind CSS, and Framer Motion
        </h2>
        <p>
          Hey developers, let's talk presentations. If you're still firing up
          PowerPoint when you need to showcase your ideas, it's time for an
          upgrade. As a developer, you have the power to create presentations
          that are not just slides, but immersive, interactive experiences.
          &quot;How?!&quot;, you ask? The answer is Remix, Tailwind CSS, and
          Framer Motion – the holy trinity of web technologies that are
          revolutionizing the way we communicate ideas.
        </p>
        <p>
          Imagine using your coding skills to build presentations that are as
          dynamic and flexible as the web itself. With Remix, you're not just
          making slides; you're crafting web applications that can do anything
          you can dream up. Want real-time data integration? No problem.
          Interactive demos? Easy. Responsive designs that look great on any
          device? That's a given.
        </p>
        <p>
          As someone who's been deep in the trenches of both development and
          digital communication, I can tell you that the difference is night and
          day. PowerPoint feels like a relic from another era when you realize
          what's possible with these web technologies. So, let's dive into why,
          as a developer, you should be reaching for your code editor instead of
          PowerPoint the next time you need to make a presentation. Trust me,
          once you see what's possible, you'll never look back.
        </p>
        <h3>Bringing a Developer's Edge to Presentations with Remix</h3>
        <p>
          In the world of development, we're always looking for ways to make our
          work more efficient, scalable, and accessible. When it comes to
          presentations, Remix brings these same principles to the forefront. As
          a developer, you're no longer constrained by the limitations of
          traditional presentation software. Instead, you're employing the full
          power of the web to create presentations that are as flexible and
          dynamic as your code.
        </p>
        <p>
          Remember those cringe-worthy moments when a presenter struggles with
          software compatibility or frantically searches for the right adapter?
          We can put an end to that. With Remix-powered presentations, we're not
          just solving problems – we're elevating the entire presentation
          experience:
        </p>
        <ul>
          <li>
            <strong>Universal Accessibility</strong>: Your presentation is a web
            app. It runs anywhere there's a browser, whether it's a laptop,
            tablet, or smartphone. No more worrying about whether your audience
            has the right software version.
          </li>
          <li>
            <strong>Version Control Friendly</strong>: Treat your presentation
            like any other code project. Use Git for version control,
            collaborate with pull requests, and roll back changes if needed.
            It's a workflow you already know and love.
          </li>
          <li>
            <strong>API Integration</strong>: Need real-time data in your
            slides? With Remix, you can fetch data from APIs on the fly,
            ensuring your presentation always shows the latest information.
          </li>
          <li>
            <strong>Custom Interactivity</strong>: Want to include a live coding
            demo or an interactive data visualization? As a developer, you have
            the power to build these directly into your presentation.
          </li>
          <li>
            <strong>Responsive Design</strong>: Put your front-end skills to
            work with Tailwind CSS to create presentations that look great on
            any screen size, from mobile devices to large projectors.
          </li>
        </ul>
        <p>
          By building presentations with Remix, we're not just avoiding
          compatibility issues – we're opening up a world of possibilities that
          traditional presentation software can't touch. It's time to bring our
          developer mindset to the way we present information.
        </p>
        <h3>Collaboration Made Easy: Git-style Teamwork for Presentations</h3>
        <p>
          We developers are used to collaborative workflows with tools like Git.
          Now, imagine bringing that same level of collaboration to your
          presentations. Remix transforms the presentation creation process into
          a full-fledged web development project, unlocking a world of
          collaborative possibilities familiar to software developers. Say
          goodbye to the headaches of reconciling multiple PowerPoint versions.
          When you build presentations with Remix, teamwork becomes seamless and
          intuitive:
        </p>
        <ul>
          <li>
            <strong>Real-time pair presenting</strong>: Work on the same
            presentation simultaneously, just like pair programming. Watch
            changes appear in real-time as your team contributes.
          </li>
          <li>
            <strong>Branch and merge</strong>: Create feature branches for
            different sections of your presentation. Merge them when ready,
            resolving conflicts just like in your code.
          </li>
          <li>
            <strong>Pull request reviews</strong>: Use GitHub or GitLab to
            review presentation changes. Suggest modifications and discuss ideas
            right in the PR comments.
          </li>
          <li>
            <strong>CI/CD for presentations</strong>: Set up continuous
            integration to automatically build and deploy your presentation.
            Always have the latest version live and ready to present.
          </li>
        </ul>
        <h3>Version Control: Git for Your Slides</h3>
        <p>
          We live and breathe version control. With Remix presentations, you can
          bring that same power to your slides. Every change is tracked, every
          version is accessible, and you can roll back or fork at any time.
        </p>
        <p>
          Embrace the confidence that comes with Git-like version control for
          your presentations:
        </p>
        <ul>
          <li>
            <strong>Commit your slides</strong>: Make atomic commits for each
            significant change. Add detailed commit messages to track the
            evolution of your presentation.
          </li>
          <li>
            <strong>Time travel with checkouts</strong>: Need to go back to how
            your slides looked last week? Just checkout that commit.
          </li>
          <li>
            <strong>Feature flags for slides</strong>: Use feature flags to
            create different versions of your presentation for different
            audiences, all from the same codebase.
          </li>
        </ul>
        <h3>Dynamic Content: Your Presentation as a Living App</h3>
        <p>
          Static slides are to dynamic Remix presentations what static HTML is
          to modern web apps. As a developer, you can use your full stack skills
          to create presentations that are as dynamic and interactive as any web
          application.
        </p>
        <ul>
          <li>
            <strong>Real-time data integration</strong>: Connect to APIs and
            databases to display live data. Your charts and metrics update in
            real-time as you present.
          </li>
          <li>
            <strong>Interactive code playgrounds</strong>: Embed live code
            editors in your slides. Run code examples in real-time during your
            presentation.
          </li>
          <li>
            <strong>State management</strong>: Use React's state management to
            create interactive elements that remember user interactions across
            slides.
          </li>
          <li>
            <strong>Lazy loading and code splitting</strong>: Optimize
            performance by lazy loading slide content and splitting your
            presentation into manageable chunks.
          </li>
        </ul>
        <h3>Responsive Design: Flexbox and Grid for Your Slides</h3>
        <p>
          As web developers, we're used to creating responsive designs for
          various screen sizes. Now, imagine applying those same skills to your
          presentations. With Tailwind CSS and Remix, you're not just making
          slides; you're crafting responsive web applications that adapt to any
          viewing environment.
        </p>
        <p>Use your front-end skills to create truly adaptive presentations:</p>
        <ul>
          <li>
            <strong>Flexbox layouts</strong>: Use Flexbox to create slide
            layouts that automatically adjust to different aspect ratios and
            screen sizes.
          </li>
          <li>
            <strong>CSS Grid mastery</strong>: Implement complex, responsive
            grid layouts for data-heavy slides that look great on any device.
          </li>
          <li>
            <strong>Tailwind's utility-first approach</strong>: Rapidly
            prototype and iterate on your slide designs using Tailwind's
            intuitive class-based system.
          </li>
        </ul>
        <h3>Custom Functionality: Your Presentation as a Full-Stack App</h3>
        <p>
          You're not limited to what traditional presentation software offers.
          With Remix, you are capable of creating anything you can imagine and
          code.
        </p>
        <p>Transform your slides into interactive web experiences:</p>
        <ul>
          <li>
            <strong>API integration</strong>: Connect to backend services to
            pull in live data, run computations, or interact with databases
            during your presentation.
          </li>
          <li>
            <strong>Custom React hooks</strong>: Create reusable logic for
            interactive elements across your slides, like data fetching or state
            management.
          </li>
          <li>
            <strong>WebSocket integration</strong>: Implement real-time features
            like live polling or collaborative note-taking during your
            presentation.
          </li>
          <li>
            <strong>Custom animations</strong>: Use Framer Motion to create
            complex, physics-based animations that bring your content to life.
          </li>
        </ul>
        <h3>Performance Optimization: Because Every Millisecond Counts</h3>
        <p>
          Developers understand the importance of performance. With Remix and
          modern web technologies, you can apply the same optimization
          techniques you use in web development to your presentations.
        </p>
        <p>
          Optimize your presentation like you would a high-performance web app:
        </p>
        <ul>
          <li>
            <strong>Server-side rendering</strong>: Utilize Remix's SSR
            capabilities for fast initial loads and improved SEO for public
            presentations.
          </li>
          <li>
            <strong>Code splitting</strong>: Implement dynamic imports to load
            slide content on-demand, reducing initial bundle size and improving
            load times.
          </li>
          <li>
            <strong>Asset optimization</strong>: Use modern image formats and
            lazy loading techniques to efficiently handle media-rich
            presentations.
          </li>
          <li>
            <strong>Caching strategies</strong>: Implement intelligent caching
            to ensure smooth navigation between slides, even with complex
            content.
          </li>
        </ul>
        <h3>Deployment and Sharing: DevOps for Your Presentations</h3>
        <p>
          Sharing and updating your presentation should be as streamlined as
          deploying a web app. With Remix, you can use modern DevOps practices
          for your presentations.
        </p>
        <ul>
          <li>
            <strong>Continuous deployment</strong>: Set up a CI/CD pipeline to
            automatically deploy your presentation when you push changes to your
            repository.
          </li>
          <li>
            <strong>Environment variables</strong>: Use environment variables to
            manage different configurations for development, staging, and
            production versions of your presentation.
          </li>
          <li>
            <strong>Access control</strong>: Implement JWT-based authentication
            to secure your presentation and control access at a granular level.
          </li>
          <li>
            <strong>Analytics integration</strong>: Use web analytics tools to
            gather detailed insights on how your audience interacts with your
            presentation.
          </li>
        </ul>
        <h3>Integration and APIs: Your Presentation as a Microservice</h3>
        <p>
          The power of microservices and API integrations cannot be understated.
          With Remix, your presentation becomes a fully-fledged web application
          capable of interacting with any service or API. This isn't just about
          adding external content – it's about creating a presentation that's a
          living, breathing part of your tech ecosystem.
        </p>
        <p>
          Transform your presentation into a hub of real-time data and
          functionality:
        </p>
        <ul>
          <li>
            <strong>RESTful and GraphQL integration</strong>: Connect to any API
            to pull in real-time data, from social media feeds to live business
            metrics.
          </li>
          <li>
            <strong>Webhook receivers</strong>: Set up endpoints in your
            presentation to receive real-time updates from external services.
          </li>
          <li>
            <strong>OAuth implementation</strong>: Integrate securely with
            platforms like GitHub or Salesforce, allowing for live demos without
            compromising security.
          </li>
          <li>
            <strong>Serverless function integration</strong>: Use serverless
            functions to handle complex computations or data processing without
            bloating your presentation.
          </li>
        </ul>
        <h3>Sustainable Development: Green Code for a Green Future</h3>
        <p>
          Sustainability isn't just about reducing physical waste – it's about
          writing efficient code that minimizes computational resources. Using
          Remix, we can create presentations that are not only powerful but also
          environmentally conscious.
        </p>
        <ul>
          <li>
            <strong>Efficient bundling</strong>: Use Remix's built-in bundling
            to minimize file sizes and reduce data transfer.
          </li>
          <li>
            <strong>CDN integration</strong>: Utilize Content Delivery Networks
            to reduce server load and minimize energy consumption.
          </li>
          <li>
            <strong>Progressive enhancement</strong>: Build presentations that
            work on low-powered devices, reducing the need for energy-hungry
            hardware.
          </li>
        </ul>
        <h3>Interactive Components: React Hooks for Your Slides</h3>
        <p>
          With Remix and React, your slides become interactive React components.
          This allows you to create deeply engaging, real-time experiences that
          go far beyond what traditional presentation software can offer.
        </p>
        <p>Use the full power of React in your presentations:</p>
        <ul>
          <li>
            <strong>Custom hooks</strong>: Create reusable logic for interactive
            elements like live polls or data visualizations.
          </li>
          <li>
            <strong>Real-time state management</strong>: Use React's state
            management to create interactive demos that respond instantly to
            user input.
          </li>
          <li>
            <strong>Code playgrounds</strong>: Embed live code editors using
            libraries like Monaco Editor, allowing for real-time coding
            demonstrations.
          </li>
          <li>
            <strong>A/B testing components</strong>: Implement components that
            allow for live A/B testing during your presentation, gathering
            real-time feedback from your audience.
          </li>
        </ul>
        <p>
          Remix enhances these capabilities with its unique features: use
          server-side rendering for fast initial loads, use nested routing for
          complex multi-step demos, and utilize resource routes to handle
          real-time data updates seamlessly.
        </p>
        <h3>AI-Powered Narration: Integrating Speech Synthesis in Remix</h3>
        <p>
          We can further elevate presentations by integrating AI-powered
          narration. With Remix, we can use modern Web Speech API or third-party
          AI services to create dynamic, accessible presentations. Let's explore
          the implementation and see it in action:
        </p>
        <ul>
          <li>
            <strong>Web Speech API Integration</strong>: Utilize the browser's
            built-in speech synthesis capabilities for a lightweight solution
            that works offline.
          </li>
          <li>
            <strong>Third-Party AI Services</strong>: Integrate advanced AI
            speech services like Google Cloud Text-to-Speech or Amazon Polly for
            more natural-sounding narration.
          </li>
          <li>
            <strong>Dynamic Content Generation</strong>: Use Remix's server-side
            capabilities to generate narration content on-the-fly based on slide
            content or user interactions.
          </li>
          <li>
            <strong>Multilingual Support</strong>: Implement language detection
            and switching to provide narration in multiple languages, expanding
            your presentation's reach.
          </li>
        </ul>
        <p>
          Here's an example of our custom AudioPlayer component implemented in
          Remix:
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/17f1784a861db984a3990a45ae5cd005"
          title="AudioPlayer"
        />
        <p>
          Now, let's see this component in action with an AI-generated
          narration:
        </p>
        <FlexFull className="justify-center">
          <FlexFull className="max-w-[80svh] py-[2vh]">
            <AudioPlayer
              audioName="blog-audio-example"
              title="AI-Powered Narration"
              darkMode={false}
              showTitle={true}
              shadow="metallicEdgesXs"
              border="border-violet-500 border-[0.1vh]"
            />
          </FlexFull>
        </FlexFull>
        <p>This implementation demonstrates several key features:</p>
        <ul>
          <li>
            <strong>Interactive Audio Control</strong>: The AudioPlayer offers
            intuitive play/pause functionality, allowing users to control the
            narration at their own pace.
          </li>
          <li>
            <strong>Visual Progress Tracking</strong>: A progress bar lets
            viewers easily track their position in the narration, maintaining
            context and allowing for easy navigation.
          </li>
          <li>
            <strong>Responsive Design</strong>: Built with Tailwind CSS, the
            AudioPlayer adapts to various screen sizes, ensuring a consistent
            experience across devices.
          </li>
          <li>
            <strong>Accessibility Features</strong>: Clear, contrasting colors
            and intuitive controls ensure that narrated content is available to
            all users.
          </li>
        </ul>
        <p>
          By incorporating AI-powered narration with components like the
          AudioPlayer, we're not just creating a presentation – we're crafting
          an interactive, accessible, and scalable learning experience. This
          approach transforms slides from a one-time presentation into a
          persistent educational resource, available anytime, anywhere, and
          potentially in any language.
        </p>
        <h3>Modular Components: Building a Presentation Framework in Remix</h3>
        <p>
          Creating a modular component system in Remix allows us to build
          flexible, consistent presentations. Let's explore how to structure
          these components:
        </p>
        <ul>
          <li>
            <strong>Atomic Design Principles</strong>: Implement a component
            hierarchy from atoms (basic UI elements) to organisms (complex UI
            components) and templates (slide layouts).
          </li>
          <li>
            <strong>Prop Drilling and Context API</strong>: Use React's Context
            API for global presentation state, and prop drilling for localized
            component customization.
          </li>
          <li>
            <strong>Higher-Order Components (HOCs)</strong>: Create HOCs for
            common functionalities like transitions or data fetching, keeping
            individual slide components clean and focused.
          </li>
          <li>
            <strong>Custom Hooks</strong>: Develop reusable logic with custom
            hooks for features like progress tracking or inter-slide
            communication.
          </li>
        </ul>
        <p>
          Here's an example of how we might structure a slide component using
          this modular approach:
        </p>
        <GistRender
          gistLink="https://gist.github.com/EvanMarie/003ef415ce0e96b5c740a097ac5dfe3e"
          title="Modular Slide Component in Remix"
        />
        <p>This modular approach offers several advantages for developers:</p>
        <ul>
          <li>
            <strong>Code Reusability</strong>: Create a library of components
            that can be easily mixed and matched to build diverse presentations
            quickly.
          </li>
          <li>
            <strong>Maintainability</strong>: Isolate functionality in
            individual components, making it easier to update and debug your
            presentation code.
          </li>
          <li>
            <strong>Performance Optimization</strong>: Use Remix's built-in
            optimization features like code splitting and lazy loading to ensure
            smooth performance even with complex presentations.
          </li>
          <li>
            <strong>Collaborative Development</strong>: Enable team members to
            work on different components simultaneously, streamlining the
            development process for large presentations.
          </li>
        </ul>
        <hr />
        <h3>Bringing It All Together: The Anomalocaris Demo Presentation</h3>
        <p>
          <a href="http://darkviolet.ai/blog/presentations/anomalocaris">
            🔗 Anomalocaris Remix Presentation Demo
          </a>
        </p>
        <p>
          To demonstrate the power and flexibility of web-based presentations
          built with Remix, we've created a sample presentation about
          Anomalocaris, a fascinating prehistoric predator. This demo showcases
          many of the features we've discussed throughout this article, bringing
          our concepts to life. Let's take a quick tour:
        </p>
        <p>
          The presentation opens with a captivating title slide featuring 'The
          Amazing Anomalocaris.' This slide immediately demonstrates the power
          of web-based presentations:
        </p>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/presentation-images/anomalocaris-animated-title-screen.webp"
          alt="Anomalocaris Title Slide"
        />
        <ul>
          <li>
            <strong>Dynamic Backgrounds</strong>: An immersive underwater scene
            with animated bubbles sets the tone for the presentation.
          </li>
          <li>
            <strong>Animated Text</strong>: Bold amber text animates into view,
            capturing attention.
          </li>
          <li>
            <strong>Interactive Elements</strong>: A happy, little image of
            Anomalocaris appears with smooth animation, hinting at the
            interactive nature of the presentation.
          </li>
          <li>
            <strong>Intuitive Navigation</strong>: On-screen buttons for first
            slide, previous slide, next slide, and last slide provide easy
            navigation. Left and right arrow keys also offer quick
            slide-to-slide movement, enhancing the user experience for both
            presenters and viewers.
          </li>
        </ul>
        <h4>Content Slides: Rich in Information and Interaction</h4>
        <p>
          As we progress through the slides, we see how Remix and our
          component-based approach enable rich, interactive content:
        </p>
        <ul>
          <li>
            <strong>About Anomalocaris</strong>: Animated slide transitions
            bring content into view smoothly. Key facts about Anomalocaris
            appear with staggered animations, furthering the dynamic experience.
            High-quality images complement the text, providing visual context.
          </li>
        </ul>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/presentation-images/anomalocaris-slide-example.webp"
          alt="Anomalocaris Example Slide"
        />
        <ul>
          <li>
            <strong>Evolutionary Significance</strong>: This slide features an
            interactive details drawer that opens when users click the details
            button. It includes the full narration text along with an option to
            play the narration using a high-quality AI voice, providing an
            accessible and enhanced user experience.
          </li>
        </ul>
        <ImageWithZoom
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/presentation-images/anomalocaris-details-drawer.webp"
          alt="Anomalocaris Evolutionary Details Drawer"
        />
        <h4>Navigation and User Experience</h4>
        <p>
          The presentation features an interactive menu that showcases the power
          of web-based navigation:
        </p>
        <ul>
          <li>
            <strong>Non-linear access</strong>: Users can jump to any slide
            directly, providing non-linear access to content.
          </li>
          <li>
            <strong>Current slide highlighting</strong>: The current slide is
            highlighted, offering clear visual feedback.
          </li>
        </ul>
        <p>[Image of Anomalocaris Presentation Menu]</p>
        <ul>
          <li>
            <strong>Flexible navigation</strong>: This menu demonstrates how web
            technologies allow for more flexible and user-friendly navigation
            compared to traditional PowerPoint presentations.
          </li>
        </ul>
        <h4>Key Features Demonstrated (continued)</h4>
        <ul>
          <li>
            <strong>Modular Components</strong>: Each slide is built from
            reusable components, demonstrating the power of our modular
            approach.
          </li>
        </ul>
        <p>
          This Anomalocaris presentation serves as a practical example of how
          the concepts we've discussed can be applied to create engaging,
          interactive, and accessible presentations. It showcases the potential
          of web-based presentations to go beyond the limitations of traditional
          slideware, offering a more immersive and flexible experience for both
          presenters and audience members.
        </p>
        <hr />
        <h3>The Developer's Canvas: Remix as Your Presentation Playground</h3>
        <p>
          As we conclude our exploration of web-based presentations with Remix,
          it's clear that we're not just improving on PowerPoint – we're
          redefining what a presentation can be from a developer's perspective.
        </p>
        <p>
          With Remix, Tailwind CSS, and Framer Motion, your presentations become
          full-fledged web applications. You have the power to create
          interactive experiences, always-available resources, and dynamic
          communication tools, all built on the web technologies you already
          know and love.
        </p>
        <p>
          The best part? You can dive into creating these dynamic presentations
          right now. Got a new feature to showcase to your team? Need to wow
          investors with an interactive pitch? Want to build an engaging
          educational resource? Remix is your secret weapon. It offers the
          flexibility and power to breathe life into your ideas in ways that
          leave traditional presentation software in the dust. Now, you can
          craft experiences that captivate, inform, and inspire. So, the next
          time you need to create a presentation, consider opening your code
          editor instead of PowerPoint. With Remix, your developer skills become
          your presentation superpowers.
        </p>
        <p>
          Welcome to the future of presentations – it's web-based, it's
          interactive, and it's powered by your code. Are you ready to
          revolutionize the way you present your ideas?
        </p>
        <h3>Check out the Remix mini-presentation:</h3>
        <p>
          <a href="http://darkviolet.ai/blog/presentations/anomalocaris">
            🔗 Anomalocaris Remix Presentation Demo
          </a>
        </p>
        <h3>References</h3>
        <ol>
          <li>
            <a href="https://www.slidegenius.com/cm-faq-question/what-are-the-benefits-of-using-web-based-powerpoint-presentations">
              What are the benefits of using web-based PowerPoint presentations
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/pulse/advantages-disadvantages-using-powerpoint-zubin-kapadia">
              Advantages &amp; Disadvantages of Using PowerPoint for
              Presentations
            </a>
          </li>
          <li>
            <a href="https://slideuplift.com/blog/advantages-and-disadvantages-of-using-powerpoint-for-presentations/">
              Advantages and Disadvantages of Using PowerPoint for Presentations
            </a>
          </li>
          <li>
            <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://edge.sagepub.com/sites/default/files/presentation_section_03_module01.pdf">
              Pros and Cons of Digital Slide Presentations
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/office/how-certain-features-behave-in-web-based-powerpoint-a931f0c8-1305-4428-8f7c-9cfa00ef28c5">
              How certain features behave in web-based PowerPoint
            </a>
          </li>
        </ol>
      </React.Fragment>,
    ],
  };
