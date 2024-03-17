import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../../slices/acountSlice';


function Acount() {
    const [value,setValue] = useState(0);
    const amount = useSelector(state=> state.acount.amount);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Acount</h2>
        <h3>Amount: {amount}</h3>
        <button onClick={()=>dispatch(increment())}>increment+</button>
        <button onClick={()=>dispatch(decrement())}>decrement-</button>
        <input type='text' onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>{dispatch(incrementByAmount(value))}}>incrementAmount {value}</button>
    </div>
  )
}

export default Acount