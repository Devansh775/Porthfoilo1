import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
export const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center'>
         <div className='flex justify-center rounded-full w-[95vw] md:w-[95vw] h-16  items-center bg-[#FF5E00] text-[#0E0E12] p-4'>
             <nav>
                 <ul className='flex text-2xl font-bold gap-4'>
                     <Link to="/"><li>Home</li></Link>
                     <Link to="/about"><li>About</li></Link>
                 </ul>
             </nav>
         </div>
      
         
         </div>
    </div>
  )
}
export default Navbar