import React, { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media0.giphy.com/media/iMYbnEuQ36GezAw9nF/200w.webp',
  'https://media0.giphy.com/media/4GIvR6cmYs8jC/200w.webp',
  'https://media2.giphy.com/media/3oKIPdL94CCIbgVcRy/giphy.gif?cid=ecf05e4743827591e2f7207a8d86122421ab9908828beb1d&rid=giphy.gif&ct=g'
]
  ;

function App() {
  const [gifs, setGifs] = useState(GIFS)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }

      </section>
    </div>
  );
}

export default App;
