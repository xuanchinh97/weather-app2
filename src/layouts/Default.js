import React from 'react'
import Footer from '../parts/Footer'
import Header from '../parts/Header'

function Default({children}) {
  return (
    <div className='page-container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Default