import { useAppSelector } from "./app/hooks";
import { WeekdaysInterface } from "./interfaces";

export default function ConstructNewObjectWithTheTotalOfAllIngredientsOfTheDayOrWeek() {
  const newObj = {};
  const numberOfPeople = useAppSelector(
    (state) => state.menu.settingsForMenu.numberOfPeople,
  );
  const weekDaysWithItsMenus = useAppSelector(
    (state) => state.menu.weekDaysWithItsLaunchTimes,
  );
  const selectedDayToGetTotalsOfIngredients = useAppSelector(
    (state) => state.menu.selectedDayForTotalOfIngredients,
  );

  if (
    selectedDayToGetTotalsOfIngredients !== "week" &&
    selectedDayToGetTotalsOfIngredients !== null
  ) {
    Object.values(
      Object.keys(weekDaysWithItsMenus[selectedDayToGetTotalsOfIngredients]),
    ).map((launch) =>
      Object.keys(
        //@ts-ignore
        weekDaysWithItsMenus[selectedDayToGetTotalsOfIngredients][launch],
      ).map((recipe) => {
        Object.keys(
          //@ts-ignore
          weekDaysWithItsMenus[selectedDayToGetTotalsOfIngredients][launch][
            recipe
          ],
        ).map((ing) => {
          if (ing in newObj) {
            //@ts-ignore
            newObj[ing] += parseFloat(
              //@ts-ignore
              weekDaysWithItsMenus[selectedDayToGetTotalsOfIngredients][launch][
                recipe
              ][ing],
            );
          } else {
            //@ts-ignore
            newObj[ing] = parseFloat(
              //@ts-ignore
              weekDaysWithItsMenus[selectedDayToGetTotalsOfIngredients][launch][
                recipe
              ][ing],
            );
          }
        });
      }),
    );
  }
  if (selectedDayToGetTotalsOfIngredients === "week") {
    Object.keys(weekDaysWithItsMenus).map((dayOfWeek) => {
      Object.values(
        Object.keys(
          weekDaysWithItsMenus[dayOfWeek as keyof typeof weekDaysWithItsMenus],
        ),
      ).map((launch) =>
        Object.keys(
          //@ts-ignore
          weekDaysWithItsMenus[dayOfWeek][launch],
        ).map((recipe) => {
          Object.keys(
            //@ts-ignore
            weekDaysWithItsMenus[dayOfWeek][launch][recipe],
          ).map((ing) => {
            if (ing in newObj) {
              //@ts-ignore
              newObj[ing] +=
                //@ts-ignore
                weekDaysWithItsMenus[dayOfWeek][launch][recipe][ing];
            } else {
              //@ts-ignore
              newObj[ing] =
                //@ts-ignore
                weekDaysWithItsMenus[dayOfWeek][launch][recipe][ing];
            }
          });
        }),
      );
    });
  }

  Object.keys(newObj).map((ingredient) => {
    // @ts-ignore
    return (newObj[ingredient as keyof typeof newObj] =
      parseFloat(newObj[ingredient as keyof typeof newObj]) * numberOfPeople);
  });
  return { ...newObj };
}

export const returnNameOfDayInGreek = (
  day: WeekdaysInterface["day"] | "week" | null,
) => {
  if (day === "Monday") return "ΔΕΥΤΕΡΑ";
  else if (day === "Tuesday") return "ΤΡΙΤΗ";
  else if (day === "Wednesday") return "ΤΕΤΑΡΤΗ";
  else if (day === "Thursday") return "ΠΕΜΠΤΗ";
  else if (day === "Friday") return "ΠΑΡΑΣΚΕΥΗ";
  else if (day === "Saturday") return "ΣΑΒΒΑΤΟ";
  else if (day === "Sunday") return "ΚΥΡΙΑΚΗ";
  else if (day === "week") return "ΕΒΔΟΜΑΔΑΣ";
};
