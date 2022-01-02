import styled, { keyframes } from "styled-components";

export const Animation = keyframes`
    0% {
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

export const LoaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.ContainerColor};
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 999;
  span {
    font-size: 1vw;
    animation: ${Animation} 1.3s linear infinite;
    :first-child {
      font-size: 2vw;
    }
  }
  @media (max-width: 550px) {
    span {
      font-size: 4vw;
      animation: ${Animation} 1.3s linear infinite;
      :first-child {
        font-size: 7vw;
      }
    }
  }
`;

export const Span = styled.span``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`;
export const Nav = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.headerColor};
  font-size: 1.1vw;
  font-weight: 600;
  padding: 0 7vw 0 15vw;
  :first-child {
    flex: 3;
  }
  :not(:first-child) {
    flex: 1;
  }
  @media (max-width: 550px) {
    padding: 0 1vw;
    justify-content: center;
  }
`;
export const Menu = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.theme.headerFontColor};
  @media (max-width: 550px) {
    :nth-child(2) {
      flex: 3;
      justify-content: flex-end;
    }
    :nth-child(3) {
      flex: 3;
    }
    justify-content: center;
  }
`;
export const LogoutBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    span {
      display: none;
    }
    img {
      width: 10vw;
      height: 10vw;
    }
    justify-content: center;
  }
`;
export const MenuButton = styled.span`
  font-size: 1vw;
  :hover {
    color: ${(props) => props.theme.hoverHeaderFontColor};
  }
  cursor: pointer;
  @media (max-width: 550px) {
    font-size: 3vw;
  }
`;
export const ProfileImg = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin-right: 1vw;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 10vw;
  cursor: pointer;
  @media (max-width: 550px) {
    width: 22vw;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  background: ${(props) => props.theme.bgColor};
  position: relative;
  @media (max-width: 550px) {
    height: 85%;
  }
`;
export const MainLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.ContainerColor};
  margin: 0 0.2vw;
  height: 100%;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    display: none;
  }
`;

export const MainLeftButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2vw;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin: 2.5vw 0;
  padding: 0.6vw;
  cursor: pointer;
  :nth-child(2) {
    margin: 0;
  }
  :hover {
    background: ${(props) => props.theme.lightHeaderColor};
    color: ${(props) => props.theme.hoverFontColor};
  }
`;
export const ButtonImg = styled.img`
  width: 2vw;
`;
export const MainRightContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.ContainerColor};
  height: 100%;
`;
export const MainRightContainerTitle = styled.span`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8vw;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    margin-top: 5vw;
    font-size: 4vw;
  }
`;
export const BoardWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 550px) {
    width: 95%;
    height: 85%;
    justify-content: center;
  }
`;
export const BoardRow = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.ContainerColor};
  cursor: ${(props) => (props.isTitle ? "inherit" : "pointer")};
  border-top: 1px solid ${(props) => props.theme.borderColor};

  :last-child {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
  :hover {
    background-color: ${(props) =>
      props.isTitle ? "inherit" : props.theme.headerColor};
    border: ${(props) =>
      props.isTitle
        ? `1px solid inherit`
        : `1px solid ${props.theme.lightHeaderColor}`};
    div {
      color: ${(props) =>
        props.isTitle ? "inherit" : props.theme.hoverFontColor};
    }
  }
`;
export const BoardCell = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};

  :first-child {
    border-left: 1px solid ${(props) => props.theme.borderColor};
    flex: 1;
  }
  :nth-child(2) {
    flex: 3;
  }
  :nth-child(3) {
    flex: 2;
  }
  :last-child {
    flex: 2;
  }
  @media (max-width: 550px) {
    font-size: 3vw;
  }
`;

export const ProfileBoardRow = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: ${(props) => (props.isTitle ? "inherit" : "pointer")};
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  :last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  :hover {
    background-color: ${(props) =>
      props.isTitle ? "inherit" : props.theme.lightHeaderColor};
    color: ${(props) => (props.isTitle ? "inherit" : "#fff")};
  }
`;
export const ProfileBoardCell = styled.div`
  width: 100%;
  height: 3vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  :first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    flex: 1;
  }
  :nth-child(2) {
    flex: 3;
  }
  :nth-child(3) {
    flex: 2;
  }
  :last-child {
    flex: 2;
  }
  @media (max-width: 550px) {
    font-size: 2vw;
    height: 10vw;
  }
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CurrentTitleContainer = styled.div`
  width: 80%;
  height: 10%;
  font-size: 1.2vw;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.whiteBgColor};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 5vw;
  }
`;
export const CurrentTitleContainerEdit = styled.input`
  width: 80%;
  height: 10%;
  font-size: 1.2vw;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.whiteBgColor};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 5vw;
  }
`;
export const CurrentContentContainer = styled.div`
  width: 80%;
  height: 70%;
  font-size: 0.9vw;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top: none;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.theme.whiteBgColor};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 5vw;
  }
`;
export const CurrentContentContainerEdit = styled.textarea`
  width: 80%;
  height: 70%;
  font-size: 1vw;
  resize: none;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top: none;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => props.theme.whiteBgColor};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 5vw;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    margin-top: 2vw;
  }
`;
export const ButtonContainer = styled.div`
  font-size: 1.2vw;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 0.4vw;
  margin: ${(props) => (props.margin ? props.margin : "1vw 1vw 0 1vw")};
  background-color: inherit;

  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : props.theme.lightHeaderColor};
    color: ${(props) => props.theme.hoverFontColor};
  }
  @media (max-width: 550px) {
    font-size: 4vw;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${(props) => props.theme.whiteBgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 4px solid ${(props) => props.theme.lightHeaderColor};
  @media (max-width: 550px) {
    justify-content: center;
    height: 50%;
  }
`;

export const Profile = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  margin: 2vw 0;
  @media (max-width: 550px) {
    width: 24vw;
    height: 24vw;
  }
`;
export const ProfileLeftContainer = styled.div`
  flex: 2;
  height: 100%;
  background-color: ${(props) => props.theme.lightHeaderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 0.1vw;
  padding-top: 3vw;
  font-size: 3vw;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
export const ProfileRightContainer = styled.div`
  flex: 5;
  height: 95%;
  background-color: ${(props) => props.theme.whiteBgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2vw;
  overflow-y: auto;
`;

export const ProfileRightContainerSpan = styled.div`
  font-size: 1.2vw;
  color: ${(props) => props.theme.headerFontColor};
  @media (max-width: 550px) {
    font-size: 3vw;
    justify-content: center;
  }
`;

export const WordCount = styled.span`
  font-size: 1vw;
  font-weight: 600;
  position: absolute;
  bottom: ${(props) => `${props.bottom}vw`};
  right: ${(props) => `${props.right}vw`};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    bottom: ${(props) => `${props.mobileBottom}vw`};
    right: ${(props) => `${props.mobileRight}vw`};
    font-size: 3vw;
  }
`;
export const AddPostButton = styled.div`
  position: absolute;
  width: 3vw;
  height: 3vw;
  bottom: 5vw;
  border-radius: 50%;
  font-size: 2vw;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 4vw;
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: inherit;
  color: ${(props) => props.theme.fontColor};
  padding-bottom: 0.4vw;
  :hover {
    background-color: ${(props) => props.theme.lightHeaderColor};
    color: ${(props) => props.theme.hoverFontColor};
  }
  cursor: pointer;
  @media (max-width: 550px) {
    width: 10vw;
    height: 10vw;
    top: 5vw;
    font-size: 8vw;
  }
`;

export const GoToBackButton = styled.div`
  position: absolute;
  width: 5vw;
  height: 5vw;
  top: 5vw;
  border-radius: 50%;
  font-size: 1vw;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 7vw;
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  :hover {
    background-color: ${(props) => props.theme.lightHeaderColor};
    color: ${(props) => props.theme.hoverFontColor};
  }
  cursor: pointer;
  @media (max-width: 550px) {
    top: 15vw;
    right: 2vw;
    width: 10vw;
    height: 10vw;
    font-size: 2.2vw;
  }
`;
export const PageSpan = styled.span`
  font-size: 1.2vw;
  margin-bottom: 1vw;
  @media (max-width: 550px) {
    font-size: 5vw;
    margin: 2vw 4vw 4vw 4vw;
  }
`;

export const AuthContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: ${(props) => props.theme.whiteBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AuthInputContainer = styled.div`
  width: 35%;
  height: 8%;
  margin: 1vw 0;
  font-size: 1.2vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;
  @media (max-width: 550px) {
    width: 70%;
  }
`;
export const AuthInputTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  font-size: 1.2vw;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 3vw;
  }
`;
export const AuthInput = styled.input`
  flex: 3;
  height: 100%;
  font-size: 1.2vw;
  background: ${(props) => props.theme.ContainerColor};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    font-size: 3.2vw;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 10%;
  background: ${(props) => props.theme.lightHeaderColor};
  color: #fff;
  @media (max-width: 550px) {
    height: 5%;
  }
`;
export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;
  margin: 0 0.2vw;
  height: 100%;
  background: ${(props) => props.theme.headerColor};
  @media (max-width: 550px) {
    font-size: 2vw;
  }
`;
export const FooterRight = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #555;
  height: 100%;
  background: ${(props) => props.theme.headerColor};
  @media (max-width: 550px) {
    font-size: 3vw;
  }
`;

export const PopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0.3;
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.display ? "block" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupMessageBox = styled.div`
  width: 30%;
  height: 20%;
  background-color: ${(props) => props.theme.whiteBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 0.4vw;
  font-size: 1.2vw;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 550px) {
    width: 60%;
    height: 20%;
    font-size: 3vw;
  }
`;

export const SearchInputContainer = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.2vw;
`;
export const SearchInput = styled.input`
  width: 80%;
  height: 60%;
  outline: none;
  font-size: 1.4vw;
  background: inherit;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;
export const SearchIcon = styled.img`
  height: 60%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
