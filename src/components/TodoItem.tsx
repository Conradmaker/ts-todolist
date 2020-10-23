import React from "react";
import styled from "styled-components";
import {BsCheckCircle, BsCircle} from "react-icons/bs";

const ItemBox = styled.div`
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
  }
  p {
    font-size: 20px;
    flex: 1;
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

export default function TodoItem() {
  return (
    <ItemBox>
      <i>
        <BsCheckCircle />
      </i>
      <p>할일1</p>
      <small>삭제</small>
    </ItemBox>
  );
}
