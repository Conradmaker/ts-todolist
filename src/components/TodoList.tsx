import React from "react";
import styled from "styled-components";
import {Todo} from "../modules/todos";
import TodoItem from "./TodoItem";

const ListContaiber = styled.div`
  width: 100%;
  min-height: 100%;
  background: #fff;
  margin-top: 40px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex: 1;
  padding: 15px 30px;
  box-sizing: border-box;
  box-shadow: 0 -5px 20px #e1f5fe;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  span {
    font-size: 40px;
    display: block;
  }
`;

type TodoListProps = {
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  todos: Todo[];
};
export default function TodoList({onRemove, onToggle, todos}: TodoListProps) {
  return (
    <ListContaiber>
      {todos.map((v) => (
        <TodoItem key={v.id} todo={v} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ListContaiber>
  );
}
