import { TeamFrame, TeamMember } from "./about-us-data";

export default function AboutUsSection({
  teamMember,
}: {
  teamMember: TeamFrame;
}) {
  return (
    <div>
      <h2>{teamMember.name}</h2>
      <p>{teamMember.role}</p>
      <p>{teamMember.edu3}</p> <p>{teamMember.edu2}</p> <p>{teamMember.edu1}</p>
      <img src={teamMember.image} alt={teamMember.name} />
      <p>{teamMember.paragraphs}</p>
    </div>
  );
}
