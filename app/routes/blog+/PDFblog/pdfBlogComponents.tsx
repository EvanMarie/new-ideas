import { ReactElement } from "react-markdown/lib/react-markdown";
import { Path, Svg, Text, Link, View } from "@react-pdf/renderer";
import JSXText from "~/components/buildingBlocks/text";
import {
  PDFFlex,
  PDFFlexFull,
  PDFHStack,
  PDFHStackFull,
  PDFVStack,
  PDFVStackFull,
} from "./pdfElements";
import React, { Fragment } from "react";
import { ImageWithZoom } from "../../blog-components/imageWithZoom";
import GistRender from "../components/gistRender";
import CodeModal from "../components/codeModal";

export type PDFParagraphContent = string | ReactElement;

export const PDFLinkIcon = ({ size = 12, color = "#000000" }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ borderRadius: "0px" }}
  >
    <Path
      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PDFCircleIcon = ({ size = 6, color = "gray" }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ borderRadius: "0px" }}
  >
    <Path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      fill={color}
    />
  </Svg>
);

export const PDFSquareIcon = ({ size = 10, color = "black" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M4 4h16v16H4z" fill={color} />
  </Svg>
);

const PDFTriangleIcon = ({ size = 10, color = "black" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M12 2l10 20H2L12 2z" fill={color} />
  </Svg>
);

export function RenderPDFBlogParagraph({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  return <Text key={index}>{paragraph}</Text>;
}

export function RenderPDFBlogCode({
  paragraph,
  index,
}: {
  paragraph: { code: string };
  index: number;
}) {
  return (
    <View style={{ paddingHorizontal: "20px" }}>
      <PDFVStack
        key={index}
        style={{
          justifyContent: "center",
          margin: "5px 0px",
        }}
      >
        <Text
          style={{
            fontFamily: "monospace-code",
            marginBottom: "2px",
          }}
        >{`<CodeExample/>`}</Text>

        <View
          style={{
            padding: "5px",
            color: "#333333",
            backgroundColor: "#bffdff",
            borderRadius: "3px",
            border: "1px solid lightgray",
          }}
        >
          <Text style={{ fontFamily: "monospace-code", fontSize: "8px" }}>
            {paragraph.code}
          </Text>
        </View>
      </PDFVStack>{" "}
    </View>
  );
}

export interface BlogImage {
  image: string;
  className?: string;
  alt?: string;
  ariaLabel?: string;
}

export function RenderPDFBlogImage({ index }: { index?: number }) {
  return (
    <PDFFlexFull key={index} style={{ justifyContent: "center" }}>
      <PDFFlex
        style={{
          padding: "3px 6px 1px 6px",
          margin: "10px",
          color: "#333333",
          backgroundColor: "#bffdff",
          borderRadius: "13px",
          border: "1px solid lightgray",
          fontFamily: "Kufam-SemiBold",
          width: "200px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Text>Blog Image Placeholder</Text>
      </PDFFlex>
    </PDFFlexFull>
  );
}

export interface BlogMp4 {
  videoSrc: string;
  ariaLabel?: string;
}

export function RenderPDFBlogMp4({
  paragraph,
  index,
}: {
  paragraph: BlogMp4;
  index: number;
}) {
  return <></>;
}

// -------------------------------- PDF COMPONENT SWITCH -------------------------------- //

export function PDFComponentSwitch({
  element,
}: {
  element: React.ReactElement<any, any>;
}) {
  if (!React.isValidElement(element)) {
    return null;
  }

  const { type, props } = element as React.ReactElement<{
    [key: string]: any;
  }>;

  // If the element is a React Fragment, process its children
  if (type === Fragment) {
    return (
      <>
        {React.Children.map(props.children, (child) =>
          React.isValidElement(child) ? (
            <PDFComponentSwitch element={child} />
          ) : null
        )}
      </>
    );
  }

  // Helper function to recursively render children
  const renderChildren = (children: React.ReactNode) =>
    React.Children.map(children, (child) =>
      React.isValidElement(child) ? (
        <PDFComponentSwitch element={child} />
      ) : null
    );

  // Handle the component switch based on the type
  switch (type) {
    case CodeModal:
      return (
        <RenderPDFBlogCode
          paragraph={props as { code: string }}
          index={props.index}
        />
      );
    case "img":
      return <RenderPDFBlogImage index={props.index} />;
    case "div":
      return (
        <RenderPDFBlogParagraph
          paragraph={props.children}
          index={props.index}
        />
      );
    case "code": {
      return (
        <Text
          style={{
            fontFamily: "monospace-code",
            fontSize: "10px",
            color: "#333333",
            backgroundColor: "#bffdff",
            paddingHorizontal: "5px",
          }}
        >
          {props.children}
        </Text>
      );
    }
    case "pre": {
      const child = React.Children.only(props.children) as React.ReactElement<{
        children: React.ReactNode;
      }>;

      // If the child of <pre> is <code>, treat it as a code block
      if (React.isValidElement(child) && child.type === "code") {
        return (
          <RenderPDFBlogCode
            paragraph={{ code: child.props.children as string }}
            index={props.index}
          />
        );
      }

      // Otherwise, render as a normal block
      return (
        <RenderPDFBlogParagraph
          paragraph={props.children}
          index={props.index}
        />
      );
    }
    case React.Fragment:
      return (
        <RenderPDFBlogParagraph
          paragraph={props.children}
          index={props.index}
        />
      );
    case ImageWithZoom:
      return <RenderPDFBlogImage index={props.index || 0} />;
    case JSXText:
      return <Text>{props.children}</Text>;
    case GistRender:
      return (
        <PDFVStack
          style={{
            padding: "5px 10px",
            border: "1px solid lightgray",
            backgroundColor: "#f8ccfc",
            borderRadius: "10px",
          }}
        >
          <PDFHStackFull style={{ alignItems: "center", gap: "6px" }}>
            <PDFLinkIcon />
            <a href={props.gistLink}>
              <Text style={{ fontFamily: "Roboto-Bold" }}>
                Gist for {"< " + props.title + " />"}:{" "}
              </Text>
            </a>
          </PDFHStackFull>
          <Text style={{ paddingLeft: "20px" }}>{" - " + props.gistLink}</Text>
        </PDFVStack>
      );
    case "h1":
      return (
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Roboto-Medium",
            marginTop: "8px",
            marginBottom: "5px",
          }}
        >
          {props.children}
        </Text>
      );
    case "h2":
      return (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto-Medium",
            marginTop: "7px",
            marginBottom: "4px",
          }}
        >
          {props.children}
        </Text>
      );
    case "h3":
      return (
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Roboto-Medium",
            marginTop: "6px",
            marginBottom: "3px",
          }}
        >
          {props.children}
        </Text>
      );
    case "h4":
      return (
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Roboto-Medium",
            marginTop: "5px",
            marginBottom: "2px",
          }}
        >
          {props.children}
        </Text>
      );
    case "h5":
      return (
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Roboto-Medium",
            marginTop: "4px",
            marginBottom: "1px",
          }}
        >
          {props.children}
        </Text>
      );
    case "h6":
      return (
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Roboto-Medium",
            marginTop: "3px",
          }}
        >
          {props.children}
        </Text>
      );
    case "p": {
      return (
        <Text style={{ marginBottom: 10 }}>
          {React.Children.map(props.children, (child) =>
            React.isValidElement(child) ? (
              <PDFComponentSwitch element={child} />
            ) : (
              // Render plain text directly
              <Text>{child}</Text>
            )
          )}
        </Text>
      );
    }
    case "iframe":
      return (
        <PDFFlexFull
          style={{
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <Text style={{ fontFamily: "Roboto-Medium" }}>
            "{props.title}" on YouTube
          </Text>
          <Link
            src={props.href}
            style={{
              textDecoration: "underline",
              color: "purple",
              fontFamily: "Roboto-Medium",
            }}
          >
            {props.src}
          </Link>
        </PDFFlexFull>
      );
    // Handle unordered list <ul>
    case "ul":
      return (
        <PDFVStack style={{ marginBottom: 10, marginLeft: 10 }}>
          {renderChildren(props.children)} // Render children recursively
        </PDFVStack>
      );
    case "ol":
      return (
        <PDFVStack style={{ marginBottom: 10, marginLeft: 10 }}>
          {renderChildren(props.children)} // Render children recursively
        </PDFVStack>
      );
    // Handle list items <li>
    case "li":
      return (
        <PDFVStack style={{ marginBottom: 5, marginLeft: 10 }}>
          {React.Children.map(props.children, (child) =>
            typeof child === "string" ? (
              <Text> - {child}</Text> // Render plain text inside <li>
            ) : React.isValidElement(child) ? (
              <PDFComponentSwitch element={child} /> // Render nested elements recursively
            ) : null
          )}
        </PDFVStack>
      );
    // Handle strong (bold text) inside lists or other places
    case "strong":
      return (
        <Text style={{ fontFamily: "Roboto-Bold" }}>{props.children}</Text>
      );
    // Handle links inside list items or other places
    case "a":
      return (
        <Link
          src={props.href}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          {props.children}
        </Link>
      );

    default:
      return null;
  }
}

// -------------------------------- RENDER PDF VERSIONS -------------------------------- //
export const renderBlogPDFSections = (
  paragraph: PDFParagraphContent | null | undefined,
  index: number
) => {
  if (!paragraph) {
    return null; // or some placeholder if needed
  } else if (React.isValidElement(paragraph)) {
    return <PDFComponentSwitch element={paragraph} />;
  } else {
    return null;
  }
};
