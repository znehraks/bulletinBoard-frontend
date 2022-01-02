import React, { useContext, useEffect, useState } from "react";
import {
  MainRightContainerTitle,
  BoardWrapper,
  BoardRow,
  BoardCell,
  ButtonBox,
  ButtonContainer,
  AddPostButton,
  PageSpan,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
} from "../../styles/styledComponents";
import { BoardTable } from "../BoardTable";
import { CREATE, DETAIL } from "../Enum";
import PropTypes from "prop-types";
import { isLoggedInContext } from "../Context";
import useInput from "../../hooks/useInput";
import Magnifier_img from "../../styles/images/magnifier.png";

export const MainMode = ({
  isLoggedIn,
  setMode,
  titleInput,
  contentInput,
  setPage,
  page,
  data,
  setCurrent,
}) => {
  const { me } = useContext(isLoggedInContext);
  const search = useInput("");
  const [searchedData, setSearchedData] = useState([]);
  const searchFunc = () => {
    const searchedDataTemp = [];
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (
          search.value === "" ||
          data[i].board_author.includes(search.value) ||
          data[i].board_title.includes(search.value)
        ) {
          console.log(data[i]);
          searchedDataTemp.push(data[i]);
        }
      }
      setSearchedData(searchedDataTemp);
    }
  };
  useEffect(() => {
    searchFunc();
  }, [search.value]);
  return (
    <>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요."
          {...search}
        />
        <SearchIcon src={Magnifier_img} alt="검색" />
      </SearchInputContainer>
      {isLoggedIn && me && (
        <AddPostButton
          onClick={() => {
            setMode(CREATE);
            titleInput.setValue("");
            contentInput.setValue("");
          }}
        >
          +
        </AddPostButton>
      )}
      <MainRightContainerTitle>게시판 리스트</MainRightContainerTitle>
      <BoardWrapper>
        <BoardRow isTitle={true}>
          <BoardCell>글 번호</BoardCell>
          <BoardCell>글 제목</BoardCell>
          <BoardCell>작성자</BoardCell>
          <BoardCell>작성 시간</BoardCell>
        </BoardRow>
        <BoardTable
          data={searchedData}
          me={me}
          page={page}
          setCurrent={setCurrent}
          setMode={setMode}
          DETAIL={DETAIL}
        />
      </BoardWrapper>
      <ButtonBox>
        <ButtonContainer
          margin={"0vw 2vw 1vw 2vw"}
          onClick={() =>
            page > 1 ? setPage(page - 1) : alert("첫 번째 페이지 입니다.")
          }
        >
          이전
        </ButtonContainer>
        <PageSpan>{page}</PageSpan>
        <ButtonContainer
          margin={"0vw 2vw 1vw 2vw"}
          onClick={() =>
            page < Math.ceil(data.length / 8)
              ? setPage(page + 1)
              : alert("마지막 페이지 입니다.")
          }
        >
          다음
        </ButtonContainer>
      </ButtonBox>
    </>
  );
};

MainMode.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  me: PropTypes.object.isRequired,
  setMode: PropTypes.func.isRequired,
  titleInput: PropTypes.object.isRequired,
  contentInput: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrent: PropTypes.func.isRequired,
};
