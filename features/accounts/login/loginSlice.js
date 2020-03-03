import { createSlice, createSelector } from '@reduxjs/toolkit'

export const loginSelector = createSelector(
    state => state.login,
    login => login
)
const initialState = {
    username: '',
    password: ''
}
const loginSlice = createSlice({
    name: 'accounts/login/loginSlice',
    initialState: initialState,
    reducers: {
        changeLoginAction: {
            reducer(state, action) {
                const { username, password } = action.payload
                state.username = username
                state.password = password
            }
        },
        resetLoginAction: () => (initialState)
    }
})

const { changeLoginAction, resetLoginAction } = loginSlice.actions
const loginReducer = loginSlice.reducer

export { loginReducer, changeLoginAction, resetLoginAction }