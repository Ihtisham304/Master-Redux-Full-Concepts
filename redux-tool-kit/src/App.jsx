import { useState } from 'react'
import Acount from './components/acounts/Acount'
import Bonus from './components/bonus/Bonus'
import { useSelector } from 'react-redux'
import Reward from './components/reward/reward'

function App() {
  const [count, setCount] = useState(0)
  
  const amount = useSelector(state => state.acount.amount)
  const points = useSelector(state=> state.bonus.points);
  return (
    <>
      <h2>Amount: {amount}</h2>
      <h2>Bonus: {points}</h2>
      <Acount />
      <Bonus />
      <Reward/>
    </>
  )
}

export default App
