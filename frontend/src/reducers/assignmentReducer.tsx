import { FETCH_ASSIGNMENTS_REQUEST,FETCH_ASSIGNMENTS_SUCCESS, FETCH_ASSIGNMENTS_FAILURE } from '../actions';

const initialState = {
    assignments: [],
    loading:false,
    error: null,
};

const assignmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ASSIGNMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_ASSIGNMENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                assignments: action.payload,
            };
        case FETCH_ASSIGNMENTS_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default assignmentsReducer;