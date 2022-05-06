import React from "react";
import { ChildrenProps } from "../types/types";
import IncrementProvider from "./IncrementContext";
import TodoProvider from "./TodoContext";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
export const AppContext = React.createContext<any>(null);

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// This component was created to create in order to simplify the use of providers
// and avoid nested providers in the app component

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IncrementProvider>
        <TodoProvider>{children}</TodoProvider>
      </IncrementProvider>
    </Web3ReactProvider>
  );
};

export default AppProvider;
