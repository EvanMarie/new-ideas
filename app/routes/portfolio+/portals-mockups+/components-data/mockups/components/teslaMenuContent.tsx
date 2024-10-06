import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import { MenuType } from "../tesla";
import TeslaMenuImagesWrap from "./teslaMenuImagesWrap";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStack from "~/components/buildingBlocks/vStack";
import Transition from "~/components/buildingBlocks/transition";

export default function TeslaMenuContent({ menuType }: { menuType: MenuType }) {
  const contentLinkStyles =
    "hover:cursor-pointer hover:bg-slate-300/80 w-full px-[1.5vh] lg:hover:bg-transparent lg:px-[0.5vh] lg:w-fit lg:hover:underline transition-400 text-nowrap";
  return (
    <Flex className="flex-col pt-[2vh] lg:pt-[0px] w-full lg:flex-row lg:w-[90vw] xl:w-[80vw] xxl:w-[75vw] items-center lg:justify-between gap-[1.5vh]">
      <Text className="text-transparent hidden lg:flex">spacer</Text>
      {menuType === "vehicles" && (
        <Transition>
          <TeslaMenuImagesWrap
            images={[
              { image: "tesla-menu-model-a", name: "Model A" },
              { image: "tesla-menu-model-b", name: "Model B" },
              { image: "tesla-menu-model-c", name: "Model C" },
              { image: "tesla-menu-model-d", name: "Model D" },
              {
                image: "tesla-menu-pseudo-truck",
                name: "Pseudo Truck",
              },
            ]}
          />
        </Transition>
      )}
      {menuType === "energy" && (
        <Transition className="w-full">
          <TeslaMenuImagesWrap
            images={[
              {
                image: "tesla-menu-energy-one",
                name: "Solar Panels",
              },
              {
                image: "tesla-menu-energy-two",
                name: "Solar Roof",
              },
              {
                image: "tesla-menu-energy-three",
                name: "Powerwall",
              },
              {
                image: "tesla-menu-energy-four",
                name: "Megapower",
              },
            ]}
          />
        </Transition>
      )}
      {menuType === "charging" && (
        <Transition className="w-full">
          <TeslaMenuImagesWrap
            images={[
              {
                image: "tesla-menu-charging-one",
                name: "Charging",
              },
              {
                image: "tesla-menu-charging-two",
                name: "Home Charging",
              },
              {
                image: "tesla-menu-charging-three",
                name: "Super Charging",
              },
            ]}
          />
        </Transition>
      )}
      {menuType === "discover" && (
        <Transition className="w-full">
          <HStackFull className="h-full pt-[6vh] lg:pt-[2vh] justify-evenly">
            <VStack className="w-20%" align="items-start">
              <Text>Resources</Text> <Text>Demo</Text> <Text>Drive</Text>
              <Text>Insurance</Text> <Text>Video Guides</Text>{" "}
              <Text>Customer Stories</Text> <Text>Events</Text>
            </VStack>
            <VStack className="w-20%" align="items-start">
              <Text>Location Services</Text> <Text>Find Us</Text>{" "}
              <Text>Find a Collision Center</Text>
              <Text>Find a Certified Installer</Text>
            </VStack>
            <VStack className="w-20%" align="items-start">
              <Text>Company</Text> <Text>About</Text> <Text>Careers</Text>{" "}
              <Text>Investor</Text> <Text>Relations</Text>
            </VStack>
          </HStackFull>
          <Text className="text-transparent">spacer</Text>
        </Transition>
      )}
      {menuType === "shop" && (
        <Transition className="w-full">
          <TeslaMenuImagesWrap
            images={[
              {
                image: "tesla-menu-merch-one",
                name: "Charging",
              },
              {
                image: "tesla-menu-merch-two",
                name: "Vehicle Accessories",
              },
              {
                image: "tesla-menu-merch-three",
                name: "Apparel",
              },
              {
                image: "tesla-menu-merch-four",
                name: "Lifestyle",
              },
            ]}
          />
        </Transition>
      )}
      <Transition className="w-full lg:w-fit flex-shrink-0 mPlus-font font-semibold lg:font-[400]">
        <Flex className="w-full lg:w-fit ">
          <VStack
            gap="gap-[5vh] lg:gap-[0.1vh]"
            className={`${
              menuType === "discover" || menuType === "shop" ? "hidden" : "flex"
            } px-[3vh] text-[2vh] w-full lg:w-fit lg:text-[1.7vh] lg:px-[2vh] lg:border-l-[0.2vh] lg:border-l-stone-400 rounded-none h-fit border-t-[0.3vh] border-t-slate-300 lg:border-t-transparent pt-[3vh] lg:pt-[0px]`}
            align="items-start"
          >
            {menuType === "vehicles" &&
              [
                "Inventory",
                "Used Cars",
                "Demo Drive",
                "Trade-in",
                "Compare",
                "Help Me Charge",
                "Fleet",
                "Semi",
                "Roadster",
              ].map((item, index) => (
                <Text className={contentLinkStyles}>{item}</Text>
              ))}
            {menuType === "energy" &&
              [
                "Schedule a Consultation",
                "Solar Panels",
                "Solar Roof",
                "Powerwall",
                "Solar for New Roofs",
                "Why Solar",
                "Incentives",
                "Support",
                "Partner with Tesla",
                "Commercial",
                "Utilities",
              ].map((item, index) => (
                <Text className={contentLinkStyles}>{item}</Text>
              ))}
            {menuType === "charging" &&
              [
                "Help Me Charge",
                "Charging Calculator",
                "Charging With NACS",
                "Supercharger Voting",
                "Host a Supercharger",
                "Commercial Charging",
                "Host Wall Connectors",
              ].map((item, index) => (
                <Text className={contentLinkStyles}>{item}</Text>
              ))}
          </VStack>
        </Flex>
      </Transition>
    </Flex>
  );
}
