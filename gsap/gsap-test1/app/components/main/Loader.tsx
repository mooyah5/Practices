import { isEnteredAtom } from "@/app/stores";
import { useProgress, Html } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { keyframes, styled } from "styled-components";

export const Loader = ({ isCompleted }: any) => {
  const [isEntered, setIsEntered] = useRecoilState(isEnteredAtom);
  const progress = useProgress();
  console.log("progress", isCompleted, progress);

  if (isEntered) null;
  return (
    <Html center>
      <BlurredBackground />
      <Container>
        <ProgressBar>{isCompleted ? 100 : progress.progress}%</ProgressBar>
        {/* <EnterBtn onClick={() => setIsEntered(true)}>Enter</EnterBtn> */}
      </Container>
    </Html>
  );
};

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const BlurredBackground = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 50%;
  filter: blur(80px);
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProgressBar = styled.div`
  font: 24px;
  color: #ccc;
`;
const EnterBtn = styled.div`
  animation: ${blink} 1.5s infinite;
  transition-duration: 0.4s;
  outline: none;
  font-size: 16px;
  border: 0.5px solid #999;
  padding: 8px 18px;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: #cd4f00;
  }
`;
