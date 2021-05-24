import styled from "styled-components";
import { Description } from "../../../components/Description";

const FooterSectionContainer = styled.div`
  margin-top: 32px;

  &:nth-of-type(1) {
    margin-top: 64px;
  }

  &:nth-of-type(2) {
    margin-left: -1px;
  }

  &:nth-of-type(3) {
    margin-left: -2px;
  }

  @media (min-width: 700px) {
    &:nth-of-type(1) {
      margin: 0;
      margin-right: 58px;
    }
  
    &:nth-of-type(2) {
      margin: 0;
      margin-right: 118px;
    }
  
    &:nth-of-type(3) {
      margin: 0;
    }
  }
`
const Title = styled(Description)`
  color: #7C8176;
  font-size: 18px;
  margin-bottom: 19px;
  text-align: start;
`

const Link = styled(Description)`
  font-size: 18px;
  color: #E5E5E5;
  margin: 0;
  text-align: start;
`

const FooterSection = (props) => {

  const links = props.links.map(link => 
    <Link key={link}>{link}</Link>
  );

  return (
    <FooterSectionContainer>
      <Title>{props.title}</Title>
      {links}
    </FooterSectionContainer>
  )
}

export default FooterSection;
