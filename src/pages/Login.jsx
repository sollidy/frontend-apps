import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {

    const { setIsAuth } = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth' , 'true')
    }

    return (
        <div className='item__margin__top mobileMarginApp'>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Enter login' />
                <MyInput type='password' placeholder='Enter password' />
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
}

export default Login;
