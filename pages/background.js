import React from 'react'
import { useDispatch } from 'react-redux'
import { useRenderHook } from '../commons/customHook'
import { register } from '../features/accounts'
import { withAuthSync } from '../commons/auth'


const Background = () => {
    const dispatch = useDispatch()
    const buttonClick = () => {
        dispatch(register.registerRequestAction())
    }
    const options = {
        finalRender: () => dispatch(register.registerResetAction()),
    }

    useRenderHook(options)
    return (
        <div>
            <p onClick={buttonClick}>I AM BACKGROUND</p>
        </div>
    );
}
export default withAuthSync(Background)