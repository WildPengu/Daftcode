import styled from 'styled-components';
import { Description } from "../../../components/Description";
import { Title } from "../../../components/Title";

const CardContainer = styled.div`
  width: 327px;
  background: white;
  border-radius: 8px;
  padding: 42px 51px 43px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 439px;
  justify-content: space-between;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 300px) {
    padding: 20px;
    width: 250px;
  }

  @media (min-width: 1200px) {
    padding: 42px 62px 43px 61px;
    width: 350px;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`
const CardImage = styled.img``;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const CardTitle = styled(Title)`
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;

const CardDescription = styled(Description)`
  font-size: 18px;
  text-align: center;
  white-space: pre-wrap;
`;

const Card = (props) => {
  return (
    <CardContainer>
      <CardImage src={props.image}/>
      <CardInfo>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;