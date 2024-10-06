import { useParams } from "@remix-run/react";
import {
  PortalMockupProps,
  portalsAndMockupsData,
} from "./components-data/mockups-portals-data";
import { Transition } from "~/buildingBlockComponents/mainContainers";

export default function PortalMockupSlug() {
  const portalMockupSlug = useParams().portalMockupSlug;
  const project = portalsAndMockupsData.find(
    (p: PortalMockupProps) => p.slug === portalMockupSlug
  );
  return (
    <Transition className="h-100svh fixed inset-0">
      {project?.projectComponent}
    </Transition>
  );
}
