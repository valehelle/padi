import MaterialButton from '@material-ui/core/Button'



const Button = ({ children, ...props }) => {
    return (
        <MaterialButton color='primary' {...props} variant="contained">{children}</MaterialButton>
    )
}

export default Button