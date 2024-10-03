import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import AboutUsSection from "./components-data/aboutUsSection";
import { TeamMembers } from "./components-data/about-us-data";

export default function AboutUsIndex() {
  return (
    <VStackFull className="p-1.5vh pt-2vh sm:px-2vh md:px-3vh lg:px-7vh max-w-[140svh]">
      {TeamMembers.map((teamMember) => (
        <AboutUsSection teamMember={teamMember} />
      ))}
    </VStackFull>
  );
}
