import { combineReducers } from 'redux'
import { login, register, credential } from '../features/accounts'
export default combineReducers({
    registerRequest: register.registerRequestReducer,
    register: register.registerReducer,
    loginRequest: login.loginRequestReducer,
    login: login.loginReducer,
    credential: credential.credentialReducer,

})