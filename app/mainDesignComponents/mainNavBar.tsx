import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainNavButton from "./mainNavButton";
import { BiHome, BiSmile } from "react-icons/bi";

export default function MainNavBar() {
  return (
    <FlexFull className="fixed bottom-0 left-0 right-0 bg-slate-900 justify-evenly z-10 rounded-none">
      <MainNavButton text="home" icon={BiHome} to="/" />
      <MainNavButton text="portfolio" icon={BiSmile} to="/portfolio" />
      <MainNavButton text="blog" icon={BiSmile} />
      <MainNavButton text="us" icon={BiSmile} />
      <MainNavButton text="contact" icon={BiSmile} />
    </FlexFull>
  );
}
