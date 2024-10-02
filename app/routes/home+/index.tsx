import {
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function HomeIndex() {
  return (
    <FlexFull className="p-1.5vh sm:px-2vh md:px-3vh">
      <VStackFull gap="gap-[2vh]" className="h-fit" align="items-start">
        <h3>Innovative Web Solutions & AI Integration</h3>
        <Text>
          We combine cutting-edge tools and technologies to create practical,
          elegant, and intelligent web solutions, with a focus on seamless AI
          integration.
        </Text>
        <Text>
          In today's fast-paced tech world, staying ahead in web development and
          AI implementation is crucial. Our comprehensive approach ensures each
          project excels in aesthetics, functionality, and intelligent
          automation.
        </Text>
        <VStackFull gap="gap-0" align="items-start">
          <h5 className="text-cyan-300">
            From frontend to backend, we use the latest technologies to build:
          </h5>
          <ul>
            <li>Seamless, fully responsive websites</li>
            <li>Intuitive user experiences enhanced by AI</li>
            <li>Engaging digital presences with smart features</li>
            <li>AI-powered chatbots and virtual assistants</li>
            <li>Predictive analytics dashboards</li>
          </ul>
        </VStackFull>
        <Text>
          We craft every aspect of web development to maximize user engagement
          and satisfaction, while leveraging AI to drive business growth and
          efficiency.
        </Text>
        <h5 className="text-cyan-300">Our AI integration services include:</h5>
        <ul>
          <li>Custom AI model development for specific business needs</li>
          <li>Integration of machine learning algorithms for data analysis</li>
          <li>
            Natural Language Processing for improved customer interactions
          </li>
          <li>AI-driven recommendation systems to boost sales</li>
          <li>Automated decision-making processes to streamline operations</li>
        </ul>

        <VStackFull
          align="items-end"
          className="text-right pl-10vh"
          gap="gap-2vh"
        >
          <Text>
            By combining our web development expertise with cutting-edge AI
            technologies, we help businesses stay competitive in the digital
            age, offering smarter solutions that adapt and grow with your needs.
          </Text>
          <VStack align="items-end" className="font-cursive">
            <Text>
              <em>Evan Marie Carr &amp; Dustin W. Carr</em>
            </Text>
            <Text>
              <em>Co-Founders</em>
            </Text>
          </VStack>
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
