import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

import {GroupsProvider} from './Grupos';

import { GoalsProvider } from "./Metas";


const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        
        <LoginProvider>
          <GroupsProvider>
          <HabitsProvider>
            <GoalsProvider>
              <ModalProvider>{children}</ModalProvider>
            </GoalsProvider>
          </HabitsProvider>
          </GroupsProvider>
        </LoginProvider>
       
      </RegisterProvider>
    </>
  );
};

export default Providers;
