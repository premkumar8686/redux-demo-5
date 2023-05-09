import React from 'react';
import { decrement, increment, reset } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function Display() {

  let dispatch =  useDispatch();
  const myIncrement = () => {
    let increment1 = increment();
    dispatch(increment1);
  }
  
  const myDecrement = () => {
    let increment1 = decrement();
    dispatch(increment1);
  }
  
  const myReset = () => {
    let increment1 = reset();
    dispatch(increment1);
  }

  let res = useSelector((state) => state.myCounter);

  return (
    <>
     <h1>{res}</h1>
      <button onClick={myIncrement} >Increment</button>
      <button onClick={myDecrement} >Increment</button>
      <button onClick={myReset} >Increment</button>
    </>
  )
}
