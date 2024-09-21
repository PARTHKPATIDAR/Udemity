import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchAssignments } from '../api/api';
import {
    FETCH_ASSIGNMENTS_REQUEST,
    fetchAssignmentsSuccess,
    fetchAssignmentsFailure,
} from '../actions/assignmentActions';

function* fetchAssignmentsSaga() {
    try {
        const response = yield call(fetchAssignments);
        yield put(fetchAssignmentsSuccess(response));
    } catch (error) {
        yield put(fetchAssignmentsFailure(error.message));
    }
}

export function* watchFetchAssignments() {
    yield takeEvery(FETCH_ASSIGNMENTS_REQUEST, fetchAssignmentsSaga);
}
