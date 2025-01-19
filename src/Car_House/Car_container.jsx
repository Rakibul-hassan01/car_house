
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Car_Lists from './Car_Lists'
const cars = [   
  { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
  { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
  { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
  { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
]

const Car_container = () => {
  const [searchTerms,setSearchTerms] = useState('');
  const [isPremium,setIsPremium] = useState(false);
  return (
    <div className='p-5 m-auto'>
      <Header text={"Car House"}/>
      <Search searchTerms={searchTerms} setSearchTerms={setSearchTerms} isPremium={isPremium} setIsPremium={setIsPremium}/>
      <Car_Lists cars={cars} searchTerms={searchTerms} isPremium={isPremium} />
    </div>
  )
}

export default Car_container
