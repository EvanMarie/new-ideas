import { Transition } from "~/buildingBlockComponents/mainContainers";

export default function RouteContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Transition
      className="w-full h-100svh pb-4svh overflow-y-auto overflow-x-hidden"
      type="fadeSlideInBottom"
    >
      {children}
    </Transition>
  );
}
