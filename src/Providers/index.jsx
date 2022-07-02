import { ModalProvider } from "./ControlModal";
import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

import {GroupsProvider} from './Grupos';

import { GoalsProvider } from "./Metas";
import { UserGroupProvider } from "./Grupos";


const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        
        <LoginProvider>
<<<<<<< HEAD
          <UserGroupProvider>
            <HabitsProvider>
              <GoalsProvider>
                <ModalProvider>{children}</ModalProvider>
              </GoalsProvider>
            </HabitsProvider>
          </UserGroupProvider>
=======
          <GroupsProvider>
          <HabitsProvider>
            <GoalsProvider>
              <ModalProvider>{children}</ModalProvider>
            </GoalsProvider>
          </HabitsProvider>
          </GroupsProvider>
>>>>>>> 7486508800d87992a8f5242a008760f789aa7721
        </LoginProvider>
       
      </RegisterProvider>
    </>
  );
};

export default Providers;
