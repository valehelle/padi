import { createSlice, createSelector } from '@reduxjs/toolkit'

export const registerSelector = createSelector(
    state => state.register,
    register => register
)
const registerSlice = createSlice({
    name: 'accounts/register/registerSlice',
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        changeRegisterData: {
            reducer(state, action) {
                const { username, password } = action.payload
                state.username = username
                state.password = password
            }
        },
    }
})

export const { changeRegisterData } = registerSlice.actions

export default registerSlice.reducer