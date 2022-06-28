import { Box, Modal } from "@mui/material";

import { FiX } from "react-icons/fi";
import { Container } from "./indexStyle";

const ModalCustomizer = ({ children, title }) => {
  return (
    <Modal open={true}>
      <Container>
        <div>
          <h3>{title}</h3>
          <FiX size="20" color="var(--color-primary-light)" />
        </div>

        {children}
      </Container>
    </Modal>
  );
};

export default ModalCustomizer;
