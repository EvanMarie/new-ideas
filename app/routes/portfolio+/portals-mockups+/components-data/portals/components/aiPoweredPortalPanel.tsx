import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { LiaAtomSolid } from "react-icons/lia";
import AnimatedIconNavLink from "~/routes/components/animatedIconNavLink";
import IndexPanelContainer from "~/routes/components/indexPanelContainer";
import ShiftingImages from "~/routes/components/shiftingImages";
import Box from "~/components/buildingBlocks/box";
import { NavLink } from "@remix-run/react";

export default function AIPoweredPortalPanel() {
  const portalImageNames = [
    "coolCatsQuizzes1.png",
    "portals-photography.png",
    "portals-developer.png",
  ];
  const portalImages = portalImageNames.map((imageName) => {
    return `https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/${imageName}?width=700&resize=contain&quality=60`;
  });

  const shiftingImagesDimensions =
    "w-[31vh] h-[31vh] sm:w-[45vh] sm:h-[45vh] md:w-[50vh] md:h-[50vh] xl:w-[40vh] xl:h-[40vh]";

  function InnerContent() {
    return (
      <NavLink to="/ai-powered-portals" className="w-full h-full">
        <VStackFull className="py-[1vh] sm:px-[2vh] lg:px-[3vh] lg:py-[1.5vh] lg:gap-[1.5vh] xl:gap-[2vh] h-full justify-between hover:cursor-pointer">
          {" "}
          <FlexFull className="justify-center text-[2.5vh] sm:text-[3vh] lg:text-[4vh] text-cyan-300 textShadow kufam-font">
            Portal Concepts and Apps
          </FlexFull>
          <Flex className="p-[1vh]">
            <Box
              className={`${shiftingImagesDimensions} shborder-970-md shadowBroadLooser `}
              hoverCursor="hover:cursor-pointer"
            >
              {" "}
              <ShiftingImages
                imageArray={portalImages}
                containerClassName={shiftingImagesDimensions}
                shape="rectangle"
                imageDimensions={shiftingImagesDimensions}
              />
            </Box>
          </Flex>
          <Flex className="xl:py-[1vh]">
            <Text className="text-[2vh] lg:text-[2.3vh] textShadow">
              Explore our gallery of sleek and innovative landing pages,
              portals, and web apps, each enhanced with AI capabilities. Get a
              glimpse of what we could create for you, your company, or any idea
              that you want to bring to life. We pecialize in AI-integrated web
              solutions, but we also offer custom designs tailored to your
              unique needs including options without AI features. Have a look,
              and envision your own portal or app!
            </Text>
          </Flex>
          <FlexFull className="justify-center">
            <AnimatedIconNavLink
              icon={LiaAtomSolid}
              text="view portal gallery"
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
          <InnerContent />
        </IndexPanelContainer>
      </FlexFull>
      <FlexFull className="hidden xl:flex">
        <InnerContent />
      </FlexFull>
    </>
  );
}
