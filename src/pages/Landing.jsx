import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Landing () {
  return (
    <div className='w-screen h-screen  flex flex-col justify-center items-center gap-5'>
      <h1 className='text-7xl text-red-500 font-bold'>Bienvenido a Talent Place</h1>
      <div className='flex gap-x-4 text-white font-bold'>
        <NavLink className='p-4 bg-red-500 rounded-xl hover:bg-yellow-500' to='/login'>Iniciar sesión</NavLink>
        <NavLink className='p-4 bg-red-500 rounded-xl hover:bg-yellow-500' to='/signup'>Registrarse</NavLink>
      </div>
    </div>
  )
}

export default Landing
