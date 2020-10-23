import React from "react";
import {createGlobalStyle} from "styled-components";
import TodoApp from "./containers/TodoApp";

const Global = createGlobalStyle`
  font-family: 'Roboto';
`;

function App() {
  return (
    <>
      <Global />
      <TodoApp />
    </>
  );
}

export default App;
