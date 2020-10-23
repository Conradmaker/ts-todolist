import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {addTodo, toggleTodo, removeTodo} from "../modules/todos";
import Background from "../components/Background";

export default function TodoApp() {
  const {todos} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onToggle = (id: number) => dispatch(toggleTodo(id));
  const onRemove = (id: number) => dispatch(removeTodo(id));
  const onAdd = (text: string) => dispatch(addTodo(text));
  return (
    <Background
      onAdd={onAdd}
      onToggle={onToggle}
      onRemove={onRemove}
      todos={todos}
    />
  );
}
