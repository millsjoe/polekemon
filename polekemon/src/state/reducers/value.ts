import { ActionKeys } from "../actions";

const initialState = {
    value: 0,
};

const reducer = (state = initialState, action: { type: any; payload: number }) => {
    switch (action.type) {
        case ActionKeys.INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case ActionKeys.DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
