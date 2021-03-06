import React, { useContext } from "react";
import {
  MainRightContainerTitle,
  BoardWrapper,
  ButtonBox,
  ButtonContainer,
  ProfileContainer,
  Profile,
  ProfileLeftContainer,
  ProfileRightContainer,
  ProfileRightContainerSpan,
} from "../../styles/styledComponents";
import { DETAIL, MAIN } from "../Enum";
import { ProfileBoardTable } from "../ProfileBoardTable";
import Profile_img from "../../styles/images/logo.jpg";
import PropTypes from "prop-types";
import { isLoggedInContext } from "../Context";
export const ProfileMode = ({
  userData,
  setCurrent,
  setPrevMode,
  mode,
  isLoggedIn,
  setMode,
}) => {
  const { me, setIsLoggedIn } = useContext(isLoggedInContext);
  return (
    <>
      <BoardWrapper>
        <MainRightContainerTitle>
          나의 프로필과 게시글을 확인할 수 있어요
        </MainRightContainerTitle>
        <ProfileContainer>
          <ProfileLeftContainer>
            <Profile src={Profile_img} />
            <ProfileRightContainerSpan>
              {userData[0].user_name}({userData[0].user_id})
            </ProfileRightContainerSpan>
          </ProfileLeftContainer>
          <ProfileRightContainer>
            <ProfileBoardTable
              userData={userData}
              setCurrent={setCurrent}
              setPrevMode={setPrevMode}
              setMode={setMode}
              me={me}
              mode={mode}
              DETAIL={DETAIL}
            />
          </ProfileRightContainer>
        </ProfileContainer>
        <ButtonBox>
          {isLoggedIn && (
            <>
              <ButtonContainer
                isMobile={true}
                onClick={() => {
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                  alert("로그아웃 되었습니다.");
                  window.location.href = "/";
                }}
              >
                로그아웃
              </ButtonContainer>
              <ButtonContainer onClick={() => setMode(MAIN)}>
                뒤로가기
              </ButtonContainer>
            </>
          )}
        </ButtonBox>
      </BoardWrapper>
    </>
  );
};
Profile.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrent: PropTypes.func.isRequired,
  setPrevMode: PropTypes.func.isRequired,
  me: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setMode: PropTypes.func.isRequired,
};
