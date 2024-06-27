import React from 'react'
import NavBar from '../components/NavBar'
import Products, { ProductsWithSearch } from '../components/products/Products'
import Categories from '../components/categories/Categories'


export const Home = () => {
  return (
    <>
      <Categories />
      <ProductsWithSearch />
    </>
  )
}
