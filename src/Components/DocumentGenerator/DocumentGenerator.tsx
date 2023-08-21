import ReactPDF, {
  Document,
  Font,
  Page,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import View = ReactPDF.View;
import Text = ReactPDF.Text;
import "./styles.css";
// @ts-ignore
import font from "../../fonts/Alfios.ttf";
// @ts-ignore
import fontBold from "../../fonts/AlfiosBold.ttf";
// Create styles
Font.register({ family: "Alfios", src: font, format: "truetype" });
Font.register({ family: "AlfiosBold", src: fontBold, format: "truetype" });
const styles = StyleSheet.create({
  page: {
    fontFamily: "Alfios",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  outerrDivOfTheDays: {
    border: 1,
    borderStyle: "solid",
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    height: "80%",
  },
  hoursDiv: {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  morningDiv: { borderBottom: 1 },
  textDay: {
    fontWeight: 700,
    borderBottom: 1,

    textAlign: "center",
  },
  dayDiv: {
    padding: "5px",
    borderStyle: "solid",
    borderColor: "black",
  },
  textDesription: { margin: "10px 0px" },
});
// Create Document Component
const DocumentGenerator = () => {
  return (
    <PDFViewer style={{ width: "100%" }}>
      <Document>
        <Page size="A4" orientation={"landscape"} style={styles.page}>
          <Text>
            ΠΡΟΓΡΑΜΜΑ ΤΡΟΦΟΔΟΣΙΑΣ ΚΟΙΝΟ ΑΠΟ: {} ΕΩΣ: {}
          </Text>
          <View>
            <View style={styles.outerrDivOfTheDays}>
              <View style={styles.hoursDiv}>
                <Text style={{ borderBottom: 1 }}>ΩΡΕΣ ΦΑΓΗΤΟΥ</Text>
                <View style={styles.morningDiv}>
                  <Text style={{ margin: "10px 0" }}>8.00 π.μ</Text>
                  <Text style={{ margin: "10px 0" }}>10.00 π.μ.</Text>
                </View>
                <Text style={{ marginTop: 30 }}>13.00 μ.μ.</Text>
              </View>
              <View style={styles.dayDiv}>
                <Text style={[styles.textDay, { borderTop: 0 }]}>ΔΕΥΤΕΡΑ </Text>
                <Text style={styles.textDay}>ΠΡΩΙΝΟ ΔΕΚΑΤΙΑΝΟ</Text>
                <Text style={styles.textDesription}>ΦΑΙ</Text>
                <Text style={styles.textDay}>ΓΕΥΜΑ</Text>
                <Text style={styles.textDesription}>ΦΑΙ</Text>
                <Text style={styles.textDay}>ΑΠΟΓΕΥΜΑΤΙΝΟ</Text>
                <Text style={styles.textDesription}>ΦΑΙ</Text>
                <Text style={styles.textDay}>ΒΡΑΔΙΝΟ</Text>
                <Text style={styles.textDesription}>ΦΑΙ</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DocumentGenerator;
