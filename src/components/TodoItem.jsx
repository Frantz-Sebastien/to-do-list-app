import React from 'react'
import empty_square from '../assets/empty-square.png'
import check_mark from '../assets/check-mark.png'
import trash from '../assets/trash.png'

const TodoItem = ({text, id, completedTask, deleteTask, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={completedTask ? check_mark : empty_square} alt="image of a small empty square" className='w-7 h-7' />
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>

        <img src={trash} alt="image of a small trash can" className='w-4' onClick={()=>{deleteTask(id)}} />
    </div>
  )
}

export default TodoItem