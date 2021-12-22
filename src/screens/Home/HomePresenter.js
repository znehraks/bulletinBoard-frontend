import React from "react";
import { Footer } from "../../components/screenComponents/Footer";
import { Header } from "../../components/screenComponents/Header";
import { LeftContainer } from "../../components/screenComponents/LeftContainer";
import { RightContainer } from "../../components/screenComponents/RightContainer";
import Helmet from "react-helmet";
import {
  MainContainer,
  MainRightContainer,
  Wrapper,
} from "../../components/styles/styledComponents";

export const HomePresenter = ({
  isLoggedIn,
  current,
  setCurrent,
  prevMode,
  setPrevMode,
  setMode,
  setPage,
  idInput,
  passwordInput,
  data,
  me,
  mode,
  userData,
  page,
  nameInput,
  createFunc,
  editFunc,
  deleteFunc,
  getUserFunc,
  loginFunc,
  signupFunc,
  titleInput,
  contentInput,
}) => {
  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header setMode={setMode} />
      <MainContainer>
        <LeftContainer
          mode={mode}
          isLoggedIn={isLoggedIn}
          setPrevMode={setPrevMode}
          setMode={setMode}
          getUserFunc={getUserFunc}
        />
        <MainRightContainer>
          {/*Props 지옥 */}
          <RightContainer
            data={data}
            me={me}
            page={page}
            setPage={setPage}
            mode={mode}
            setCurrent={setCurrent}
            setMode={setMode}
            current={current}
            isLoggedIn={isLoggedIn}
            deleteFunc={deleteFunc}
            prevMode={prevMode}
            editFunc={editFunc}
            createFunc={createFunc}
            userData={userData}
            setPrevMode={setPrevMode}
            nameInput={nameInput}
            idInput={idInput}
            passwordInput={passwordInput}
            signupFunc={signupFunc}
            loginFunc={loginFunc}
            titleInput={titleInput}
            contentInput={contentInput}
          />
        </MainRightContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};
