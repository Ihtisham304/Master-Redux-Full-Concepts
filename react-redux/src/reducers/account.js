import { getUserAccFullfilled, getUserAccPend, getUserAccRejected,inc,dec,incByAmt} from "../actions";

export function acountsReducer(state = { amount: 4 }, action) {
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