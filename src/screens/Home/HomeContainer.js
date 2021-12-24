import React, { useContext, useEffect, useState } from "react";
import useInput from "../../components/hooks/useInput";
import { Api } from "../../api";
import { LOGIN, MAIN, SIGNUP } from "../../components/screenComponents/Enum";
import { HomePresenter } from "./HomePresenter";
import { isLoggedInContext } from "../../components/screenComponents/Context";

const HomeContainer = () => {
  const [current, setCurrent] = useState({
    code: -1,
    title: "",
    content: "",
    img_url: "",
    author: "",
    created_at: "",
    is_mine: false,
  });
  const { isLoggedIn, setIsLoggedIn, me, setMe } =
    useContext(isLoggedInContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [prevMode, setPrevMode] = useState(MAIN);
  const [mode, setMode] = useState(MAIN);
  const [userData, setUserData] = useState([]);
  const [renderToken, setRenderToken] = useState(true);
  const [page, setPage] = useState(1);
  const titleInput = useInput("");
  const contentInput = useInput("");
  const nameInput = useInput("");
  const idInput = useInput("");
  const passwordInput = useInput("");

  if (titleInput.value.length >= 31) {
    titleInput.setValue(titleInput.value.slice(0, 30));
  }
  if (contentInput.value.length >= 1001) {
    contentInput.setValue(contentInput.value.slice(0, 1000));
  }

  const getAllFunc = async () => {
    await Api.getAll()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createFunc = async (
    user_code,
    board_author,
    board_title,
    board_content,
    titleRef,
    contentRef
  ) => {
    if (!board_author) {
      alert("로그인을 해주세요.");
      setMode(LOGIN);
      return;
    } else if (!board_title.trim()) {
      alert("제목을 입력해주세요.");
      titleRef.current.focus();
      return;
    } else if (!board_content.trim()) {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    } else {
      await Api.createPost(user_code, board_author, board_title, board_content)
        .then((res) => {
          console.log(res);
          if (res.data.affectedRows === 1) {
            alert("작성이 완료되었습니다.");
            setRenderToken(!renderToken);
            setPage(1);
            setMode(MAIN);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const editFunc = async (
    board_code,
    board_title,
    board_content,
    titleRef,
    contentRef
  ) => {
    if (!board_code) {
      alert("게시글이 존재하지 않습니다.");
      setMode(prevMode);
    } else if (!board_title.trim()) {
      alert("제목을 입력해주세요.");
      titleRef.current.focus();
      return;
    } else if (!board_content.trim()) {
      alert("내용을 입력해주세요.");
      contentRef.current.focus();
      return;
    } else {
      await Api.editPost(board_code, board_title, board_content)
        .then((res) => {
          console.log(res);
          if (res.data.affectedRows === 1) {
            alert("수정이 완료되었습니다.");
            setCurrent({
              ...current,
              title: board_title,
              content: board_content,
            });
            setCurrent({ code: -1 });
            setMode(prevMode);
            setRenderToken(!renderToken);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteFunc = async (board_code) => {
    if (board_code) {
      await Api.deletePost(board_code)
        .then((res) => {
          console.log(res);
          if (res.data.affectedRows === 1) {
            setCurrent({ code: -1 });
            setMode(MAIN);
            setRenderToken(!renderToken);
            alert("삭제되었습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("게시글이 존재하지 않습니다.");
      setMode(MAIN);
    }
  };

  const getUserFunc = async () => {
    await Api.getUser()
      .then((res) => {
        if (res.data.success === false) return;
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMeFunc = async () => {
    await Api.getMe()
      .then((res) => {
        if (res.data.success === false) return;
        setMe({ code: res.data.code, user_id: res.data.user_id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginFunc = async (user_id, user_password, idRef, passwordRef) => {
    if (!user_id.trim()) {
      alert("아이디를 입력해주세요.");
      idRef.current.focus();
      return;
    } else if (!user_password.trim()) {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current.focus();
      return;
    } else {
      await Api.login(user_id, user_password)
        .then((res) => {
          if (res.data.success === false) {
            alert(res.data.err_msg);
            if (res.data.err_code === 1) {
              alert("회원가입을 진행합니다.");
              setMode(SIGNUP);
              return;
            } else if (res.data.err_code === 2) {
              passwordRef.current.focus();
              return;
            }
          }
          const {
            data: { token },
          } = res;
          if (token) {
            localStorage.setItem("token", token);
            getMeFunc();
            idInput.setValue("");
            passwordInput.setValue("");
            setIsLoggedIn(true);
            setMode(MAIN);
            alert("로그인 되었습니다.");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const signupFunc = async (
    user_name,
    user_id,
    user_password,
    nameRef,
    idRef,
    passwordRef
  ) => {
    const idCheck = /^(?=.*[a-zA-z]).{6,12}$/;
    const pwdCheck = /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
    if (!user_name.trim()) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return;
    } else if (!user_id.trim()) {
      alert("아이디를 입력해주세요.");
      idRef.current.focus();
      return;
    } else if (!idCheck.test(user_id)) {
      alert("아이디는 영문자로 6자이상 12자 이하로 사용해야 합니다.");
      idRef.current.focus();
      return;
    } else if (!user_password.trim()) {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current.focus();
      return;
    } else if (!pwdCheck.test(user_password)) {
      alert(
        "비밀번호는 영문자+숫자+특수문자 조합으로 6~25자 사이로 사용해야 합니다."
      );
      passwordInput.value = "";
      passwordRef.current.focus();
      return;
    } else {
      await Api.signUp(user_name, user_id, user_password)
        .then((res) => {
          console.log(res);
          alert("회원가입 성공!");
          idInput.setValue(user_id);
          passwordInput.setValue(user_password);
          setMode(LOGIN);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    getAllFunc();
    if (!me.code) {
      setIsLoggedIn(false);
    }
  }, [renderToken, me.code, setIsLoggedIn]);

  return (
    <HomePresenter
      loading={loading}
      isLoggedIn={isLoggedIn}
      current={current}
      setCurrent={setCurrent}
      setIsLoggedIn={setIsLoggedIn}
      setData={setData}
      setMe={setMe}
      prevMode={prevMode}
      setPrevMode={setPrevMode}
      setMode={setMode}
      setUserData={setUserData}
      setRenderToken={setRenderToken}
      setPage={setPage}
      idInput={idInput}
      titleInput={titleInput}
      contentInput={contentInput}
      passwordInput={passwordInput}
      data={data}
      me={me}
      mode={mode}
      userData={userData}
      page={page}
      nameInput={nameInput}
      createFunc={createFunc}
      editFunc={editFunc}
      deleteFunc={deleteFunc}
      getUserFunc={getUserFunc}
      loginFunc={loginFunc}
      signupFunc={signupFunc}
    />
  );
};

export default HomeContainer;
