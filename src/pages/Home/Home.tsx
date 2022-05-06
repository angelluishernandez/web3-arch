import { Stack } from "@mui/material";
import React, { useContext } from "react";
import Count from "../../components/Count/Count";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import TodoList from "../../components/TodoList.tsx/TodoList";
import { IncrementContext } from "../../context/IncrementContext";
import { TodoContext } from "../../context/TodoContext";

export default function Home() {
  const { count, onIncrement, onDecrement } = useContext(IncrementContext);
  const { todos } = useContext(TodoContext);

  const handleIncrement = () => {
    onIncrement();
  };
  const handleDecrement = () => {
    onDecrement();
  };

  return (
    <React.Fragment>
      <Stack spacing={2} direction="row">
        <SimpleButton
          buttonText="Increment"
          variant="outlined"
          onClickCallback={handleIncrement}
        />
        <SimpleButton
          buttonText="Decrement"
          variant="contained"
          onClickCallback={handleDecrement}
        />
      </Stack>
      <Count count={count} />
      <TodoList todos={todos} />
    </React.Fragment>
  );
}
