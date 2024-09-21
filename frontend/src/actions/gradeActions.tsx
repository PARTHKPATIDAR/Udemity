export const FETCH_GRADES_REQUEST = 'FETCH_GRADES_REQUEST';
export const FETCH_GRADES_SUCCESS = 'FETCH_GRADES_SUCCESS';
export const FETCH_GRADES_FAILURE = 'FETCH_GRADES_FAILURE';


export const fetchGradesRequest = () => ({
    type: FETCH_GRADES_REQUEST,
});

export const fetchGradesSuccess = (grades) => ({
    type: FETCH_GRADES_SUCCESS,
    payload: grades,
});

export const fetchGradesFailure = (error) => ({
    type: FETCH_GRADES_FAILURE,
    payload: error,
});
