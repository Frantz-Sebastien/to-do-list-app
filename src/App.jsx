import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
 
  return (
    <div className='bg-stone-400 grid py-1 min-h-screen'>
      <Todo />
      
    </div>
  )
}

export default App
