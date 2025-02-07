import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo-icon.png'
import TodoItem from './TodoItem'

const Todo = () => {

    const [tasks, setTasks] = useState([])

    const inputRef = useRef()

    const handleAddTask = () => {
        const newTask = inputRef.current.value.trim()
        
        if(newTask === ""){
            return null
        }

        const newTaskObject = {
            id: Date.now(),
            taskInput: newTask,
            isComplete: false
        }

        setTasks([...tasks, newTaskObject])
        inputRef.current.value = ""

    }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  const toggle = (id) => {
    setTasks(tasks.map((task) => {
        if(task.id === id){
            return{...task, isComplete: !task.isComplete}
        } 
        return task
    }))

  }
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  }, [tasks])
    
  return (
  <>
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-[2vw]'>
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt='todo list image' />
            <h1 className='text-3x1 font-semibold'>To-Do List</h1>  
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add a task' />
            <button onClick={handleAddTask} className='border-none rounded-full bg-orange-600 w-32 h-15 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>

        <div>
            {tasks.map((task, index)=> {
                return<TodoItem toggle={toggle} key={index} text={task.taskInput} id={task.id} completedTask={task.isComplete} deleteTask={handleDeleteTask}/>
            })}
        </div>

    </div>
  </>
  )
}

export default Todo