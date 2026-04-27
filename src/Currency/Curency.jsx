import React, { useState } from 'react'

const Curency = () => {
    const [usdAmount, setUsdAmount] = useState("")
    const [inrAmount, setInrAmount] = useState("")
    
    // Constant exchange rate for demonstration
    const EXCHANGE_RATE = 83.5 
    
    const convertToInr = () => {
        if (!usdAmount) return;
        const result = (usdAmount) * EXCHANGE_RATE;
        setInrAmount(result);
    }

    const convertToUsd = () => {
        if (!inrAmount) return;
        const result = parseFloat(inrAmount) / EXCHANGE_RATE;
        setUsdAmount(result);
    }

    const clear = () => {
        setUsdAmount("");
        setInrAmount("");
    }

  return (
    <div className='bg-black flex justify-center w-full min-h-screen items-center p-4'>
      <div className='bg-[#0E0E12] border-4 border-[#FF5E00] flex flex-col w-[90%] max-w-[500px] p-6 sm:p-10 rounded-[2rem] shadow-2xl'>
          <h1 className='text-3xl text-center text-[#FF5E00] font-bold mb-8 uppercase'>Currency Converter</h1>
          
          <div className='flex flex-col gap-6'>
              {/* USD Input Section */}
              <div className='flex flex-col gap-2'>
                  <label className='text-[#FF5E00] font-semibold tracking-wider text-sm'>USD AMOUNT</label>
                  <div className='flex gap-2 w-full'>
                      <input 
                          type="number" 
                          value={usdAmount} 
                          onChange={(e)=>setUsdAmount(e.target.value)} 
                          placeholder='Enter USD...' 
                          className='flex-1 h-14 rounded-2xl border-2 border-[#FF5E00]/50 focus:border-[#FF5E00] bg-black text-white px-4 focus:outline-none transition-colors' 
                      />
                      <button onClick={convertToInr} className='bg-[#FF5E00] text-[#0E0E12] font-bold rounded-2xl px-6 hover:opacity-80 transition-opacity cursor-pointer'>To INR</button>
                  </div>
              </div>
              
              {/* Divider Icon */}
              <div className='flex justify-center'>
                 <svg className='w-8 h-8 text-[#FF5E00] opacity-50' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                 </svg>
              </div>

              {/* INR Input Section */}
              <div className='flex flex-col gap-2'>
                  <label className='text-[#FF5E00] font-semibold tracking-wider text-sm'>INR AMOUNT</label>
                  <div className='flex gap-2 w-full'>
                      <input 
                          type="number" 
                          value={inrAmount} 
                          onChange={(e)=>setInrAmount(e.target.value)} 
                          placeholder='Enter INR...' 
                          className='flex-1 h-14 rounded-2xl border-2 border-[#FF5E00]/50 focus:border-[#FF5E00] bg-black text-white px-4 focus:outline-none transition-colors' 
                      />
                      <button onClick={convertToUsd} className='bg-[#FF5E00] text-[#0E0E12] font-bold rounded-2xl px-6 hover:opacity-80 transition-opacity cursor-pointer'>To USD</button>
                  </div>
              </div>
          </div>
          
          
          <button onClick={clear} className='mt-8 w-full h-12 bg-transparent border-2 border-gray-600 text-gray-400 font-bold rounded-full hover:bg-gray-800 transition-colors cursor-pointer'>CLEAR ALL</button>
      </div>
    </div>
  )
}

export default Curency