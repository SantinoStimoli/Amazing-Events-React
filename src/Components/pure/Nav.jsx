import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../resources/Logo Amazing Events.png'
import '../../Styles/nav.css'
import NavDropdown from '../container/NavDropdown';

const Nav = () => {

    const domain = '/Amazing-Events-React'

    return (
        <div className='container mx-auto sticky top-0 shadow-personalizada z-10'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <NavLink end to={domain + '/'}>
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Amazing Events Logo"
                    />
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink end to={domain + '/'}>Home</NavLink>
                    <NavDropdown path={domain + '/events'} />
                    <NavLink to={domain + '/contact'}>Contact</NavLink>
                    <NavLink to={domain + '/stats'}>Stats</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Nav;
