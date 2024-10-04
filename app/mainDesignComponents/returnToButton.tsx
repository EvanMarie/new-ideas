import { useNavigate } from "@remix-run/react";
import { IoArrowUndo } from "react-icons/io5";
import ProjectButton from "./projectButton";

export default function ReturnToButton({ to }: { to: string }) {
  return (
    <ProjectButton
      to={to}
      icon={IoArrowUndo}
      position="fixed bottom-8.5vh right-1vh z-100"
      label="return"
    />
  );
}
