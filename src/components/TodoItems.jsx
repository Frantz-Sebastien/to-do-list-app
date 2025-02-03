import React from 'react'
// import empty_square from '../assets/empty_square.png'
import check_mark from '../assets/check-mark.png'
import trash from '../assets/trash.png'

const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={check_mark} alt="" className='w-7 h-7' />
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>

        <img src={trash} alt="" className='w-4' />
    </div>
  )
}

export default TodoItems