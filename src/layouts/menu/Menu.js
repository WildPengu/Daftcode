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
  position: sticky;
  top: 0;
  padding-bottom: 0;
  z-index: 9;
`;

const Menu = () => {
  return (
    <nav>
      <MenuCreamSection>
        <MenuContainer>
          <MenuLogo />
          <MenuContent />
        </MenuContainer>
      </MenuCreamSection>
    </nav>
  )
}

export default Menu;