import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import './Cart.css';

function Cart({ show, handleClose }) {
    const [cartData, setCartData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (show) {
            fetch('https://fakestoreapi.com/carts/1') // Fetching a specific cart
                .then(res => res.json())
                .then(json => {
                    setCartData(json.products);
                    const productFetches = json.products.map(product =>
                        fetch(`https://fakestoreapi.com/products/${product.productId}`)
                            .then(res => res.json())
                    );
                    return Promise.all(productFetches);
                })
                .then(productDetails => setProducts(productDetails))
                .catch(err => console.error('Error fetching cart data:', err));
        }
    }, [show]);

    const handleDelete = (productId) => {
        setCartData(cartData.filter(product => product.productId !== productId));
        setProducts(products.filter(product => product.id !== productId));
        // Update the cart on the server as well
    };

    const handleCheckout = () => {
        // Handle checkout logic here
        console.log('Checkout clicked');
    };

    return (
        <Offcanvas show={show} onHide={handleClose} backdrop="static" className="cart-offcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="cart-item d-flex justify-content-between align-items-center mb-3">
                            <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
                            <div className="flex-grow-1 ms-3">
                                <p className="mb-1">{product.title}</p>
                                <p className="mb-0">Quantity: {cartData.find(item => item.productId === product.id).quantity}</p>
                            </div>
                            <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                        </div>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </Offcanvas.Body>
            {products.length > 0 && (
                <div className="p-3 border-top">
                    <Button variant="success" onClick={handleCheckout} className="w-100">Checkout</Button>
                </div>
            )}
        </Offcanvas>
    );
}

export default Cart;
