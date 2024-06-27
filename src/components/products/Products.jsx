import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section>
      <h2 className='text-center'>Products</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-category">Category: {product.category}</div>
            <div className="product-rating">Rating: {product.rating.rate}/5 ({product.rating.count} reviews)</div>
            <div className="product-price-add-to-cart">
              <div className="product-price">${product.price}</div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;





export const ProductsWithSearch = () => {
  const [products, setProducts] = useState([]);
  // add for search
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        // Add for search
        setFilteredProducts(data);
      });
  }, []);

  // add for search
  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <section>
      <h2 className='text-center'>Products</h2>
      {/* add search container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="products-container">
        {/* To add search */}
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            {/* to add link */}
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-title" title={product.title}>{product.title}</div>
              <div className="product-category">Category: {product.category}</div>
              <div className="product-rating">Rating: {product.rating.rate}/5 ({product.rating.count} reviews)</div>
              <div className="product-price-add-to-cart">
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};