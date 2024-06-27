import React from 'react'
import './Categories.css'
function Categories() {
    const category = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]
    return (
        <div>
            <h2 className='text-center'>Categories</h2>
            <div className="categories">

                {category.map((item, index) => (
                    <div className="category" key={index}>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="images" />
                        <div>
                            <h3>{item}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories