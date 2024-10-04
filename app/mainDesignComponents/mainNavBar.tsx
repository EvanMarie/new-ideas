import { FlexFull, VStack } from "~/buildingBlockComponents/mainContainers";
import MainNavButton from "./mainNavButton";
import {
  BsChatText,
  BsChatTextFill,
  BsCollection,
  BsCollectionFill,
} from "react-icons/bs";
import { FaRegSmile, FaSmileBeam } from "react-icons/fa";
import { IoBook, IoBookOutline, IoHome, IoHomeOutline } from "react-icons/io5";

export default function MainNavBar() {
  return (
    <FlexFull className="fixed bottom-0 left-0 right-0 bg-indigo-900 bg-gradient-to-r from-indigo-950/70 via-indigo-950/40 to-indigo-950/70 justify-around z-50 rounded-none h-5svh md:h-4svh items-center">
      <MainNavButton
        text="home"
        inactiveIcon={IoHomeOutline}
        activeIcon={IoHome}
        to="/home"
        label="home"
      />
      <MainNavButton
        text="us"
        inactiveIcon={FaRegSmile}
        activeIcon={FaSmileBeam}
        to="/us"
        label="about us"
      />
      <MainNavButton
        text="portfolio"
        inactiveIcon={BsCollection}
        activeIcon={BsCollectionFill}
        to="/portfolio"
        label="portfolio"
      />
      <MainNavButton
        text="blog"
        inactiveIcon={IoBookOutline}
        activeIcon={IoBook}
        to="/blog"
        label="blog"
      />
      <MainNavButton
        text="connect"
        inactiveIcon={BsChatText}
        activeIcon={BsChatTextFill}
        to="/contact"
        label="connect"
      />
    </FlexFull>
  );
}
