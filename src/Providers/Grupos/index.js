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