import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import acountslice from './slices/acountSlice.js'
import bonusSlice from './slices/bonusSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rewadReducer from './reducers/reward.js'

const store = configureStore({
  reducer: {
    acount: acountslice,
    bonus: bonusSlice,
    reward: rewadReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
