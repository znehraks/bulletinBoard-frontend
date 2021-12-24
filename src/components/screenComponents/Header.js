import React, { useContext } from "react";
import Logo_img from "../styles/images/DesignC_logo_03_white.png";
import Profile_img from "../styles/images/logo.jpg";
import { LOGIN, MAIN, PROFILE } from "./Enum";
import PropTypes from "prop-types";
import { isLoggedInContext, themeContext } from "./Context";
import {
  MenuButton,
  LogoImg,
  LogoutBox,
  Menu,
  Nav,
  ProfileImg,
} from "../styles/styledComponents";

export const Header = ({ setMode, getUserFunc }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedInContext);
  const { isDarkMode, setIsDarkMode } = useContext(themeContext);
  return (
    <Nav>
      <Menu justify={"center"} flex={4} onClick={() => setMode(MAIN)}>
        <LogoImg src={Logo_img} alt={"로고"} />
      </Menu>
      <Menu flex={1}>
        {!isLoggedIn ? (
          <MenuButton onClick={() => setMode(LOGIN)}>로그인하기</MenuButton>
        ) : (
          <LogoutBox>
            <ProfileImg
              onClick={() => {
                getUserFunc();
                setMode(PROFILE);
              }}
              src={Profile_img}
              alt={"프로필이미지"}
            />
            <MenuButton
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                alert("로그아웃 되었습니다.");
                window.location.href = "/";
              }}
            >
              로그아웃하기
            </MenuButton>
          </LogoutBox>
        )}
      </Menu>
      <Menu flex={1}>
        <MenuButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "다크모드 끄기" : "다크모드 켜기"}
        </MenuButton>
      </Menu>
    </Nav>
  );
};

Header.propTypes = {
  setMode: PropTypes.func.isRequired,
};
