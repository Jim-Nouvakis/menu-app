import React from "react";
import "./styles.css";
import Button from "../Components/Button/Button";
import {
  setTypeOfModal,
  toggleVisibilityOfModal,
} from "../features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import InputField from "../Components/InputField/InputField";
import CalendarWrapper from "../Components/CalendarWrapper/CalendarWrapper";
import {
  setDateFromRange,
  setDateToRange,
  toggleSettingsVisibility,
} from "../features/settings/settings-slice";
import {
  resetWeeklyMenu,
  setSelectedDayForTotal,
} from "../features/foodMenu/foodMenu-slice";
import { toggleVisibilityOfPdfGenerator } from "../features/pdfGenerator/pdrGeneratorSlice";

const SettingsDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const isPdfGeneratorVisible = useAppSelector(
    (state) => state.pdfGenerator.isVisible,
  );
  const menuDateFrom = useAppSelector((state) => state.settings.menuFromDate);
  const menuDateTo = useAppSelector((state) => state.settings.menuToDate);
  return (
    <div className={"settingsWrapper"}>
      <div>
        {!isPdfGeneratorVisible && (
          <>
            <Button
              classFromParent={"red smaller"}
              textInside={"Σύνολο Εβδομάδας"}
              onClickAction={() => {
                dispatch(setSelectedDayForTotal("week"));
                dispatch(setTypeOfModal("totalOfDay"));
                dispatch(toggleVisibilityOfModal(true));
              }}
            ></Button>
            <InputField placeholderText={"Αριθμός Ατόμων"} />
            <CalendarWrapper
              onSelectDate={(e) => {
                dispatch(setDateFromRange(e));
              }}
              innerText={"Επιλογή Ημ/νίας Από"}
            />
            <CalendarWrapper
              onSelectDate={(e) => {
                dispatch(setDateToRange(e));
              }}
              innerText={"Επιλογή Ημ/νίας Έως"}
            />
            <p
              style={{
                margin: "0 0 5px 0",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Επιλεγμένες Ημερομηνίες:
            </p>
            <p
              style={{
                margin: "0 0 10px 0",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {menuDateFrom} έως {menuDateTo}
            </p>

            <Button
              classFromParent={"red smaller"}
              textInside={"Καθαρισμός Μενού"}
              onClickAction={() => {
                localStorage.removeItem("weeklyMenu");
                dispatch(resetWeeklyMenu());
              }}
            />
          </>
        )}
        <Button
          classFromParent={"green smaller withTopMargin"}
          textInside={
            isPdfGeneratorVisible ? "Κλείσιμο Εξαγωγής PDF" : "Εξαγωγή PDF"
          }
          onClickAction={() => {
            dispatch(toggleVisibilityOfPdfGenerator());
          }}
        />
      </div>
      <Button
        onClickAction={() => dispatch(toggleSettingsVisibility(false))}
        classFromParent={"black smaller"}
        textInside={"Τέλος Ρυθμίσεων"}
      />
    </div>
  );
};

export default SettingsDashboard;
