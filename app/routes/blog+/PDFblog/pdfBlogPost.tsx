import { Image, Text } from "@react-pdf/renderer";
import { BlogPost } from "../blogsArray";
import PDFContainer from "./pdfContainer";
import {
  PDFBlogPostSection,
  PDFFlex,
  PDFFlexFull,
  PDFHStack,
  PDFHStackFull,
  PDFVStackFull,
} from "./pdfElements";
import FormatDate from "~/utils/formatDate";
import {
  PDFParagraphContent,
  renderBlogPDFSections,
} from "./pdfBlogComponents";

export default function PDFBlogPost({ blog }: { blog: BlogPost }) {
  return (
    <PDFContainer fileName={`${blog.author} - ${blog.title}`}>
      <PDFVStackFull
        style={{
          alignItems: "center",
          gap: "8px",
        }}
      >
        <PDFVStackFull
          style={{
            alignItems: "center",
          }}
        >
          {/* ************************* LOGO ************************* */}
          <PDFHStack
            style={{
              alignItems: "center",
              gap: "5px",
              position: "absolute",
              left: "13px",
              top: "-13px",
              zIndex: "10",
            }}
          >
            <PDFFlex
              style={{ width: "20px", height: "35px", paddingBottom: "11px" }}
            >
              <Image src="/images/darkviolet.png" />
            </PDFFlex>
            <Text
              style={{
                fontSize: "16px",
                fontFamily: "Kufam-Bold",
                fontWeight: "bold",
              }}
            >
              DarkViolet.ai
            </Text>
          </PDFHStack>
          <PDFFlexFull style={{ paddingTop: "9px" }}>
            {/* ************************* BLOG HEADER ************************* */}
            <PDFVStackFull
              style={{
                border: "1.5px solid #787878",
                backgroundColor: "#fff",
                flexShrink: 0,
                padding: "10px",
                gap: "10px",
                borderRadius: "10px",
                zIndex: "1",
              }}
            >
              {/* ************************* TITLE & LINK ************************* */}
              <PDFVStackFull style={{ alignItems: "center", gap: "2px" }}>
                <Text style={{ fontSize: "15px", fontFamily: "Roboto-Medium" }}>
                  {blog?.title}
                </Text>
                <Text
                  style={{ fontSize: "8px" }}
                >{`https://darkviolet.ai/blog/${blog?.slug}`}</Text>
              </PDFVStackFull>
              {/* ************************* AUTHOR, DATE, SUMMARY ************************* */}
              <PDFHStackFull
                style={{
                  justifyContent: "space-between",
                  fontSize: "13px",
                  fontFamily: "Roboto-Medium",
                }}
              >
                <Text>{blog.author}</Text>
                <Text>
                  {FormatDate({ inputDate: blog.date, dateOnly: true })}
                </Text>
              </PDFHStackFull>
              <Text style={{ fontSize: "13px" }}>{blog?.summary}</Text>
              {/* ************************* BLOG CATEGORIES ************************* */}
              <PDFHStackFull style={{ justifyContent: "space-evenly" }}>
                {blog.categories.map((category, index) => (
                  <PDFFlex
                    key={index}
                    style={{
                      padding: "3px 6px 1px 6px",
                      backgroundColor: "#a3fff6",
                      borderRadius: "20px",
                      border: "1.5px solid #787878",
                    }}
                  >
                    <Text
                      key={index}
                      style={{ fontSize: "8px", fontFamily: "Kufam-SemiBold" }}
                    >
                      {category}
                    </Text>
                  </PDFFlex>
                ))}
              </PDFHStackFull>
              {/* ************************* BLOG TAGS ************************* */}
              <PDFHStackFull style={{ justifyContent: "space-evenly" }}>
                {blog.tags.map((tag, index) => (
                  <PDFFlex key={index}>
                    <Text style={{ fontSize: "8px" }}>#{tag}</Text>
                  </PDFFlex>
                ))}
              </PDFHStackFull>
            </PDFVStackFull>
          </PDFFlexFull>
        </PDFVStackFull>
        {/* ************************* BLOG CONTENT ************************* */}

        {blog?.paragraphs?.map((paragraph, index) => (
          <PDFFlexFull key={index}>
            {renderBlogPDFSections(paragraph as PDFParagraphContent, index)}
          </PDFFlexFull>
        ))}
      </PDFVStackFull>
    </PDFContainer>
  );
}
