import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import Login from './login/Login';
const NavBar = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleClose = () => {
        setIsLogin(false);
    };

    const handleOpen = () => {
        setIsLogin(true);
    };

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

            <Modal isOpen={isLogin} onClose={handleClose}>
               
                    <Login/>
            
            </Modal>

        </div>


    )
}

export default NavBar


// Modal.js
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        //   height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
          style={{
            background: "white",
            width: "400px", // Adjust size as needed
            padding: "20px",
            borderRadius: "10px",
            
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </div>
      </div>
    );
  };

