import { GET_USER_FAILURE, GET_USER_HISTORY, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    user: {},
    history: []
}

export const reducer = (state=initialState, {type, payload}) => {

    switch(type) {
        case GET_USER_REQUEST:
            return {...state, isLoading: true};
        case GET_USER_FAILURE:
            return {...state, isLoading: false, isError: true};
        case GET_USER_SUCCESS:
            return {...state, isLoading: false, isError: false, user: {...payload}};
        case GET_USER_HISTORY:
            return {...state, isLoading: false, isError: false, history: [...payload]};
        default:
            return {...state};
    }
}