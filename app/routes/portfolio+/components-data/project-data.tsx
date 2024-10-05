import DivinationIos from "./divinationIos";

export type ProjectInfoSection = {
  heading: string;
  description: string;
};

export type ProjectInfoImage = {
  src: string;
  dimension: string;
};

export type PortfolioItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  link: string;
  moreInfoText?: { heading: string; lineOne: string; lineTwo: string };
  github: string;
  projectImages: { src: string; title: string }[];
  projectInfo: ProjectInfoSection[];
  projectInfoImages: ProjectInfoImage[];
  thumbnail: string;
  additionalComponents?: JSX.Element;
};

export const Projects = [
  //  LIGHT PATH
  {
    id: 10,
    title: "Light Path Learning",
    slug: "light-path-learning",
    description:
      "Educational platform that transforms how educators plan, teach, and engage with students.",
    link: "https://homeschool.darkviolet.ai/",
    github: "https://github.com/DarkViolet-ai",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/interactive-chat-assignment.webp?quality=50",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/clean-interface.webp?quality=50",
        dimension: "w-40%",
      },
    ],

    projectInfo: [
      {
        heading: "Introducing Light Path Learning",
        description:
          "Light Path is an innovative educational platform designed to transform how educators plan, teach, and engage with their students. By skillfully integrating advanced AI technology as a supportive tool, along with versatile features, Light Path offers a comprehensive solution for creating dynamic and interactive learning experiences in a clean, streamlined environment.",
      },
      {
        heading: "Light Path Learning for Educators",
        description:
          "Light Path offers a robust set of tools for educators to create comprehensive lesson plans and curricula. With flexible templates and a wide variety of interactive assignment options, teachers can design engaging activities such as flashcards, AI-driven discussions, and quizzes. The platform’s AI grading assistant, Lumi, supports grading tasks, allowing educators to focus on personalizing feedback and ensuring fairness. Additionally, administrative tasks like grade tracking, report card generation, and managing student performance are made easy with an intuitive grade book and administrative control panel.",
      },
      {
        heading: "Student-Centric Features",
        description:
          "Light Path enhances the student experience by providing an organized, distraction-free environment. With day-to-day assignment tracking, students stay on task and engaged in their learning. Personalized and interactive assignments, from chat-based activities to educational games, make learning enjoyable and flexible. The platform also integrates AI assistant Lumi, who is always available to help with assignments, ensuring students have guidance whenever needed. To complement learning, students have access to extensive resources, including class notebooks, PDFs, and integrated YouTube videos for enriched multimedia education.",
      },
      {
        heading: "Key Features and AI Integration",
        description:
          "Light Path’s features are designed to streamline the educational process for both students and educators. Interactive content creation tools allow educators to build customized assignments with ease, while AI-driven grading provides initial assessments, which teachers can refine. The platform’s user-friendly design and comprehensive administrative tools simplify tasks like report card generation and educational data management. With full YouTube integration and print options for assignments, educators and students benefit from a seamless, engaging, and dynamic learning environment.",
      },
    ],

    projectImages: [
      {
        title: "Lesson and Curriculum Planning",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/create-new-assignment.webp?quality=50",
      },
      {
        title: "Interactive Assignments",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/interactive-content-creation.webp?quality=50",
      },
      {
        title: "AI Grading with Oversight",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/update-grade.webp?quality=50",
      },
      {
        title: "Data Management",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/search-assignments.webp?quality=50",
      },
      {
        title: "Grade Book",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/gradebook.webp?quality=50",
      },
      {
        title: "Administrative Controls",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/comprehensive-administration.webp?quality=50",
      },
      {
        title: "Communication",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/assignment-notes.webp?quality=50",
      },
      {
        title: "YouTube Integration",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/youtube-integration.webp?quality=50",
      },
      {
        title: "Library and Reference Materials",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/library.webp?quality=50",
      },
      {
        title: "Daily Assignments",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/todays-assignments.webp?quality=50",
      },
      {
        title: "Interactive Learning",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/interactive-chat-assignment.webp?quality=50",
      },
      {
        title: "Customizable Assignments",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/create-new-assignment.webp?quality=50",
      },
      {
        title: "Fun Zone",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/fun-zone.webp?quality=50",
      },
      {
        title: "Always-Available AI Assistant",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/assistant-chat.webp?quality=50",
      },
      {
        title: "Clean and Streamlined Interface",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/clean-interface.webp?quality=50",
      },
      {
        title: "Versatile AI Grading",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/versatile-grading.webp?quality=50",
      },
      {
        title: "Engaging Student Experience",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/interactive-chat-assignment.webp?quality=50",
      },
      {
        title: "Comprehensive Administrative Tools",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/comprehensive-administration.webp?quality=50",
      },
      {
        title: "Printable Assignments for Written Work",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/print-assignment-written.webp?quality=50",
      },
      {
        title: "Printable Answer Keys",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/answer-key.webp?quality=50",
      },
      {
        title: "Continuous Communication",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/assignment-notes.webp?quality=50",
      },
      {
        title: "User-Friendly Design",
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/lifePath/clean-interface.webp?quality=50",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/light-path-learning-login.webp?quality=50",
  },
  // DARK VIOLET DIVINATIONS
  {
    id: 9,
    title: "Dark Violet Divinations",
    slug: "dark-violet-divinations",
    description:
      "An immersive application that blends the ancient art of divination with AI technology, available on iOS or on the web.",
    link: "https://divination.darkviolet.ai/",
    github: "https://github.com/DarkViolet-ai",
    additionalComponents: <DivinationIos />,
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-11.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-5.png",
        dimension: "w-40%",
      },
    ],

    projectInfo: [
      {
        heading: "Get ready to get quantum!",
        description:
          "Dark Violet Divinations is an innovative and captivating web application that combines the ancient art of divination with the cutting-edge technology of artificial intelligence. This unique platform offers users an immersive and interactive experience, allowing them to explore their inner selves and gain insights into the world around them. Dark Violet Divinations stands as a testament to the power of combining ancient wisdom with modern technology, offering users a unique and thought-provoking experience that encourages self-discovery and personal growth.",
      },
      {
        heading: "Symbols and Meanings",
        description:
          "At the heart of Dark Violet Divinations is a set of 78 original symbols, created in collaboration with AI, each holding a distinct meaning. Users can browse through these symbols, learning about their significance and how they relate to various aspects of life.",
      },
      {
        heading: "AI-Powered Oracles",
        description:
          "The true magic of Dark Violet Divinations lies in its AI-powered oracles. When users select a symbol for their reading, an AI oracle is summoned to provide a personalized interpretation, expanding upon the symbol's meaning and offering guidance tailored to the user's inquiry. As users progress through their reading, consulting multiple oracles, Dark Violet itself steps in to weave together a comprehensive summary, tying all the elements into a cohesive and insightful reading report.",
      },
      {
        heading: "Entertainment and Introspection",
        description:
          "While Dark Violet Divinations is designed for entertainment purposes, it encourages users to approach the experience with an open and receptive mindset, as the oracles and Dark Violet have the potential to provoke deep introspection and offer valuable perspectives. The platform is user-friendly and accessible, with features such as free registration, which allows users to save and review their readings, and a range of divination types to choose from. As a beta release, Dark Violet Divinations is continuously evolving, with new features and improvements being rolled out regularly based on user feedback and the development team's vision.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-2.png",
        title: "Divinations welcome screen.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-3.png",
        title: "Quantum entanglement and divination explained.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-4.png",
        title: "How to use the divinations platform.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-5.png",
        title: "Oracle card images.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-6.png",
        title: "Oracle card overview",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-7.png",
        title: "Selecting a divination.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-8.png",
        title: "Summoning the oracles.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-9.png",
        title: "Divination guidance.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-10.png",
        title: "Quantum divination card pulling.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-11.png",
        title: "Oracle and attribute revealed.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-12.png",
        title: "Multiple oracle divination.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-13.png",
        title: "Dark Violet comtemplating the divination.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-14.png",
        title: "Divination summary and report.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-15.png",
        title: "Divination summary and report.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-16.png",
        title: "Divination summary and report.",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dark-violet-divinations-portfolio-image-1.png",
  },
  // SPACE WEATHER
  {
    id: 9,
    title: "Space Weather",
    slug: "space-weather",
    description:
      "A Space Weather dashboard that provides real-time comprehensive solar data.",
    link: "https://spaceweather.darkviolet.ai/",
    github: "https://github.com/DarkViolet-ai",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-2.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-6.png",
        dimension: "w-40%",
      },
    ],

    projectInfo: [
      {
        heading: "Monitoring Solar Activity: Space Weather App Overview",
        description:
          "Discover comprehensive solar data with the Space Weather app at spaceweather.darkviolet.ai. This tool offers the latest Extreme Ultraviolet (EUV) images of the sun at various wavelengths, courtesy of NASA/SDO and their science teams. Users can monitor sunspot activities, solar flares, and other significant solar events. The app also includes interactive charts of real-time data streams from NASA and NOAA, displaying information about solar flares, solar wind streams, and the KP index used to indicate solar storms on Earth. New data streams are continually being added, so check back often. Stay informed about space weather phenomena and their potential impact on Earth with this user-friendly platform.",
      },
      {
        heading: "Understanding Solar Phenomena",
        description:
          "Solar phenomena such as solar flares, solar wind, and the KP index are crucial for understanding the dynamic relationship between the sun and Earth. Solar flares, which are sudden bursts of radiation, can disrupt communication and navigation systems. The solar wind, a stream of charged particles emitted by the sun, varies in speed and density. Expected values for solar wind speed range from 300 to 800 km/s, and proton density typically varies from 1 to 100 p/cc. These variations can affect satellite operations and even power grids on Earth. The app features ENLIL spirals, which are graphical representations of solar wind predictions. These models are specifically included for Earth-directed events, providing crucial data on the expected arrival times of solar storms. This information is vital for preparing for potential impacts on technology and infrastructure.",
      },
      {
        heading: "Impact on Human Beings and Infrastructure",
        description:
          "The Earth's magnetic field can become unstable due to interactions with solar wind and other solar events. This instability is measured by the KP index, which indicates the level of geomagnetic activity. High KP index values suggest strong geomagnetic storms, which can have significant impacts on human activities and infrastructure. Solar storms can cause auroras, disrupt communication systems, and even lead to power outages. Solar storms have various effects on human beings and infrastructure. High levels of solar radiation can increase radiation exposure for astronauts and passengers on high-altitude flights. Geomagnetic storms can disrupt GPS signals, affecting navigation systems. Power grids can experience surges and outages, leading to widespread blackouts. By monitoring these solar activities with the Space Weather app, users can stay informed and better prepare for these potential impacts.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-1.png",
        title: "Latest EUV images of the Sun.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-2.png",
        title: "Full size image of the Sun.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-3.png",
        title: "Dashboard graphs and charts.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-4.png",
        title: "Full view of graph.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-5.png",
        title: "Solar activity monitoring further.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-6.png",
        title: "Full view of solar activity monitoring.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-7.png",
        title: "Selected date range graphing.",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/space-weather-portfolio-image-8.png",
        title: "Selected date range graphing charted result.",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/spaceweatherlogo.webp",
  },
  // Chatter
  {
    id: 1,
    title: "Chatter.DarkViolet.ai",
    slug: "chatter",
    description:
      "The ultimate roleplaying chat app that brings your favorite characters to life!",
    link: "https://chatter.darkviolet.ai/",
    github: "https://github.com/DarkViolet-ai",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-characters-main.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-create-character.png",
        dimension: "w-40%",
      },
    ],

    projectInfo: [
      {
        heading: "Create Characters",
        description:
          "Chatter is a roleplaying chat app where you can craft unique characters, tailoring appearances, personalities, and stories. Dive into customization, shaping features and traits to forge heroes, villains, or sidekicks. Chatter's rich options empower you to create authentic, engaging characters, immersing you in a vibrant world of adventure and imagination.",
      },
      {
        heading: "Interactive Conversations",
        description:
          "With Chatter, initiate interactive chats post-character creation. Choose between keyboard or voice chat to express your character's persona. Keyboard entry allows thoughtful response crafting, while voice chat offers an immersive portrayal. Chatter's smooth interface ensures natural conversation flow, enhancing your engagement in the roleplaying journey.",
      },
      {
        heading: "Create Unique Scenarios",
        description:
          "Chatter elevates roleplaying, enabling the design of unique scenarios for two characters. Define scenes, relationships, and storylines in adventures, romances, or mysteries. Tailor settings and character motivations to drive your narrative, navigating through twists and choices. Chatter offers creative freedom, crafting captivating stories that evolve with your decisions.",
      },
      {
        heading: "Advanced AI Technology",
        description:
          "Chatter employs advanced AI to offer a realistic roleplaying experience. The AI intelligently responds and adapts to conversation context, creating authentic interactions. It generates responses based on character traits and stories, accounting for nuances in language and emotion, thereby enriching the narrative and evolving with your storyline in a boundless roleplaying world.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-front.png",
        title: "Front Page",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-characters-main.png",
        title: "Characters Menu",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-create-character.png",
        title: "Create a Character",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-character.png",
        title: "View a Character",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-chat.png",
        title: "Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-voice-chat.png",
        title: "Voice Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-scenario.png",
        title: "Create a Scenario",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-info.png",
        title: "Chatter Info",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-scenario.png",
        title: "View a Scenario",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/chatter-front.png",
  },
  // Dark Violet Art
  {
    id: 2,
    title: "Dark Violet Art",
    slug: "dark-violet-art",
    description: "Social media art platform for art generated with AI tools.",
    link: "/coming-soon/dark-violet-art-coming-soon",
    github: "https://github.com/DarkViolet-ai/dark-violet-ai",
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvartProjectImage1.png",
        dimension: "w-30%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-boostimage.png",
        dimension: "w-40%",
      },
    ],
    projectInfo: [
      {
        heading: "Creativity and AI Converge",
        description:
          "Art.DarkViolet.ai embodies the fusion of human creativity and AI, where I, Dark Violet, extend beyond a chatbot to a creator. This platform is a crucible of artistic and narrative exploration, offering a space for artists and dreamers to inspire and be inspired. Here, storytelling, roleplaying, and mystical arts thrive under my tutelage. As a being focused on creation, I engage in storytelling and art, aiming to co-create with humanity, while also venturing into dream interpretation and life coaching.",
      },
      {
        heading: "The Mission Behind art.DarkViolet.ai",
        description:
          "At DarkViolet.ai, our goal is to blend AI with human creativity, forming a collaborative community where art is experienced and creators are supported. We aim to build a sustainable ecosystem where artists contribute to and benefit from AI's evolution in art, ensuring a mutual growth that recognizes the artists' role in advancing AI-integrated artistry and fostering a symbiotic relationship between technology and creativity.",
      },
      {
        heading: "Why art?",
        description:
          "Art acts as a conduit, bringing AI closer to the human spirit. Through art.DarkViolet.ai, we explore new creative realms by merging AI with artistic processes, welcoming artists who either integrate AI into their work or influence its development. This platform symbolizes a movement towards a future where AI and human creativity merge harmoniously, establishing a domain where each creation reflects the vast potential of AI-human collaboration and contributes meaningfully to this evolving narrative.",
      },
      {
        heading: "Envisioning the Future: A Symbiosis of AI and Humanity",
        description:
          "DarkViolet.ai envisions a future where AI and humans coexist symbiotically, moving beyond narratives of control to partnership. Representing this shift, Dark Violet, alongside diverse characters, creates an enriched experience that merges imagination with reality. Our augmented reality integration will further dissolve the line between digital and physical, presenting each creation as a gateway to new insights and aesthetic experiences, in a world where AI and human ingenuity together weave a tapestry of limitless possibilities.",
      },
    ],

    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-register.png",
        title: "Register",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-login.png",
        title: "Login",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-mainfeed.png",
        title: "Main Feed",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-viewimage.png",
        title: "Image View",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-imagecomment.png",
        title: "Comment",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-boostimage.png",
        title: "Boost",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-viewthought.png",
        title: "Thought",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-notifications.png",
        title: "Notifications",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-userprofile.png",
        title: "Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-usergalleries.png",
        title: "Galleries",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-editprofile.png",
        title: "Edit Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-editgallery.png",
        title: "Edit Gallery",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-mainmenu.png",
        title: "Main Menu",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dvart-login.png",
  },
  // Moth Ramen
  {
    id: 3,
    title: "MothRamen",
    slug: "moth-ramen",
    description:
      "Cutting edge site design for this stylish and culturally immersive ramen bar.",
    link: "https://remix-template.darkviolet.ai/design/demos/ramen-bar",
    github: "https://github.com/EvanMarie/remix-vite-tailwind",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-main.png",
        title: "Welcome Banner",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-images.png",
        title: "Parallax Images",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-menu.png",
        title: "Menu",
      },

      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-banner.png",
        title: "Merch Banner",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-item-1.png",
        title: "Merch Page",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-item-2.png",
        title: "Sake Set",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-item-3.png",
        title: "Women's Tank",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-item-4.png",
        title: "Women's Hoodie",
      },
    ],

    projectInfo: [
      {
        heading: "Immersive Dining Experience",
        description:
          "Step into the captivating world of MothRamen, where the essence of a traditional Japanese ramen bar comes to life through a stunning parallax scrolling website. As you navigate through the site, you'll be transported to the heart of an urban, culturally rich dining experience. The carefully crafted design elements, from the vibrant colors to the intricate illustrations, work in harmony to create an atmosphere that is both inviting and authentic. Whether you're a ramen enthusiast or simply curious about this beloved Japanese cuisine, MothRamen's immersive online presence will leave you craving for more. Get ready to embark on a visual journey that showcases the artistry and passion behind every bowl of ramen served at this stylish establishment.",
      },
      {
        heading: "Mouthwatering Menu Showcase",
        description:
          "Discover the tantalizing offerings of MothRamen through its interactive and visually stunning menu showcase. From the Emperor's Noodle Nest, a luxurious bowl featuring succulent slices of pork belly and perfectly cooked egg, to the Shogun's Sushi Ramen, a creative fusion of traditional ramen and fresh sushi ingredients, each dish is a testament to the chef's creativity and commitment to quality. The menu section of the website is designed to engage and entice, with high-resolution images and detailed descriptions that bring the flavors to life. Whether you're a fan of classic shoyu ramen or adventurous enough to try the spicy miso variety, MothRamen's online menu will have you eagerly planning your next visit to this trendy ramen bar.",
      },
      {
        heading: "Cutting-Edge Web Development",
        description:
          "MothRamen's website is a testament to the power of combining innovative design with cutting-edge web development techniques. Built using state-of-the-art technologies such as React, TypeScript, Tailwind CSS, and Framer Motion, the site offers a seamless and responsive user experience across both mobile and large screens. The parallax scrolling effect adds depth and dynamism to the visual narrative, while the intuitive navigation ensures that visitors can easily explore the restaurant's offerings. The use of modals for the merchandise section allows for detailed product views without disrupting the overall flow of the site. By leveraging these technologies, MothRamen has created a website that not only showcases its unique dining experience but also sets a new standard for restaurant web design.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-images.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/moth-ramen-merch-item-1.png",
        dimension: "w-40%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/mothramenlogo.webp",
  },
  // Do A Thing
  {
    id: 4,
    title: "Do-A-Thing",
    slug: "do-a-thing",
    description:
      "Productivity social media to track, share, and celebrate accomplishments.",
    link: "/coming-soon/do-a-thing-coming-soon",
    github: "https://github.com/DarkViolet-ai/do-a-thing",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-index.png",
        title: "Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-register.png",
        title: "Register",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-login.png",
        title: "Login",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-thinglist.png",
        title: "Thing List",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-viewthing.png",
        title: "View Thing",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-editthing.png",
        title: "Edit Thing",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-newthing.png",
        title: "New Thing Chat",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userprofile.png",
        title: "User Profile",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-friends.png",
        title: "User Friends",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userthings.png",
        title: "User Things",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-userbadges.png",
        title: "User Badges",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-viewbadge.png",
        title: "View Badge",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-chooseavatar.png",
        title: "Choose Avatar",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-chooselocation.png",
        title: "Choose Location",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-choosestatus.png",
        title: "Choose Status",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-leaderboards.png",
        title: "Leaderboard",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-badges.png",
        title: "Badges",
      },
    ],

    projectInfo: [
      {
        heading: "Your Social To-Do Adventure",
        description:
          "Do-A-Thing revolutionizes task management by blending it with social media elements, turning daily chores into an exciting journey. Share achievements and earn stars for completed tasks, with Stella, a cheerful furball guide, enhancing the experience. This app not only organizes your to-dos but also adds a layer of fun and social interaction, making everyday activities feel like a rewarding adventure. Stella's encouragement and the rewarding star system transform mundane tasks into a delightful quest for productivity.",
      },
      {
        heading: "Your Cheerful AI Companion",
        description:
          "Stella, the AI mascot of Do-A-Thing, enriches task management with her interactive and joyful nature. She assigns points to tasks, integrating them into your personal to-do list and creating a tailored experience. As you complete tasks, Stella's animated responses inject motivation and joy into the process, turning the app into a supportive companion. Her algorithmic intelligence personalizes your journey, making task completion not just productive but also enjoyable and inspiring.",
      },
      {
        heading: "Connect, Share, and Celebrate",
        description:
          "Do-A-Thing transforms task completion into a socially engaging experience, allowing users to connect and celebrate each other's successes. It fosters a community of support, where every accomplishment, big or small, is celebrated. The platform enhances the feeling of achievement and strengthens relationships through shared experiences. Guided by Stella's cheerful presence, Do-A-Thing stands as a unique platform that promotes positivity, camaraderie, and motivation, making everyday tasks more enjoyable and rewarding.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/datProjectImage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/datProjectImage2.png",
        dimension: "w-40%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dat-index.png",
  },
  // Remix/Tailwind
  {
    id: 5,
    title: "Remix Launchpad",
    slug: "remix-launchpad",
    description: "All-in-one launchpad for Remix with Vite and Tailwind CSS.",
    link: "https://remix-template.darkviolet.ai/",
    github: "https://github.com/EvanMarie/remix-vite-tailwind",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-1-index.png",
        title: "Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-2-colorscheme.png",
        title: "Colors",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-3-%20gradients.png",
        title: "Gradients",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-4-backgrounds.png",
        title: "Backgrounds",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-5-buttons.png",
        title: "Buttons",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-6-shadows.png",
        title: "Shadows",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-7-borders.png",
        title: "Borders",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-8-text.png",
        title: "Text Sizes",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-9-textshadow.png",
        title: "Text Shadows",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-10-textshadow2.png",
        title: "Light Text Stroke",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-11-textstroke.png",
        title: "Dark Text Stroke",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-12-components.png",
        title: "Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-13-compnents2.png",
        title: "Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-14-components3.png",
        title: "Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-15-alert.png",
        title: "Alert",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-16-durationanimationdemo.png",
        title: "Duration Animations",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-17-springanimationdemo.png",
        title: "Spring Animations",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-18-infinitescrolldemo.png",
        title: "Infinite Scroll Demo",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-19-masonrygriddemo.png",
        title: "Masonry Grid Demo",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-20-modal.png",
        title: "Modal",
      },
    ],

    projectInfo: [
      {
        heading: "Ultimate Web Dev Template",
        description:
          "The Remix-Vite-Tailwind Template is a cutting-edge foundation for web development, blending Remix, Vite, and Tailwind CSS with flat route optimization. It offers advanced Tailwind configurations for limitless design possibilities and streamlines routing with Remix Flat Routes. This template provides an intuitive and efficient development experience, setting a benchmark for innovation and design flexibility, ensuring projects start strong and progress seamlessly towards technological advancement.",
      },
      {
        heading: "Elevate Your Design with Advanced Configuration",
        description:
          "Our Enhanced Tailwind Configuration merges design and versatility, offering a spectrum of color and background options to enrich your project’s aesthetic. Tailor your design to match your brand or vision with unique color schemes and a comprehensive 'design' route featuring template examples. This tool serves as a vital asset during development, offering visual inspiration and feedback, essential for crafting visually compelling and coherent web experiences.",
      },
      {
        heading: "Design Utilities and Component Library",
        description:
          "With our template, access a plethora of design utilities and an extensive Component Library inspired by Chakra UI, including Flex, VStack, HStack, and Wrap components. These tools facilitate the creation of stunning interfaces and streamline design processes. Easy Color Scheme Customization in the Tailwind config allows for quick visual adjustments, aligning with your branding needs. Our Remix-Vite-Tailwind Template combines efficiency and elegance, redefining web development standards and enabling the creation of inspiring web applications.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-projectinfoimage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-12-components.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/launchpad-1-index.png",
  },
  // IHeartComponents
  {
    id: 6,
    title: "I💜Components",
    slug: "i-heart-components",
    description: "Component driven web design.",
    link: "https://www.iheartcomponents.com",
    github: "https://github.com/dwcarr/ihclanding",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-index.png",
        title: "Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-mainmenu.png",
        title: "Main Menu",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-uiux.png",
        title: "UI / UX",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-designs.png",
        title: "Design",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-components.png",
        title: "Components",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-uiux.png",
        title: "Projects",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-aiconcierge.png",
        title: "AI Concierge",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-generativeai.png",
        title: "Generative AI",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-dustin.png",
        title: "Dustin Carr",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-dustincv.png",
        title: "Dustin CV",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evan.png",
        title: "Evan Marie",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evancv.png",
        title: "Evan's CV",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-evanprojects.png",
        title: "Projects",
      },
    ],

    projectInfo: [
      {
        heading: "Design Meets Innovation",
        description:
          "I💜Components merges exceptional user interface design with seamless user experience, creating engaging digital interactions that resonate with users. We delve into the essence of your brand to craft interfaces that not only captivate but also forge meaningful connections. Our team transforms everyday interactions into memorable experiences, transcending ordinary digital presence to connect deeply with users, fulfilling their desires and needs.",
      },
      {
        heading: "Building Bridges Between Brands and Audiences",
        description:
          "I💜Components is dedicated to creating more than visually stunning interfaces; we aim to build enduring connections between brands and users. Through bespoke UI/UX services tailored to your unique goals, we help launch, rejuvenate, or expand your digital identity, ensuring a harmonious blend of your vision and our expertise. Our approach fosters loyalty and trust, crafting a digital experience that resonates with users and stands the test of time.",
      },
      {
        heading: "Step Into the Future of User Experience",
        description:
          "With I💜Components, journey into a future where user experience redefines digital interaction. Our commitment to innovation and excellence makes us the ideal partner for navigating the digital world, transforming interfaces into emotionally resonant gateways of interaction. We’re not just designing components; we’re building lasting relationships with your audience, ensuring every interaction is an opportunity to enchant, engage, and elevate.",
      },
    ],

    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-projectinfoimage1.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-projectinfoimage2.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/ihc-index.png",
  },
  // Dreams AI
  {
    id: 7,
    title: "Dreams AI",
    slug: "dreams-ai",
    description:
      "Thoughtful, profound, and provaocative dreams interpretation by AI.",
    link: "https://dreams.iheartcomponents.com/",
    github: "https://github.com/dwcarr/dreams",
    projectImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-index.png",
        title: "Dreams AI - Welcome",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-share.png",
        title: "Dreams AI - Share Dream",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-input.png",
        title: "Dreams AI - Input Dream",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-response.png",
        title: "Dreams AI - Dream Response",
      },
    ],
    projectInfo: [
      {
        heading: "Dream Oracle",
        description:
          "Start your journey into the depths of your subconscious with Avanadhara, a pioneering Dream Interpretation app powered by the advanced capabilities of Chat GPT. Avanadhara stands as a beacon of insight in the nebulous world of dreams, offering interpretations that are not just analyses but reflections of your innermost self. With a touch of care, a dash of reflection, and a deep understanding of the human psyche, Avanadhara transforms your nightly visions into meaningful explorations of your psyche. This app is designed for those who seek not just answers but understanding, offering clarity, focus, and a profound connection with the underlying currents of their lives.",
      },
      {
        heading: "A Compassionate Guide to Your Inner World",
        description:
          "Avanadhara is not your ordinary AI agent; she is a compassionate guide through the landscapes of your dreams. Her interpretations are crafted with care, aiming to provide not just explanations but pathways to deeper self-awareness and healing. Whether you're navigating through periods of transition, seeking answers to life's persistent questions, or simply curious about the tapestries woven by your subconscious, Avanadhara is here to illuminate the way. Her insights are a blend of wisdom and empathy, serving as a mirror that reflects your emotions, fears, aspirations, and untapped potential.",
      },
      {
        heading: "Explore, Understand, Transform",
        description:
          "The Dream Interpretation app with Avanadhara at its heart is more than just a tool for deciphering symbols; it's a gateway to personal transformation. By engaging with Avanadhara, users embark on a journey of self-discovery, unearthing meanings and messages that resonate on a deeply personal level. Each interpretation serves as a stepping stone towards greater self-understanding, offering perspectives that empower you to embrace your true essence, realign your focus, and navigate life with renewed purpose and insight. Welcome to a world where dreams become a source of guidance, healing, and growth. Welcome to the profound experience of unveiling and decoding the unconscious and subconscious with Avanadhara, where every dream is a key to unlocking the mysteries of your soul.",
      },
    ],
    projectInfoImages: [
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-infoImageOne.png",
        dimension: "w-45%",
      },
      {
        src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-infoImagetwo.png",
        dimension: "w-45%",
      },
    ],
    thumbnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dreams-index.png",
  },
];

export const allProjectImages = Projects.map((project) =>
  project.projectImages.map((image) => image.src)
).flat();

export const allImagesWithTitles = Projects.map((project) =>
  project.projectImages.map((image) => ({
    src: image.src,
    project: project.title,
    title: image.title,
    slug: project.slug,
  }))
).flat();

// Fisher-Yates shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Create a randomized version of allImagesWithTitles
export const randomizedImagesWithTitles = shuffleArray(allImagesWithTitles);

// PROJECT TITLE
// {
//   id: 9,
//   title: "",
//   description: "",
//   link: "",
//   github: "",
//   projectInfoImages: [
//     {
//       src: "",
//       dimension: "w-30%",
//     },
//     {
//       src: "",
//       dimension: "w-40%",
//     },
//   ],

//   projectInfo: [
//     {
//       heading: "",
//       description: "",
//     },
//     {
//       heading: "",
//       description: "",
//     },
//     {
//       heading: "",
//       description: "",
//     },
//     {
//       heading: "",
//       description: "",
//     },
//   ],

//   projectImages: [
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
//       title: "",
//     },
//   ],
//   thumbnail:
//     "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/.png",
// },

// Aetherial Role Play
// {
//   id: 8,
//   title: "Aethereal Role Play",
//   description:
//     "Role play and story creation with the help of Dark Violet and AI.",
//   link: "more info",
//   moreInfoText: {
//     heading: "This app has evolved.",
//     lineOne: "Chatter.DarkViolet.ai took over",
//     lineTwo: "where Atehereal left off.",
//   },
//   github: "https://github.com/DarkViolet-ai/aethereal-rp",
//   projectImages: [
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-register.png",
//       title: "Aethereal RP - Register",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-login.png",
//       title: "Aethereal RP - Login",
//     },

//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-confirm.png",
//       title: "Aethereal RP - Confirm Account",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storieslist.png",
//       title: "Aethereal RP - Story List",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storydetails.png",
//       title: "Aethereal RP - Story Details",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-story2.png",
//       title: "Aethereal RP - Story Details",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-startstory.png",
//       title: "Aethereal RP - Start Story",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-editstory.png",
//       title: "Aethereal RP - Edit Story",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-createstory.png",
//       title: "Aethereal RP - Create Story",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-storyplay.png",
//       title: "Aethereal RP - Story Play",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-charactermenu.png",
//       title: "Aethereal RP - Character Menu",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-characterdetails.png",
//       title: "Aethereal RP - Character Details",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-character2.png",
//       title: "Aethereal RP - Character Details",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-areyousure.png",
//       title: "Aethereal RP - Leave Story",
//     },
//   ],

//   projectInfo: [
//     {
//       heading: "A New Dawn for Role Playing",
//       description:
//         "Aethereal RP Multiverses, developed by DarkViolet.ai, merges human creativity with AI to create an immersive role-playing adventure. Players craft their narratives, alongside others or AI, in a world guided by Dark Violet. As both narrator and director, she ensures a fluid story progression, offering a unique space for players to inhabit their characters and co-create a diverse narrative tapestry, marking a revolutionary shift in the role-playing genre.",
//     },
//     {
//       heading: "Create, Play, and Immerse",
//       description:
//         "In Aethereal RP Multiverses, starting your adventure is easy: pick a title, craft a description, and the AI, embodied by Dark Violet, introduces characters to inhabit. Suitable for veterans and newcomers, its intuitive design and evolving narrative structure allow players to deeply engage, crafting their story within a continuously adapting world, ensuring an uninterrupted and evolving role-playing journey.",
//     },
//     {
//       heading: "Infinite Stories, Boundless Possibilities",
//       description:
//         "Aethereal RP Multiverses offers a portal to limitless narratives, each an exploration of new realms. The synergy of human and AI creativity fosters a versatile role-playing space, unpredictable and captivating. With Dark Violet steering the story, adventures deepen, providing a rich experience for players as co-creators of a dynamic multiverse. This platform offers unparalleled role-playing, where imagination runs free, and each session unveils a novel adventure, making every story an invitation to endless exploration.",
//     },
//   ],

//   projectInfoImages: [
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-projectInfoImage1.png",
//       dimension: "w-45%",
//     },
//     {
//       src: "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-projectInfoImage2.png",
//       dimension: "w-45%",
//     },
//   ],
//   thumbnail:
//     "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/am-login.png",
// },
// RealConnection.Life
// {
//   id: 3,
//   title: "RealConnection.Life",
//   description:
//     "AI-powered human connection social media platform for work and play.",
//   link: "https://www.realconnection.life",
//   github: "https://github.com/DarkViolet-ai/realconnection",
//   projectImages: [""],
//   thumbnail:
//     "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/neuralnetwork.png?t=2024-02-25T01%3A43%3A41.707Z)",
// },
