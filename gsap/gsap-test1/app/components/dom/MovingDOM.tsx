import { isEnteredAtom } from "@/app/stores";
import { Scroll } from "@react-three/drei";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function MovingDOM() {
  const isEntered = useRecoilState(isEnteredAtom);
  const article01Ref = useRef(null);
  const article02Ref = useRef(null);

  if (!isEntered) return null;
  return (
    <Scroll html>
      <ArticleWrapper ref={article01Ref}></ArticleWrapper>
      <ArticleWrapper ref={article02Ref}></ArticleWrapper>
    </Scroll>
  );
}

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #ffffff;
  padding: 40px;
`;
