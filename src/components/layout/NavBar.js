import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = ({icon, title}) => {
  
    return (<nav className='navbar bg-primary'>
        <h1>
        <i class= {icon}></i> 
            {title}</h1>
            <ul>
                <li>
           <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
    </nav>);
  
}

export default NavBar;
