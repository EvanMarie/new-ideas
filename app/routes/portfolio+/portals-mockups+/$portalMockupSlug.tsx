import { useParams } from "@remix-run/react";
import {
  PortalMockupProps,
  portalsAndMockupsData,
} from "../components-data/mockups-portals-data";

export default function PortalMockupSlug() {
  const portalMockupSlug = useParams().portalMockupSlug;
  const project = portalsAndMockupsData.find(
    (p: PortalMockupProps) => p.slug === portalMockupSlug
  );
  return <>{project?.title}</>;
}
