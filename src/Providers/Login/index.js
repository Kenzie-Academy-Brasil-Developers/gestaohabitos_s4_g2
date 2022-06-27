import { createContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [autenticacao, setAutenticacao] = useState(false);
  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        console.log(response.data);
        const { access } = response.data;
        localStorage.setItem("@Habitos:token", access);
        setAutenticacao(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha Inválidos"));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Habitos:token"));
    if (token) {
      return setAutenticacao(true);
    }
  }, [autenticacao]);

  return (
    <LoginContext.Provider value={{ onSubmitFunction, autenticacao }}>
      {children}
    </LoginContext.Provider>
  );
};
