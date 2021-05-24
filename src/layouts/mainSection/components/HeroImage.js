import styled from "styled-components";
import image from "../../../assets/HeroImage.png";

export const HeroImage = styled.div`
  background-image: url(${image});
  height: 175px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: 13px;

  @media (min-width: 1200px) {
    width: 677px;
    height: 385px;
    margin-top: 89px;
  }
`