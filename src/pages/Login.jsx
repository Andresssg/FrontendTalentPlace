import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login () {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const checkFields = () => {
    if (!email && !password) { return window.alert('Campos incompletos') }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    checkFields()
    const form = new FormData(e.target)
    const res = await fetch('/login.py', {
      method: 'POST',
      body: form
    })
    const data = await res.text()
    console.log(data)
    return navigate('/profile')
  }

  const handlePassword = (e) => {
    const pwd = e.target.value
    setPassword(pwd)
  }

  const handleEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  return (
    <div className='min-h-screen min-w-full bg-[#f7f9fb] flex flex-col justify-center items-center'>
      <form method='post' onSubmit={handleSubmit} className='flex flex-col justify-evenly w-96 h-96 p-5 bg-red-600 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Iniciar sesión</h2>
        <input
          name='input-email' className='h-14 p-3 rounded-2xl'
          type='email' placeholder='Correo electronico' required
          onChange={handleEmail}
        />
        <input
          name='input-password' className='h-14 p-3 rounded-2xl'
          type='password' placeholder='Contraseña' required
          onChange={handlePassword}
        />
        <button className='h-12 p-3 bg-yellow-300 rounded-2xl cursor-pointer' type='submit'>Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login
