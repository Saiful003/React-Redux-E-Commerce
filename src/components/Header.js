import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, IconWrapper } from "../styled-component/common";
import SingleIcon from "./SingleIcon";
import { VscSignIn } from "react-icons/vsc";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BsSearch, BsX } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";
import { useInput } from "../hooks/useInput";

function Header() {
  const { cart } = useCart();
  const { isLightTheme, theme, switchThemeHandler } = useTheme();
  const { inputValue: value, handleInputChange, clearSerachField } = useInput();

  return (
    <HeaderContainer theme={theme}>
      <Container>
        <HeaderWrapper>
          <Logo>
            <LogoLink to="/">Daily Shopping</LogoLink>
          </Logo>
          <InputArea>
            <InputWrapper>
              <Input
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                type="text"
                placeholder="Search Products here..."
              />
              <IconContext.Provider
                value={{ size: 20, style: { cursor: "pointer" } }}
              >
                <SearchIcon>
                  <IconWrapper>
                    <BsSearch />
                  </IconWrapper>
                </SearchIcon>
                <CrossIcon>
                  <IconWrapper onClick={clearSerachField}>
                    <BsX />
                  </IconWrapper>
                </CrossIcon>
              </IconContext.Provider>
            </InputWrapper>
          </InputArea>
          <RightHeader>
            <IconContext.Provider
              value={{
                size: 23,
                color: "white",
                style: { cursor: "pointer" },
              }}
            >
              <IconContainer>
                <SingleIcon route="signin" icon={<VscSignIn />} />
                <SingleIcon
                  onlyIcon
                  onClick={switchThemeHandler}
                  icon={
                    isLightTheme ? (
                      <MdOutlineLightMode />
                    ) : (
                      <MdOutlineNightlight />
                    )
                  }
                />
                <SingleIcon route="cart" icon={<AiOutlineShoppingCart />}>
                  <Quantity cart={cart}> {cart.length} </Quantity>
                </SingleIcon>
              </IconContainer>
            </IconContext.Provider>
          </RightHeader>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}

const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 10px;
`;
const CrossIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
`;

const InputWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: 640px) {
    width: 450px;
  }
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  @media only screen and (min-width: 1024px) {
    width: 450px;
  }
`;
const Quantity = styled.span`
  position: absolute;
  top: -17px;
  right: -25px;
  background: #ffffff;
  width: 28px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  color: hsl(133deg 100% 40%);
  display: ${({ cart }) => cart.length === 0 && "none"};
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;
  border: none;
  padding-left: 2.7em;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 1.5em;
`;
const HeaderContainer = styled.header`
  min-height: 80px;
  background-color: ${(props) => {
    const { theme } = props;
    const { primaryColor } = theme;
    return primaryColor;
  }};
  position: sticky;
  top: 0;
  z-index: 999;
  @media only screen and (min-width: 640px) {
    padding: 1em 0;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 640px) {
    flex-direction: column;
    gap: 15px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Logo = styled.div`
  padding: 1.1em 0;
  margin-right: 1.89px;
  flex-grow: 1;
  @media only screen and (min-width: 640px) {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 0;
  }
  @media only screen and (min-width: 1024px) {
    flex-grow: 0;
    margin-right: 1.89px;
  }
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
`;

const InputArea = styled.div`
  display: none;
  @media only screen and (min-width: 640px) {
    display: block;
  }
  @media only screen and (min-width: 1024px) {
    flex-grow: 1;
  }
`;
const RightHeader = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1024px) {
    display: block;
  }
`;
export default Header;
