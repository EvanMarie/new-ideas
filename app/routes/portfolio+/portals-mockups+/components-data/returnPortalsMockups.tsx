import { IoArrowUndoOutline } from "react-icons/io5";
import IconButton from "~/buildingBlockComponents/iconButton";
import { Box } from "~/buildingBlockComponents/mainContainers";

export default function ReturnPortalsMockups() {
  return (
    <Box className="fixed bottom-0.5vh right-0.5vh z-30 text-white">
      <IconButton
        to="/portfolio/portals-mockups"
        icon={IoArrowUndoOutline}
        label="return"
        tooltipPlacement="topLeft"
      />
    </Box>
  );
}
