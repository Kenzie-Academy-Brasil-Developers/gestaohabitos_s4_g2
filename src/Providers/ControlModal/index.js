import { createContext, useContext, useState } from "react";
import { useHabits } from "../Habitos";
import { LoginContext } from "../Login";

import api from "../../Services";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalHabitEdit, setModalHabitEdit] = useState(false);
    const [modalGoalsAdd, setModalGoalsAdd] = useState(true);
    const { setTargetHabit } = useHabits()
    const { token } = useContext(LoginContext)

    const controlModalHabitEdit = (id) => {
        setModalHabitEdit(!modalHabitEdit)
        api.get("/habits/personal/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                const { data } = response
                const newTarget = data.find(value => value.id === id)
                setTargetHabit(newTarget)
            })
    }

    const controlModalGoalsAdd = () => {
        setModalGoalsAdd(!modalGoalsAdd)
    }

    return (
        <modalContext.Provider value={{ controlModalHabitEdit, modalHabitEdit, controlModalGoalsAdd, modalGoalsAdd }}>
            {children}
        </modalContext.Provider>
    )
}

export const useModal = () => useContext(modalContext)