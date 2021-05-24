import styled from "styled-components";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Hamburger = styled.div`
  position: absolute;
  top: 25px;
  right: 8px;
  z-index: 1;
  width: 30px;
  height: 30px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    display: none;
  }

  & > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 3px;
    background: #131E07;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    border-radius: 90px;
  }

  & > div::before,
  & > div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -7px;
    width: 100%;
    height: 3px;
    background: #131E07;
    border-radius: 90px;
  }

  & > div::after {
    top: 7px;
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    visibility: visible;
    height: 50px;
    justify-content: flex-end;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 28px
  }

  & > div {
    background: rgba(0, 0, 0, 0.90);;
    border-radius: 50%;
    width: 300vw;
    height: 300vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;

    @media (min-width: 1200px) {
      transform: scale(1);
      background: none;
      width: 656px;
      margin-right: 165px;
      height: 100%;
      justify-content: flex-start;
    }
  }

  & > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;

    @media (min-width: 1200px) {
      opacity: 1;
    }
  }

  & > div > div > ul {
    padding:0;
    
    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
    }
  }

  & > div > div > ul > li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;

    @media (min-width: 1200px) {
      padding: 0;
      font-size: 24px;
    }
  }
`;

const Toggler = styled.input`
  position: absolute;
  top: 25px;
  right: 8px;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;

  @media (min-width: 1200px) {
    display: none;
  }

  &:checked + ${Hamburger} > div {
    transform: rotate(135deg);
    background: white;
  }

  &:checked + ${Hamburger} > div:before,
  &:checked + ${Hamburger} > div:after {
    top: 0;
    transform: rotate(90deg);
    background: white;
  }

  &:checked:hover + ${Hamburger} > div {
    transform: rotate(225deg);
    background: white;
  }

  &:checked ~ ${Menu} {
    visibility: visible;
  }

  &:checked ~ ${Menu} > div {
    transform: scale(1);
    transition-duration: 0.75s;
  }

  &:checked ~ ${Menu} > div > div {
    opacity: 1;
    transition:  opacity 0.4s ease 0.4s;
  }
`;

const MenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;

  @media (min-width: 1200px) {
    color: #131E07;
  }
`;

const MenuButton = styled(Button)`
  padding: 8px 31px 7px 31px;
  font-size: 24px;
`;

const Dot = styled.div`
  @media (min-width: 1200px) {
    display: none;
    height: 8px;
    width: 8px;
    background: #FABD20;
    border-radius: 50%;
    position: absolute;
    left:50%; 
    transform:translate(-50%, -50%);
  }
`;

const LinkContainer = styled.li`
  @media (min-width: 1200px) {
    position: relative;

    margin-right: 37px;
  
    &:nth-of-type(1) {
      margin-left: 11px;
    }

    &:nth-of-type(3) {
      margin-right: 40px;
    }
    &:nth-of-type(4) {
      margin-right: 43px;
    }
    &:nth-of-type(5) {
      margin-right: 39px;
    }
  
    &:hover > ${Dot} {
      display: unset;
      top: 38px;
    }
  }
`;

const MenuContent = () => {
  return (
    <MenuWrapper>
      <Toggler type="checkbox" />
      <Hamburger><div></div></Hamburger>
      <Menu>
        <div>
          <div>
            <ul>
              <LinkContainer>
                <MenuLink href="#home">Home</MenuLink>
                <Dot />
              </LinkContainer>
              <LinkContainer>
                <MenuLink href="#about">About</MenuLink>
                <Dot />
              </LinkContainer>
              <LinkContainer>
                <MenuLink href="#courses">Courses</MenuLink>
                <Dot />
              </LinkContainer>
              <LinkContainer>
                <MenuLink href="#news">News</MenuLink>
                <Dot />
              </LinkContainer>
              <LinkContainer>
                <MenuLink href="#contact">Contact</MenuLink>
                <Dot />
              </LinkContainer>
              <MenuButton>Log in</MenuButton>
            </ul>
          </div>
        </div>
      </Menu>
    </MenuWrapper>
  )
}

export default MenuContent;