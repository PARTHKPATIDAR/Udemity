import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';

function* loginSaga(action) {
    try {
        const response = yield call(axios.post, 'http://127.0.0.1:8000/api/token/', action.payload);
        const { access, refresh } = response.data;
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh); // Storing refresh token as well
        yield put(loginSuccess({ access, refresh }));
    } catch (error) {
        yield put(loginFailure(error.response ? error.response.data : 'Login failed'));
    }
}

export default function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}
