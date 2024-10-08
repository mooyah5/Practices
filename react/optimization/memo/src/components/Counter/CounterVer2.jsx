import { memo, useCallback, useEffect, useMemo, useState } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.ts";
import CounterHistory from "./CounterHistory.jsx";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const CounterVer2 = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // 의존성에 사용하기 위한 initialCount 배열
  const [counterChanges, setCounterChanges] = useState([
    {
      value: initialCount,
      id: Math.random() * 1000,
    },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );
  const handleDecrement = useCallback(() => {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevChanges) => [
      { value: -1, id: Math.random() * 1000 },
      ...prevChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(() => {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevChanges) => [
      { value: 1, id: Math.random() * 1000 },
      ...prevChanges,
    ]);
  }, []);

  // useEffect(() => {
  //   // useEffect 사용은 지양해야 한다.
  //   // 컴포넌트 렌더링 후 실행되는데, 여기서 state를 바꾸면 한 번 더 렌더링되므로
  //   setCounterChanges([
  //     {
  //       value: initialCount,
  //       id: Math.random() * 1000,
  //     },
  //   ]);
  // }, [initialCount]);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});
export default CounterVer2;
