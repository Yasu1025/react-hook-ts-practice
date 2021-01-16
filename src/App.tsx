import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Clearnup from './Clearnup';

const App = () => {
  const [ status, setStatus ] = useState<string>('text');
  const [ input, setInput ] = useState('');
  const [ counter, setCounter ] = useState(0);
  const [ display, setDisplay ] = useState(true);

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
        <hr/>
        {
          display && <Clearnup/>
        }
        <button onClick={ () => setDisplay(!display)}>Toggle Display</button>
        
        
      </header>
    </div>
  );
}

export default App;
