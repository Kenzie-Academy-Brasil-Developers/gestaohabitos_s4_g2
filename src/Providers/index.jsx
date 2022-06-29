import { HabitsProvider } from "./Habitos";
import { LoginProvider } from "./Login";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </LoginProvider>
        ;
      </RegisterProvider>
    </>
  );
};

export default Providers;
