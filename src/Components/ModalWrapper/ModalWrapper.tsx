import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "@mui/material";

const ModalWrapper: React.FC = () => {
  const [isModalOpen, setIsModalOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState(false);

  return (
    <Modal open={isModalOpen}>
      <div>Hello</div>
    </Modal>
  );
};

export default ModalWrapper;
