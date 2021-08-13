import React from 'react';
import logo from '../img/logo1.png';
import './Header.css';


const Header = () => {
	return (
		<header className='center'>
		  <img className="logo" src={logo} alt='' />
		  
		</header>
	)
}

export default Header