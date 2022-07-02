import { createContext, useContext, useState } from "react";
import { useHabits } from "../Habitos";
import { LoginContext } from "../Login";

import api from "../../Services";
import { useGoals } from "../Metas";

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalHabitEdit, setModalHabitEdit] = useState(false);
    const [modalGoalsAdd, setModalGoalsAdd] = useState(true);
    const [modalGoalsEdit, setModalGoalsEdit] = useState(false)

    const { setTargetHabit } = useHabits()
    const { setTargetGoal } = useGoals()
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

    const controlModalGoalEdit = (id) => {
        setModalGoalsEdit(!modalGoalsEdit)
        api.get(`/goals/${id}/`)
            .then((response) => setTargetGoal(response.data))
    }

    const controlModalGoalsAdd = () => {
        setModalGoalsAdd(!modalGoalsAdd)
    }

    return (
        <modalContext.Provider value={{ controlModalHabitEdit, modalHabitEdit, controlModalGoalsAdd, modalGoalsAdd, controlModalGoalEdit, modalGoalsEdit }}>
            {children}
        </modalContext.Provider>
    )
}

export const useModal = () => useContext(modalContext)