import { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Services/index";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const history = useHistory();
  const functionRegister = (data) => {
    console.log(data);
    api
      .post("/users/", data)
      .then((_) => {
        toast.success("Sucesso ao cria a conta");
        history.push("/login");
      })
      .catch((err) => {
        // toast.error("Erro ao cria sua conta. Tente outro email");
        console.log(err);
      });
  };

  return (
    <RegisterContext.Provider value={{ functionRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
