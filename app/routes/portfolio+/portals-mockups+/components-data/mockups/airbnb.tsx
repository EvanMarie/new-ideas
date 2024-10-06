import AirbnbSearchSmallScreens, {
  AirbnbSearchLargeScreens,
} from "./components/airbnbSearch";
import {
  MdOutlineCabin,
  MdOutlinePark,
  MdOutlinePhotoCamera,
  MdOutlinePool,
} from "react-icons/md";
import { TbBeach, TbBuildingStore, TbCategoryFilled } from "react-icons/tb";
import { FaWater } from "react-icons/fa";
import {
  GiCampingTent,
  GiFamilyHouse,
  GiFarmTractor,
  GiIsland,
  GiMountainCave,
  GiMushroomHouse,
  GiSydneyOperaHouse,
  GiTreehouse,
} from "react-icons/gi";
import { LuCastle, LuTrees } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import IconBar from "./components/airbnbIconBar";
import {
  airbnbProperties,
  generateAirbnbProperties,
} from "./components/airbnbData";
import AirBnBPropertyCard from "./components/airbnbPropertyCard";
import AirbnbFooter from "./components/airbnbFooter";
import ReturnToMockupsButton from "./components/returnToMockupsButton";
import {
  FlexFull,
  HStackFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";

type IconBarType = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const iconBar = [
  { icon: MdOutlinePark, label: "National Park" },
  { icon: MdOutlinePool, label: "Beautiful Pools" },
  { icon: MdOutlinePhotoCamera, label: "Amazing Views" },
  { icon: GiSydneyOperaHouse, label: "Top Cities" },
  { icon: TbCategoryFilled, label: "Off-The-Grid" },
  { icon: TbBeach, label: "Beachfront" },
  { icon: MdOutlineCabin, label: "Cabins" },
  { icon: FaWater, label: "Lakefront" },
  { icon: GiCampingTent, label: "Camping" },
  { icon: GiMushroomHouse, label: "OMG!" },
  { icon: GiTreehouse, label: "Treehouse" },
  { icon: GiIsland, label: "Tropical" },
  { icon: TbBuildingStore, label: "Tiny Homes" },
  { icon: GiFamilyHouse, label: "Mansions" },
  { icon: LuTrees, label: "Countryside" },
  { icon: GiFarmTractor, label: "Farms" },
  { icon: LuCastle, label: "Castles" },
  { icon: GiMountainCave, label: "Caves" },
];

export default function AirBnBMockup() {
  const [category, setCategory] = useState<String | undefined>(undefined);
  const [properties, setProperties] = useState(airbnbProperties);
  const [selectedDateOne, setSelectedDateOne] = useState<Date | null>(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState<Date | null>(null);
  const [when, setWhen] = useState("Anytime");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProperties(generateAirbnbProperties(70));
  }, [category]);

  return (
    <VStackFull
      className="w-screen h-[100svh] bg-white text-slate-900 fixed inset-0 pb-[3vh] rounded-none"
      gap="gap-[0px]"
    >
      <ReturnToMockupsButton />
      <HStackFull className="fixed top-0 left-0 right-0 h-[16vh] justify-center border-b-[0.2vh] border-b-slate-900/30 rounded-b-none">
        <VStackFull
          className=" h-full justify-between pt-[1.5vh]"
          gap="gap-[0px]"
        >
          <FlexFull className="flex md:hidden">
            <AirbnbSearchSmallScreens
              when={when}
              setWhen={setWhen}
              selectedDateOne={selectedDateOne}
              setSelectedDateOne={setSelectedDateOne}
              selectedDateTwo={selectedDateTwo}
              setSelectedDateTwo={setSelectedDateTwo}
            />
          </FlexFull>
          <FlexFull className="hidden md:flex">
            <AirbnbSearchLargeScreens
              when={when}
              setWhen={setWhen}
              selectedDateOne={selectedDateOne}
              setSelectedDateOne={setSelectedDateOne}
              selectedDateTwo={selectedDateTwo}
              setSelectedDateTwo={setSelectedDateTwo}
            />
          </FlexFull>
          <FlexFull className="xl:w-[75vw]">
            <IconBar
              iconBar={iconBar}
              setCategory={setCategory}
              category={category}
            />
          </FlexFull>
        </VStackFull>
      </HStackFull>
      <FlexFull
        className="h-[97.5svh] overflow-hidden pt-[16vh]"
        ref={containerRef}
      >
        <FlexFull className="h-[81svh] overflow-y-auto">
          <VStackFull>
            <Wrap className="w-full p-[1vh] justify-evenly">
              {" "}
              {properties.map((property, index) => (
                <AirBnBPropertyCard
                  property={property}
                  key={index}
                  when={when}
                />
              ))}
            </Wrap>
            <AirbnbFooter />
          </VStackFull>
        </FlexFull>
      </FlexFull>
    </VStackFull>
  );
}
