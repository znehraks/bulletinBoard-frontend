import React from "react";
import { LoaderComponent, Span } from "../styles/styledComponents";

export const Loader = () => (
  <LoaderComponent>
    <Span>로딩중...</Span>
    <Span>처음 접속하시면 10초 정도 시간이 걸립니다.</Span>
  </LoaderComponent>
);

export default Loader;
