import React from "react";
import { ChildrenProps } from "../types/types";
import IncrementProvider from "./IncrementContext";
import TodoProvider from "./TodoContext";

export const AppContext = React.createContext<any>(null);

// This component was created to create in order to simplify the use of providers
// and avoid nested providers in the app components

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <IncrementProvider>
      <TodoProvider>{children}</TodoProvider>
    </IncrementProvider>
  );
};

export default AppProvider;
