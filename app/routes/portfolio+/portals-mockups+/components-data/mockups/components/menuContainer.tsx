import { NavLink } from "@remix-run/react";
import { FiExternalLink } from "react-icons/fi";
import { GitHubIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Divider from "~/components/buildingBlocks/divider";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import MainSlidingAnimation from "~/routes/components/mainSlidingAnimation";
import {
  darkGradient,
  portalMockupCardGradient,
  shineyGradient,
} from "~/routes/components/styleVariables";

export default function MockupMenuContainer({
  originalImage,
  originalTitle,
  demoImage,
  demoTitle,
  description,
  demoLink,
  originalLink,
  githubLink,
}: {
  originalImage: string;
  originalTitle: string;
  demoImage: string;
  demoTitle: string;
  description: string;
  demoLink: string;
  originalLink: string;
  githubLink: string;
}) {
  return (
    <>
      {/* SMALL SCREENS THROUGH MD  */}
      <MainSlidingAnimation hoverScale={1}>
        <Flex
          className={`lg:hidden w-[85vw] border-970-md shadowBroadNormal ${portalMockupCardGradient} rounded-[3vh]`}
        >
          <VStackFull className="">
            <VStackFull>
              <HStackFull className="items-center justify-center">
                <Text className="text-[2.3vh] text-cyan-200 textShadow">
                  <span className="text-slate-100 text-[2.3vh]">original:</span>{" "}
                  {originalTitle}
                </Text>
                <NavIconButton
                  icon={FiExternalLink}
                  to={originalLink}
                  target="_blank"
                  iconClassName="text-cyan-200"
                  type="unstyled"
                />
              </HStackFull>
              <NavLink to={originalLink} target="_blank">
                <Box className="w-[65vw] h-auto hover:cursor-pointer">
                  <Image
                    src={originalImage}
                    alt="original site image"
                    ariaLabel="original site image"
                    className="w-full h-full"
                  />
                </Box>
              </NavLink>
            </VStackFull>
            <FlexFull className="py-[1vh] px-[2vh] md:text-[2vh]">
              <Text>{description}</Text>
            </FlexFull>
            <Divider className="mt-[1vh]" />
            <VStackFull className="pb-[1vh]">
              <HStackFull className="items-center justify-center">
                <Text className="text-[2.3vh] text-cyan-200 textShadow">
                  <span className="text-slate-100 text-[2.3vh]">mockup:</span>{" "}
                  {demoTitle}
                </Text>
                <NavIconButton
                  icon={FiExternalLink}
                  to={demoLink}
                  iconClassName="text-cyan-200"
                  type="unstyled"
                />
              </HStackFull>
              <NavLink to={demoLink}>
                <Box className="w-[65vw] h-auto hover:cursor-pointer">
                  <Image
                    src={demoImage}
                    alt="original website image"
                    ariaLabel="original website image"
                    className="w-full h-full"
                  />
                </Box>
              </NavLink>
              <NavLinkButton
                iconLeft={GitHubIcon}
                to={githubLink}
                target="_blank"
                buttonText="Gist"
                type="smallNormal"
              />
            </VStackFull>
          </VStackFull>
        </Flex>
      </MainSlidingAnimation>
      {/* LARGE SCREENS THROUGH HD  */}
      <MainSlidingAnimation hoverScale={1}>
        <Flex
          className={`hidden lg:flex w-[95vw] border-970-md shadowBroadNormal ${shineyGradient} xl:w-[85vw] xxl:w-[80vw] rounded-[3vh]`}
        >
          <VStackFull className="py-[1.5vh]">
            <HStackFull className="justify-evenly">
              <VStack>
                <HStackFull className="items-center justify-center">
                  <NavLink to={originalLink}>
                    <Flex>
                      <Text className="text-[2.3vh] xl:text-[2.7vh] text-cyan-200 textShadow">
                        <span className="text-slate-100 text-[2.3vh]  xl:text-[2.7vh]">
                          original:
                        </span>{" "}
                        {originalTitle}
                      </Text>
                    </Flex>
                  </NavLink>
                  <NavIconButton
                    icon={FiExternalLink}
                    to={originalLink}
                    target="_blank"
                    iconClassName="text-cyan-200"
                    type="unstyled"
                  />
                </HStackFull>
                <NavLink to={originalLink} target="_blank">
                  <Box className="w-[40vw] xl:w-[35vw] h-auto  border-970-md shadowBroadNormal hover:cursor-pointer">
                    <Image
                      src={originalImage}
                      alt="original website image"
                      ariaLabel="original website image"
                      className="w-full h-full"
                    />
                  </Box>
                </NavLink>
              </VStack>
              <VStack className="pb-[1vh]">
                <HStackFull className="items-center justify-center">
                  <NavLink to={demoLink}>
                    <Flex>
                      <Text className="text-[2.3vh] xl:text-[2.7vh] text-cyan-200 textShadow">
                        <span className="text-slate-100 text-[2.3vh] xl:text-[2.7vh]">
                          mockup:
                        </span>{" "}
                        {demoTitle}
                      </Text>
                    </Flex>
                  </NavLink>
                  <NavIconButton
                    icon={FiExternalLink}
                    to={demoLink}
                    iconClassName="text-cyan-200"
                    type="unstyled"
                  />
                </HStackFull>
                <NavLink to={demoLink}>
                  <Box className="w-[40vw] xl:w-[35vw] h-auto  border-970-md shadowBroadNormal hover:cursor-pointer">
                    <Image
                      src={demoImage}
                      alt="original website image"
                      ariaLabel="original website image"
                      className="w-full h-full"
                    />
                  </Box>
                </NavLink>
              </VStack>
            </HStackFull>
            <FlexFull className="py-[1vh] px-[2vh] md:text-[2vh] xl:text-[2.3vh] xxl:text-[2.5vh] xl:px-[3vh] xxl:px-[4vh]">
              <Text>{description}</Text>
            </FlexFull>
            <NavLinkButton
              iconLeft={GitHubIcon}
              to={githubLink}
              target="_blank"
              buttonText="Gist"
              type="smallNormal"
            />
          </VStackFull>
        </Flex>
      </MainSlidingAnimation>{" "}
    </>
  );
}
