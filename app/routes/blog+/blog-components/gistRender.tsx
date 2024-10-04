import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "@remix-run/react";
import { FaGithub } from "react-icons/fa";
import SpringExpandableContainer, {
  SpringExpandableContainerButton,
} from "./springExpandableContainer";
import { FlexFull, HStack } from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";

export default function GistRender({
  gistLink,
  file,
  closedHeight = "10svh",
  // expandedHeight = "fit-content",
  expandedHeight = "50vh",
  title,
}: {
  gistLink: string;
  file?: string;
  closedHeight?: string;
  expandedHeight?: string;
  title: string;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [gistData, setGistData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const gistId = gistLink.split("/").pop(); // Extract the Gist ID from the URL
  const navigate = useNavigate();
  const codeBackground =
    "bg-indigo-900 bg-gradient-to-br from-col-990 via-col-960 to-col-990";

  function ErrorContainer({ children }: { children: React.ReactNode }) {
    return (
      <FlexFull
        className={`${codeBackground} text-col-500 justify-center py-[0.5vh] text-stroke-5-500 textShadow border-500-sm`}
      >
        {children}
      </FlexFull>
    );
  }

  // Fetch the Gist from GitHub API
  useEffect(() => {
    const fetchGist = async () => {
      try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the Gist");
        }
        const gist = await response.json();
        if (file && gist.files[file]) {
          setGistData(gist.files[file].content); // Get content for a specific file
        } else {
          setGistData(gist.files[Object.keys(gist.files)[0]].content); // Get content of the first file
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      }
    };

    fetchGist();
  }, [gistId, file]);

  // Scroll back to top when collapsing the expanded view
  useEffect(() => {
    if (!expanded && scrollRef.current) {
      scrollRef.current.scrollTo(0, 0); // Scroll back to the top when collapsed
    }
  }, [expanded]); // Trigger when the 'expanded' state changes

  if (error) {
    return (
      <ErrorContainer>
        <p>Error: {error}</p>
      </ErrorContainer>
    ); // Render error if fetching fails
  }

  if (!gistData) {
    return (
      <ErrorContainer>
        <p>Loading Gist...</p>
      </ErrorContainer>
    ); // Loading state
  }

  return (
    <SpringExpandableContainer
      title={"< " + title + " />"}
      headerContent={
        <NavLink to={gistLink} target="_blank" className=" rounded-[2vh]">
          <HStack
            className="items-center bg-col-500 w-fit px-[0.5vh] md:px-[1vh] border-900-md hover:cursor-pointer h-[2.7vh] rounded-[2vh] hover:metallicEdgesSm transition-300"
            gap="gap-[0.4vh]"
          >
            <Icon icon={FaGithub} iconClassName="text-col-900 " />
            <span className="text-xs text-col-900 text-stroke-5-900 leading-tight hidden md:inline">
              view gist
            </span>
          </HStack>
        </NavLink>
      }
    >
      {/* Render the gist content in a preformatted code block */}
      <pre>
        <code style={{ fontSize: "1.2vh" }}>{gistData}</code>
      </pre>
    </SpringExpandableContainer>
  );
}
