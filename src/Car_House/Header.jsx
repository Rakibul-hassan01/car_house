import React from 'react'

const Header = ({text}) => {
return (
    <div className='p-5 '>
        <h1 className='text-4xl font-bold my-2'>{text ? text : "Header Text"}</h1>
    </div>
)
}

export default Header
 