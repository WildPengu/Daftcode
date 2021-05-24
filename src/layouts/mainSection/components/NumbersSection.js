import styled from "styled-components";
import { Title } from "../../../components/Title";
import { Description } from "../../../components/Description";

const NumbersContainer = styled.div`
  padding-top: 64px;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    padding-left: 52px;
    padding-right: 50px;
  }

  @media (min-width: 1300px) {
    margin-top: 159px;
  }
`

const SingleNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(1) {
    margin-bottom: 108px;
  }

  &:nth-of-type(2) {
    margin-bottom: 86px;
  }
`

const NumbersTitle = styled(Title)`
  color: #FABD20;
  font-size: 80px;

  @media (max-width: 300px) {
    font-size: 50px;
  }
`

const NumbersDescription = styled(Description)`
  margin-top: 8px;
  text-align: center;
  width: 253px;

  @media (min-width: 1100px) {
    margin-top: 18px;
  }
`

const NumbersSection = () => {
  return (
    <NumbersContainer>
      <SingleNumberContainer>
        <NumbersTitle>230+</NumbersTitle>
        <NumbersDescription>
          Scientifically <br/> based tests
        </NumbersDescription>
      </SingleNumberContainer>
      <SingleNumberContainer>
        <NumbersTitle>10,000+</NumbersTitle>
        <NumbersDescription>
          Medical recommendations
        </NumbersDescription>
      </SingleNumberContainer>
      <SingleNumberContainer>
        <NumbersTitle>25M+</NumbersTitle>
        <NumbersDescription>
          Students learning
        </NumbersDescription>
      </SingleNumberContainer>
    </NumbersContainer>
  )
}

export default NumbersSection;