import React, { use, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [list, setList] = useState([])
    const addTodo = () => {
        setList([...list, todo])
        setTodo("")
    }
    const deleteTodo = (index) => {
        setList(list.filter((_, i) => i !== index))
    }
    
    return (
        <div>
            <div className='bg-[#0A1024] flex justify-center  lg:flex-row w-full lg:w-[208vh] max-w-[100vw] py-4 px-4 rounded-4xl h-screen items-center lg:items-stretch'>
                <div className='bg-[#0066FF] text-[#0A1024]  rounded-4xl w-[510px] h-[510px]'>
                    <h1 className='text-5xl text-center text-[#0A1024] mt-4'>TODO LIST</h1>
                    <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Add a todo' className='w-100 m-1 h-12 rounded-4xl border-3 border-white' />
                    <button onClick={addTodo} className='bg-gray-800 cursor-pointer text-white rounded-4xl w-[100px] h-[47px]'>ADD</button>
                   {list.map((item, index) => (
                    <div className='flex items-center'>
                    <div key={index} className='w-full h-12 bg-[#0A1024] text-[#0A1024] rounded-4xl mt-2 flex items-center'>
                        <h1 className='text-2xl m-2 text-center text-white'>{item}</h1>
                    </div>
                    <button onClick={() => deleteTodo(index)} className='bg-gray-800 cursor-pointer text-white rounded-4xl w-[100px] h-[47px]'>DELETE</button>
                    </div>
                    
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Todo