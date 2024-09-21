export const FETCH_ASSIGNMENTS_REQUEST = 'FETCH_ASSIGNMENTS_REQUEST';
export const FETCH_ASSIGNMENTS_SUCCESS = 'FETCH_ASSIGNMENTS_SUCCESS';
export const FETCH_ASSIGNMENTS_FAILURE = 'FETCH_ASSIGNMENTS_FAILURE';

// Action Creators
export const fetchAssignmentsRequest = () => ({
    type: FETCH_ASSIGNMENTS_REQUEST,
});

export const fetchAssignmentsSuccess = (assignments:object) => ({
    type: FETCH_ASSIGNMENTS_SUCCESS,
    payload: assignments,
});

export const fetchAssignmentsFailure = (error:object) => ({
    type: FETCH_ASSIGNMENTS_FAILURE,
    payload: error,
});
