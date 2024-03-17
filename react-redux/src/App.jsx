import { useState } from 'react'
import './App.css'
import Accounts from './components/acounts/Accounts'
import Bonus from './components/bonus/Bonus'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccount, getAccFullFilled, getAccPending, getUserAccRejected } from './actions'

function App() {
  const amount = useSelector(state => state.acount.amount);
  const bonus = useSelector(state => state.bonus.points);
  const acount = useSelector(state => state.acount);
  return (
    <>
      {

        acount.pending ? <p>loading....</p> : acount.error ? <p>error</p> : <h1>Current Account: {amount}</h1>
      }
      <h1>Total Bonus: {bonus}</h1>
      <div>
        <Accounts />
        <Bonus />
      </div>
    </>
  )
}

export default App
