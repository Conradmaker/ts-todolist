import React from "react";
import styled from "styled-components";
import {Todo} from "../modules/todos";

const ButtonWrapper = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    margin-left: 20px;
    display: flex;
    padding: 8px 25px;
    color: white;
    border: 1px solid #1565c0;
    color: #1565c0;
    background: #fff;
    border-radius: 20px;
    outline: none;
    height: 40px;
    align-items: center;
  }
  button:nth-child(1) {
    background: #1565c0;
    color: #fff;
  }
`;
const HeaderContainer = styled.div`
  h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 30px 0 20px 20px;
  }
`;

type TodoHeaderProps = {
  todos: Todo[];
};
export default function TodoHeader({todos}: TodoHeaderProps) {
  const bumber = todos.filter((v) => v.done === false).length;
  return (
    <HeaderContainer>
      <h1>You have {bumber} tasks today</h1>
      <ButtonWrapper>
        <button>Today</button>
        <button>Tomorrow</button>
        <button>Tomorrow</button>
        <button>Today</button>
        <button>Tomorrow</button>
        <button>Tomorrow</button>
        <button>Today</button>
        <button>Tomorrow</button>
        <button>Tomorrow</button>
      </ButtonWrapper>
    </HeaderContainer>
  );
}
