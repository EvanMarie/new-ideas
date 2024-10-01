import { useParams } from "@remix-run/react";
import { Projects } from "./components-data/project-data";

export default function PortfolioItemIndex() {
  const slug = useParams().slug;
  const project = Projects.find((project) => project.slug === slug);
  return <>{project?.title}</>;
}
