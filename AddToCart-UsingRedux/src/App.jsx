import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='w-full min-h-screen  bg-gray-100 text-white text-lg' >
     <Header/>
   <div className='w-full min-h-screen '>
   <Outlet />
   </div>
    </div>
  )
}

export default App