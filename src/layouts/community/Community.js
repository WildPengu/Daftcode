import styled from "styled-components";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";

const CommunityContainer = styled.div`
  background: #FABD20;
  padding: 62px 35px 162px 24px;
  position: relative;

  @media (min-width: 900px) {
    padding-bottom: 260px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 350px;
  }

  @media (min-width: 1440px) {
    padding: 65px 0 447px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CommunityTitle = styled(Title)`
  @media (min-width: 500px) {
    text-align: center;
  }

  @media (min-width: 1440px) {
    text-align: center;
    width: 839px;
  }
`;

const CommunityDescription = styled(Description)`
  margin-top: 39px;

  @media (min-width: 500px) {
    text-align: center;
  }

  @media (min-width: 1440px) {
    margin-top: 43px;
    width: 371px;
    text-align: center;
  }
`;

const VideoContainer = styled.iframe`
  border: none;
  border-radius: 8px;
  height: 160px;
  width: 327px;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  bottom: -71px;

  @media (max-width: 374px) {
    height: 110px;
    width: 227px;
    bottom: -55px
  }

  @media (min-width: 650px) {
    height: 220px;
    width: 480px;
    bottom: -100px
  }

  @media (min-width: 900px) {
    height: 350px;
    width: 700px;
    bottom: -160px
  }

  @media (min-width: 1200px) {
    height: 475px;
    width: 950px;
    bottom: -230px
  }

  @media (min-width: 1440px) {
    width: 1240px;
    height: 603px;
    bottom: -210px;
  }
`;

const Play = styled.img`
  width: 78px;

  @media (min-width: 1440px) {
    width: 130px;
  }  
`;

const Community = () => {
  return (
    <section id="courses">
      <CommunityContainer>
        <CommunityTitle>What our community is saying?</CommunityTitle>
        <CommunityDescription>A mission-driven company that invest in and builds healthier living</CommunityDescription>
        <VideoContainer 
          src="https://www.youtube.com/embed/hT_nvWreIhg" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        >
        </VideoContainer>
      </CommunityContainer>
    </section>
  )
}

export default Community;
