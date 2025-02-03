import React from 'react'
import todo_icon from '../assets/todo-icon.png'

const Todo = () => {
  return (
  <>
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-[2vw]'>
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt='todo list image' />
            <h1 className='text-3x1 font-semibold'>To-Do List</h1>  
        </div>
        <div>
            <input type="text" placeholder='Add a task' />
            <button>ADD +</button>
        </div>
    </div>

  </>
  )
}

export default Todo