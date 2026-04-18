import React from 'react'
import { Link } from 'react-router-dom'
export const Card = () => {
  return (
    <div className='w-full sm:w-auto flex justify-center'>
      <div className='bg-[#0E0E12] text-[#FF5E00] flex flex-col justify-center items-center rounded-4xl border-3 border-[#FF5E00] w-[90%] sm:w-[200px] h-[300px] p-2'>
        <img className='rounded-4xl w-full h-[180px] object-cover' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1e%2F68%2Fb3%2F1e68b3fa795abe7a3d4134da50790021.jpg&f=1&nofb=1&ipt=24569a7237e1d35a302af81a6aeffe59b15d7370e2dc9b1c14eab0fcc1f40764" alt="" />
        <h1 className='text-3xl mt-4'>TO DO LIST</h1>
      <Link to="/todo"><button className='bg-[#FF5E00] cursor-pointer text-[#0E0E12] rounded-4xl w-[180px] h-[47px]'>VIEW PROJECT</button></Link>
      </div>
    </div>
  )
}
export default Card
