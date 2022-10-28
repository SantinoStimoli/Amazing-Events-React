import { Dropdown } from 'flowbite-react';
import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavDropdown = ({ path }) => {

    const domain = '/Amazing-Events-React'

    let actualPath = useLocation().pathname
    let dropdownRef = useRef('')

    return (
        <div ref={dropdownRef} className={actualPath.includes(path) ? 'active' : undefined}>
            <Dropdown
                placement='bottom'
                label="Events"
                inline={true}
            >
                <NavLink end to={domain + '/events'}>
                    <Dropdown.Item>All Events</Dropdown.Item>
                </NavLink>
                <NavLink to={domain + '/events/upcoming'}>
                    <Dropdown.Item>Upcoming Events</Dropdown.Item>
                </NavLink>

                <NavLink to={domain + '/events/past'}>
                    <Dropdown.Item>Past Events</Dropdown.Item>
                </NavLink>

            </Dropdown>
        </div>
    );
}

export default NavDropdown;
