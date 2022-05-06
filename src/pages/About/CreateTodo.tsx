import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import { TodoContext } from "../../context/TodoContext";

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const { onNewTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleSaveTodo = () => {
    onNewTodo({ title: todoTitle });
    navigate("/");
  };
  return (
    <React.Fragment>
      <Stack>
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Introduce a title for your todo"
            onChange={(e) => setTodoTitle(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ m: 2 }} />
      </Stack>
      <SimpleButton
        buttonText="Save todo"
        variant="outlined"
        onClickCallback={handleSaveTodo}
      />
    </React.Fragment>
  );
}
