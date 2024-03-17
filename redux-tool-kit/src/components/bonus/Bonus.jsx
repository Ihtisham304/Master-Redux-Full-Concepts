import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../slices/bonusSlice';

function Bonus() {
      const points = useSelector(state=> state.bonus.points);
      const dispatch = useDispatch();
  return (
    <div>
        <h2>Bonus</h2>
        <h3>Points: {points}</h3>
        <button onClick={()=>dispatch(increment())}>increment+</button>
    </div>
  )
}

export default Bonus