import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../reducers/reward';

function Reward() {
      const points = useSelector(state=> state.reward.points);
      const dispatch = useDispatch();
  return (
    <div>
        <h2>Reward</h2>
        <h3>Points: {points}</h3>
        <button onClick={()=>{dispatch(increment())}}>increment+</button>
    </div>
  )
}

export default Reward;