import React from 'react';
import ClassComponentExample from './Examples/ClassComponent';
import FunctionalComponentExample from './Examples/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ClassComponentExample name="Bob" />
      <FunctionalComponentExample name="bob" />
    </div>
  );
}

export default App;
