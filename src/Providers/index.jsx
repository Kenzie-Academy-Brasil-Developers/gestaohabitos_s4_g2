import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GoalsProvider } from "./Metas";
import { UserGroupProvider } from "./Grupos";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserGroupProvider>
            <HabitsProvider>
              <GoalsProvider>
                <ModalProvider>{children}</ModalProvider>
              </GoalsProvider>
            </HabitsProvider>
          </UserGroupProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
