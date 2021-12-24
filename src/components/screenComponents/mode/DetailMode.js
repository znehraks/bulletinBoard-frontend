import React, { useState } from "react";
import {
  MainRightContainerTitle,
  BoardWrapper,
  CurrentTitleContainer,
  CurrentContentContainer,
  ButtonBox,
  ButtonContainer,
  GoToBackButton,
  PopupOverlay,
  PopupWrapper,
  PopupMessageBox,
} from "../../styles/styledComponents";
import { EDIT } from "../Enum";
import PropTypes from "prop-types";

export const DetailMode = ({
  setCurrent,
  setMode,
  prevMode,
  current,
  isLoggedIn,
  titleInput,
  contentInput,
  deleteFunc,
}) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {display ? (
        <>
          <PopupOverlay display={display} />
          <PopupWrapper display={display}>
            <PopupMessageBox>
              정말 삭제하시겠습니까?
              <ButtonBox>
                <ButtonContainer
                  bgColor={"#c34b47"}
                  onClick={() => {
                    deleteFunc(current.code);
                    setDisplay(false);
                  }}
                >
                  삭제하기
                </ButtonContainer>
                <ButtonContainer onClick={() => setDisplay(false)}>
                  취소하기
                </ButtonContainer>
              </ButtonBox>
            </PopupMessageBox>
          </PopupWrapper>
        </>
      ) : (
        <>
          <GoToBackButton
            onClick={() => {
              setCurrent({ code: -1 });
              setMode(prevMode);
            }}
          >
            뒤로가기
          </GoToBackButton>
          <MainRightContainerTitle>
            {current.author}의 게시글
          </MainRightContainerTitle>
          <BoardWrapper>
            <CurrentTitleContainer>{current.title}</CurrentTitleContainer>
            <CurrentContentContainer>{current.content}</CurrentContentContainer>
            {isLoggedIn && current.is_mine && (
              <ButtonBox>
                <ButtonContainer
                  onClick={() => {
                    setMode(EDIT);
                    titleInput.setValue(current.title);
                    contentInput.setValue(current.content);
                  }}
                >
                  수정하기
                </ButtonContainer>
                <ButtonContainer
                  onClick={() => {
                    setDisplay(true);
                  }}
                >
                  삭제하기
                </ButtonContainer>
              </ButtonBox>
            )}
          </BoardWrapper>
        </>
      )}
    </>
  );
};

DetailMode.propTypes = {
  setCurrent: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  prevMode: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  titleInput: PropTypes.object.isRequired,
  contentInput: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};
