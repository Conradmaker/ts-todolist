import React from "react";
import styled from "styled-components";
import TodoListBox from "./TodoListBox";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Background() {
  return (
    <BackgroundContainer>
      <TodoListBox />
    </BackgroundContainer>
  );
}
