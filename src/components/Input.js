import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #7C8176;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 15px 14px 15px;
  width: 100%;
  font-family: Reem Kufi;
  font-size: 20px;
  margin: 15px 0 16px 0;
  background: transparent;
  color: #E5E5E5;

  &::placeholder {
    color: #7C8176;
  }

  &:focus {
    outline: none;
  }
`