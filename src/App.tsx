import React from "react";
import Background from "./components/Background";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  font-family: 'Roboto';
`;

function App() {
  return (
    <>
      <Global />
      <Background />
    </>
  );
}

export default App;
