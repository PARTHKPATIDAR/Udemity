// src/sagas/index.js

import { all } from 'redux-saga/effects';
import { watchFetchAssignments } from './assignmentSaga';
import { watchFetchGrades } from './gradeSaga';
import authSaga from './authSaga'; // Assuming you already have authSaga

export default function* rootSaga() {
    yield all([
        watchFetchAssignments(),
        watchFetchGrades(),
        authSaga(), // If you have an authSaga
    ]);
}
