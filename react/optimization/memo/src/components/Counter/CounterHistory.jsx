import { useState } from "react";

import { log } from "../../log.ts";

function HistoryItem({ count }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count, index) => (
        // key 로 index를 사용하면, 많은 item들이 함께 렌더링되며,
        // handleClick 시 index가 변경되어 상태 유지가 안됨
        // <HistoryItem key={index} count={count.value} />

        // 유일한 id를 사용하면, 상태 유지가 가능하며
        // 목록 추가 시에 virtual DOM이 추가된 item만 렌더링함
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
