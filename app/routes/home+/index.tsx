import {
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import AnimatedBulletList from "~/mainDesignComponents/animatedBulletList";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";
import { randomizedImagesWithTitles } from "../portfolio+/components-data/project-data";

export default function HomeIndex() {
  return (
    <>
      <VStackFull className="p-1.5vh pt-2vh sm:px-2vh md:px-3vh lg:px-7vh max-w-[140svh]">
        <h3 className="text-cyan-300">
          Innovative Web Solutions & AI Integration
        </h3>
        <Text>
          We combine cutting-edge tools and technologies to create practical,
          elegant, and intelligent web solutions, with a focus on seamless AI
          integration.
        </Text>
        <FlexFull className="h-90vw sm:h-50svh md:h-55svh lg:h-70svh xl:h-80svh pt-5vh">
          <ShiftingImages
            imagesAndTitles={randomizedImagesWithTitles}
            imageDimensions="w-95vw sm:w-80vw md:h-45svh md:w-full lg:h-60svh xl:h-70svh"
          />
        </FlexFull>
        <VStackFull gap="gap-[2vh]" className="h-fit" align="items-start">
          <Text>
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
          <Text>
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
            <Text>
              By combining our web development expertise with cutting-edge AI
              technologies, we help businesses stay competitive in the digital
              age, offering smarter solutions that adapt and grow with your
              needs.
            </Text>
            <VStack
              align="items-end"
              className="kufam-font text-cyan-300 textShadow"
            >
              <Text>
                <em>Evan Marie Carr &amp;</em>
              </Text>
              <Text>
                <em>Dustin W. Carr</em>
              </Text>
              <Text>
                <em>Co-Founders</em>
              </Text>
            </VStack>
          </VStackFull>
        </VStackFull>
      </VStackFull>
    </>
  );
}
