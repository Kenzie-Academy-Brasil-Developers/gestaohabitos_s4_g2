import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "../Login";

import api from "../../Services";

const habitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const { token } = useContext(LoginContext);

  useEffect(() => {
    if (!!token) {
      api
        .get("/habits/personal/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setHabits(response.data);
        });
    }
  }, [token, habits]);

  return (
    <habitsContext.Provider value={{ habits, setHabits }}>
      {children}
    </habitsContext.Provider>
  );
};

export const useHabits = () => useContext(habitsContext);
