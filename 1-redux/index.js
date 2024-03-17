import { applyMiddleware, combineReducers, createStore } from 'redux'
import axios from 'axios';
import { thunk } from 'redux-thunk';

const init = 'init';
const inc = 'acounts/increment';
const dec = 'acounts/decrement';
const incByAmt = 'acounts/incrementByAmount';
const getUserAccPend = 'user/getuser/pending';
const getUserAccRejected = 'user/getuser/rejected';
const getUserAccFullfilled = 'user/getuser/fullfilled';
const incBonus = 'bonus/increment'


const store = createStore(combineReducers({
    acount: acountsReducer,
    bonus: bonusReducer
}), applyMiddleware(thunk));

// const history = [];

function acountsReducer(state = { amount: 4 }, action) {
    switch (action.type) {
        case getUserAccFullfilled:
            return { amount: action.payload, pending: false }
        case getUserAccPend:
            return {...state,pending: true}
        case getUserAccRejected:
            return { ...state, error: action.error, pending: false }
        case inc:
            return { amount: state.amount + 1 };
        case dec:
            return { amount: state.amount - 1 };
        case incByAmt:
            return { amount: state.amount + action.payload };
        default:
            return state;

    }
}
function bonusReducer(state = { points: 6 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case incByAmt:
            if (action.payload >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}

function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccPending())
            const { data } = await axios.get(`http://localhost:3000/acounts/${id}`)
            dispatch(getAccFullFilled(data.amount))

        } catch (error) {
            dispatch(getAccRejected(error.message))
        }

    }
}

function getAccFullFilled(value) {
    return { type: getUserAccFullfilled, payload: value }
}
function getAccPending() {
    return { type: getUserAccPend}
}
function getAccRejected(error) {
    return { type: getUserAccRejected, error: error }
}


function increment() {
    return { type: inc };
}
function incrementBonus() {
    return { type: incBonus };
}
function decrement() {
    return { type: dec };
}
function incrementByAmount(value) {
    return { type: incByAmt, payload: value };
}
store.subscribe(() => {
    // history.push(store.getState());
    // console.log(history);
    console.log(store.getState());
})

setInterval(() => {
    store.dispatch(getUserAccount(2));
}, 1000);

