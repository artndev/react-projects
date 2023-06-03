import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


function Counter({ plusCounter, minusCounter }) {
  return (
    <div className='btns__container'>
      <button 
        className='plus__btn btn' 
        onClick={ plusCounter }
      >
        <AiOutlinePlus />
      </button>
      <button 
        className='minus__btn btn'
        onClick={ minusCounter }
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
}

export default Counter;