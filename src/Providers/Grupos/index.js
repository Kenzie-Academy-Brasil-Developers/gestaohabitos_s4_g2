<<<<<<< HEAD
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
=======
import{ createContext, useContext, useState} from 'react';
import api from '../../Services';
import { LoginContext } from "../Login";

import {toast} from  'react-toastify';

export const GroupsContext = createContext();


export const GroupsProvider = ({children}) => {
       
    const { token } = useContext(LoginContext);

    const functionCreateGroup = (data) =>{
        console.log(token);
        api.post("/groups/", data , {
            headers: {
                    Authorization: `Bearer ${token}`,
                },
        }).then((_) => {
            toast.success("Sucesso ao criar Grupo");
        }).catch((_) =>{
            toast.error("Erro ao criar Grupo");
        });
          
    }

    
    return (

        <GroupsContext.Provider value={{functionCreateGroup}  }>
            {children}
        </GroupsContext.Provider>

    )
}

export const useCreateGroup = () => useContext(GroupsContext);
>>>>>>> 7486508800d87992a8f5242a008760f789aa7721
