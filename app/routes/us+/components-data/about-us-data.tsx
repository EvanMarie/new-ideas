export interface PortfolioImage {
  src: string;
  title?: string;
  dimension?: string;
}

export const EvanAvatar =
  "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/evan-headshot.png?width=500&resize=contain&quality=50";

export const DustinAvatar =
  "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dustin-headshot.png?width=500&resize=contain&quality=50";

export const DarkVioletAvatar =
  "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/darkVioletAvatar.png?width=500&resize=contain&quality=50";

export const thumbnailSettings = "?width=400&resize=contain&quality=50";
export const projectImageSettings = "?width=1000&resize=contain&quality=70";
export const projectInfoImageSettings = "?width=500&resize=contain&quality=50";
export const teamImageSettings = "?height=500&resize=contain&quality=50";
export const parallaxImageSettings = "?width=1000&resize=contain&quality=75";

export type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  headshot: string;
  resumeLink: string;
};

export const TeamMembers = [
  {
    name: "Evan Marie Carr",
    role: "Co-Founder, UI / UX & Frontend",
    linkedin: "https://www.linkedin.com/in/evanmarie/",
    github: "https://github.com/EvanMarie",
    headshot:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/evan-headshot.png" +
      teamImageSettings,
    resumeLink: "/images/Evan_Marie_Carr_resume.pdf",
  },
  {
    name: "Dustin W. Carr",
    role: "Co-Founder, AI Specialist, Backend",
    linkedin: "https://www.linkedin.com/in/dustin-carr-5ab1762/",
    github: "https://github.com/dwcarr",
    headshot:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dustin-headshot.png" +
      teamImageSettings,
    resumeLink: "/images/Dustin_Carr_cv.pdf",
  },
];

export type TeamFrame = {
  name: string;
  role: string;
  edu1: string | undefined;
  edu2: string | undefined;
  edu3: string | undefined;
  image: string;
  paragraphs: string[];
  link?: string;
  linkDescription?: string;
};

export const TeamFrames = [
  {
    name: "Evan Marie Carr",
    role: "UI / UX &  Frontend Developer",
    edu1: "Postgrad - Universität Mozarteum",
    edu2: "Master's Degree - Georgia State University",
    edu3: "Bachelor's Degree - Vanderbilt University",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/evan-headshot.png" +
      teamImageSettings,
    paragraphs: [
      "Evan Marie is a dynamic force in technology, the arts, and education, excelling as a programmer, designer, and developer. She creates digital experiences that fully engage and immerse users, inspiring minds to think outside the box and reach new heights. Evan's unique talent for blending technical proficiency with creative vision, combined with her ability to genuinely connect with people, makes her a true innovator in web and app development, machine learning, and artificial intelligence. Her work seamlessly bridges the gap between humans and technology, making complex digital solutions both accessible and engaging.",
      "With over two decades of industry experience, Evan has consistently exceeded expectations and delivered exceptional results. As a Co-Founder at DarkViolet.ai, she leads the design and development of groundbreaking mobile applications and web solutions, showcasing her skills in UI/UX design, graphic design, and the implementation of advanced machine learning models. Her diverse skill set enables her to approach projects holistically, from ideation and wireframing to development and deployment. Evan thrives in collaborative environments, where her technical expertise, creative problem-solving skills, and keen eye for design drive outstanding outcomes. Passionate about pushing the boundaries of what's possible, she remains eager to learn, grow, and take on new challenges in the ever-evolving technological landscape.",
    ],
    link: "https://www.evanmarie.com",
    linkDescription: "Evan Marie's Blog",
  },
  {
    name: "Dustin W. Carr",
    role: "Backend Developer & AI Specialist",
    edu1: "Ph.D. in Physics - Cornell University",
    edu2: "Master of Science in Physics - Cornell University",
    edu3: "Bachelor of Science in Mathematics - Oklahoma State",
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/dustin-headshot.png" +
      teamImageSettings,
    paragraphs: [
      "Dustin W. Carr, Ph.D., is a talented engineer and inventor aiming to channel his extensive technical expertise in the realm of artificial intelligence. Owning a portfolio of over 25 issued patents across diverse fields, he has extensive skills in innovation and effective problem-solving. Proficient in a wide range of programming languages including Python, Node, JavaScript, Remix, Rust, C, and C++, he has the versatility to develop robust software solutions and is particularly skilled at incorporating AI into the development process.",
      "An influential figure in the fields of MEMS, nanofabrication, and optical sensors, Dustin has held significant leadership roles, demonstrating expertise in design, assembly, and testing of intricate systems, significantly boosting operational efficiency and productivity in numerous organizations. Dustin has a distinguished academic foundation with a Ph.D. in Physics from Cornell University. To the AI field, Dustin brings a comprehensive suite of expertise and a proven trajectory of innovation and leadership. His ambitious pursuit of opportunities in AI and his unparalleled skill set position him uniquely to create and steer groundbreaking solutions in the industry.",
      "Dustin's distinguished career is underpinned by a robust academic foundation with a Ph.D. in Physics from Cornell University and a B.S. in Mathematics from Oklahoma State University. As he pivots into the AI field, Dustin brings a comprehensive suite of expertise and a proven trajectory of innovation and leadership. His ambitious pursuit of opportunities in AI and his unparalleled skill set position him uniquely to create and steer groundbreaking solutions in the industry.",
    ],
  },
  //   {
  //     name: "UI and AI",
  //     role: "the FrontLines",
  //     edu1: "We are helping to define the",
  //     edu2: "field of AI applications",
  //     edu3: "engineering.",
  //     image:
  //       "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/neuralnetwork.png" +
  //       teamImageSettings,
  //     paragraphs: [
  //       "We do this by cleverly combining leading edge tools and technologies to create innovative solutions that are practical, elegant, and intelligent.",
  //       "In the swiftly shifting landscape of technology, maintaining a lead in web development transcends mere optionality—it becomes an imperative. Our methodology in web development adopts a comprehensive stance, guaranteeing that each undertaking shines not only in aesthetic allure but in functional robustness as well.",
  //       "Our expertise spans the full spectrum from front-end to back-end development, harnessing cutting-edge technologies and frameworks to forge websites that are not only seamless and fully responsive from mobile to 4K ultra HD but also intuitively aligned with the end-user's needs.",
  //       "We recognize that a website embodies more than just a digital presence; it encapsulates an entire experience. With this philosophy at our core, we meticulously sculpt every facet of the web development journey, aiming to amplify user engagement and gratification.",
  //     ],
  //   },
];

export type ChatEntry = {
  user: string;
  message: string;
  timestamp: string;
};
