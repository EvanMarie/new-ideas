import { TeamFrames } from "./components-data/about-us-data";
import AboutUsSection from "./components-data/aboutUsSection";

export default function AboutUsIndex() {
  return (
    <>
      {TeamFrames.map((teamMember) => (
        <AboutUsSection teamMember={teamMember} />
      ))}
    </>
  );
}
