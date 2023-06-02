import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Login () {
  const { login, BASE_URL } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const checkFields = () => {
    if (!email && !password) { return window.alert('Campos incompletos') }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    checkFields()
    const form = new FormData()
    form.append('email', email)
    form.append('password', password)

    const res = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      body: form
    })
    const data = await res?.json()
    if (res.status !== 200) { return window.alert(data.message) }
    login(data)
    navigate(from, { replace: true })
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
