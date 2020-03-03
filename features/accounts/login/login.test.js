import { loginReducer, changeLoginAction } from './loginSlice'

describe('login reducer', () => {
    it('it should update username and password', () => {
        expect(loginReducer(undefined, changeLoginAction({ username: 'test', password: 'test' }))).toEqual(
            {
                username: 'test',
                password: 'test'
            }
        )
    })

})