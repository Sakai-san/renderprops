import React from 'react';
import Loader from './Loader';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      <div style={{ display: 'flex' }}>
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} width={400} height={300} />
          }
        </Loader>
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} width={400} height={300} />
          }
        </Loader>
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} width={400} height={300} />
          }
        </Loader>
        <Loader>
          {
            (onLoad) => <iframe src='https://wikipedia.org' onLoad={onLoad} width={400} height={300} />
          }
        </Loader>
      </div>
    </div>
  );
}

export default App;
