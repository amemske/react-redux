import axios from 'axios'

import {
    FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE
} from './userTypes';

//action creators
const fetchUsersRequest = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//special action creator will return a function
export const fetchUsers = () =>{
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data //array of users
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(FETCH_USERS_FAILURE(errorMsg))
        })
    }
}

