
import React from 'react'
import Car_Info from './Car_Info'


const Car_Lists = ({cars,searchTerms,isPremium}) => {
  let rows = [];
  let filteredCars = [...cars];
  if(isPremium) {
    filteredCars = cars.filter(car => car.isPremium);
  }else {
    filteredCars = cars
  }
  filteredCars.forEach(car => {
    if(car.title.toLowerCase().indexOf(searchTerms.toLowerCase()) === -1) {
      return;
    }
    rows.push(<Car_Info key={car.id} title={car.title} brand={car.brand} year={car.year} price={car.price} isPremium={car.isPremium} />)
  });
  return (
    <div className='m-5 grid grid-cols-3'>
      {
       rows
      }
    </div>
  )
}

export default Car_Lists
