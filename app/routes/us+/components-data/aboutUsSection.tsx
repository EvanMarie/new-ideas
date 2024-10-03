import { TeamFrame, TeamMember } from "./about-us-data";

export default function AboutUsSection({
  teamMember,
}: {
  teamMember: TeamFrame;
}) {
  return (
    <div>
      <h1>About Us Section</h1>
      <h2>{teamMember.name}</h2>
      <p>{teamMember.role}</p>
      <p>{teamMember.edu3}</p> <p>{teamMember.edu2}</p> <p>{teamMember.edu1}</p>
      <img
        src={teamMember.image}
        alt={teamMember.name}
        className="rouned-full"
      />
      <p>{teamMember.paragraphs}</p>
    </div>
  );
}
