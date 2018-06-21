import axios from 'axios';
import * as types from './types';

export const bitbucket_token = (code, success, fail) => async dispatch => {
    const req = axios.get('/bitbucket/getToken?code=' + code);
    req.cb = {
        success: success,
        fail: fail
    };
    dispatch({ type: types.BITBUCKET_TOKEN, payload: req });
};