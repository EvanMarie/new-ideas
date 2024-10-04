import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaCode, FaRegSave } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Icon from "~/buildingBlockComponents/icon";
import {
  Box,
  Center,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  Transition,
  TransitionFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import ScrollProgressBar from "~/mainDesignComponents/visual-elements/scrollProgressBar";
import { motion } from "framer-motion";
import IconButton from "~/buildingBlockComponents/iconButton";
import { BsInputCursorText } from "react-icons/bs";

const JSONExamples = [
  `{
  "posts": [
    {
      "id": 1,
      "title": "How to Learn JavaScript",
      "author": "Alice Johnson",
      "published": "2024-09-01",
      "tags": ["JavaScript", "Programming", "Web Development"],
      "content": "JavaScript is a versatile programming language used for web development..."
    },
    {
      "id": 2,
      "title": "The Ultimate Guide to Traveling Europe",
      "author": "Bob Williams",
      "published": "2024-08-15",
      "tags": ["Travel", "Europe", "Guides"],
      "content": "Europe offers a wide range of experiences, from historical landmarks..."
    },
    {
      "id": 3,
      "title": "Mastering Python for Data Science",
      "author": "Clara Lin",
      "published": "2024-07-22",
      "tags": ["Python", "Data Science", "Programming"],
      "content": "Python has become the go-to language for data science due to its simplicity and powerful libraries..."
    },
    {
      "id": 4,
      "title": "The Best Hiking Trails in South America",
      "author": "Daniel Rodriguez",
      "published": "2024-06-30",
      "tags": ["Travel", "Hiking", "South America"],
      "content": "Explore the most breathtaking hiking trails across South America's diverse landscapes..."
    }
  ]
}`,
  `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "country": "USA",
      "interests": ["technology", "gaming", "traveling"]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "age": 34,
      "country": "Canada",
      "interests": ["cooking", "reading", "cycling"]
    },
    {
      "id": 3,
      "name": "Ahmed Khan",
      "email": "ahmed.khan@example.com",
      "age": 25,
      "country": "Pakistan",
      "interests": ["photography", "cricket", "hiking"]
    },
    {
      "id": 4,
      "name": "Maria Garcia",
      "email": "maria.garcia@example.com",
      "age": 29,
      "country": "Spain",
      "interests": ["dancing", "painting", "traveling"]
    },
    {
      "id": 5,
      "name": "Liu Wei",
      "email": "liu.wei@example.com",
      "age": 31,
      "country": "China",
      "interests": ["gardening", "running", "reading"]
    }
  ]
}`,
  `{
  "products": [
    {
      "id": 101,
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 59.99,
      "stock": 120,
      "ratings": {
        "average": 4.5,
        "reviews": 432
      }
    },
    {
      "id": 102,
      "name": "Coffee Maker",
      "category": "Home Appliances",
      "price": 99.95,
      "stock": 30,
      "ratings": {
        "average": 4.2,
        "reviews": 134
      }
    },
    {
      "id": 103,
      "name": "Smart Watch",
      "category": "Wearables",
      "price": 199.99,
      "stock": 75,
      "ratings": {
        "average": 4.7,
        "reviews": 543
      }
    },
    {
      "id": 104,
      "name": "Electric Scooter",
      "category": "Outdoor",
      "price": 299.99,
      "stock": 45,
      "ratings": {
        "average": 4.3,
        "reviews": 98
      }
    },
    {
      "id": 105,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 39.95,
      "stock": 200,
      "ratings": {
        "average": 4.6,
        "reviews": 320
      }
    }
  ]
}`,
  `{
  "locations": [
    {
      "city": "New York",
      "country": "USA",
      "temperature": {
        "current": 22,
        "min": 18,
        "max": 26,
        "unit": "Celsius"
      },
      "humidity": 60,
      "wind": {
        "speed": 12,
        "direction": "NW"
      },
      "forecast": [
        {
          "day": "Monday",
          "temperature": {
            "min": 20,
            "max": 25
          },
          "condition": "Partly Cloudy"
        },
        {
          "day": "Tuesday",
          "temperature": {
            "min": 21,
            "max": 27
          },
          "condition": "Sunny"
        }
      ]
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "temperature": {
        "current": 27,
        "min": 24,
        "max": 30,
        "unit": "Celsius"
      },
      "humidity": 70,
      "wind": {
        "speed": 15,
        "direction": "E"
      },
      "forecast": [
        {
          "day": "Monday",
          "temperature": {
            "min": 23,
            "max": 29
          },
          "condition": "Rain"
        },
        {
          "day": "Tuesday",
          "temperature": {
            "min": 25,
            "max": 31
          },
          "condition": "Cloudy"
        }
      ]
    },
    {
      "city": "Sydney",
      "country": "Australia",
      "temperature": {
        "current": 18,
        "min": 16,
        "max": 22,
        "unit": "Celsius"
      },
      "humidity": 50,
      "wind": {
        "speed": 10,
        "direction": "SE"
      },
      "forecast": [
        {
          "day": "Monday",
          "temperature": {
            "min": 17,
            "max": 23
          },
          "condition": "Clear"
        },
        {
          "day": "Tuesday",
          "temperature": {
            "min": 18,
            "max": 24
          },
          "condition": "Partly Cloudy"
        }
      ]
    }
  ]
}`,
];

interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
  > {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
  textAreaHeight?: string;
  textAreaWidth?: string;
  autoFocus?: boolean;
  isEditable?: boolean;
}

export function TextAreaNumberedLines({
  className = "",
  value: propValue,
  onChange,
  textAreaHeight = "h-full max-h-[56vh]",
  style = {
    resize: "none",
    fontSize: "15px",
    lineHeight: "23px",
    minHeight: textAreaHeight.replace("h-", ""),
  },
  textAreaWidth = "w-full",
  autoFocus = false,
  ...props
}: TextAreaProps) {
  const [value, setValue] = useState(propValue || "");
  const [lineCount, setLineCount] = useState<number>(1);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumberRef = useRef<HTMLDivElement | null>(null);

  // Calculate the number of lines in the textarea, including wrapped lines
  const updateLineCount = () => {
    if (textAreaRef.current) {
      const textareaLineHeight = 23; // Match this with your CSS line height
      const textareaScrollHeight = textAreaRef.current.scrollHeight;

      // If the textarea is empty, set line count to 1 (empty line)
      if (textAreaRef.current.value.trim() === "") {
        setLineCount(1);
      } else {
        const totalLines = Math.ceil(textareaScrollHeight / textareaLineHeight);
        setLineCount(totalLines); // Update line count based on content height
      }
    }
  };

  const updateHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Dynamically adjust height based on content
    }
  };

  // Recalculate lines and height after the component is mounted
  useLayoutEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);

      // Use setTimeout to delay recalculation to ensure content is fully loaded
      setTimeout(() => {
        updateLineCount();
        updateHeight();
      }, 0); // Small delay to allow layout to settle
    }
  }, [propValue]);

  // Initial layout adjustment
  useLayoutEffect(() => {
    // Delay recalculation after the initial render
    setTimeout(() => {
      updateLineCount();
      updateHeight();
    }, 0);
  }, []);

  // Sync scrolling between textarea and line number
  const handleScroll = () => {
    if (textAreaRef.current && lineNumberRef.current) {
      lineNumberRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  // Handle text input and trigger updates
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateLineCount(); // Update line count on input
    updateHeight(); // Adjust height on input
    if (onChange) {
      onChange(e); // Call the external onChange handler if provided
    }
  };

  // Generate all line numbers based on the total line count
  const renderedLines = Array.from({ length: lineCount }, (_, i) => (
    <FlexFull key={i} className="h-[23px] items-center">
      <span className="text-xs text-col-950 text-stroke-5-950 text-right">
        {i + 1}
      </span>
    </FlexFull>
  ));

  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    // Main container with scroll progress and line numbers
    <TransitionFull className="relative">
      <ScrollProgressBar containerRef={scrollRef} height="h-[0.5vh]" />
      <Flex
        className={`${textAreaHeight} ${textAreaWidth} overflow-y-auto overflow-x-hidden textareaStyles p-0.5vh focus-border-[0.2vh] outline-col-300 insetGlow6Xl border-500-md`}
        ref={scrollRef}
      >
        <HStack className={`h-fit w-full items-start relative `} tabIndex={1}>
          {/* Line Numbers */}
          <VStack
            ref={lineNumberRef}
            className="h-fit"
            style={{ width: "3vh" }}
            gap="gap-[0px]"
          >
            {renderedLines}
          </VStack>
          {/* Text Area */}
          <textarea
            ref={textAreaRef}
            value={value}
            onChange={handleInput}
            onScroll={handleScroll}
            autoFocus={autoFocus}
            className="w-full h-fit bg-transparent focus-border-0 outline-none flex flex-1 overflow-hidden pb-[4vh]"
            style={style}
            {...props}
          />
        </HStack>
      </Flex>
    </TransitionFull>
  );
}

// --------------------------------------- JSON ERROR ---------------------------------------- //
export function JsonError({ jsonError }: { jsonError: string | null }) {
  return (
    // Display JSON error message if present
    <HStack className="absolute z-10 px-[1vh] py-[0px] bottom-[1vh] left-[1vh] bg-col-pink bg-gradient-to-br from-fuchsia-380 via-fuchsia-360 to-fuchsia-380 w-fit max-w-80% items-center border-400-lg shadowNarrowTight">
      <Icon icon={MdErrorOutline} iconClassName="text-col-900 text-[2.3vh]" />
      <Text className="text-col-900 text-stroke-5-900 text-sm">
        {jsonError}
      </Text>
    </HStack>
  );
}

// ------------------------------ VALIDATED JSON NUMBERED INPUT ------------------------------ //
export function ValidatedJSONNumberedInput({
  initialValue,
  onChange,
}: {
  initialValue?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  // State to track textarea content and JSON validation errors
  const [value, setValue] = useState(initialValue);
  const [jsonError, setJsonError] = useState<string | null>(null);

  // Update value state when initialValue changes
  useEffect(() => {
    setValue(initialValue || ""); // Set value when initialValue changes
  }, [initialValue]);

  // Function to calculate the line number from a given position in the string
  const getLineNumber = (input: string, position: number): number => {
    const normalizedInput = input.replace(/\r\n/g, "\n"); // Normalize line breaks
    const lines = normalizedInput.substring(0, position).split("\n");
    return lines.length; // Return the number of lines up to the error
  };

  // Function to validate the JSON input and identify the error line if parsing fails
  const validateJSON = (input: string) => {
    try {
      JSON.parse(input); // Attempt to parse JSON
      setJsonError(null); // Clear error if valid
    } catch (error: any) {
      const positionMatch = error.message.match(/position (\d+)/);
      if (positionMatch) {
        const position = parseInt(positionMatch[1], 10);
        const lineNumber = getLineNumber(input, position); // Get line number of error
        setJsonError(`Invalid JSON format at line ${lineNumber}`);
      } else {
        setJsonError("Invalid JSON format"); // General error message
      }
    }
  };

  // Handler function triggered when the content of the textarea changes
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    setValue(inputValue); // Update value
    validateJSON(inputValue); // Validate the input as JSON

    if (onChange) {
      onChange(event); // Call parent onChange handler
    }
  };

  return (
    <Center className="w-full">
      {/* Use Flex to layout the content relatively */}
      <FlexFull className="relative">
        {jsonError && <JsonError jsonError={jsonError} />}{" "}
        {/* Show error if present */}
        <TextAreaNumberedLines
          value={value} // Pass current value to textarea
          onChange={handleTextAreaChange} // Trigger onChange event to validate JSON
        />
      </FlexFull>
    </Center>
  );
}

// ----------------------------------- RENDER JSON EXAMPLE ----------------------------------- //
export function RenderJSONExample({
  JSONString,
  scrollRef,
}: {
  JSONString: string;
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  try {
    // Parse the input JSON string
    const shape = JSON.parse(JSONString);

    // Recursive function to render nested objects and arrays
    const renderValue = (value: any, isChild = false) => {
      if (Array.isArray(value)) {
        return value.map((item, index) => (
          <VStackFull
            align="items-start"
            key={index}
            className={`${
              isChild
                ? "pl-2vh"
                : "border-600-md p-[1.5vh] rounded-[2vh] shadowNarrowNormal bg-col-900 bg-gradient-to-br from-indigo-800/30 via-sky-900/30 to-indigo-800/30"
            } w-full h-full  `}
            gap="gap-0"
          >
            {renderValue(item, true)} {/* Recursively render arrays */}
          </VStackFull>
        ));
      } else if (typeof value === "object" && value !== null) {
        return Object.keys(value).map((subKey) => (
          <VStackFull
            key={subKey}
            className={`${isChild ? "pl-2vh" : ""} w-full h-full`}
            align="items-start"
            gap="gap-0"
          >
            <HStackFull className="">
              <Text className="text-cyan-300 text-sm textShadow">
                <strong>{subKey}:</strong>
              </Text>
              <VStackFull className="w-full " align="items-start">
                {renderValue(value[subKey], true)}{" "}
                {/* Recursively render objects */}
              </VStackFull>
            </HStackFull>
          </VStackFull>
        ));
      } else {
        // Render primitive values as text
        return (
          <Text className="text-sm text-col-100 text-stroke-5-100">
            {String(value)}
          </Text>
        );
      }
    };

    return (
      // Main container with scroll progress
      <Transition
        className="w-[98vw] md:w-[80vh] bg-col-700 insetShadow3xl h-[56vh] overflow-y-auto overflow-x-hidden p-[1vh]"
        ref={scrollRef}
      >
        <VStackFull
          className="w-full h-fit p-[1vh]"
          gap="gap-0"
          align="items-start"
        >
          {Object.keys(shape).map((key, index) => (
            <VStackFull key={index} className="w-full h-full" gap="gap-0">
              {/* Top-level key */}
              <Text className="text-[4vh] text-cyan-300 text-semibold textShadow">
                {key}
              </Text>
              <VStackFull className="w-full" gap="gap-0" align="items-start">
                {renderValue(shape[key])}
              </VStackFull>
            </VStackFull>
          ))}
        </VStackFull>
      </Transition>
    );
  } catch (error: any) {
    return (
      <Text className="text-red-500">
        Invalid JSON or unsupported structure: {error.message}
      </Text>
    );
  }
}

// ------------------------------------ EDITABLE JSON INPUT ----------------------------------- //
export function EditableJSONInput({
  JSONString,
  scrollRef,
  onChange,
}: {
  JSONString: string;
  scrollRef: React.RefObject<HTMLDivElement>;
  onChange: (updatedJSON: any) => void;
}) {
  const [jsonState, setJsonState] = useState(() => JSON.parse(JSONString));

  // Update jsonState on input change
  const handleInputChange = (keyPath: string[], value: any) => {
    const newState = { ...jsonState };
    let current = newState;

    // Traverse the keyPath and set the new value
    for (let i = 0; i < keyPath.length - 1; i++) {
      current = current[keyPath[i]];
    }

    current[keyPath[keyPath.length - 1]] = value;
    setJsonState(newState);
    onChange(newState); // Pass the updated JSON back to parent
  };

  // Recursive rendering function for JSON values
  const renderValue = (value: any, keyPath: string[] = [], isRoot = false) => {
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <VStackFull
          key={index}
          className={`pl-2vh ${
            isRoot
              ? "border-100-md p-[1.5vh] mb-[1vh] bg-col-950 insetShadow5xl"
              : ""
          }`}
        >
          {renderValue(item, [...keyPath, index.toString()])}{" "}
          {/* Recursively render arrays */}
        </VStackFull>
      ));
    } else if (typeof value === "object" && value !== null) {
      return Object.keys(value).map((key) => (
        <VStackFull key={key} className="w-full h-full pl-2vh">
          <HStackFull gap="gap-[2vh]">
            <Text className="text-cyan-300 text-sm textShadow">
              <strong>{key}:</strong>
            </Text>
            <VStackFull className="w-full" align="items-start">
              {renderValue(value[key], [...keyPath, key])}{" "}
              {/* Recursively render objects */}
            </VStackFull>
          </HStackFull>
        </VStackFull>
      ));
    } else {
      // For primitive types, render an input field
      return (
        <input
          type="text"
          value={String(value)}
          onChange={(e) => handleInputChange(keyPath, e.target.value)} // Update value on input
          className="px-[1vh] py-[0.2vh] bg-transparent border-b-[0.1vh] rounded-none border-white/40 text-white text-sm w-full"
        />
      );
    }
  };

  return (
    // Main container for JSON editing
    <Transition
      className="w-[98vw] md:w-[80vh] bg-col-800 insetShadow3xl h-[56vh] overflow-y-auto overflow-x-hidden p-[1vh]"
      ref={scrollRef}
    >
      <VStackFull
        className="w-full h-fit p-[1vh]"
        gap="gap-0"
        align="items-start"
      >
        {Object.keys(jsonState).map((key) => (
          <VStackFull key={key} className="w-full h-full">
            {/* Top-level JSON key */}
            <Text className=" text-cyan-300 text-semibold textShadow">
              {key}
            </Text>
            <VStackFull className="w-full" align="items-start">
              {renderValue(jsonState[key], [key], true)}{" "}
              {/* Recursively render JSON */}
            </VStackFull>
          </VStackFull>
        ))}
      </VStackFull>
    </Transition>
  );
}

// ------------------------------------- ENTIRE COMPONENT ------------------------------------- //
export default function DemoJsonInput() {
  const [isEditJSON, setIsEditJSON] = useState(false);
  const [isEditInput, setIsEditInput] = useState(false);
  const JSONTypes = ["posts", "users", "products", "locations"];
  const [selectedJSON, setSelectedJSON] = useState<
    "posts" | "users" | "products" | "locations"
  >("posts");

  // State to store the current selected JSON and modified data
  const [savedJSON, setSavedJSON] = useState({
    posts: JSONExamples[0],
    users: JSONExamples[1],
    products: JSONExamples[2],
    locations: JSONExamples[3],
  });

  // State to track the current edited JSON in TextArea or Input Editor
  const [editedJSON, setEditedJSON] = useState<string>(savedJSON[selectedJSON]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Update the editedJSON state when the selected JSON type changes
  useEffect(() => {
    setEditedJSON(savedJSON[selectedJSON]); // Update editedJSON when switching JSON types
  }, [selectedJSON, savedJSON]);

  // Function to handle saving the updated JSON
  const handleSave = () => {
    setSavedJSON((prev) => ({
      ...prev,
      [selectedJSON]: editedJSON, // Save the current edited JSON
    }));
    setIsEditJSON(false); // Exit JSON edit mode
    setIsEditInput(false); // Exit input edit mode
  };

  // Handle changes for the EditableJSONInput component
  const handleJSONInputChange = (updatedJSON: any) => {
    setEditedJSON(JSON.stringify(updatedJSON, null, 2)); // Store updated JSON string
  };

  // Handle switching between different JSON sets (posts, users, etc.)
  const handleJSONTypeChange = (
    type: "posts" | "users" | "products" | "locations"
  ) => {
    setIsEditJSON(false); // Disable edit mode when switching JSON types
    setIsEditInput(false); // Disable input edit mode
    setSelectedJSON(type); // Update the selected JSON type
  };

  return (
    <VStackFull className="h-fit py-[2vh]" gap="gap-[3vh]">
      <HStackFull className="justify-evenly">
        {JSONTypes.map((type, index) => (
          <motion.button
            key={index}
            onClick={() => handleJSONTypeChange(type as any)} // Handle JSON type change
            className={`font-semibold px-[1.5vh] py-[0.2vh] rounded-[2vh] ${
              selectedJSON === type
                ? "text-cyan-300 border-500-md bg-col-740 metallicEdgesSm"
                : "text-fuchsia-300 border-600-md shadowNarrowNormal hover:bg-col-330 transition-300"
            }`}
          >
            {type}
          </motion.button>
        ))}
      </HStackFull>
      <VStack gap="gap-[0px]">
        <Flex
          className={`relative border-400-md overflow-hidden shadowNarrowNormal rounded-[1vh] h-[56vh] w-[98vw] md:w-[80vh]`}
        >
          {!isEditJSON && !isEditInput && (
            <ScrollProgressBar containerRef={scrollRef} height="h-[0.5vh]" />
          )}
          <HStack className="absolute top-[1.5vh] right-[1vh] z-10">
            <Box className={isEditInput ? "hidden" : "inline"}>
              <IconButton
                label={isEditJSON ? "Save" : "Edit Code"}
                onClick={() => {
                  if (isEditJSON) {
                    handleSave(); // Save the changes and exit edit mode
                  } else {
                    setIsEditJSON(true); // Enable code edit mode
                    setIsEditInput(false); // Disable other edit mode
                  }
                }}
                icon={isEditJSON ? FaRegSave : FaCode} // Switch between save and edit icons
              />
            </Box>
            <Box className={isEditJSON ? "hidden" : "inline"}>
              <IconButton
                label={isEditInput ? "Save" : "Edit Data"}
                onClick={() => {
                  if (isEditInput) {
                    handleSave(); // Save the changes and exit edit mode
                  } else {
                    setIsEditInput(true); // Enable input edit mode
                    setIsEditJSON(false); // Disable code edit mode
                  }
                }}
                icon={isEditInput ? FaRegSave : BsInputCursorText} // Switch between save and edit icons
              />
            </Box>
          </HStack>

          <>
            {isEditJSON ? (
              <ValidatedJSONNumberedInput
                initialValue={editedJSON} // Pass current edited JSON to the input
                onChange={(e) => setEditedJSON(e.target.value)} // Track changes
              />
            ) : isEditInput ? (
              <EditableJSONInput
                JSONString={editedJSON} // Pass the parsed JSON string to the input editor
                scrollRef={scrollRef}
                onChange={handleJSONInputChange} // Update state from input editor
              />
            ) : (
              <RenderJSONExample
                JSONString={savedJSON[selectedJSON]} // Use the saved JSON for rendering
                scrollRef={scrollRef}
              />
            )}
          </>
        </Flex>
      </VStack>
    </VStackFull>
  );
}
