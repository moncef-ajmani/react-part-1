import React, { useState } from 'react'
import Header from './components/Header/Header'
import ProductsList from './components/Products/ProductsList'

function App() {
  
  return (
    <>
      <Header brand="Devcef"/>
      <div className='container'>
        <ProductsList />
      </div>
      
    </>
      
  )
}

export default App
