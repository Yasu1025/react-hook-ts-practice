import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

const App = () => {
  const [ status, setStatus ] = useState<string>('text');
  const [ input, setInput ] = useState('');
  const [ counter, setCounter ] = useState(0)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const incrementHandler = () => {
    setCounter((preCounter: number) => preCounter + 1)
  }

  useEffect(() => {
    console.log('useEffect has been invoked!!')
    console.log(`counter is ${counter}`)
  }, [counter])
  
  return (
    <div className="App">
      <header className="App-header">
        <h4>{ status }</h4>
        <button onClick={ () => setStatus('text has been changed')}>Button</button>
        <hr/>
        <h4>{ input }</h4>
        <input type="text" value={ input } onChange={ onChangeHandler } />
        <hr/>
        <h4>{ counter }</h4>
        <button onClick={ incrementHandler }>Increment</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
