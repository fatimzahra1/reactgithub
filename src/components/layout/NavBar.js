import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = ({icon, title}) => {
  
    return (<nav className='navbar bg-primary'>
        <h1>
        <i class= {icon}></i> 
            {title}</h1>
    </nav>);
  
}

export default NavBar;
