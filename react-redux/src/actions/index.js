import axios from 'axios'

export const inc = 'acounts/increment';
export const dec = 'acounts/decrement';
export const incByAmt = 'acounts/incrementByAmount';
export const getUserAccPend = 'user/getuser/pending';
export const getUserAccRejected = 'user/getuser/rejected';
export const getUserAccFullfilled = 'user/getuser/fullfilled';
export const incBonus = 'bonus/increment'


export function getUserAccount(id) {
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

export function getAccFullFilled(value) {
    return { type: getUserAccFullfilled, payload: value }
}
export function getAccPending() {
    return { type: getUserAccPend}
}
export function getAccRejected(error) {
    return { type: getUserAccRejected, error: error }
}


export function increment() {
    return { type: inc };
}
export function incrementBonus() {
    return { type: incBonus };
}
export function decrement() {
    return { type: dec };
}
export function incrementByAmount(value) {
    return { type: incByAmt, payload: value };
}