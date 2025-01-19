import React from 'react'

const Search = ({searchTerms,setSearchTerms,isPremium ,setIsPremium}) => {
  return (
    <div className='w-full flex p-5 items-center'>
      <input value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} className='lg:w-[400px] p-2 shadow-md mx-5 border-2 border-black' type="text" placeholder='Search Here...' />
      <div>
        <input className='' onChange={(e) =>setIsPremium(e.target.checked)} type="checkbox" name="primeum" id="" />
        <span>Show Priemium Only</span>
      </div>
    </div>
  )
}

export default Search
