import { GET_USER_FAILURE, GET_USER_HISTORY, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

export const getUserRequest = () => {
    return ({type: GET_USER_REQUEST})
}

export const getUserFailure = () => {
    return ({type: GET_USER_FAILURE});
}

export const getUserSuccess = (payload) => {
    return ({type: GET_USER_SUCCESS, payload})
}

export const getUserHistory = (payload) => {
    return ({type: GET_USER_HISTORY, payload})
}