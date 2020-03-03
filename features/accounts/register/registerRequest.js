import { createAction } from '@reduxjs/toolkit'
import { requestsReducer } from 'redux-saga-requests';
const path = 'accounts/authentication/register'

export const registerRequestAction = createAction(`${path}/registerRequest`, function prepare() {
    return {
        payload: {
            request: { url: '/register' },
        }

    }
})
export const registerResetAction = createAction(`${path}/registerRequest_RESET`)

export const registerInitialState = {
    albumId: null,
    id: null,
    title: '',
}

export const registerMock = {
    data: {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
    },
};


export const registerRequestReducer = requestsReducer({ actionType: registerRequestAction.type, getDefaultData: () => registerInitialState, resetOn: [registerResetAction.type] });
