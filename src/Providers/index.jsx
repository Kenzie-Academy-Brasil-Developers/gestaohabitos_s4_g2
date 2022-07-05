import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GroupsProvider } from "./Grupos";
import { GoalsProvider } from "./Metas";
import { ActivitiesProvider } from "./Atividades";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <GroupsProvider>
            <HabitsProvider>
              <GoalsProvider>
                <ActivitiesProvider>
                  <ModalProvider>{children}</ModalProvider>
                </ActivitiesProvider>
              </GoalsProvider>
            </HabitsProvider>
          </GroupsProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
