import React from "react";
import styled from "styled-components";
import {Todo} from "../modules/todos";
import TodoListBox from "./TodoListBox";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
type BackgroundProps = {
  onAdd: (text: string) => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  todos: Todo[];
};
export default function Background({
  onAdd,
  onRemove,
  onToggle,
  todos,
}: BackgroundProps) {
  return (
    <BackgroundContainer>
      <TodoListBox
        onAdd={onAdd}
        onRemove={onRemove}
        onToggle={onToggle}
        todos={todos}
      />
    </BackgroundContainer>
  );
}
