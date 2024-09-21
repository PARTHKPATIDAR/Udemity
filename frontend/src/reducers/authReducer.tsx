import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

const initialState = {
    token: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true, // Set isAuthenticated to true on successful login
                loading: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false, // Set isAuthenticated to false on  failure
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
