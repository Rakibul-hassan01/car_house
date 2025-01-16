import React from 'react'

const Search = () => {
  return (
    <div className='w-full flex p-5 items-center'>
      <input className='lg:w-[400px] p-2 shadow-md mx-5 border-2 border-black' type="text" placeholder='Search Here...' />
      <div>
        <input className='' type="checkbox" name="primeum" id="" />
        <span>Show Priemium Only</span>
      </div>
    </div>
  )
}

export default Search
