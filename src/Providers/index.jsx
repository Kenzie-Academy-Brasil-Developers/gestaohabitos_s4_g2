import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GroupsProvider } from "./Grupos";
import { GoalsProvider } from "./Metas";
import { UserUpdateProvider } from "./Perfil";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserUpdateProvider>
            <GroupsProvider>
              <HabitsProvider>
                <GoalsProvider>
                  <ModalProvider>{children}</ModalProvider>
                </GoalsProvider>
              </HabitsProvider>
            </GroupsProvider>
          </UserUpdateProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
