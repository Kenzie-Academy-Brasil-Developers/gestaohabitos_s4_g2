import { Box, Modal } from "@mui/material";
import { useContext } from "react";

import { FiX } from "react-icons/fi";
import { DashboardContext } from "../../Providers/Habitos";
import { Container } from "./indexStyle";

const ModalCustomizer = ({ fechar, children, tittle }) => {
  return (
    <Modal open={true}>
      <Container>
        <div>
          <h3>{tittle}</h3>
          <FiX size="20" color="var(--color-primary-light)" onClick={fechar} />
        </div>
        {children}
      </Container>
    </Modal>
  );
};

export default ModalCustomizer;
