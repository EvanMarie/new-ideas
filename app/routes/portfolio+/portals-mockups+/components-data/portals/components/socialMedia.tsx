import {
  DiscordIcon,
  EmailIcon,
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "styles";
import Flex from "~/components/buildingBlocks/flex";
import Icon from "~/components/buildingBlocks/icon";
import { motion } from "framer-motion";

function SocialMediaItem({
  icon,
  containerClassName = "",
  iconClassName = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  containerClassName?: string;
  iconClassName?: string;
}) {
  return (
    <motion.button
      className={`flex ${containerClassName}`}
      whileHover={{
        scale: 1.05,
        rotate: -6,
        transition: { duration: 0.43 },
      }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
    >
      <Icon icon={icon} iconClassName={iconClassName} />
    </motion.button>
  );
}

export default function SocialMediaIcons({
  direction,
  containerClassName = "",
  iconClassName = "",
  outerContainerClassName = "gap-[1.5vh]",
}: {
  direction: string;
  containerClassName?: string;
  iconClassName?: string;
  outerContainerClassName?: string;
}) {
  return (
    <Flex className={`${direction} ${outerContainerClassName}`}>
      <SocialMediaItem
        icon={EmailIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={DiscordIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={YouTubeIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={TwitterIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={TikTokIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={InstagramIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
      <SocialMediaItem
        icon={PinterestIcon}
        iconClassName={iconClassName}
        containerClassName={containerClassName}
      />
    </Flex>
  );
}
