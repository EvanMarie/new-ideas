import React from "react";
import AirBnBMockup from "./mockups/airbnb";
import AnthropicDemo from "./mockups/anthropic";
import TeslaMockup from "./mockups/tesla";

export interface PortalMockupProps {
  id: string;
  title: string;
  type: "portal" | "mockup";
  slug: string;
  tagline: string;
  description: string;
  thubmnail: string;
  projectComponent?: React.ReactNode;
}

export const portalsAndMockupsData: PortalMockupProps[] = [
  {
    id: "1",
    title: "AirBnb Clone",
    type: "mockup",
    slug: "airbnb-mockup",
    tagline: "A mockup of the Airbnb platform with modern web technologies.",
    description:
      "This portal showcases a fully-functional mockup of Airbnb's iconic layout, built to demonstrate modern web design practices using cutting-edge technologies like Remix, Tailwind CSS, and TypeScript.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/airbnb-mockup.webp",
    projectComponent: <AirBnBMockup />,
  },
  {
    id: "2",
    title: "Anthropic Clone",
    type: "mockup",
    slug: "anthropic-mockup",
    tagline: "A modern mockup of Anthropic's AI-focused website.",
    description:
      "This mockup presents a sleek and futuristic redesign of Anthropic’s web presence, showcasing AI innovations and emphasizing safety. Built with modern UI/UX principles, it highlights how advanced AI systems can be communicated effectively to a broad audience through clean design and intuitive navigation.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/anthropic-mockup.webp",
    projectComponent: <AnthropicDemo />,
  },
  {
    id: "3",
    title: "Tesla Clone",
    type: "mockup",
    slug: "tesla-mockup",
    tagline: "A sleek mockup of Tesla's electric vehicle website.",
    description:
      "This Tesla-inspired mockup is designed with smooth transitions and dynamic content to reflect the high-tech aesthetic and innovation Tesla is known for, capturing their forward-thinking vision for sustainable energy.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-mockup.webp",
    projectComponent: <TeslaMockup />,
  },
  {
    id: "4",
    title: "Cool Cats Quizzes",
    type: "portal",
    slug: "cool-cats-portal",
    tagline: "Interactive and fun personality quizzes with unique results.",
    description:
      "This portal is a fun, interactive experience where users can take a variety of quirky personality quizzes. Each quiz provides a unique, personalized analysis along with custom-generated images based on responses.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/cool-cats-portal.webp",
    projectComponent: <></>,
  },
  {
    id: "5",
    title: "Developer Portal",
    type: "portal",
    slug: "developer-portal",
    tagline: "A customizable, app-like portal for developers and creatives.",
    description:
      "This portal offers a showcase of dynamic UI/UX designs with five customizable themes, demonstrating the cutting-edge techniques of modern app and web development, while offering interactive features like image generation powered by AI.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/developer-portal.webp",
    projectComponent: <></>,
  },
  {
    id: "6",
    title: "PhotoGrapher Portal",
    type: "portal",
    slug: "photographer-portal",
    tagline: "A stunning portfolio showcasing the artistry of photography.",
    description:
      "This visually rich portal highlights the exceptional work of photographer Cher Lavoie, featuring immersive galleries, a dynamic interface, and an integrated chat assistant for a personalized and seamless user experience.",
    thubmnail:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/photographer-portal.webp",
    projectComponent: <></>,
  },
];
