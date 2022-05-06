import React, { useState } from "react";
import { ChildrenProps, Todo } from "../types/types";

export const TodoContext = React.createContext<any>(null);

const TodoProvider = ({ children }: ChildrenProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onNewTodo = (todo: Todo): void => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title: todo.title,
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdateTodo = (id: number, newText: string): void => {
    todos.filter((todo: Todo) => {
      if (todo.id === id) {
        todo.title = newText;
      }
      setTodos([...todos]);
    });
  };

  return (
    <TodoContext.Provider value={{ todos, onNewTodo, onUpdateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
