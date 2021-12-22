import React from "react";
import { DETAIL } from "./Enum";
import PropTypes from "prop-types";
import { BoardCell, BoardRow } from "../styles/styledComponents";

export const BoardTable = ({ data, me, page, setCurrent, setMode }) => {
  return (
    <>
      {data &&
        data.map((row, index) => {
          if (index < page * 8 && index >= (page - 1) * 8) {
            return (
              <BoardRow
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
                  setMode(DETAIL);
                }}
                key={row.board_code}
              >
                <BoardCell>{row.board_code}</BoardCell>
                <BoardCell>
                  {row.board_title.length > 20
                    ? `${row.board_title.slice(0, 20)}...`
                    : `${row.board_title}`}
                </BoardCell>
                <BoardCell>{row.board_author}</BoardCell>
                <BoardCell>
                  {`
                  ${row.created_at.split("T")[0]} 
                  ${row.created_at.split("T")[1].split(":")[0]}:${
                    row.created_at.split("T")[1].split(":")[1]
                  }`}
                </BoardCell>
              </BoardRow>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

BoardTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  me: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
};
