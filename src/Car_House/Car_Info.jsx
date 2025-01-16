import React from 'react'

const Car_Info = ({title,brand,year,price,isPremium}) => {
  return (
    <div className='m-5 p-2 border shadow-md'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p className='text-sm text-gray-600 p-1'>Brand: {brand}</p>
      <p className='text-sm text-gray-600 p-1'>Year: {year}</p>
      <p className='text-sm text-gray-600 p-1'>Price: {price}</p>
      <p className='text-sm text-gray-600 p-1'>isPremium: {isPremium ? "True":"False"}</p>
    </div>
  )
}

export default Car_Info
