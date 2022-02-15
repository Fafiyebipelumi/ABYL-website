import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaGripfire, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>ALBY<FaGripfire /></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes style={{ color: '#fff' }} /> : <FaBars style={{ color: '#fff' }} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item-movies'>
                            <Link to='/movies' className='nav-links-movies' onClick={closeMobileMenu}>MOVIES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/log-in' className='nav-links' onClick={closeMobileMenu}>Log In</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}


export default Navbar;