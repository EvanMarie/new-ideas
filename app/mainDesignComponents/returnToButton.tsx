import { useNavigate } from "@remix-run/react";
import { IoArrowUndo } from "react-icons/io5";
import ProjectButton from "./projectButton";

export default function ReturnToButton({ to }: { to: string }) {
  return (
    <ProjectButton
      to={to}
      icon={IoArrowUndo}
      position="fixed bottom-[6.5vh] md:bottom-[5.5vh] right-[0.7vh] z-20"
      label="return"
    />
  );
}
