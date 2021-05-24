import styled from "styled-components";
import { Button } from "../../components/Button";
import FooterSection from "./components/FooterSection";
import { LogoWithTitle } from "../../components/LogoWithTitle";
import { Description } from "../../components/Description";
import { Input } from "../../components/Input";

const FooterContainer = styled.div`
  background: #131E07;
  padding: 64px 24px 55px 24px;

  @media (min-width: 700px) {
    padding: 64px 80px 55px 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-rows: 47px 52px 41px 191px 1fr;
    grid-template-columns: 491px 1fr;
    position: relative;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    padding: 89px 166px 0 165px;
  }
`;

const FooterInput = styled(Input)`
  margin: 15px 0 15px 0;
  padding: 15px 105px 15px 15px;
  width: unset;

  @media (min-width: 1000px) {
    font-size: 18px;
    margin: 0;
    width: 350px;
    height: 50px;
    grid-column: 3;
    grid-row: 2;
  }

  @media (min-width: 1440px) {
    grid-column: 3;
    grid-row: 4;
  }

  
  @media (max-width: 374px) {
    padding: 10px 50px;
    width: 100%;
  }

`;

const FooterButton = styled(Button)`
  width: unset;
  padding: 18px 119px 14px 118px;

  @media (min-width: 1000px) {
    font-size: 18px;
    width: 113px;
    height: 34px;
    padding: 5px 16px 4px 16px;
    grid-column: 3;
    grid-row: 2;
    position: absolute;
    left: 229px;
    top: 8px;
    border-radius: 4px;
  }

  @media (min-width: 1440px) {
    grid-column: 3;
    grid-row: 4;
  }

  @media (max-width: 374px) {
    padding: 10px 50px;
    width: 100%;
  }
`;

const FooterDescription = styled(Description)`
  font-size: 18px;
  color: #7C8176;
  margin-top: 58px;
  text-align: start;

  @media (min-width: 1000px) {
    margin: 0;
    grid-column: 3;
    grid-row: 1;
  } 

  @media (min-width: 1440px) {
    grid-column: 3;
    grid-row: 3;
  }
`;

const FooterSectionContainer = styled.div`
  @media (min-width: 700px) {
    margin-top: 52px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    grid-row: 3;
    grid-column: 1;
  }

  @media (min-width: 1440px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

const Terms = styled(Description)`
  display:none;

  @media (min-width: 1000px) {
    display: unset;
    border-top: 1px solid #7C8176;
    width: 100%;
    grid-row: 5;
    grid-column: 1/4;
    text-align: end;
    font-size: 10px;
    padding: 16px 0;
    color: #7C8176;
  }
`

const Footer = () => {
  return (
    <footer id="contact">
      <FooterContainer>
        <LogoWithTitle whiteText/>
        <FooterDescription>Try Medli for free</FooterDescription>
        <FooterInput placeholder="Enter your email"/>
        <FooterButton>Get started</FooterButton>
        <FooterSectionContainer>
          <FooterSection 
            title="Product"
            links={["Updates", "Security", "Chrome Extension"]}
          />
          <FooterSection 
            title="Company"
            links={["About", "Blog", "Join Us"]}
          />
          <FooterSection 
            title="Help"
            links={["Talk to Support", "Support Docs", "API Docs", "System Status"]}
          />
        </FooterSectionContainer>
        <Terms>Terms & Conditions </Terms>
      </FooterContainer>
    </footer>
  )
}

export default Footer;