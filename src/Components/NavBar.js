import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/NavBar.css';

function NavBar() {

    return (
        <>
            <ul className='Navbar' id='NavBar'>
                <li id='link'>
                    <NavLink exact to='/'>Gallery</NavLink>
                </li>
                <li id='link'>
                    <NavLink exact to='/Contact'>Contact Info</NavLink>
                </li>
            </ul>
        </>
    )
}


export default NavBar;