import { combineReducers } from 'redux';
import assignmentReducer from './assignmentReducer';
import gradeReducer from './gradesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    assignments: assignmentReducer,
    grades: gradeReducer,
    auth: authReducer,
});

export default rootReducer;
