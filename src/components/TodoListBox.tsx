import React from "react";
import styled from "styled-components";
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

export default function TodoListBox() {
  return (
    <Box>
      <TodoHeader />
      <TodoList />
      <InsertForm />
    </Box>
  );
}
