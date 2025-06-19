import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countPlus, setCountPlus] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Learn Git_Flow</h1>
      <div className="card">
        <p>My name is Supakun Thata.</p>
        <p>I am Fullstack Developer.</p>
        <p>GG EZ.</p>
        <p>GG EZ2.</p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count + = {count}
          </button>
          <button onClick={() => setCountPlus((count) => count + 2)}>
            count ++ = {countPlus}
          </button>
          <button onClick={() => setCountPlus((count) => count + 2)}>
            count +++ = {countPlus}
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
