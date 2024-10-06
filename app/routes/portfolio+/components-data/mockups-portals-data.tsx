export interface PortalMockupProps {
  id: string;
  title: string;
  type: "portal" | "mockup";
  slug: string;
  description: string;
  thubmnail: string;
  url: string;
}

export const portalsAndMockupsData: PortalMockupProps[] = [
  {
    id: "1",
    title: "Portal 1",
    type: "portal",
    slug: "portal-1",
    description: "The first portal",
    thubmnail: "https://via.placeholder.com/150",
    url: "https://example.com",
  },
];
