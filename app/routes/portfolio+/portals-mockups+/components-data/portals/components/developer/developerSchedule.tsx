import { useRef } from "react";
import DeveloperSectionContainer from "./developerSectionContainer";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import DeveloperScheduleItem from "./developerScheduleItem";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function  DeveloperSchedule({
  highlightColor,
  border,
  bg,
}: {
  highlightColor: string;
  border: string;
  bg: string;
}) {
  const parallax = useRef<IParallax>(null);
  return (
    <DeveloperSectionContainer>
      <Parallax ref={parallax} pages={3.2}>
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Keynote Speaker"
          event="The Future of Mobile App Development"
          location="AppCon, San Francisco, CA"
          date="September 15-17"
          offset={0}
          speed={0.4}
          border={border}
          bg={bg}
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Workshop Host"
          event="Mastering iOS App Development with Swift CodeCamp"
          location="online"
          date="July 10-12"
          offset={0.25}
          speed={0.2}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Panelist"
          event="Trends in User Experience Design for
          Mobile Apps MobileUX Summit"
          location="New York, NY"
          date="June 5-6"
          offset={0.5}
          speed={0}
          border={border}
          bg={bg}
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Guest Lecturer"
          event="Entrepreneurship in the App Development Industry"
          location="Stanford University,
          Palo Alto, CA"
          date="May 22"
          offset={0.75}
          speed={-0.1}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Speaker"
          event="Cross-Platform App Development: React
          Native vs. Flutter"
          location="TechTalk Webinar Series"
          date="April 28"
          offset={1}
          speed={0.4}
          border={border}
          bg={bg}
        />

        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Mentor"
          event="Hackathon for Social Good, Global Hackathon Initiative"
          location="online"
          date="March
          19-21"
          offset={1.25}
          speed={0.2}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Panelist"
          event="Monetization Strategies for Mobile Apps, AppBiz
          Conference"
          location="Chicago, IL"
          date="February 10-12"
          offset={1.5}
          speed={0}
          border={border}
          bg={bg}
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Workshop Host"
          event="Android App
          Development Bootcamp, TechLearn Academy"
          location="online"
          date="January 15-17"
          offset={1.75}
          speed={-0.1}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Speaker"
          event="The Role of AI in Mobile App Development, AI & Apps
          Symposium"
          location="Seattle, WA"
          date="November 8-9"
          offset={2}
          speed={0.4}
          border={border}
          bg={bg}
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Panelist"
          event="Building Inclusive and
          Accessible Mobile Apps, Diversity in Tech Summit"
          location="Austin, TX "
          date="October
          23-24"
          offset={2.25}
          speed={0.2}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Guest Speaker"
          event="From Idea to App Store: The Journey of a
          Successful App, Mobile Tech Meetup"
          location="Los Angeles, CA"
          date="September 5"
          offset={2.5}
          speed={0}
          border={border}
          bg={bg}
        />
        <DeveloperScheduleItem
          highlightColor={highlightColor}
          role="Workshop Host"
          event="UI/UX Design Principles for Mobile Apps, DesignCon"
          location="online"
          date="August 18-20"
          offset={2.75}
          speed={-0.1}
          border={border}
          bg={bg}
          justify="md:justify-end"
        />
      </Parallax>
    </DeveloperSectionContainer>
  );
}
