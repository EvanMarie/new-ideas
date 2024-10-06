import { motion, AnimatePresence } from "framer-motion";
import { MenuStateType, hoverBorder } from "./airbnbSearch";

import { useEffect, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import DateSelector from "./airbnbDateSelector";
import {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { IoSearchCircleOutline } from "react-icons/io5";
import Icon from "~/buildingBlockComponents/icon";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";

const fadeInOut = {
  initial: { opacity: 0, transition: { duration: 0.5 } },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export function WhereTop({
  menuState,
  where,
  setWhere,
  setMenuState,
}: {
  menuState: MenuStateType;
  where: string;
  setWhere: (location: string) => void;
  setMenuState: (menuState: MenuStateType) => void;
}) {
  const locations = [
    { label: "flexible", fileName: "flexible" },
    { label: "Europe", fileName: "europe" },
    { label: "Mexico", fileName: "mexico" },
    { label: "Caribben", fileName: "caribbean" },
    { label: "Italy", fileName: "italy" },
    { label: "South America", fileName: "south_america" },
    { label: "Columbia", fileName: "columbia" },
    { label: "Central America", fileName: "central_america" },
    { label: "United Kingdom", fileName: "united_kingdom" },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={menuState}
        className="w-full flex flex-col"
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <VStackFull className="rounded-[2vh] shadowNarrowTight bg-white text-slate-900 py-[1vh]">
          <VStackFull className="p-[3vh]  text-slate-900" gap="gap-[2vh]">
            <FlexFull className="text-lg mPlus-font font-semibold  text-slate-900">
              Where to?
            </FlexFull>
            <FlexFull className="relative">
              <Icon
                icon={IoSearchCircleOutline}
                iconClassName="text-[2vh]  text-slate-900"
                containerClassName="absolute top-[1.3vh] left-[1vh]"
              />
              <input
                className="w-full h-[4.5vh] pl-[4vh] border-860-md text-md"
                placeholder={where}
              />
            </FlexFull>
          </VStackFull>
          <Box className="w-full overflow-x-auto hide-scrollbar">
            <HStackFull className="w-fit px-[1vh]" gap="gap-[2vh]">
              {locations.map((location) => (
                <Flex className="px-[1vh]">
                  <VStack key={location.label} gap="gap-[0px]">
                    <Box
                      className={`w-[15vh] h-[15vh] rounded-[1vh] ${hoverBorder} hover:cursor-pointer`}
                      onClick={() => {
                        setWhere(location.label);
                        setMenuState("when");
                      }}
                    >
                      <Image
                        src={`https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/mockups/airbnb_locations_${location.fileName}.png?width=700&resize=contain&quality=60`}
                        alt={location.label}
                        className=" rounded-[0.8vh] w-full h-full"
                      />
                    </Box>
                    <Text>{location.label}</Text>
                  </VStack>
                </Flex>
              ))}
            </HStackFull>
          </Box>
        </VStackFull>
      </motion.div>
    </AnimatePresence>
  );
}

export function WhenTop({
  menuState,
  selectedDateOne,
  selectedDateTwo,
  setSelectedDateOne,
  setSelectedDateTwo,
  when,
  setWhen,
}: {
  menuState: MenuStateType;
  selectedDateOne: Date | null;
  selectedDateTwo: Date | null;
  setSelectedDateOne: (date: Date | null) => void;
  setSelectedDateTwo: (date: Date | null) => void;
  when: string;
  setWhen: (when: string) => void;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={menuState}
        className="w-full flex flex-col"
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <VStackFull className="rounded-[2vh] shadowNarrowTight bg-white py-[1vh]">
          <VStackFull className="p-[3vh] " gap="gap-[2vh]">
            <FlexFull className="text-lg mPlus-font font-semibold">
              When is your trip?
            </FlexFull>
            <DateSelector
              selectedDateOne={selectedDateOne}
              setSelectedDateTwo={setSelectedDateTwo}
              selectedDateTwo={selectedDateTwo}
              setSelectedDateOne={setSelectedDateOne}
              when={when}
              setWhen={setWhen}
            />
          </VStackFull>
        </VStackFull>
      </motion.div>
    </AnimatePresence>
  );
}

type CategoryProps = {
  label: string;
  description: string;
  count: number;
  setCount: (count: number) => void;
};

const Category = ({ label, description, count, setCount }: CategoryProps) => {
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div
      className="flex justify-between items-center p-[2vh] border-b border-gray-300 mPlus-font"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <div className="text-lg font-semibold">{label}</div>
        <div className="text-gray-500">{description}</div>
      </div>
      <div className="flex items-center">
        <button
          className="text-xl p-[1vh] leading-tight"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          <Icon
            icon={FiMinusCircle}
            iconClassName={`text-xl ${count < 1 && "text-slate-900/30"}`}
          />
        </button>
        <span className="mx-4">{count}</span>
        <button className="text-xl" onClick={handleIncrement}>
          <Icon icon={FiPlusCircle} iconClassName="text-xl" />
        </button>
      </div>
    </div>
  );
};

export function WhoTopContent({
  menuState,
  who,
  setWho,
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  pets,
  setPets,
}: {
  menuState: MenuStateType;
  who: string;
  setWho: (who: string) => void;
  adults: number;
  setAdults: (adults: number) => void;
  children: number;
  setChildren: (children: number) => void;
  infants: number;
  setInfants: (infants: number) => void;
  pets: number;
  setPets: (pets: number) => void;
}) {
  useEffect(() => {
    const parts = [];
    const totalPeople = adults + children;
    if (totalPeople > 0) {
      parts.push(`${totalPeople} ${totalPeople === 1 ? "guest" : "guests"}`);
    }
    if (infants > 0) {
      parts.push(`${infants} ${infants === 1 ? "infant" : "infants"}`);
    }
    if (pets > 0) {
      parts.push(`${pets} ${pets === 1 ? "pet" : "pets"}`);
    }
    setWho(parts.join(", "));
  }, [adults, children, infants, pets]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={menuState}
        className="w-full flex flex-col"
        variants={fadeInOut}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <VStackFull className="rounded-[2vh] shadowNarrowTight bg-white py-[1vh]">
          <VStackFull className="p-[3vh] " gap="gap-[2vh]">
            <FlexFull className="text-lg mPlus-font font-semibold">
              <div className="w-full mx-auto bg-white shadow-md rounded-lg">
                <Category
                  label="Adults"
                  description="Ages 13 or above"
                  count={adults}
                  setCount={setAdults}
                />
                <Category
                  label="Children"
                  description="Ages 2 – 12"
                  count={children}
                  setCount={setChildren}
                />
                <Category
                  label="Infants"
                  description="Under 2"
                  count={infants}
                  setCount={setInfants}
                />
                <Category
                  label="Pets"
                  description="Bringing a service animal?"
                  count={pets}
                  setCount={setPets}
                />
              </div>
            </FlexFull>

            <div className="text-center font-medium">{who}</div>
          </VStackFull>
        </VStackFull>
      </motion.div>
    </AnimatePresence>
  );
}
