import { useState } from 'react';
import './App.css';
import moviesLogo2 from './assets/img/movies2.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={moviesLogo2} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>The Movies</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
