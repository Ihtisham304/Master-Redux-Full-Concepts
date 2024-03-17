import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { acountsReducer } from './reducers/account.js';
import { bonusReducer } from './reducers/bonus.js'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

const store = createStore(combineReducers({
  acount: acountsReducer,
  bonus: bonusReducer
}), applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
