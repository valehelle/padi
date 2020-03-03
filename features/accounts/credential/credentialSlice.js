import { createSlice, createSelector } from '@reduxjs/toolkit'
import { success } from 'redux-saga-requests';
import * as login from '../login'

export const credentialSelector = createSelector(
    state => state.credential,
    credential => credential
)
const initialState = {
    token: '',
}
const credentialSlice = createSlice({
    name: 'accounts/credential/credentialSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [success(login.loginRequestAction.type)]: (state, action) => {
            state.token = action.payload.data.token
        }
    }
})

export const { } = credentialSlice.actions

export default credentialSlice.reducer