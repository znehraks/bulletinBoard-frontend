import React from "react";
import MyProfile_img from "../styles/images/myprofile.png";
import MyPost_img from "../styles/images/pencil.png";
import { LOGIN, PROFILE } from "./Enum";
import PropTypes from "prop-types";
import {
  ButtonImg,
  MainLeftButton,
  MainLeftContainer,
} from "../styles/styledComponents";

export const LeftContainer = ({
  mode,
  isLoggedIn,
  setPrevMode,
  setMode,
  getUserFunc,
}) => (
  <MainLeftContainer>
    <MainLeftButton
      onClick={() => {
        if (isLoggedIn) {
          setPrevMode(mode);
          setMode(PROFILE);
          getUserFunc();
        } else {
          setMode(LOGIN);
        }
      }}
    >
      <ButtonImg src={MyProfile_img} />내 프로필 보기
    </MainLeftButton>
    <MainLeftButton
      onClick={() => {
        if (isLoggedIn) {
          setPrevMode(mode);
          setMode(PROFILE);
          getUserFunc();
        } else {
          setMode(LOGIN);
        }
      }}
    >
      <ButtonImg src={MyPost_img} />내 게시글 보기
    </MainLeftButton>
  </MainLeftContainer>
);

LeftContainer.propTypes = {
  mode: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setPrevMode: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  getUserFunc: PropTypes.func.isRequired,
};
