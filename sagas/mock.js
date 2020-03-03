import * as requestMock from 'redux-saga-requests-mock';
import { login, register } from '../features/accounts'
export const createDriver = () => requestMock.createDriver(
    {
        [login.loginRequestAction.type]: requestConfig => {
            // mock normal response for id 1 and 404 error fot the rest
            return login.loginMock;

            throw { status: 404 };
        },
        [register.registerRequestAction.type]: requestConfig => {
            // mock normal response for id 1 and 404 error fot the rest
            return register.registerMock;

            throw { status: 404 };
        },
    }
)

