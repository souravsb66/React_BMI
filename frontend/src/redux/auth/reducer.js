import { AUTH_REQUEST, AUTH_REQUEST_FAILURE, AUTH_REQUEST_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    isAuth: true,
    email: ""
}

export const reducer = (state=initState, {type, payload}) => {

    switch(type) {
        case AUTH_REQUEST:
            return {...state, isLoading: true};
        case AUTH_REQUEST_FAILURE:
            return {...state, isError: true, isLoading: false};
        case AUTH_REQUEST_SUCCESS:
            return {...state, isError: false, isLoading: false, isAuth:true, email: payload};
        default: 
            return {...state};
    }
}