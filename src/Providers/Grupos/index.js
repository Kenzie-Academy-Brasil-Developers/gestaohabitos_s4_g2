import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services";
import { LoginContext } from "../Login";

export const UserGroupContext = createContext();

export const UserGroupProvider = ({ children }) => {
  const [member, setMember] = useState(false);
  const { userId } = useContext(LoginContext);
  const history = useHistory();

  const getSpecificGroup = (group) => {
    history.push(`/group/${group.id}`);
    group.find((user) => {
      if (user.users_on_group.id === userId) {
        setMember(true);
      }
      setMember(false);
    });
  };
  return (
    <UserGroupContext.Provider value={{ getSpecificGroup, member, setMember }}>
      {children}
    </UserGroupContext.Provider>
  );
};

export const useGroup = () => useContext(UserGroupContext);
