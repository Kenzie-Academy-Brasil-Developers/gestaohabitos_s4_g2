import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import { GroupsProvider } from "./Grupos";
import { GoalsProvider } from "./Metas";
<<<<<<< HEAD
import { ActivitiesProvider } from "./Atividades";
=======
import { UserUpdateProvider } from "./Perfil";
>>>>>>> 2f24c79aed0d7822b0d5ddc36fdde9e67c9eaf6d

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
<<<<<<< HEAD
          <GroupsProvider>
            <HabitsProvider>
              <GoalsProvider>
                <ActivitiesProvider>
                  <ModalProvider>{children}</ModalProvider>
                </ActivitiesProvider>
              </GoalsProvider>
            </HabitsProvider>
          </GroupsProvider>
=======
          <UserUpdateProvider>
            <GroupsProvider>
              <HabitsProvider>
                <GoalsProvider>
                  <ModalProvider>{children}</ModalProvider>
                </GoalsProvider>
              </HabitsProvider>
            </GroupsProvider>
          </UserUpdateProvider>
>>>>>>> 2f24c79aed0d7822b0d5ddc36fdde9e67c9eaf6d
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default Providers;
