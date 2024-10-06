import { GiReturnArrow } from "react-icons/gi";
import IconButton from "~/buildingBlockComponents/iconButton";
import { Box } from "~/buildingBlockComponents/mainContainers";

export default function ReturnToMockupsButton() {
  return (
    <Box className="fixed bottom-[3vh] right-[0.5vh] z-30">
      <IconButton
        to="/mockups"
        icon={GiReturnArrow}
        label="return"
        tooltipPlacement="topLeft"
      />
    </Box>
  );
}
