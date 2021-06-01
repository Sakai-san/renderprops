import React from 'react';
import Loader from './Loader';
import './App.css';

function App() {
  return (
    <div>
      <div className="Grid">
        <Loader>
          {
            (onLoad) => {
              console.log('image erable');
              return <img src='https://miro.medium.com/max/12000/1*mbZ4d3IzTmi46SzfihlJqw.jpeg' onLoad={onLoad} width={400} height={300} />;

            }
          }
        </Loader>
        <Loader>
          {
            (onLoad) => {
              console.log('image jungfrau');
              return <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg' onLoad={onLoad} width={400} height={300} />;
            }
            
          }
        </Loader>
        <Loader>
          {
            (onLoad) => {
              console.log('image walensee');
              return <img src='https://swissfamilyfun.com/wp-content/uploads/2021/03/wildflowers-brienz-rothorn-ridge.jpg' onLoad={onLoad} width={400} height={300} />;
            }
          }
        </Loader>
        <Loader>
          {
            (onLoad) => {
              console.log('iframe wikipedia');
              return <iframe src='https://wikipedia.org' onLoad={onLoad} width={400} height={300} />;
            }
          }
        </Loader>
      </div>
    </div>
  );
}

export default App;
