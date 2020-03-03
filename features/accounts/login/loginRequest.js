import { createAction } from '@reduxjs/toolkit'
import { requestsReducer } from 'redux-saga-requests';
import { loginSelector } from './loginSlice'
const path = 'accounts/authentication/login'

export const loginRequestAction = createAction(`${path}/loginRequest`, function prepare() {
    return {
        payload: (state) => {
            const param = loginSelector(state)
            return {
                payload: {
                    request: { url: '/books' },
                    param,
                }
            }
        }
    }
})
export const loginResetAction = createAction(`${path}/loginRequest_RESET`)

export const loginInitialState = {
    token: null,
}

export const loginMock = {
    data: {
        token: 'sdfsadfasdfsfd',
    },
};

export const loginRequestReducer = requestsReducer({ actionType: loginRequestAction.type, getDefaultData: () => loginInitialState, resetOn: [loginResetAction.type] });
