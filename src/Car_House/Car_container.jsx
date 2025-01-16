
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Header'
import Search from './Search'
import Car_Lists from './Car_Lists'

const Car_container = () => {
  return (
    <div className='p-5 m-auto'>
      <Header text={"Car House"}/>
      <Search />
      <Car_Lists />
    </div>
  )
}

export default Car_container
