import {
  Flex,
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import AnimatedBulletList from "~/mainDesignComponents/animatedBulletList";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";
import { shuffledShiftingImages } from "./components-data/shiftingImages";

export default function HomeIndex() {
  return (
    <>
      <VStackFull
        className="p-1.5vh pt-2vh sm:px-2vh md:px-3vh lg:px-7vh max-w-[140svh]"
        align="items-start"
      >
        <h3 className="text-fuchsia-300 textFogXxs">
          Innovative Web Solutions & AI Integration
        </h3>
        <Text className="textFogXxs">
          We combine cutting-edge tools and technologies to create practical,
          elegant, and intelligent web solutions, with a focus on seamless AI
          integration.
        </Text>
        <FlexFull className="h-90vw sm:h-50svh md:h-55svh lg:h-70svh pt-5vh">
          <ShiftingImages
            imagesAndTitles={shuffledShiftingImages}
            imageDimensions="w-95vw sm:w-80vw md:h-45svh md:w-full lg:h-60svh "
          />
        </FlexFull>

        <VStackFull gap="gap-[2vh]" className="h-fit" align="items-start">
          <Text className="textFogXxs">
            In today's fast-paced tech world, staying ahead in web development
            and AI implementation is crucial. Our comprehensive approach ensures
            each project excels in aesthetics, functionality, and intelligent
            automation.
          </Text>
          <AnimatedBulletList
            heading="From frontend to backend, we use the latest technologies to build:"
            items={[
              "Seamless, fully responsive websites",
              "Intuitive user experiences enhanced by AI",
              "Engaging digital presences with smart features",
              "AI-powered chatbots and virtual assistants",
              "Predictive analytics dashboards",
            ]}
          />
          <Text className="textFogXxs">
            We craft every aspect of web development to maximize user engagement
            and satisfaction, while leveraging AI to drive business growth and
            efficiency.
          </Text>

          <AnimatedBulletList
            heading="Our AI integration services include:"
            items={[
              "Custom AI model development for specific business needs",
              "Integration of machine learning algorithms for data analysis",
              "Natural Language Processing for improved customer interactions",
              "AI-driven recommendation systems to boost sales",
              "Automated decision-making processes to streamline operations",
            ]}
          />

          <VStackFull
            align="items-end"
            className="text-right pl-15vh md:pl-10vh pb-3vh xl:pl-2vh"
            gap="gap-2vh"
          >
            <Text className="textFogXxs">
              By combining our web development expertise with cutting-edge AI
              technologies, we help businesses stay competitive in the digital
              age, offering smarter solutions that adapt and grow with your
              needs.
            </Text>
            <VStack
              align="items-end"
              className="kufam-font text-col-500 textShadow"
            >
              <Flex className="flex-col md:flex-row md:gap-1vh">
                <Text className="textFogXxs">
                  <em>Evan Marie Carr &amp;</em>
                </Text>
                <Text className="textFogXxs">
                  <em>Dustin W. Carr,</em>
                </Text>
              </Flex>
              <Text className="textFogXxs">
                <em>Co-Founders</em>
              </Text>
            </VStack>
          </VStackFull>
        </VStackFull>
      </VStackFull>
    </>
  );
}
