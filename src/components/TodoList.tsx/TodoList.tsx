import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Todo } from "../../types/types";

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <React.Fragment>
      <Stack>
        {todos.map((todo: Todo, index: number) => {
          return (
            <React.Fragment key={index}>
              <Divider />
              <Typography variant="h5">
                Todo #({todo.id}) : {todo.title}
              </Typography>
              <Box sx={{ m: 2 }} />
            </React.Fragment>
          );
        })}
      </Stack>
    </React.Fragment>
  );
}
