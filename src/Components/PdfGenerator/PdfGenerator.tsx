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
import { useAppSelector } from "../../app/hooks";
import { returnNameOfDayInGreek } from "../../utils";
import { WeekdaysInterface } from "../../interfaces";
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
    maxWidth: "100%",
    maxHeight: "100%",
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
    borderRight: 1,
    borderStyle: "solid",
    borderColor: "black",
  },

  textDay: {
    fontWeight: 700,
    fontSize: 12,
    borderBottom: 1,
    borderTop: 1,
    paddingTop: 5,
    textAlign: "center",
  },
  dayDiv: {
    padding: "5px",
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    border: 1,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  textDesription: { margin: "10px 0px", fontSize: 12 },
});
// Create Document Component
const PdfGenerator = () => {
  const wholeWeekMenu = useAppSelector(
    (state) => state.menu.weekDaysWithItsLaunchTimes,
  );
  const dateFromMenu = useAppSelector((state) => state.settings.menuFromDate);
  const dateToMenu = useAppSelector((state) => state.settings.menuToDate);
  // @ts-ignore
  return (
    <PDFViewer style={{ width: "100%" }}>
      <Document title={"Πρόγραμμα-Διατροφής"}>
        <Page size="A4" orientation={"landscape"} style={styles.page}>
          <Text>
            ΠΡΟΓΡΑΜΜΑ ΤΡΟΦΟΔΟΣΙΑΣ ΚΟΙΝΟ ΑΠΟ: {dateFromMenu} ΕΩΣ: {dateToMenu}
          </Text>
          <View style={{ width: "95%" }}>
            <View style={styles.outerrDivOfTheDays}>
              <View style={styles.hoursDiv}>
                <Text
                  style={{
                    fontSize: "10px",
                    borderBottom: "1px",
                  }}
                >
                  ΩΡΕΣ {"\n"}ΦΑΓΗΤΟΥ
                </Text>
                <View style={{ paddingRight: 30 }}>
                  <Text
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    ΠΡΩΙΝΟ - 8.00 π.μ
                  </Text>
                  <Text style={{ fontSize: "12px" }}>
                    ΔΕΚΑΤΙΑΝΟ - 10.00 π.μ.
                  </Text>
                  <Text style={{ fontSize: "12px" }}>ΓΕΥΜΑ - 1.00 μ.μ.</Text>
                  <Text style={{ fontSize: "12px" }}>
                    ΑΠΟΓ/ΤΙΝΟ - 4.00 μ.μ.
                  </Text>
                  <Text style={{ fontSize: "12px" }}>ΒΡΑΔΙΝΟ - 7.00 μ.μ.</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                {Object.keys(wholeWeekMenu).map(
                  //@ts-ignore
                  (day: WeekdaysInterface["day"]) => (
                    <View style={styles.dayDiv}>
                      <Text style={[styles.textDay, { borderTop: 0 }]}>
                        {returnNameOfDayInGreek(day)}
                      </Text>
                      <Text style={styles.textDay}>ΠΡΩΙΝΟ{"\n"}ΔΕΚΑΤΙΑΝΟ</Text>
                      <Text style={styles.textDesription}>
                        {Object.keys(wholeWeekMenu[day]["breakfast"]).map(
                          (recipe) => recipe + "\n",
                        )}
                      </Text>
                      <Text style={styles.textDay}>ΓΕΥΜΑ</Text>
                      <Text style={styles.textDesription}>
                        {Object.keys(wholeWeekMenu[day]["launch"]).map(
                          (recipe) => recipe + "\n",
                        )}
                      </Text>
                      <Text style={styles.textDay}>ΑΠΟΓ/ΤΙΝΟ</Text>
                      <Text style={styles.textDesription}>
                        {Object.keys(wholeWeekMenu[day]["snack"]).map(
                          (recipe) => recipe + "\n",
                        )}
                      </Text>
                      <Text style={styles.textDay}>ΒΡΑΔΙΝΟ</Text>
                      <Text style={styles.textDesription}>
                        {Object.keys(wholeWeekMenu[day]["dinner"]).map(
                          (recipe) => recipe + "\n",
                        )}
                      </Text>
                    </View>
                  ),
                )}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfGenerator;
