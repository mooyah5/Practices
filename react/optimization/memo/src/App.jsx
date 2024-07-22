import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.ts";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import CounterVer2 from "./components/Counter/CounterVer2.jsx";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    // 직접 값 변경보다 확실한 변경 가능 (연달아 작성해도 작동함)
    setChosenCount((prevChosenCount) => prevChosenCount + 1);

    // 추가로, 두 번 변경했는데도 컴포넌트 렌더링이 한 번만 일어남
    // 리액트가 state batching을 한 것

    // 이건 작동 안함!
    console.log(chosenCount); // 이전 값을 참조 (리액트의 스케줄링 때문)
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        {/* <Counter initialCount={chosenCount} /> */}
        {/* <Counter initialCount={0} /> */}
        <CounterVer2 initialCount={chosenCount} />
        <CounterVer2 initialCount={0} />

        {/* 단일 컴포넌트에도 key를 사용할 수 있다. */}
        {/* key 값이 바뀔 때마다 리액트는 이전 컴포넌트 인스턴스를 지우고 다시 만든다. (첫 렌더링처럼) */}
        {/* 이 패턴은 외부에서 보이는 컴포넌트에 의존되는 상태가 있을 때 사용한다. */}
        <CounterVer2 key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
