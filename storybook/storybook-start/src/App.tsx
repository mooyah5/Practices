import { useState } from "react";
import "./App.css";
import { PrimaryButton, TagButton } from "jason-kang-ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="underline text-secondary text-2xl">Vite + React</h1>
      <div className="card">
        <PrimaryButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </PrimaryButton>
        <TagButton onClick={() => setCount((count) => count - 1)}>
          asdf
        </TagButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
