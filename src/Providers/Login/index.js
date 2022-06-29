import { createContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [autenticacao, setAutenticacao] = useState(false);
  const [userId, setUserId] = useState("");
  const [tokenUser, setTokenUser] = useState("");

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        //console.log(response.data);
        const { access } = response.data;
        setTokenUser(access);
        let decode = jwt_decode(access);
        setUserId(decode.user_id);
        localStorage.setItem("@Habitos:token", access);
        setAutenticacao(true);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha Inválidos"));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Habitos:token"));

    if (token) {
      setTokenUser(token);
      return setAutenticacao(true);
    }
  }, [autenticacao]);

  return (
    <LoginContext.Provider
      value={{ onSubmitFunction, autenticacao, userId, tokenUser }}
    >
      {children}
    </LoginContext.Provider>
  );
};
