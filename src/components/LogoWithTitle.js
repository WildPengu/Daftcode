import styled from "styled-components";
import LogoBlackText from "../assets/LogoBlackText.png";
import LogoWhiteText from "../assets/LogoWhiteText.png";

export const LogoWithTitle = styled.div`
  height: 47px;
  width: 173px;
  background-repeat: no-repeat;
  background-image: ${props => props.whiteText ? `url(${LogoWhiteText})` : `url(${LogoBlackText})`};
`;
