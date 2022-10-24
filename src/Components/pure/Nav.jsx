import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../resources/Logo Amazing Events.png'
import '../../Styles/nav.css'
import NavDropdown from '../container/NavDropdown';

const Nav = () => {
    return (

        <div className='container mx-auto sticky top-0 shadow-personalizada'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <NavLink end to={'/'}>
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Amazing Events Logo"
                    />
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink end to={'/'}>Home</NavLink>
                    <NavDropdown path={'/events'} />
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/stats'}>Stats</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Nav;
