import { useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";
import { IoArrowUndo, IoArrowUndoOutline } from "react-icons/io5";
import Icon from "~/buildingBlockComponents/icon";

export default function ReturnToButton({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <motion.button className="absolute bottom-5.2vh right-0.7vh z-20 bg-cyan-300 rounded-full p-0.4vh border-900-md shadowNarrowTight group hover:bg-slate-800 transition-300">
      <Icon
        icon={IoArrowUndo}
        iconClassName="text-lg text-slate-800 group-hover:text-cyan-300"
        onClick={() => navigate(to)}
      />
    </motion.button>
  );
}
