import React from "react";
import { DETAIL } from "./Enum";
import PropTypes from "prop-types";
import {
  ProfileBoardRow,
  ProfileBoardCell,
  EmptyContainer,
} from "../styles/styledComponents";

export const ProfileBoardTable = ({
  userData,
  setCurrent,
  setPrevMode,
  setMode,
  me,
  mode,
}) => {
  return (
    <>
      {userData.map((row) => {
        if (row.board_code) {
          return (
            <ProfileBoardRow
              onClick={() => {
                setCurrent({
                  code: row.board_code,
                  title: row.board_title,
                  content: row.board_content,
                  img_url: row.board_img_url,
                  author: row.board_author,
                  created_at: row.created_at,
                  is_mine: row.user_code === me.code,
                });
                setPrevMode(mode);
                setMode(DETAIL);
              }}
              key={row.board_code}
            >
              <ProfileBoardCell>{row.board_code}</ProfileBoardCell>
              <ProfileBoardCell>
                {row.board_title.length > 10
                  ? `${row.board_title.slice(0, 10)}...`
                  : `${row.board_title}`}
              </ProfileBoardCell>
              <ProfileBoardCell>{row.board_author}</ProfileBoardCell>
              <ProfileBoardCell>
                {row.created_at.split("T")[0]}
              </ProfileBoardCell>
            </ProfileBoardRow>
          );
        } else {
          return <EmptyContainer>아직 게시글이 없어요.</EmptyContainer>;
        }
      })}
    </>
  );
};

ProfileBoardTable.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrent: PropTypes.func.isRequired,
  setPrevMode: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  me: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
};
