import { useState } from "react";
import { IoIosLink, IoMdExpand } from "react-icons/io";
import { CloseIcon } from "styles";
import Button from "~/buildingBlockComponents/button";
import Icon from "~/buildingBlockComponents/icon";
import IconButton from "~/buildingBlockComponents/iconButton";
import Image from "~/buildingBlockComponents/image";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Modal from "~/buildingBlockComponents/modal";
import Text from "~/buildingBlockComponents/text";

export const componentDrivenBlogImages = [
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-1-splash.webp",
    visitLink: "https://remix-template.darkviolet.ai/",
    caption:
      "This splash screen introduces the Remix-Vite-Tailwind template, a powerful starter framework that seamlessly integrates Remix, Vite, and Tailwind CSS. It showcases a modern, visually engaging design with a focus on speed, flexibility, and animation.",
    topic: "Splash Screen",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-2-colors.webp",
    visitLink: "https://remix-template.darkviolet.ai/design#colorscheme",
    caption:
      "Color Palette Designer's View - This image presents the dynamic color palette integrated within the Remix-Vite-Tailwind template. Featuring an extensive range of background colors, the palette is fully customizable via the Tailwind configuration file.",
    topic: "Colors",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-3-gradients.webp",
    visitLink: "https://remix-template.darkviolet.ai/design#gradients",
    caption:
      "Gradient Library - This image showcases the versatile gradient and opacity options available within the Remix-Vite-Tailwind template. Developers can experiment with various linear, diagonal, and radial gradients to create smooth, visually appealing transitions.",
    topic: "Gradients",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-4-backgrounds.webp",
    visitLink: "https://remix-template.darkviolet.ai/design#complexbackgrounds",
    caption:
      "Backgrounds - This image highlights the col-100 gradient combinations available for complex background designs in the Remix-Vite-Tailwind template. Featuring a variety of linear, diagonal, and radial gradients with customizable opacity levels.",
    topic: "Backgrounds",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-5-buttons.webp",
    visitLink: "https://remix-template.darkviolet.ai/design#buttons",
    caption:
      "Buttons, Transitions, Shadows - This image demonstrates the wide range of customizable button styles, transition effects, and shadow configurations available in the Remix-Vite-Tailwind template.",
    topic: "Buttons",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-6-text.webp",
    visitLink: "https://remix-template.darkviolet.ai/design#text",
    caption:
      "Text Sizing & Spacing - This image displays the extensive range of text size and spacing options available in the Remix-Vite-Tailwind template, allowing developers to achieve precise typographic control for any design.",
    topic: "Text",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-7-components.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/components",
    caption:
      "Components Overview - This image provides a glimpse of the extensive component library included in the Remix-Vite-Tailwind template, featuring customizable avatars, input fields, checkboxes, drawers, modals, and more.",
    topic: "Components",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-8-table.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/table-demo",
    caption:
      "Sortable Table Demo - This image showcases the sortable table feature in the Remix-Vite-Tailwind template, designed for use in administrative dashboards, providing a clean and functional layout for managing information.",
    topic: "Table",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-9-radial.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/radial-progress",
    caption:
      "useScroll: Radial Progress - This image demonstrates the radial progress feature tied to scrolling interactions, offering a visually appealing way to signal content progression.",
    topic: "Radial Progress",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-10-sticky.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/sticky-panels-demo",
    caption:
      "Sticky Panels: Scroll to View - This image demonstrates the sticky panels feature within the Remix-Vite-Tailwind template, creating a layered visual effect that helps maintain focus on important information.",
    topic: "Sticky Panels",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-11-carousel.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/animated-carousel-demo",
    caption:
      "Animated Carousel Demo - This image showcases the animated carousel feature from the Remix-Vite-Tailwind template, ideal for portfolios, product showcases, or galleries, with customizable image transitions.",
    topic: "Carousel",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-12-scroll.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/snapscroll-progress",
    caption:
      "Snap-Scroll Progress Container - This image highlights the Snap-Scroll Progress Container feature, where users can navigate through content sections with a smooth, snapping scroll effect.",
    topic: "Snap-Scroll",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-27-parallax-split.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/shifting-parallax",
    caption:
      "This parallax component creates a dynamic parallax effect that splits an image into multiple divisions with vertical animations, creating a visually captivating scrolling experience. In the demo, you can experiment with the animation settings to customize the parallax effect.",
    topic: "Parallax Shifting Image",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-13-parallax.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/horizontal-parallax",
    caption:
      "Horizontal Parallax Carousel - This image demonstrates the Horizontal Parallax Carousel feature, where foreground and background elements move at different speeds as users scroll horizontally.",
    topic: "Parallax Carousel",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-14-animate-text.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/animated-text-demo",
    caption:
      "Animated Title Demo - This image showcases the Animated Title Demo, where developers can configure custom text animations using adjustable parameters like letter delay, distance, and spring stiffness.",
    topic: "Animated Title",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-15-alert.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/components",
    caption:
      "Confirmation Alert Demo - This image displays a confirmation alert example, offering a simple yet effective way to manage user interactions for critical actions with options like Cancel and a highlighted Yes! button.",
    topic: "Alert",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-16-snap-scroll.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/animate-on-scroll",
    caption:
      "Snap Scroll Animate-On-Scroll Duration - This image demonstrates the Snap Scroll Animate-On-Scroll feature, with customizable animations triggered as users scroll through the content.",
    topic: "Snap Scroll Animate",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-17-intersection.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/infinite-scroll-demo",
    caption:
      "Intersection Observer - Lazy Loading Demo - This image demonstrates how items are dynamically loaded as users scroll using the Intersection Observer feature, optimizing performance with lazy loading.",
    topic: "Intersection Observer",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-18-masonry.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/masonry-grid-demo",
    caption:
      "Infinite Scroll Masonry Grid - This image showcases the Infinite Scroll Masonry Grid feature, where content is loaded continuously as users scroll, displayed in a masonry layout.",
    topic: "Masonry Grid",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-19-drawer.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/components",
    caption:
      "Drawer - Infinite Scroll Masonry Grid - This image showcases the Infinite Scroll Masonry Grid feature, where content is loaded continuously as users scroll, displayed in a masonry layout.",
    topic: "Drawer",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-20-parallax-image.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/components",
    caption:
      "Parallax Image and Text Demo - This image demonstrates the Parallax with Image and Parallax with Text features, adding depth and movement to the content as users scroll.",
    topic: "Parallax Image",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-28-framer-experiments.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/framer-motion",
    caption:
      "This interactive dashboard showcases a variety of animations created with Framer Motion. It allows users to explore features like keyframe animations, controlling properties like position, opacity, and scale, with replay controls for easy animation resets and code modals.",
    topic: "Framer Motion Implementations",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-21-rain.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/css-animation/advanced-animations",
    caption:
      "Rain Window Animation - This visual showcases a Rain Window animation, where animated raindrop-like particles simulate rainfall on a screen, adding a calming, atmospheric touch to web pages.",
    topic: "Rain Window",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-22-fireworks.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/css-animation/advanced-animations",
    caption:
      "Fireworks Animation - This image demonstrates a Fireworks animation using timing functions and keyframes, simulating fireworks bursts on a web page, perfect for celebrations.",
    topic: "Fireworks Animation",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-23-svg.webp",
    visitLink: "https://remix-template.darkviolet.ai/design/svg",
    caption:
      "Intro to SVGs - Scalable Vector Graphics Overview - This image provides an introduction to SVGs (Scalable Vector Graphics), explaining their XML-based structure and benefits for web animations.",
    topic: "SVGs",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-24-framer.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/svg/framer-motion-intro",
    caption:
      "Creating Interactive SVG Animations with Framer Motion - This image provides an overview of Framer Motion, a library for creating animated and interactive UI components in React and Remix.",
    topic: "Framer Motion",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-25-paths.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/svg/svg-path-examples",
    caption:
      "SVG Path Playground - This image features the SVG Path Playground, a dynamic tool for experimenting with and animating SVG paths, allowing users to interact with shapes like squares and spirals.",
    topic: "SVG Path Playground",
  },
  {
    imageLink:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/various/remix-vite-tailwind/remix-vite-tailwind-26-floating.webp",
    visitLink:
      "https://remix-template.darkviolet.ai/design/svg/svg-path-examples",
    caption:
      "Fun with Floating Circles - This image showcases an interactive Floating Circles Animation Tool, where users can customize various animation properties for engaging floating object animations.",
    topic: "Floating Circles",
  },
];

export default function ComponentDrivenBlogImages() {
  return (
    <FlexFull className="justify-center">
      <FlexFull className="h-[60svh] sm:h-[65svh] md:h-[70svh] lg:h-[76svh] max-w-[85vh] overflow-y-auto overflow-x-hidden snap-mandatory snap-y bg-col-950 insetShadow6xl border-450-md">
        <VStackFull className="h-fit py-[1vh]">
          {componentDrivenBlogImages.map((image, index) => (
            <Flex
              key={index}
              className="w-full h-[60svh] sm:h-[65svh] md:h-[70svh] lg:h-[76svh]  justify-center items-center flex-shrink-0 snap-center snap-always"
            >
              <ComponentDrivenImage
                image={image.imageLink}
                visitLink={image.visitLink}
                title={image.topic}
                caption={image.caption}
              />
            </Flex>
          ))}
        </VStackFull>
      </FlexFull>
    </FlexFull>
  );
}

export function ComponentDrivenImage({
  image,
  title,
  caption,
  hideExpand,
  visitLink,
  imageMaxHeight = "max-h-[70svh]",
}: {
  image: string;
  title: string;
  caption?: string;
  visitLink?: string;
  hideExpand?: boolean;
  imageMaxHeight?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <VStack
        className=" w-fit h-full justify-between p-[1vh] image-carousel pb-[2vh]"
        onClick={() => setExpanded(true)}
      >
        <Box className="rounded-md relative hover:cursor-pointer">
          {!hideExpand && (
            <motion.div
              className="absolute top-[0.5vh] right-[0.5vh] z-10 bg-col-200 p-[0.3vh] border-900-md metallicEdgesSm"
              onClick={() => setExpanded(true)}
            >
              <Icon
                icon={IoMdExpand}
                iconClassName="text-[2.4vh] text-col-900 "
              />
            </motion.div>
          )}
          <Image src={image} alt={title} />
        </Box>
        <Flex className="w-[90%] p-[1vh] bg-col-900 bg-gradient-to-br from-indigo-600/20 via-indigo-600/30 to-indigo-600/20 border-900-md shadowNarrowNormal textShadow text-xs md:text-sm">
          {caption}
        </Flex>
        <motion.div
          className="flex w-full justify-center "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button
            buttonText="go to page"
            type="smallNormal"
            iconLeft={IoIosLink}
            to={visitLink || ""}
            target="_blank"
          />
        </motion.div>
      </VStack>

      <Modal
        isOpen={expanded}
        setModalOpen={setExpanded}
        onClose={() => setExpanded(false)}
        modalSize="w-full h-[100svh]"
        showTopClose={false}
        showBottomClose={false}
        overlayBlur="backdrop-blur-md"
        overlayColor="bg-gradient-to-b from-violet-900/40 via-indigo-900/40 to-fuchsia-900/40 "
      >
        <VStackFull className="h-[100svh] justify-between bg-slate-900 bg-gradient-to-b from-violet-900/70 via-indigo-900/70 to-violet-900/70 shadowBroadLoose border-970-md relative">
          <HStackFull className="h-[5vh] justify-between px-[1vh] py-[0.5vh] items-center bg-slate-900/60 border-b-970-md rounded-b-none absolute top-0 right-0 left-0">
            <Text className="text-col-500 text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter">
              {title}
            </Text>
            <Flex className="h-full w-7% justify-end">
              <IconButton icon={CloseIcon} onClick={() => setExpanded(false)} />
            </Flex>
          </HStackFull>
          <VStackFull
            className="py-[1vh] xl:py-[2vh] px-[1vh] justify-center md:justify-evenly h-[100svh]"
            gap="gap-[1vh]"
          >
            <Flex className="shadowBroadLoose border-970-md rounded-md relative">
              <Box className="absolute -bottom-[0.5vh] -right-[0.5vh] md:-bottom-[2vh] md:-right-[2vh]">
                <Button
                  buttonText="visit this page"
                  type="smallNormal"
                  iconLeft={IoIosLink}
                  to={visitLink || ""}
                  target="_blank"
                />
              </Box>
              <Image
                src={image}
                alt={title}
                className={`w-full h-full ${imageMaxHeight} max-w-[95vw]`}
              />
            </Flex>
            <Flex className="w-[90vw] sm:w-[80vw] lg:w-[70vw] p-[1vh] text-col-100 bg-col-900 bg-gradient-to-br from-indigo-600/20 via-indigo-600/30 to-indigo-600/20 border-900-md shadowNarrowNormal textShadow">
              {caption}
            </Flex>
          </VStackFull>
          <Center className="w-full h-5vh absolute bottom-0 right-0 left-0 items-center bg-slate-900/60 border-t-970-md rounded-t-none">
            <Button
              iconLeft={CloseIcon}
              onClick={() => setExpanded(false)}
              buttonText="close"
              type="smallNormal"
            />
          </Center>
        </VStackFull>
      </Modal>
    </>
  );
}
