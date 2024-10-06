import VStackFull from "~/components/buildingBlocks/vStackFull";
import DeveloperSectionContainer from "./developerSectionContainer";
import {
  DeveloperContentStack,
  DeveloperStackHalf,
  DeveloperStackLarge,
  DeveloperStackSmall,
} from "./developerContentStack";
import Image from "~/components/buildingBlocks/image";
import Flex from "~/components/buildingBlocks/flex";
import DeveloperTextContainer from "./developerTextContainer";
import DeveloperHeading from "./developerHeading";
import Text from "~/components/buildingBlocks/text";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import { LinkedInIcon, PhoneIcon } from "styles";
import VStack from "~/components/buildingBlocks/vStack";
import { FaTwitter } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import DeveloperTextElement from "./developerTextElement";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function DeveloperContact({
  highlightColor,
  border,
  bg,
  darkBg,
}: {
  highlightColor: string;
  border: string;
  bg?: string;
  darkBg?: string;
}) {
  function ContactInfo({
    value,
    icon,
  }: {
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }) {
    return (
      <HStackFull className="items-center text-[2.1vh] sm:text-[2.3vh] md:text-[2.5vh] lg:text-[2.7vh]">
        <Icon icon={icon} iconClassName="text-[2vh]" />
        <Text>{value}</Text>
      </HStackFull>
    );
  }
  return (
    <DeveloperSectionContainer>
      <DeveloperContentStack>
        <DeveloperStackHalf>
          <Flex className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] lg:h-[60vh] xl:h-[70vh] xxl:w-[30vw] border-970-md shadowBroadLoose">
            <Image
              src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/developer2.png?width=700&resize=contain&quality=60"
              alt="Ethan James Parker, developer"
              ariaLabel="Ethan James Parker, developer"
              className=" h-full rounded-[0.5vh]"
            />
          </Flex>
        </DeveloperStackHalf>

        <DeveloperStackSmall>
          <FlexFull className="p-[1vh] sm:px-[2vh] md:px-[3vh] lg:px-[2vh] xl:px-[3vh]">
            <VStackFull
              className={`${darkBg} w-fit p-[1.5vh] border-970-md shadowBroadNormal`}
            >
              <FlexFull className="p-[1vh]">
                <DeveloperTextElement textClassName="text-[2vh] sm:text-[2.1vh] md:text-[2.3vh] lg:text-[2.1vh] xl:text-[2.5vh]  text-stone-100 textShadow">
                  Ethan is always eager to engage with fellow innovators and
                  clients alike. Reach out today to discuss how Ethan and the
                  Parker Apps team can help bring your mobile app vision to
                  life, or to invite him to share his insights at your next
                  event.
                </DeveloperTextElement>
              </FlexFull>
              <DeveloperTextContainer border={border}>
                <DeveloperHeading
                  highlightColor={highlightColor}
                  heading="Ethan James Parker"
                />
                <VStack
                  className={`${bg} w-fit p-[1.5vh] border-970-md shadowBroadNormal`}
                >
                  <ContactInfo value="ethan@parkerapps.com" icon={MdEmail} />
                  <ContactInfo value="+1 (212) 834-3343" icon={PhoneIcon} />
                  <ContactInfo
                    value="linkedin.com/in/ethanjparker"
                    icon={LinkedInIcon}
                  />
                  <ContactInfo value="@EthanJParker" icon={FaTwitter} />
                  <ContactInfo
                    value="github.com/ejparker"
                    icon={FaSquareGithub}
                  />
                </VStack>
              </DeveloperTextContainer>
            </VStackFull>
          </FlexFull>
        </DeveloperStackSmall>
      </DeveloperContentStack>
    </DeveloperSectionContainer>
  );
}
