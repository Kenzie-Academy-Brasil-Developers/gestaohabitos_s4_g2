import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <HabitsProvider>
            <ModalProvider>{children}</ModalProvider>
          </HabitsProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
