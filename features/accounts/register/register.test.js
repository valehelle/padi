import registerReducer, { changeRegisterData } from './registerSlice'

describe('register reducer', () => {
    it('it should update username and password', () => {
        expect(registerReducer(undefined, changeRegisterData({ username: 'test', password: 'test' }))).toEqual(
            {
                username: 'test',
                password: 'test'
            }
        )
    })

})