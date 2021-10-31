const INCREASE_DATA = "INCREASE_DATA"
const DECREASE_DATA = "DECREASE_DATA"

export const increament = (amount) => {
    return {
        type: INCREASE_DATA,
        payload: amount
    };
}


export const decreament = (amount) => {
    return {
        type: DECREASE_DATA,
        payload: amount
    };
}


const initialState = {
    data: 42
}


export const testReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREASE_DATA:
            return {
                ...state,
                data: state.data + payload,
            };

        case DECREASE_DATA:
            return {
                ...state,
                data: state.data - payload,
            };

        default:
            return state
    }
}