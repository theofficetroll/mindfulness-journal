import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// TODO
// Add spacing between entries

const Navbar = () => {
  return (
    <div className='container'>
      <Link className='navbar' to='/'>
        <span className='home link'>
          Home
        </span>
      </Link>
      <Link className='navbar' to='/rapid'>
        <span className='rapid link'>
          Rapid Log
        </span>
      </Link>
      <Link className='navbar' to='/daily'>
        <span className='daily link'>
          Daily Log
        </span>
      </Link>
      <Link className='navbar' to='/migration'>
        <span className='migration link'>
          Migration
        </span>
      </Link>
    </div>
  )
}

export default Navbar;
