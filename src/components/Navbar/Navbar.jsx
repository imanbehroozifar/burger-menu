import React from 'react';
import {Ul} from './NavbarElements.jsx'
const Navbar = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>Docs</li>
            <li>Github</li>
            <li>Gitlab</li>
        </Ul>
    );
};

export default Navbar;