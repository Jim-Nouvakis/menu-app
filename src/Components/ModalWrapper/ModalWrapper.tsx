import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleVisibility } from "../../features/modal/modal-slice";
import Button from "../Button/Button";
import "./styles.css";
import { addFoodToDayAndTime } from "../../features/foodMenu/foodMenu-slice";

const ModalWrapper: React.FC = () => {
  const [mainCategories, setMainCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null,
  );
  const isVisible = useAppSelector((state) => state.modal.isVisible);
  const menu = useAppSelector((state) => state.menu.menu);
  const typeOfModal = useAppSelector((state) => state.modal.typeOfModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeOfModal === "menu") {
      {
        Object.keys(menu).forEach((item) => {
          if (!mainCategories.includes(item))
            setMainCategories([...mainCategories, item]);
        });
      }
    }
  }, [typeOfModal]);

  useEffect(() => {
    if (selectedCategory) {
      Object?.keys(menu[selectedCategory as keyof typeof menu])?.map(
        (category) => console.log(category),
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!isVisible) {
      setSelectedSubCategory(null);
      setSelectedCategory(null);
    }
  }, [isVisible]);

  return (
    <Modal onClose={() => dispatch(toggleVisibility(false))} open={isVisible}>
      <Box
        sx={{
          width: 300,
          minHeight: "50%",
          backgroundColor: "white",
          position: "absolute",
          top: "50%",
          left: " 50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        {typeOfModal !== "menu" && (
          <div className={"divInsideModal"}>Hello</div>
        )}
        {typeOfModal === "menu" && (
          <div className={"divInsideModal"}>
            {!selectedCategory &&
              mainCategories.map((category, index) => (
                <div
                  key={index}
                  className={"listItem"}
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                >
                  {category}
                </div>
              ))}
            {selectedCategory &&
              !selectedSubCategory &&
              Object?.keys(menu[selectedCategory as keyof typeof menu])?.map(
                (category, index) => (
                  <div
                    key={index}
                    className={"listItem"}
                    onClick={() => {
                      setSelectedSubCategory(category);
                    }}
                  >
                    {category}
                  </div>
                ),
              )}
            {selectedSubCategory &&
              Object?.keys(
                menu[selectedCategory as keyof typeof menu][
                  selectedSubCategory as keyof typeof selectedCategory
                ],
              )?.map((recipe, index) => (
                <div
                  key={index}
                  className={"listItem"}
                  onClick={() => {
                    dispatch(toggleVisibility(false));
                    dispatch(
                      addFoodToDayAndTime({
                        name: recipe,
                        recipe:
                          // @ts-ignore
                          menu[selectedCategory][selectedSubCategory][recipe],
                      }),
                    );
                  }}
                >
                  {recipe}
                </div>
              ))}
          </div>
        )}
        <Button
          classFromParent={"red"}
          textInside={"Κλείσιμο"}
          onClickAction={() => dispatch(toggleVisibility(false))}
        />
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
