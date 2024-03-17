import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount,getUserAccount } from '../../actions';

function Accounts() {

  const [value, setValue] = useState(0);
  const amount = useSelector(state=> state.acount.amount)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Account</h1>
      <h3>Amount: $ {amount}</h3>
      <button onClick={()=>{dispatch(increment())}}>increment+</button>
      <button onClick={()=>{dispatch(decrement())}}>decrement-</button>
      <input type="text" onChange={(e)=> {setValue(+e.target.value)}}/>
      <button onClick={()=>{dispatch(incrementByAmount(value))}}>increment by {value}</button>
      <button onClick={()=>{dispatch(getUserAccount(1))}}>init User</button>
    </div>
  )
}

export default Accounts