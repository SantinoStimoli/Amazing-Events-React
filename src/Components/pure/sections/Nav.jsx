import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (

        <div className='container mx-auto'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink end to={'/'}>Home</NavLink>
                    <NavLink to={'/upcoming-events'}>Upcoming Events</NavLink>
                    <NavLink to={'/past-events'}>Past Events</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/stats'}>Stats</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Nav;
