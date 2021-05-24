import styled from "styled-components";

export const Title = styled.h2`
  font-family: 'Rozha One', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 117%;
  color: #131E07;
  margin: 0;

  @media (max-width: 300px) {
    font-size: 35px;
  }
  
  @media (min-width: 500px) {
    text-align: center;
  }

  @media (min-width: 1200px) {
    text-align: start;
    font-size: 80px;
  }

`