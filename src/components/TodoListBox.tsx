import React from "react";
import styled from "styled-components";
import {Todo} from "../modules/todos";
import InsertForm from "./InsertForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Box = styled.div`
  max-width: 400px;
  max-height: 750px;
  min-width: 300px;
  min-height: 750px;
  background: #f5f5f5;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`;

type TodoListBoxProps = {
  onAdd: (text: string) => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  todos: Todo[];
};
export default function TodoListBox({
  onAdd,
  onToggle,
  onRemove,
  todos,
}: TodoListBoxProps) {
  return (
    <>
      <Box>
        <TodoHeader todos={todos} />
        <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
        <InsertForm onAdd={onAdd} />
      </Box>
    </>
  );
}
