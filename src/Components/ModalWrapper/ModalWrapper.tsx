import React from "react";
import { Box, Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleVisibility } from "../../features/modal/modal-slice";
import Button from "../Button/Button";
import "./styles.css";

const ModalWrapper: React.FC = () => {
  // const [isModalOpen, setIsModalOpen]: [
  //   boolean,
  //   Dispatch<SetStateAction<boolean>>,
  // ] = useState(false);

  const isVisible = useAppSelector((state) => state.modal.isVisible);
  const dispatch = useAppDispatch();

  return (
    <Modal onClose={() => dispatch(toggleVisibility(false))} open={isVisible}>
      <Box
        sx={{
          width: 300,
          height: 300,
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
        <div className={"divInsideModal"}>Hello</div>
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
