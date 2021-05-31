import React from 'react';
import Loader from './Loader';
import './App.css';

function App() {
  return (
    <div>
      <div className="Grid">
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} />
          }
        </Loader>
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} />
          }
        </Loader>
        <Loader>
          {
            (onLoad) => <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} />
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
