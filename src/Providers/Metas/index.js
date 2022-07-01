import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/"
import { LoginContext } from "../Login";

const goalsContext = createContext();

export const GoalsProvider = ({ children }) => {
    const [goals, setGoals] = useState([]);
    const { token } = useContext(LoginContext)

    const loadGoals = (id) => {
        api.get(`/goals/?group=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => setGoals(response.data.results))
            .catch((err) => console.log(err))
    }

    const createGoalToGroup = (data, id) => {
        api.post("/goals/", {
            ...data,
            achieved: false,
            how_much_achieved: 0,
            group: id

        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setGoals([...goals, response.data])
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        loadGoals(1331)
    }, [goals])

    return <goalsContext.Provider value={{ goals, createGoalToGroup }}>
        {children}
    </goalsContext.Provider>
}

export const useGoals = () => useContext(goalsContext)