import {
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { TeamMember } from "./about-us-data";
import SocialLink from "./socialLink";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";

export default function AboutUsSection({
  teamMember,
}: {
  teamMember: TeamMember;
}) {
  return (
    <FlexFull>
      <VStackFull>
        <VStackFull align="items-end" gap="gap-0" className="pt-1vh pb-2vh">
          <h3 className="mb-0">{teamMember.name}</h3>
          <p>{teamMember.role}</p>
        </VStackFull>
        <HStackFull className={` justify-between`}>
          <SocialLink
            text="LinkedIn"
            link={teamMember.linkedin}
            icon={FaLinkedin}
          />
          <SocialLink text="GitHub" link={teamMember.github} icon={FiGithub} />
          <SocialLink
            text="Connect"
            link={"#contact"}
            target=""
            icon={MdOutlineConnectWithoutContact}
          />
          <SocialLink
            text="Resume"
            link={teamMember.resumeLink}
            icon={GrDocumentPdf}
          />
        </HStackFull>
        <p>{teamMember.edu3}</p> <p>{teamMember.edu2}</p>{" "}
        <p>{teamMember.edu1}</p>
        <img src={teamMember.image} alt={teamMember.name} />
        <p>{teamMember.paragraphs}</p>
      </VStackFull>
    </FlexFull>
  );
}
