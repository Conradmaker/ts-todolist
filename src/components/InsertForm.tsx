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

type InsertFormProps = {
  onAdd: (text: string) => void;
};
export default function InsertForm({onAdd}: InsertFormProps) {
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const onOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setOpen(!open);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      onAdd(text);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      {open && (
        <input type="text" placeholder="What to do?" onChange={onChange} />
      )}
      {!open ? (
        <button type="button" onClick={onOpen}>
          <span>+</span>&nbsp; Add a task
        </button>
      ) : (
        <button type="submit">
          <span>+</span>&nbsp; Add a task
        </button>
      )}
    </Form>
  );
}
