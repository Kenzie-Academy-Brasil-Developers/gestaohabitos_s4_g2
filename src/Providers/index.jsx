
import { DashboardProvider } from "./Habitos";
import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";
import {GroupsProvider} from './Grupos';

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        
        <LoginProvider>
          <GroupsProvider>
          <HabitsProvider>
            <ModalProvider>{children}</ModalProvider>
          </HabitsProvider>
          </GroupsProvider>
        </LoginProvider>
       
      </RegisterProvider>
    </>
  );
};

export default Providers;
