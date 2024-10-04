import { Image, Text, View } from "@react-pdf/renderer";
import PDFContainer from "./pdfRender";
import {
  PDFDivider,
  PDFFlex,
  PDFFlexFull,
  PDFHStackFull,
  PDFVStack,
  PDFVStackFull,
} from "./PDFBuildingComponents";
import { MenuItem, menuItems } from "./pdfBlogMenu";

export default function PDFMenuExample() {
  function PDFMeuItem({ item, index }: { item: MenuItem; index: number }) {
    const isEven = index === 0 || index % 2 === 0;
    const isOdd = !isEven;
    return (
      <View wrap={false}>
        <PDFVStackFull style={{ gap: "20px" }}>
          <PDFHStackFull style={{ justifyContent: "space-between" }}>
            {isEven && (
              <PDFFlex
                style={{
                  width: "35%",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #2b1b0f",
                    padding: "5px",
                    backgroundColor: "rgba(43, 27, 15, 0.5)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px solid #2b1b0f",
                    }}
                  >
                    <Image
                      src={item.image.replace("webp", "png")}
                      style={{ borderRadius: "9px" }}
                    />
                  </div>
                </div>
              </PDFFlex>
            )}
            <PDFVStack
              style={{
                padding: "10px 20px",
                width: "65%",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PDFVStackFull style={{ gap: "10px" }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: "23px",
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "black", fontSize: "16px" }}>
                  {item.price}
                </Text>
              </PDFVStackFull>
              <PDFFlexFull>
                <Text style={{ color: "black", fontSize: "13px" }}>
                  {item.description}
                </Text>
              </PDFFlexFull>
            </PDFVStack>
            {isOdd && (
              <PDFFlex
                style={{
                  width: "35%",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #2b1b0f",
                    padding: "5px",
                    backgroundColor: "rgba(43, 27, 15, 0.5)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px solid #2b1b0f",
                    }}
                  >
                    <Image
                      src={item.image.replace("webp", "png")}
                      style={{ borderRadius: "9px" }}
                    />
                  </div>
                </div>
              </PDFFlex>
            )}
          </PDFHStackFull>
          <PDFDivider color="#2b1b0f" />
        </PDFVStackFull>
      </View>
    );
  }
  return (
    <PDFContainer fileName="whisper-beans-cafe-menu-example.pdf">
      <View>
        <PDFVStackFull>
          <PDFFlexFull
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "45%",
                borderRadius: "10px",
                border: "1px solid #2b1b0f",
                padding: "5px",
                backgroundColor: "rgba(43, 27, 15, 0.5)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #2b1b0f",
                }}
              >
                <Image
                  src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blogimages/whisperingbeans.png"
                  style={{ borderRadius: "9px" }}
                />
              </div>
            </div>
          </PDFFlexFull>
          {menuItems.map((item, index) => (
            <PDFMeuItem key={index} item={item} index={index} />
          ))}
        </PDFVStackFull>
      </View>
    </PDFContainer>
  );
}
