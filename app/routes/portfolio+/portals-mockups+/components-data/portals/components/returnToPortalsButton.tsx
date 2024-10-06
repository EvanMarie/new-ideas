import { ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function ReturnToPortalsButton() {
  return (
    <Box className="fixed bottom-[2.6vh] right-[0.2vh] z-30">
      <NavLinkButton
        to="/ai-powered-portals"
        iconRight={ReturnPathIcon}
        buttonText="DarkViolet.ai"
        type="smallNormal"
      />
    </Box>
  );
}
