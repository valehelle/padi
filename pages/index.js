import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { login } from '../features/accounts'
import { useRenderHook } from '../commons/customHook'
import TextField from '@material-ui/core/TextField';
export default function Index() {

    const loginRequestData = useSelector(state => state.loginRequest.data)
    const loginState = useSelector(login.loginSelector)
    const router = useRouter()
    const dispatch = useDispatch()
    const buttonClick = () => {
        dispatch(login.loginRequestAction())
    }
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)

    }
    const options = {
        finalRender: () => {
            dispatch(login.resetLoginAction());
            dispatch(login.loginResetAction())
        },
        data: loginRequestData,
        changedData: (data) => data.token,
        onDataChange: () => router.push('/background')
    }

    useRenderHook(options)

    const updateData = (event) => {
        dispatch(login.changeLoginAction({
            ...loginState,
            [event.target.id]: event.target.value
        }))
    }
    return (
        <div>
            <a href={'/background'} onClick={handleClick}>
                HELO THIS IS A DEVELOP TESTINGGG
            </a>
            <p onClick={buttonClick}>CLIssCK ME NOT</p>
            <h1>The value of customKey is: {process.env.mock ? 'true' : 'false'}</h1>
            <h1>The value of baseURL is: {process.env.BASE_URL}</h1>
            <form noValidate autoComplete="off">
                <TextField id="username" label="Filled" variant="filled" value={loginState.username} onChange={updateData} />
                <TextField id="password" label="Filled" variant="filled" value={loginState.password} onChange={updateData} />
            </form>
        </div>
    );
}

