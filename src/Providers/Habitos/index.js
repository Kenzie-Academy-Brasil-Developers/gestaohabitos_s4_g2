import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  return (
    <DashboardContext.Provider value={{}}>{children}</DashboardContext.Provider>
  );
};
