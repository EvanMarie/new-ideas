import { Flex } from "./mainContainers";

export default function SiteBackgroundImage({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) {
  return (
    <Flex
      className="fixed h-screen w-full bg-no-repeat bg-fixed bg-center bg-cover z-[-2] overflow-hidden"
      style={{
        backgroundImage: backgroundImage,
        maxHeight: "100svh",
      }}
    >
      {children}
    </Flex>
  );
}
