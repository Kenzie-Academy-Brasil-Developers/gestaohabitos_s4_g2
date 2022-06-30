import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GoalsProvider } from "./Metas";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <HabitsProvider>
            <GoalsProvider>
              <ModalProvider>{children}</ModalProvider>
            </GoalsProvider>
          </HabitsProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
