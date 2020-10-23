import React from "react";
import styled from "styled-components";
import {BsCheckCircle, BsCircle} from "react-icons/bs";
import {Todo} from "../modules/todos";

const ItemBox = styled.div`
  & + & {
    margin-top: 15px;
  }
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  i {
    display: flex;
    align-items: center;
    color: #00838f;
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
  p {
    font-size: 20px;
    flex: 1;
    cursor: pointer;
  }

  small {
    display: none;
    color: #ec407a;
    cursor: pointer;
  }
  &:hover {
    small {
      display: initial;
    }
  }
`;

type TodoItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};
export default function TodoItem({todo, onRemove, onToggle}: TodoItemProps) {
  return (
    <ItemBox>
      <i onClick={() => onToggle(todo.id)}>
        {todo.done ? <BsCheckCircle /> : <BsCircle />}
      </i>
      <p onClick={() => onToggle(todo.id)}>{todo.text}</p>
      <small onClick={() => onRemove(todo.id)}>삭제</small>
    </ItemBox>
  );
}
