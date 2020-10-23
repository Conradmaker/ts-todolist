import React, {useState} from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;
  input {
    width: 85%;
    margin-bottom: 20px;
    font-size: 20px;
    overflow-y: hidden;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
  }

  button {
    width: 85%;
    height: 50px;
    font-size: 18px;
    background: #ffd600;
    box-shadow: 0 0 5px #eee;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 5px #e5e5e5;
    }
    span {
      font-size: 35px;
    }
  }
`;

export default function InsertForm() {
  const [open, setOpen] = useState(false);
  const onOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setOpen(!open);
  };
  return (
    <Form>
      {open && <input type="text" placeholder="What to do?" />}
      {!open ? (
        <button type="button" onClick={onOpen}>
          <span>+</span>&nbsp; Add a task
        </button>
      ) : (
        <button type="button" onClick={onOpen}>
          <span>+</span>&nbsp; Add a task
        </button>
      )}
    </Form>
  );
}
