import styled from "styled-components";
import { CreamSection } from "../../components/CreamSection";
import { HeroImage } from "./components/HeroImage";
import { Title } from "../../components/Title";
import { LogoIcon } from "./components/Logo";
import Description from "../../components/Description";
import { Button } from "../../components/Button";
import NumbersSection from './components/NumbersSection';
import LogoIconImage from "../../assets/Ellipse.png";

const MainSectionTitle = styled(Title)`
  margin-top: 42px;

`;

const MainSectionDescription = styled(Description)`
  margin: 18px 0 28px 0;

  @media (min-width: 1200px) {
    margin-bottom: 35px;
  }

`;

const MainSectionButton = styled(Button)`
  width: unset;
  padding: 18px 119px 14px 118px;

  @media (min-width: 1200px) {
    padding: 18px 74px 14px 69px;
    font-size: 25px;
  }
  
  @media (max-width: 374px) {
    padding: 18px 50px;
    width: 100%;
  }
`;

const MainSectionContainer = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 83px;
    justify-content: space-between;
  }
`;

const MainSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 430px;
    padding-left: 2px;
    display: block;
  }
`;

const MainSection = () => {
  return (
    <section id="about">
      <CreamSection>
        <MainSectionContainer>
          <HeroImage />
          <MainSectionInfo>
            <MainSectionTitle>
              Check y
              <LogoIcon src={LogoIconImage}/>
              ur well-being
            </MainSectionTitle>
            <MainSectionDescription>
              We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way. 
            </MainSectionDescription>
            <MainSectionButton>Get started</MainSectionButton>
          </MainSectionInfo>
        </MainSectionContainer>
        <NumbersSection />
      </CreamSection>
    </section>
  )
}

export default MainSection;