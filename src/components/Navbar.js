import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Beach resort' />
          </Link>
          <button type='button' className='nav-btn'>
            <FaAlignRight className='nav-icon' onClick={handleToggle} />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
