import React from 'react'
import Rigth from './Rigth'
import Left from './Left'
import About from './About'
export const Home = () => {
  return (
<div className='w-full'>
<div className='bg-[#0E0E12] text-[#FF5E00] flex flex-col lg:flex-row w-full lg:w-[208vh] max-w-[100vw] py-4 px-4 rounded-4xl h-auto min-h-full items-center lg:items-stretch'>
<Rigth/>
<Left/>

</div>
</div>
  )
}
export default Home
