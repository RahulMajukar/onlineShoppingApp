import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Login from './login/Login'

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClose = () => setIsLogin(false);
  const handleOpen = () => setIsLogin(true);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className='fr'>
            <div className='navBtn' onClick={handleOpen}>Login</div>
          </li>
          <li className='fr'>
            <div className='navBtn'>Sign-up</div>
          </li>
        </ul>
      </nav>

      <Login show={isLogin} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
