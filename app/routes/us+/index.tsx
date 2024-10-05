import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import AboutUsSection from "./components-data/aboutUsSection";
import { TeamMembers } from "./components-data/about-us-data";
import Divider from "~/buildingBlockComponents/divider";

export default function AboutUsIndex() {
  return (
    <VStackFull
      className="p-1.5vh pt-2vh pb-5vh sm:px-2vh md:px-3vh lg:px-7vh max-w-[140svh]"
      gap="gap-2vh md:gap-3vh"
    >
      {TeamMembers.map((teamMember, index) => (
        <AboutUsSection teamMember={teamMember} key={index} />
      ))}
      <FlexFull id="dark-violet-chat">
        <VStackFull>
          <span className="text-3.5vh lg:text-4.5vh text-fuchsia-300 textShadow">
            Chat with Dark Violet
          </span>
        </VStackFull>
      </FlexFull>
    </VStackFull>
  );
}
