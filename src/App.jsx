import { useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 5);
  }

  const handleClickDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 2);
    }
  }

  const handleMultiplyClick = () => {
    setCount(count * 5);
  }

  return (
    <div className='App'>
      <div>Counter Value = {count} </div>
      <button onClick={handleClickCount}> +5 </button>
      <button onClick={handleClickDecreaseCount}> -2</button>
      <button onClick={handleMultiplyClick}>* 5 </button>

    </div>
  )
}

export default App
