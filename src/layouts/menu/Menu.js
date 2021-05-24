import styled from "styled-components";
import { LogoWithTitle } from "../../components/LogoWithTitle";
import MenuContent from "./components/MenuContent";
import { CreamSection } from "../../components/CreamSection";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuLogo = styled(LogoWithTitle)`
  @media (min-width: 1200px) {
    margin-top: 10px;
  }
`;

const MenuCreamSection = styled(CreamSection)`
  padding-bottom: 0;
`;

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  z-index: 9;
`;

const Menu = () => {
  return (
    <Navigation>
      <MenuCreamSection>
        <MenuContainer>
          <MenuLogo />
          <MenuContent />
        </MenuContainer>
      </MenuCreamSection>
    </Navigation>
  )
}

export default Menu;