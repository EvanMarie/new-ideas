import { useNavigate, useSearchParams } from "@remix-run/react";
import { CloseIcon } from "styles";
import IconButton from "~/buildingBlockComponents/iconButton";
import { Box } from "~/buildingBlockComponents/mainContainers";

export default function CloseToFrom({
  position = "absolute top-0 right-0",
  zIndex = "z-60",
  className,
}: {
  position?: string;
  zIndex?: string;
  className?: string;
}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const from = searchParams.get("from") || "/";
  return (
    <Box className={`${position} ${zIndex} ${className}`}>
      <IconButton
        type="smallNegative"
        icon={CloseIcon}
        label="close chat"
        onClick={() => navigate(from)}
        tooltipPlacement="left"
      />
    </Box>
  );
}
