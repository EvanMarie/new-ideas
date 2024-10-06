import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { MdOutlinePalette } from "react-icons/md";
import AnimatedIconNavLink from "~/routes/components/animatedIconNavLink";
import IndexPanelContainer from "~/routes/components/indexPanelContainer";
import { NavLink } from "@remix-run/react";

export default function MockupsPanel() {
  function Content() {
    return (
      <NavLink to="/mockups" className="w-full h-full">
        <VStackFull className="py-[1vh] sm:px-[2vh] lg:px-[3vh] lg:py-[1.5vh] lg:gap-[1.5vh] xl:gap-[2vh] h-full justify-between hover:cursor-pointer">
          <FlexFull className="justify-center text-[2.5vh] sm:text-[3vh] lg:text-[4vh] text-cyan-300 textShadow kufam-font">
            Site Mockups
          </FlexFull>
          <VStackFull className=" p-[1vh]">
            <VStackFull className="justify-evenly ">
              <Flex className="sm:w-[65vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] xxl:w-[25vw] justify-center border-970-md shadowBroadLoose">
                <Image
                  src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/mockups/airbnb_mockup.png?width=700&resize=contain&quality=60"
                  alt="mockup image"
                  ariaLabel="mockup image"
                  className="w-full h-full"
                />
              </Flex>
              <Flex className="sm:w-[65vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] xxl:w-[25vw] justify-center border-970-md shadowBroadLoose ">
                <Image
                  src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-mockup.png?width=700&resize=contain&quality=60"
                  alt="mockup image"
                  ariaLabel="mockup image"
                  className="w-full h-full"
                />
              </Flex>
            </VStackFull>
            <Flex className=" xl:py-[1vh]">
              <Text className="text-[2vh] lg:text-[2.3vh] textShadow">
                Remix / Tailwind CSS renditions with a bit of a twist designed
                by Evan Marie, inspired by popular sites across the internet.{" "}
              </Text>
            </Flex>
          </VStackFull>
          <FlexFull className="justify-center">
            <AnimatedIconNavLink
              icon={MdOutlinePalette}
              text="view mockup gallery"
            />
          </FlexFull>
        </VStackFull>
      </NavLink>
    );
  }
  return (
    <>
      <FlexFull className="xl:hidden">
        <IndexPanelContainer>
          <Content />
        </IndexPanelContainer>
      </FlexFull>
      <FlexFull className="hidden xl:flex">
        <Content />
      </FlexFull>
    </>
  );
}
