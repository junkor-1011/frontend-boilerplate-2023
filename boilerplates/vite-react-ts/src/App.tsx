import React, { useState } from 'react';
import { css } from '@linaria/core';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.scss';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <h1>
        <span
          className={css`
            color: blue;
            font-weight: bold;
          `}
        >
          Vite + React
        </span>
      </h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
          className="btn btn-accent"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
