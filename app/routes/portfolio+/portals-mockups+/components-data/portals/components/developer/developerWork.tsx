import DeveloperHeading from "./developerHeading";
import DeveloperList from "./developerList";
import DeveloperTextContainer from "./developerTextContainer";
import DeveloperTextElement from "./developerTextElement";
import DeveloperSectionContainer from "./developerSectionContainer";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function DeveloperResume({
  highlightColor,
  border,
}: {
  highlightColor: string;
  border: string;
}) {
  return (
    <DeveloperSectionContainer>
      <FlexFull className="justify-center">
        <VStack
          className="h-fit p-[1vh] pb-[3.5vh] sm:pb-[2vh] md:p-[2vh] w-full lg:w-80% xxl:w-70%"
          gap="gap-[1.5vh]"
        >
          <DeveloperTextContainer border={border}>
            <DeveloperHeading
              highlightColor={highlightColor}
              heading="Ethan James Parker"
              subheading="Biography"
            />
            <DeveloperTextElement>
              Ethan James Parker is a driven and talented app developer with a
              passion for creating innovative and user-centric mobile
              applications. With a strong educational background in computer
              science and mobile computing, coupled with years of professional
              experience, Ethan has established himself as a leader in the app
              development industry. His company, Parker Apps, has developed
              several award-winning and highly downloaded apps across various
              categories.
            </DeveloperTextElement>
          </DeveloperTextContainer>{" "}
          <DeveloperTextContainer border={border} containerClassName="w-full">
            <DeveloperList
              heading="Work Experience"
              listItems={[
                "Founder and CEO, Parker Apps (2021-present)",
                "Senior App Developer, TechGiant Inc. (2018-2021)",
                "Intern, Mobile App Development, StartupX (Summer 2017)",
              ]}
              highlightColor={highlightColor}
            />{" "}
          </DeveloperTextContainer>{" "}
          <DeveloperTextContainer border={border} containerClassName="w-full">
            <DeveloperList
              heading="Skills"
              listItems={[
                "Android app development (Java, Kotlin)",
                "Cross-platform app development (React Native, Flutter)",
                "UI/UX design",
                "Agile development methodologies",
                "Project management",
              ]}
              highlightColor={highlightColor}
            />{" "}
          </DeveloperTextContainer>
          <DeveloperTextContainer border={border} containerClassName="w-full">
            <DeveloperList
              heading="Awards and Achievements"
              listItems={[
                "Best Productivity App at the Global Mobile Awards (2022)",
                "Top 10 Apps of the Year by TechReview Magazine (2021)",
                "1st Place, National App Development Challenge (2016)",
              ]}
              highlightColor={highlightColor}
            />{" "}
          </DeveloperTextContainer>
        </VStack>
      </FlexFull>
    </DeveloperSectionContainer>
  );
}
