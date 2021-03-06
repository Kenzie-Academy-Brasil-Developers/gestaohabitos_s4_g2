import { createContext, useEffect, useState } from "react";
import api from "../../Services/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@Habitos:userId")) || ""
  );

  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("@Habitos:token") || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        //console.log(response.data);
        const { access } = response.data;
        let decode = jwt_decode(access);
        setUserId(decode.user_id);
        localStorage.setItem("@Habitos:userId", decode.user_id);
        setToken(access);
        setAuthenticated(true);

        localStorage.setItem("@Habitos:token", access);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha Inválidos"));
  };

  const logout = () => {
    setToken("");
    localStorage.clear();

    history.push("/login");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Habitos:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <LoginContext.Provider
      value={{ onSubmitFunction, authenticated, token, logout, userId }}
    >
      {children}
    </LoginContext.Provider>
  );
};
