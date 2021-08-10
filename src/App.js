import React, { useState } from 'react';

function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('')

  const increment = () => { setLikes(likes + 1) }
  function decrement() { setLikes(likes - 1) }

  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
