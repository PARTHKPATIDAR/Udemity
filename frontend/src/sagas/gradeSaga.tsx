// src/sagas/gradeSagas.js

import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchGrades } from '../api/api';
import {
    FETCH_GRADES_REQUEST,
    fetchGradesSuccess,
    fetchGradesFailure,
} from '../actions/gradeActions';

function* fetchGradesSaga() {
    try {
        const response = yield call(fetchGrades);
        yield put(fetchGradesSuccess(response.data));
    } catch (error) {
        yield put(fetchGradesFailure(error.message));
    }
}

export function* watchFetchGrades() {
    yield takeEvery(FETCH_GRADES_REQUEST, fetchGradesSaga);
}
