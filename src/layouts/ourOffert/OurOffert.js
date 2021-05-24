import styled from "styled-components";
import { CreamSection } from "../../components/CreamSection";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";
import Card from "./components/Card";
import Image1 from "../../assets/Frame1.png";
import Image2 from "../../assets/Frame2.png";
import Image3 from "../../assets/Frame3.png";

const OffertTitle = styled(Title)`
  padding: 100px 0 38px 0;

  @media (min-width: 1440px) {
    padding: 337px 0 18px 0;
  }
  
`;

const OffertDescription = styled(Description)`
  padding-bottom: 34px;

  @media (min-width: 1440px) {
    padding-bottom: 70px;
    width: 596px;
  }
`;

const CardContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const OurOffertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0 75px 0;
    width: 1110px;
    margin: auto;
  }
`;

const OffertInfo = styled.div`
  width: 100%;
`;

const OurOffertCreamSection = styled(CreamSection)`
  @media (min-width: 900px) {
    padding-top: 120px;
  }

  @media (min-width: 1200px) {
    padding-top: 200px;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const OurOffert = () => {
  return (
    <section id="news">
      <OurOffertCreamSection>
        <OurOffertContainer>
          <OffertInfo>
            <OffertTitle>What you’re getting?</OffertTitle>
            <OffertDescription>We bring you personalized development programs that are backed by research and crafted from the years of experience</OffertDescription>
        </OffertInfo>
        <CardContainer>
            <Card
              image={Image1} 
              title="1 FREE chat session"
              description={`Start with a free text\nbased chat session online`}
            />
            <Card
              image={Image2}
              title="Personal Coach"
              description={`A dedicated coach to help\nyou through your journey`}
            />
            <Card
              image={Image3}
              title="Text chat session"
              description={`An excellent way of preaparing\na projects wireframe`}
            />
          </CardContainer>
        </OurOffertContainer>
      </OurOffertCreamSection>
    </section>
  )
}

export default OurOffert;