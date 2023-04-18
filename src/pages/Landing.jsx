import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Landing () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Bienvenido a Talent Place</h1>
      <p>Clicks: {count}</p>
      <button className='p-1 bg-red-600 rounded-xl' onClick={() => setCount(count + 1)}>Contador</button>
      <NavLink to='/register'>Registrarse nav link</NavLink>
    </div>
  )
}

export default Landing
