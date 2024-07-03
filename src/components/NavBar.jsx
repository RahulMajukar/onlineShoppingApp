import React, { useContext, useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Login from './login/Login'
import { UserContext } from '../context/UserContext';
import { RiShoppingCart2Line } from "react-icons/ri";
import { Badge } from 'react-bootstrap';
import Cart from './cart/Cart';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClose = () => setIsLogin(false);
  const handleOpen = () => setIsLogin(true);

  // for cart
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const { user, logout } = useContext(UserContext);

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
          {user ? (
            <div>
              <li className='fr'>
                <div className='navBtn' onClick={logout}>Logout</div>
              </li>

              {/* for cart  */}
              <li className='fr' >
                <div className='navBtn' onClick={handleShowCart}>
                  <RiShoppingCart2Line />
                  <Badge bg="info">9</Badge>
                </div>
              </li>

            </div>
          ) : (
            <div>
              <li className='fr'>
                <div className='navBtn' onClick={handleOpen}>Login</div>
              </li>
              <li className='fr'>
                <div className='navBtn'>Sign-up</div>
              </li>
            </div>
          )}

        </ul>
      </nav>

      <Login show={isLogin} handleClose={handleClose} />

      {/* for cart */}
      <Cart show={showCart} handleClose={handleCloseCart} />
    </div>
  );
};

export default NavBar;
