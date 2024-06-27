import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
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
                <>
                    <h1>Login</h1>
                    <h3>A computer science portal!</h3>
                </>
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
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
            </div>
        </div>
    );
};

