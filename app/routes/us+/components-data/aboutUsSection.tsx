import {
  Flex,
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { TeamMember } from "./about-us-data";
import SocialLink from "./socialLink";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import Divider from "~/buildingBlockComponents/divider";
import RenderParagraphs from "~/buildingBlockComponents/renderParagraphs";
import DarkFlexFull from "~/mainDesignComponents/darkFlexFull";
import { darkFlexInnerPadding } from "styles";

export default function AboutUsSection({
  teamMember,
}: {
  teamMember: TeamMember;
}) {
  const educationInfo = [teamMember.edu1, teamMember.edu2, teamMember.edu3];
  return (
    <DarkFlexFull>
      <VStackFull className={`flex-col ${darkFlexInnerPadding}`} gap="gap-2vh">
        <FlexFull className="flex-col md:flex-row">
          <Flex className="hidden md:flex p-1vh lg:p-2vh">
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="border-900-md shadowNarrowLooser"
            />
          </Flex>
          <VStackFull
            className="md:w-50%"
            gap="gap-1vh md:gap-2vh lg:p-1vh xl:py-3vh"
          >
            <VStackFull
              align="text-center xl:items-end"
              gap="gap-0"
              className="pt-1vh pb-2vh"
            >
              <span className="text-3.5vh lg:text-4.5vh text-fuchsia-300 textFogXxs">
                {teamMember.name}
              </span>
              <span className="textFogXxs">{teamMember.role}</span>
            </VStackFull>
            {/* *********************************** SOCIAL LINKS *********************************** */}
            <Wrap className={`justify-evenly`}>
              <SocialLink
                text="linked"
                link={teamMember.linkedin}
                icon={FaLinkedin}
              />
              <SocialLink text="git" link={teamMember.github} icon={FiGithub} />
              <SocialLink
                text="Connect"
                link={"#contact"}
                target=""
                icon={MdOutlineConnectWithoutContact}
              />
              <SocialLink
                text="cv"
                link={teamMember.resumeLink}
                icon={GrDocumentPdf}
              />
            </Wrap>
            {/* *********************************** EDUCATION ***********************************  */}
            <VStackFull
              className="py-1vh textShadow"
              align="text-center md:items-end"
              gap="md:gap-1vh"
            >
              {educationInfo.map((edu) => (
                <Wrap
                  className="w-full justify-center gap-x-1vh xl:justify-end"
                  key={edu}
                >
                  <span className="text-fuchsia-200 textFogXxs md:w-full xl:w-fit">
                    {edu?.split(" - ")[0]}
                  </span>
                  <span className="text-0.8em md:hidden xl:inline textFogXxs">
                    -
                  </span>
                  <span className="md:w-full xl:w-fit textFogXxs">
                    {edu?.split(" - ")[1]}
                  </span>
                </Wrap>
              ))}
            </VStackFull>
            {/* *********************************** TEAM MEMBER IMAGE ***********************************  */}
            <Flex className="md:hidden p-1vh">
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="border-900-md shadowNarrowLooser"
              />
            </Flex>
          </VStackFull>
        </FlexFull>
        <Divider />
        {/* *********************************** TEAM MEMBER PARAGRAPHS ***********************************  */}
        <VStackFull gap="gap-2vh">
          {teamMember.paragraphs.map((paragraph) => (
            <RenderParagraphs
              textItem={paragraph}
              key={paragraph}
              textClassName="textFogXxs"
            />
          ))}
        </VStackFull>
      </VStackFull>
    </DarkFlexFull>
  );
}
