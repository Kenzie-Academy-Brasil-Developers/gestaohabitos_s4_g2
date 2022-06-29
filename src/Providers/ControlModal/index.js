import { createContext, useContext, useState } from "react";
import api from "../../Services";
import { useHabits } from "../Habitos";
import { LoginContext } from "../Login";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalHabitEdit, setModalHabitEdit] = useState(false);
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

    return (
        <modalContext.Provider value={{ controlModalHabitEdit, modalHabitEdit }}>
            {children}
        </modalContext.Provider>
    )
}

export const useModal = () => useContext(modalContext)