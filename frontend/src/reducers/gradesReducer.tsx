import { FETCH_GRADES_SUCCESS, FETCH_GRADES_FAILURE } from '../actions';

const initialState = {
    grades: [],
    error: null,
};

const gradesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GRADES_SUCCESS:
            return {
                ...state,
                grades: action.payload,
            };
        case FETCH_GRADES_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default gradesReducer;