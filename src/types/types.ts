import { PropsWithChildren } from "react";

export type PropsWithChildrenOnly = PropsWithChildren<unknown>;
export type ReactFCWithChildren = React.FC<PropsWithChildrenOnly>;
export type ReactNode = React.ReactNode;
export type ChildrenProps = {
  children: ReactNode[] | ReactNode;
};
export type Todo = {
  id?: number;
  title: string;
};

export type TodoContextType = {
  todos: Todo[];
  onNewTodo: (todo: Todo) => void;
  onUpdateTodo: (id: number, newText: string) => void;
};
