import React from 'react';
import './App.css';
import Counter from './components/Counter.jsx';


function App() {
  const [ count, setCount ] = React.useState(0);

  return (
    <div className='app__wrapper'>
      <h1 className='title'>{count}</h1>

      <Counter 
        plusCounter={ () => setCount(count + 1) }
        minusCounter={ () => setCount(count - 1) }
      />
    </div>
  );
}

export default App;
