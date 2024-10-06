import FlexFull from "~/components/buildingBlocks/flexFull";
import DeveloperSectionContainer from "./developerSectionContainer";
import Image from "~/components/buildingBlocks/image";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import DeveloperTextElement from "./developerTextElement";
import DeveloperTextContainer from "./developerTextContainer";
import DeveloperHeading from "./developerHeading";
import {
  DeveloperContentStack,
  DeveloperStackLarge,
  DeveloperStackSmall,
} from "./developerContentStack";

export default function DeveloperHome({
  highlightColor,
  border,
}: {
  highlightColor: string;
  border: string;
}) {
  return (
    <DeveloperSectionContainer>
      <DeveloperContentStack>
        {/* ********* HEADSHOT ********* */}
        <DeveloperStackSmall>
          <Flex className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] lg:h-[60vh] xl:h-[70vh] xxl:w-[30vw] border-970-md shadowBroadLoose">
            <Image
              src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/developer-headshot.png?width=700&resize=contain&quality=60"
              alt="Ethan James Parker, developer"
              ariaLabel="Ethan James Parker, developer"
              className="w-full h-full rounded-[0.5vh]"
            />
          </Flex>
          {/* ******** INFO  ******** */}
        </DeveloperStackSmall>

        {/* ******** BIO ******** */}
        <DeveloperStackLarge>
          <DeveloperTextContainer border={border}>
            <DeveloperHeading
              highlightColor={highlightColor}
              heading="Ethan James Parker"
              subheading=" CEO, Parker Apps"
            />
            <DeveloperTextElement>
              Ethan discovered his passion for programming and app development
              at a young age. He started coding when he was 12 and created his
              first app at 16. Throughout his high school and college years,
              Ethan participated in various hackathons and coding competitions,
              winning several awards for his innovative app ideas.
            </DeveloperTextElement>

            <DeveloperTextElement>
              After completing his master's degree, Ethan worked as a Senior App
              Developer at a leading tech company for three years before
              deciding to start his own app development studio, "Parker Apps."
              His studio focuses on creating cutting-edge, user-friendly mobile
              applications for both iOS and Android platforms.
            </DeveloperTextElement>
          </DeveloperTextContainer>
        </DeveloperStackLarge>
      </DeveloperContentStack>
    </DeveloperSectionContainer>
  );
}
