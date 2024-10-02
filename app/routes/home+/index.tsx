import {
  Center,
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import DarkFlexFull from "~/mainDesignComponents/darkFlexFull";

export default function HomeIndex() {
  return (
    <FlexFull className="p-1.5vh">
      <DarkFlexFull className="p-1.5vh">
        <VStackFull gap="gap-[2vh]" className="h-fit" align="items-start">
          <h3>Innovative Web Solutions</h3>
          <Text>
            We combine cutting-edge tools and technologies to create practical,
            elegant, and intelligent web solutions.
          </Text>
          <Text>
            In today's fast-paced tech world, staying ahead in web development
            is crucial. Our comprehensive approach ensures each project excels
            in both aesthetics and functionality.
          </Text>
          <VStackFull gap="gap-0" align="items-start">
            <h5>
              From frontend to backend, we use the latest technologies to build:
            </h5>
            <ul>
              <li>Seamless, fully responsive websites</li>
              <li>Intuitive user experiences</li>
              <li>Engaging digital presences</li>
            </ul>
          </VStackFull>
          <Text>
            We craft every aspect of web development to maximize user engagement
            and satisfaction.
          </Text>
          <FlexFull className="justify-end">
            <VStack align="items-end" className="font-cursive">
              <Text>
                <em>Evan Marie Carr &amp; Dustin W. Carr</em>
              </Text>
              <Text>
                <em>Co-Founders</em>
              </Text>
            </VStack>
          </FlexFull>
        </VStackFull>
      </DarkFlexFull>
    </FlexFull>
  );
}
