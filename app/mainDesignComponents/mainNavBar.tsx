import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainNavButton from "./mainNavButton";
import { BiHome, BiSmile } from "react-icons/bi";
import {
  BsChatText,
  BsChatTextFill,
  BsCollection,
  BsCollectionFill,
} from "react-icons/bs";
import { FaRegSmileBeam, FaSmileBeam } from "react-icons/fa";
import { HiBookOpen, HiOutlineBookOpen } from "react-icons/hi";
import { IoHome, IoHomeOutline } from "react-icons/io5";

export default function MainNavBar() {
  return (
    <FlexFull className="fixed bottom-0 left-0 right-0 bg-slate-900 justify-around z-10 rounded-none h-5svh items-center">
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
        inactiveIcon={HiOutlineBookOpen}
        activeIcon={HiBookOpen}
        to="/blog"
        label="blog"
      />
      <MainNavButton
        text="us"
        inactiveIcon={FaRegSmileBeam}
        activeIcon={FaSmileBeam}
        to="/us"
        label="about us"
      />
      <MainNavButton
        text="contact"
        inactiveIcon={BsChatText}
        activeIcon={BsChatTextFill}
        to="/contact"
        label="contact"
      />
    </FlexFull>
  );
}
