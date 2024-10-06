import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import DateSelector from "./airbnbDateSelector";
import { CiGlobe } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbBrandAirbnb } from "react-icons/tb";
import FormatDate from "~/utils/formatDate";
import { WhoTopContent } from "./airbnbWhereWhenWho";
import {
  Box,
  Center,
  CenterFull,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  Transition,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import Text from "~/buildingBlockComponents/text";
import Modal from "~/buildingBlockComponents/modal";
import Image from "~/buildingBlockComponents/image";
export type MenuStateType = "where" | "when" | "start" | "end" | "who" | null;
export const hoverBorder =
  "border-[0.3vh] border-slate-800/20 hover:border-slate-800 transition-300";

const fadeInOut = {
  initial: { opacity: 0, transition: { duration: 0.1 } },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function AirbnbSearchSmallScreens({
  when,
  setWhen,
  selectedDateOne,
  setSelectedDateOne,
  selectedDateTwo,
  setSelectedDateTwo,
}: {
  when: string;
  setWhen: (when: string) => void;
  selectedDateOne: Date | null;
  setSelectedDateOne: (date: Date | null) => void;
  selectedDateTwo: Date | null;
  setSelectedDateTwo: (date: Date | null) => void;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [where, setWhere] = useState("");

  const [who, setWho] = useState("Add Guests");

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const topAnimation = {
    initial: { opacity: 0, y: "-30vh" },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      opacity: {
        duration: 0.4,
        delay: 0.1,
      },
      y: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const bottomAnimation = {
    initial: { opacity: 0, y: "8vh" },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      opacity: {
        duration: 0.5,
        delay: 0.1,
      },
      y: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const [menuState, setMenuState] = useState<MenuStateType>("where");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  return (
    <>
      {/* ****************** HEADER MAIN SEARCH ****************** */}
      <CenterFull className="px-[2vh] py-[1vh] h-fit">
        <HStackFull className="items-center">
          <motion.div
            className="bg-zinc-100 shadowNarrowTight w-full h-[5.3vh] rounded-[3vh] flex items-center p-[1vh]"
            onClick={() => setSearchOpen(true)}
          >
            <HStackFull
              gap="gap-2vh"
              className="h-full items-center"
              hoverCursor="hover:cursor-pointer"
            >
              <Icon
                icon={FaSearch}
                iconClassName="text-[2.3vh]"
                containerClassName="flex flex-shrink-0"
              />
              <VStackFull align="items-start" gap="gap-[0px]">
                <Text className="text-sm leading-tight">
                  {where ? where : "Where to?"}
                </Text>
                <HStackFull
                  className="text-xs leading-tight text-zinc-500 gap-1vh"
                  hoverCursor="hover:cursor-pointer"
                >
                  <Text>{!where ? "Anywhere" : ""}</Text>
                  <Text>{when}</Text>
                  <Text>{who}</Text>
                </HStackFull>
              </VStackFull>{" "}
            </HStackFull>
          </motion.div>
          <Center
            className={`p-[1vh] h-fit rounded-full bg-zinc-100 flex-shrink-0 ${hoverBorder}`}
          >
            <Icon icon={FaSliders} iconClassName="text-[2vh]" />
          </Center>
        </HStackFull>
      </CenterFull>
      {/* ****************** SEARCH MODAL ****************** */}
      <Modal
        isOpen={searchOpen}
        setModalOpen={setSearchOpen}
        onClose={() => setSearchOpen(false)}
        showBottomClose={false}
        showTopClose={false}
        passVariants={modalVariants as Variants}
      >
        <VStackFull className="bg-slate-200 justify-between">
          <motion.div
            className="w-full"
            initial={topAnimation.initial}
            whileInView={topAnimation.whileInView}
            transition={topAnimation.transition}
            viewport={{
              once: true,
            }}
          >
            <FlexFull>
              <VStackFull>
                {/* ************* HEADER ************* */}
                <HStackFull className="p-[1vh] justify-between">
                  <Center
                    className="bg-white rounded-full p-[0.2vh] border-960-md hover:border-transparent transition-400"
                    onClick={() => setSearchOpen(false)}
                  >
                    <Icon icon={MdClose} iconClassName="text-[2.3vh]" />{" "}
                  </Center>
                  {/* ************* STAYS EXPERIENCES ************* */}
                  <StaysExperiences />
                  <Text className="text-transparent">space</Text>
                </HStackFull>
                {/* ************* TOP COMPONENTS ************* */}
                <VStackFull className="p-[1vh]">
                  {menuState === "where" ? (
                    <WhereTop
                      menuState={menuState}
                      where={where}
                      setWhere={setWhere}
                      setMenuState={setMenuState}
                    />
                  ) : (
                    <SectionCollapsed
                      label="Where"
                      onClick={() => setMenuState("where")}
                      status={where || "flexible"}
                    />
                  )}
                  {menuState === "when" ? (
                    <WhenTop
                      menuState={menuState}
                      selectedDateOne={selectedDateOne}
                      selectedDateTwo={selectedDateTwo}
                      setSelectedDateOne={setSelectedDateOne}
                      setSelectedDateTwo={setSelectedDateTwo}
                      when={when}
                      setWhen={setWhen}
                    />
                  ) : (
                    <SectionCollapsed
                      label="When"
                      onClick={() => setMenuState("when")}
                      status={when}
                    />
                  )}
                  {menuState === "who" ? (
                    <WhoTop
                      menuState={menuState}
                      who={who}
                      setWho={setWho}
                      adults={adults}
                      setAdults={setAdults}
                      children={children}
                      setChildren={setChildren}
                      infants={infants}
                      setInfants={setInfants}
                      pets={pets}
                      setPets={setPets}
                    />
                  ) : (
                    <SectionCollapsed
                      label="Who"
                      onClick={() => setMenuState("who")}
                      status={who}
                    />
                  )}
                </VStackFull>
              </VStackFull>
            </FlexFull>
          </motion.div>

          {/* ************* BOTTOM ************* */}
          <motion.div
            className="w-full flex h-[10vh]"
            initial={bottomAnimation.initial}
            whileInView={bottomAnimation.whileInView}
            transition={bottomAnimation.transition}
            viewport={{
              once: true,
            }}
          >
            <CenterFull>
              <button
                className="bg-pink-500 px-[1.5vh] py-[0.5vh] text-white hover:bg-pink-700 transition-400 rounded-[2vh]"
                onClick={() => setSearchOpen(false)}
              >
                <HStack
                  className="w-full items-center"
                  hoverCursor="hover:cursor-pointer"
                  gap="gap-1vh"
                >
                  <Icon icon={FaSearch} />
                  <Text>Search</Text>
                </HStack>
              </button>
            </CenterFull>
          </motion.div>
        </VStackFull>
      </Modal>
    </>
  );
}

export function AirbnbSearchLargeScreens({
  when,
  setWhen,
  selectedDateOne,
  setSelectedDateOne,
  selectedDateTwo,
  setSelectedDateTwo,
}: {
  when: string;
  setWhen: (when: string) => void;
  selectedDateOne: Date | null;
  setSelectedDateOne: (date: Date | null) => void;
  selectedDateTwo: Date | null;
  setSelectedDateTwo: (date: Date | null) => void;
}) {
  return (
    <HStackFull className="justify-between items-center px-[1.5vh] xl:px-[2.5vh] xxl:px-[3.5vh] text-slate-900">
      <Logo />
      <AirbnbSearchLargeConvertible
        selectedDateOne={selectedDateOne}
        selectedDateTwo={selectedDateTwo}
        setSelectedDateOne={setSelectedDateOne}
        setSelectedDateTwo={setSelectedDateTwo}
        when={when}
        setWhen={setWhen}
      />
      <ExpandableSearchRightIcons />
    </HStackFull>
  );
}

export function AirbnbSearchLargeConvertible({
  when,
  setWhen,
  selectedDateOne,
  setSelectedDateOne,
  selectedDateTwo,
  setSelectedDateTwo,
}: {
  when: string;
  setWhen: (when: string) => void;
  selectedDateOne: Date | null;
  setSelectedDateOne: (date: Date | null) => void;
  selectedDateTwo: Date | null;
  setSelectedDateTwo: (date: Date | null) => void;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalVariants = {
    open: {
      opacity: 1,
      //   scale: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.3 }, // Slows down the opacity transition
        scale: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 300, damping: 30 },
      },
    },
    closed: {
      opacity: 0,
      //   scale: 0,
      y: "-1vh",
      transition: {
        opacity: { duration: 0.3 }, // Slows down the opacity transition
        scale: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 300, damping: 30 },
      },
    },
  };
  const expandedVStacks =
    "gap-[0px] leading-tight mPlus-font px-[2vh] py-[0.6vh] h-full rounded-[4vh] hover:bg-slate-100 transition-400 hover:cursor-pointer";
  const expandedSelectedStyles =
    "bg-slate-100 shadowNarrowTight  transition-400";
  const VStacksHeading = "leading-tight text-sm font-semibold text-nowrap";
  const VStacksSubheading = "leading-tight text-xs text-nowrap";

  const handleSelectExpanded = (selected: string) => {
    return (e: React.MouseEvent) => {
      e.stopPropagation();
      setMenuState(selected as MenuStateType);
    };
  };
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("Add Guests");
  const [menuState, setMenuState] = useState<MenuStateType>("where");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  return (
    <>
      <motion.div
        className="bg-zinc-100 shadowNarrowTight w-fit h-[5.3vh] rounded-[3vh] flex items-center p-[1vh] hover:cursor-pointer text-slate-900"
        variants={fadeInOut as Variants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={() => setModalOpen(true)}
      >
        <HStackFull
          className="text-sm leading-tight text-zinc-500 items-center justify-between"
          gap="gap-[2vh]"
          hoverCursor="hover:cursor-pointer"
        >
          <HStack
            className="items-center px-[2vh] text-xs lg:text-sm leading-tight text-nowrap text-slate-900  "
            gap="gap-[1vh] lg:gap-[2vh]"
            hoverCursor="hover:cursor-pointer"
          >
            <Text>{where || "Anywhere"}</Text>{" "}
            <Text className="text-[3vh]">|</Text>
            <Text>{when}</Text> <Text className="text-[3vh]">|</Text>
            <Text>{who}</Text>
          </HStack>
          <Center
            className={`p-[0.5vh] h-fit rounded-full bg-pink-500 flex-shrink-0 ${hoverBorder}`}
          >
            <Icon icon={FaSearch} iconClassName="text-[2vh] text-white" />
          </Center>
        </HStackFull>
      </motion.div>

      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        className="fixed top-0 right-0 left-0 "
        onClose={() => setModalOpen(false)}
        modalSize="w-screen h-fit"
        overlayColor="bg-slate-700/20"
        overlayBlur="blur-[1px]"
        passVariants={modalVariants as Variants}
      >
        <motion.div
          className="flex w-full h-full flex-col"
          onClick={() => setMenuState(null)}
        >
          <VStackFull className="h-[16vh] justify-between text-slate-900">
            <VStackFull className="h-full justify-between bg-zinc-100 p-[1.5vh]">
              <CenterFull>
                <HStackFull className="justify-between px-[1vh] xxl:px-[2vh] items-center">
                  <Logo /> <StaysExperiences />
                  <ExpandableSearchRightIcons />
                </HStackFull>
              </CenterFull>
              <CenterFull>
                <HStack className="w-90% xl:w-70% xxl:w-60% justify-evenly items-center rounded-[4vh] bg-slate-200  p-[0.4vh] shadowNarrowTight">
                  <HStackFull className="justify-evenly">
                    <VStack
                      className={`${expandedVStacks} ${
                        menuState === "where" && expandedSelectedStyles
                      }`}
                      align="items-start"
                      onClick={handleSelectExpanded("where")}
                    >
                      <Text className={VStacksHeading}>Where</Text>
                      <Text className={VStacksSubheading}>
                        {where || "Search Destinations"}
                      </Text>
                    </VStack>{" "}
                    <VStack
                      className={`${expandedVStacks} ${
                        menuState === "start" && expandedSelectedStyles
                      }`}
                      align="items-start"
                      onClick={handleSelectExpanded("start")}
                    >
                      {" "}
                      <Text className={VStacksHeading}>Check In</Text>
                      <Text className={VStacksSubheading}>
                        {selectedDateOne ? (
                          <FormatDate
                            inputDate={selectedDateOne}
                            format="text"
                            dateOnly
                          />
                        ) : (
                          "Add Dates"
                        )}
                      </Text>
                    </VStack>{" "}
                    <VStack
                      className={`${expandedVStacks} ${
                        menuState === "end" && expandedSelectedStyles
                      }`}
                      align="items-start"
                      onClick={handleSelectExpanded("end")}
                    >
                      {" "}
                      <Text className={VStacksHeading}>Check Out</Text>
                      <Text className={VStacksSubheading}>
                        {selectedDateTwo ? (
                          <FormatDate
                            inputDate={selectedDateTwo}
                            format="text"
                            dateOnly
                          />
                        ) : (
                          "Add Dates"
                        )}
                      </Text>
                    </VStack>{" "}
                    <VStack
                      className={`${expandedVStacks} ${
                        menuState === "who" && expandedSelectedStyles
                      }`}
                      align="items-start"
                      onClick={handleSelectExpanded("who")}
                    >
                      {" "}
                      <Text className={VStacksHeading}>Who</Text>
                      <Text className={VStacksSubheading}>
                        {who || "Guest Details"}
                      </Text>
                    </VStack>
                  </HStackFull>
                  <Flex className="px-[2vh]">
                    <Center
                      className={`p-[0.8vh] h-fit rounded-full bg-pink-500 flex-shrink-0 ${hoverBorder} flex-shrink-0 md:flex xl:hidden`}
                    >
                      <Icon
                        icon={FaSearch}
                        iconClassName="text-[2.3vh] text-white"
                      />
                    </Center>
                    <Center
                      className={`p-[0.8vh] h-fit rounded-[3vh] bg-pink-500 flex-shrink-0 ${hoverBorder} flex-shrink-0 md:hidden xl:flex`}
                    >
                      <HStack className="h-full items-center" gap="gap-1vh">
                        <Icon
                          icon={FaSearch}
                          iconClassName="text-[2.3vh] text-white"
                        />
                        <Text className="text-md text-white ">Search</Text>
                      </HStack>
                    </Center>
                  </Flex>
                </HStack>
              </CenterFull>
            </VStackFull>
          </VStackFull>
          {menuState === "where" && (
            <FlexFull className="xxl:pl-[15vw]">
              <Flex className="h-[60vh] w-[60vh] p-[1vh]">
                <WhereTop
                  menuState={menuState}
                  where={where}
                  setWhere={setWhere}
                  setMenuState={setMenuState}
                />
              </Flex>
            </FlexFull>
          )}
          {menuState === "start" && (
            <FlexFull className="justify-center">
              <Flex className="h-[60vh] w-[60vh] p-[1vh]">
                <WhenTop
                  menuState={menuState}
                  selectedDateOne={selectedDateOne}
                  selectedDateTwo={selectedDateTwo}
                  setSelectedDateOne={setSelectedDateOne}
                  setSelectedDateTwo={setSelectedDateTwo}
                  when={when}
                  setWhen={setWhen}
                />
              </Flex>
            </FlexFull>
          )}
          {menuState === "end" && (
            <FlexFull className="justify-center">
              <Flex className="h-[60vh] w-[60vh] p-[1vh]">
                <WhenTop
                  menuState={menuState}
                  selectedDateOne={selectedDateOne}
                  selectedDateTwo={selectedDateTwo}
                  setSelectedDateOne={setSelectedDateOne}
                  setSelectedDateTwo={setSelectedDateTwo}
                  when={when}
                  setWhen={setWhen}
                />
              </Flex>
            </FlexFull>
          )}
          {menuState === "who" && (
            <FlexFull className="justify-end xl:pr-[15vw]">
              <Flex className="h-[60vh] w-[60vh] p-[1vh]">
                <WhoTop
                  menuState={menuState}
                  who={who}
                  setWho={setWho}
                  adults={adults}
                  setAdults={setAdults}
                  children={children}
                  setChildren={setChildren}
                  infants={infants}
                  setInfants={setInfants}
                  pets={pets}
                  setPets={setPets}
                />
              </Flex>
            </FlexFull>
          )}
        </motion.div>
      </Modal>
    </>
  );
}

function SectionCollapsed({
  label,
  onClick,
  status,
}: {
  label: string;
  onClick: () => void;
  status: string;
}) {
  return (
    <Transition className="w-full p-[0.5vh]">
      <div
        className={`p-[1vh] hover:cursor-pointer flex w-full justify-between ${hoverBorder} bg-white text-slate-900`}
        onClick={() => {
          console.log(`Changing menu state to: ${label}`);
          onClick();
        }}
      >
        <Text className="font-semibold">{label}</Text>
        <Text className="text-md">{status}</Text>
      </div>
    </Transition>
  );
}

function WhereTop({
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
    { label: "Flexible", fileName: "flexible" },
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
        <VStackFull className="rounded-2vh shadowNarrowTight bg-white py-[1vh]">
          <VStackFull className="p-3vh " gap="gap-2vh">
            <FlexFull className="text-lg mPlus-font font-semibold text-slate-900">
              Where to?
            </FlexFull>
            <FlexFull className="relative">
              <Icon
                icon={FaSearch}
                iconClassName="text-2vh text-slate-900"
                containerClassName="absolute top-[1.3vh] left-[1vh]"
              />
              <input
                className="w-full h-4.5vh pl-4vh border-860-md text-md"
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
                    <Text className="text-slate-900 text-md">
                      {location.label}
                    </Text>
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

function WhenTop({
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
            <FlexFull className="text-lg mPlus-font font-semibold  text-slate-900">
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

function WhoTop({
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
        <VStackFull className="rounded-2vh bg-white py-1vh">
          <VStackFull className="p-3vh " gap="gap-2vh">
            <FlexFull className="text-lg mPlus-font font-semibold">
              <WhoTopContent
                menuState={menuState}
                who={who}
                setWho={setWho}
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
                infants={infants}
                setInfants={setInfants}
                pets={pets}
                setPets={setPets}
              />
            </FlexFull>
          </VStackFull>
        </VStackFull>
      </motion.div>
    </AnimatePresence>
  );
}

function StaysExperiences() {
  const [stays, setStays] = useState("stays");
  return (
    <motion.div
      className="flex gap-3vh mPlus-font text-slate-900"
      layoutId="border-bottom"
    >
      <motion.div
        onClick={() => setStays("stays")}
        className={`text-md hover:cursor-pointer ${
          stays === "stays"
            ? "font-bold border-b-[0.3vh] border-b-slate-800 rounded-none transition-300"
            : "border-b-[0.3vh] border-b-transparent"
        }`}
      >
        Stays
      </motion.div>
      <motion.div
        onClick={() => setStays("experiences")}
        className={`text-md hover:cursor-pointer ${
          stays === "experiences"
            ? "font-bold border-b-[0.3vh] border-b-slate-800 rounded-none transition-300"
            : "border-b-[0.3vh] border-b-transparent"
        }`}
      >
        Experiences
      </motion.div>
      <motion.div
        onClick={() => setStays("online experiences")}
        className={`hidden md:flex text-md hover:cursor-pointer ${
          stays === "online experiences"
            ? "font-bold border-b-[0.3vh] border-b-slate-800 rounded-none transition-300"
            : "border-b-[0.3vh] border-b-transparent"
        }`}
      >
        Online Experiences
      </motion.div>
    </motion.div>
  );
}

function ExpandableSearchRightIcons() {
  return (
    <HStack className="flex-shrink-0 items-center" gap="gap-[2vh]">
      <Flex className="rounded-[3vh] hover:bg-slate-800/10 transition-400 px-[1vh] py-[0.5vh] hover:cursor-pointer text-md">
        List yours
      </Flex>
      <Flex className="rounded-[3vh] hover:bg-slate-800/10 transition-400  px-[1vh] py-[0.5vh]">
        <Icon icon={CiGlobe} iconClassName="text-[2.5vh]" />
      </Flex>
      <HStack
        className="py-[0.5vh] px-[1vh] border-[0.2vh] border-slate-800/40 rounded-[3vh] text-slate-800/80 hover:shadowNarrowTight transition-400"
        hoverCursor="hover:cursor-pointer"
      >
        <Flex>
          <Icon icon={IoMenu} iconClassName="text-[3vh]" />
        </Flex>
        <Flex>
          {" "}
          <Icon icon={FaUserCircle} iconClassName="text-[3vh]" />
        </Flex>
      </HStack>
    </HStack>
  );
}

function Logo() {
  return (
    <HStack className="items-center" gap="gap-[0vh]">
      <Icon
        icon={TbBrandAirbnb}
        iconClassName="text-[4vh] xl:text-[5vh] text-pink-500"
      />
      <Text className="text-lg hidden lg:flex mPlus-font font-semibold text-pink-500">
        airbnb
      </Text>
    </HStack>
  );
}
