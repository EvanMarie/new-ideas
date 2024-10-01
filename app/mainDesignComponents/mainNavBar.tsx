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
    <FlexFull className="fixed bottom-0 left-0 right-0 bg-slate-900 justify-around z-10 rounded-none h-4svh items-center">
      <MainNavButton
        text="home"
        inactiveIcon={IoHomeOutline}
        activeIcon={IoHome}
        to="/home"
        label="home"
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
        text="us"
        inactiveIcon={FaRegSmile}
        activeIcon={FaSmileBeam}
        to="/us"
        label="about us"
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
