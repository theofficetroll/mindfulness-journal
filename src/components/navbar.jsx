import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <Link className='navbar' to='/'>
        <span className='home'>
          Home
        </span>
      </Link>
      <Link className='rapid-log' to='/rapid'>
        <span className='rapid'>
          Rapid Log
        </span>
      </Link>
    </div>
  )
}

export default Navbar;
