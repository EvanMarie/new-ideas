import { ReactNode, useState, useEffect } from "react";
import { Page, View, StyleSheet, Document, pdf } from "@react-pdf/renderer";
import fileSaver from "file-saver";
import { Font } from "@react-pdf/renderer";
import { BsPrinter } from "react-icons/bs";
import AnimatedIconButton from "~/buildingBlockComponents/animatedIconButton";

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

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fae4b4",
    fontFamily: "Roboto",
    padding: "0.7in",
  },
  section: {
    fontColor: "black",
    fontSize: "10px",
  },
});

interface PDFContainerProps {
  children?: ReactNode;
  fileName?: string;
}

export function PDFInnerContainer({ children }: { children: ReactNode }) {
  return <View style={styles.section}>{children}</View>;
}

const PDFContainer = ({
  children,
  fileName = "download.pdf",
}: PDFContainerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const downloadPDF = async () => {
    const doc = (
      <Document author="Light Path" creator="Light Path">
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
      <AnimatedIconButton
        text="Download PDF"
        onClick={downloadPDF}
        icon={BsPrinter}
      />
    </div>
  );
};

export default PDFContainer;
