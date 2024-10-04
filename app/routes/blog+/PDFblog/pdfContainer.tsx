import { ReactNode, useState, useEffect } from "react";
import { Page, View, StyleSheet, Document, pdf } from "@react-pdf/renderer";
import fileSaver from "file-saver";
import { Font } from "@react-pdf/renderer";
import IconButton from "~/components/buildingBlocks/iconButton";
import Box from "~/components/buildingBlocks/box";
import { LuPrinter } from "react-icons/lu";

Font.register({
  family: "Roboto",
  src: "/fonts/Roboto-Regular.ttf",
});

Font.register({
  family: "Roboto-Medium",
  src: "/fonts/Roboto-Medium.ttf",
});

Font.register({
  family: "Roboto-Bold",
  src: "/fonts/Roboto-Bold.ttf",
});

Font.register({
  family: "Roboto-Thin",
  src: "/fonts/Roboto-Thin.ttf",
});

Font.register({
  family: "Kufam",
  src: "/fonts/Kufam-Regular.ttf",
});

Font.register({
  family: "Kufam-Medium",
  src: "/fonts/Kufam-Medium.ttf",
});

Font.register({
  family: "Kufam-SemiBold",
  src: "/fonts/Kufam-SemiBold.ttf",
});

Font.register({
  family: "Kufam-Bold",
  src: "/fonts/Kufam-Bold.ttf",
});

Font.register({
  family: "monospace-code",
  src: "/fonts/Inconsolata-SemiBold.ttf",
});

Font.register({
  family: "Roboto-Italics",
  src: "/fonts/Roboto-Italics.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fbebff",
    fontFamily: "Roboto",
    padding: "0.5in",
  },
  section: {
    fontColor: "black",
    fontSize: "10px",
  },
});

interface PDFContainerProps {
  isIcon?: boolean;
  isViewAssignment?: boolean;
  isAssignmentCard?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  fileName?: string;
  printAssignmentData?: boolean;
  printAssignmentDataSmall?: boolean;
  printStudentGradeList?: boolean;
  printPaperAssignment?: boolean;
  printAnswerKey?: boolean;
  individualStyle?: boolean;
  minimalSize?: boolean;
}

export function PDFInnerContainer({ children }: { children: ReactNode }) {
  return <View style={styles.section}>{children}</View>;
}

const PDFContainer = ({
  onClick,
  children,
  fileName = "download.pdf",
}: PDFContainerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const downloadPDF = async () => {
    const doc = (
      <Document author="DarkViolet.ai" creator="DarkViolet.ai">
        <Page size="LETTER" style={styles.page}>
          <PDFInnerContainer>{children}</PDFInnerContainer>
        </Page>
      </Document>
    );
    const asBlob = await pdf(doc).toBlob();
    fileSaver.saveAs(asBlob, fileName);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box onClick={onClick}>
        <IconButton
          icon={LuPrinter}
          onClick={downloadPDF}
          tooltipPlacement="bottomLeft"
          label="pdf"
        />
      </Box>

      {/* <div
        style={{
          color: "black",
          width: "100%",
          paddingTop: "5vh",
          fontSize: "11px",
        }}
      >
        <View style={{ width: "100%" }}>
          <VStackFull style={{ fontSize: "9px" }}>{children}</VStackFull>
        </View>
      </div> */}
    </div>
  );
};

export default PDFContainer;
