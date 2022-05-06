import React, { useState } from "react";
import { ChildrenProps } from "../types/types";

export const IncrementContext = React.createContext<any>(null);

const IncrementProvider = ({ children }: ChildrenProps) => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <IncrementContext.Provider value={{ count, onIncrement, onDecrement }}>
      {children}
    </IncrementContext.Provider>
  );
};

export default IncrementProvider;
