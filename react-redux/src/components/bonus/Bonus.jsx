import React, { useState } from 'react'
import { incrementBonus } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
         const points = useSelector(state => state.bonus.points)
         const dispatch = useDispatch();
  return (
    <div>
       <h1>Bonus</h1>
       <h3>Total Points: {points}</h3>
       <button onClick={()=>{dispatch(incrementBonus())}}>increment</button>
    </div>
  )
}

export default Bonus