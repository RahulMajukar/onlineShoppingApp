import React from 'react'
import './Products.css'
const Products = () => {
  return (
    <div>
      <div className="card">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Avatar" className="prod-img"/>
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
      </div>
    </div>
  )
}

export default Products