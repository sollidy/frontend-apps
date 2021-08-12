import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>Logout</MyButton>
            <div className="navbar__lists">
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
}

export default Navbar;
