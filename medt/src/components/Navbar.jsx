import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbarr'>
        <div className='rg'>
          <Link to='/'><img src="/logo.png" alt="logo" /></Link>
        </div>
    </div>
  )
}

export default Navbar