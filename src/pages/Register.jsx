import { Link, useNavigate } from 'react-router-dom'
import hat from '../assets/hat.svg'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

function Register () {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { BASE_URL } = useAuth()

  const navigate = useNavigate()

  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - 16)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return window.alert('Las contraseñas deben coincidir, intente nuevamente')
    }
    const form = new FormData(e.target)
    const res = await fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      body: form
    })
    const data = await res?.json()
    if (res.status !== 201) { return window.alert(JSON.stringify(data)) }
    window.alert(`Usuario ${data.username} creado exitosamente.`)
    return navigate('/')
  }

  const handlePassword = (e) => {
    const pwd = e.target.value
    setPassword(pwd)
  }

  const handleConfirmPassword = (e) => {
    const confirmPwd = e.target.value
    setConfirmPassword(confirmPwd)
  }
  return (
    <div className='min-h-screen w-full bg-[#f7f9fb] flex flex-col lg:flex-row justify-evenly items-center p-10'>
      <section className='relative'>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className='absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div className='absolute top-0 md:left-60 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>
        <h1 className='relative text-5xl lg:text-6xl z-10'>Registrate para comenzar<br />esta experiencia</h1>
        <p className='relative text-xl lg:text-3xl z-10'>Si tienes una cuenta <Link to='/login' className='text-red-500'>Inicia sesión</Link></p>
      </section>
      <img src={hat} alt='hat image' className='w-2/3 lg:w-1/3' />
      <form method='post' onSubmit={handleSubmit} className='flex flex-col justify-evenly w-[35rem] h-[52rem] p-5 bg-red-600 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Registrate</h2>
        <input name='name' className='h-14 p-3 rounded-2xl' type='text' placeholder='Nombre(s)' required />
        <input name='lastname' className='h-14 p-3 rounded-2xl' type='text' placeholder='Apellido(s)' required />
        <label className='text-xl font-bold' htmlFor='birthdate'>Fecha de nacimiento</label>
        <input name='birthdate' className='h-14 p-3 rounded-2xl' type='date' max={minDate.toISOString().split('T')[0]} id='birthdate' required />
        <input name='phone' className='h-14 p-3 rounded-2xl' type='tel' placeholder='Telefono' required />
        <p className='text-xl font-bold'>Seleccione su genero:</p>
        <div className='flex justify-center gap-x-4 text-xl'>
          <label htmlFor='radio-female'>Femenino</label>
          <input type='radio' name='gender' id='radio-female' value='female' defaultChecked />
          <label htmlFor='radio-male'>Masculino</label>
          <input type='radio' name='gender' id='radio-male' value='male' />
        </div>
        <input name='username' className='h-14 p-3 rounded-2xl' type='text' placeholder='Nombre de usuario' required />
        <input name='email' className='h-14 p-3 rounded-2xl' type='email' placeholder='Correo electronico' required />
        <input
          name='password' className='h-14 p-3 rounded-2xl'
          type='password' placeholder='Contraseña' required
          onChange={handlePassword}
        />
        <input
          name='input-repeat-password' className='h-14 p-3 rounded-2xl'
          type='password' placeholder='Repite la contraseña' required
          onChange={handleConfirmPassword}
        />
        {password === confirmPassword
          ? <></>
          : <p className='text-xl text-yellow-300 self-center p-2'>Las contraseñas no coinciden</p>}
        <select name='rol' className='h-14 p-3 rounded-2xl'>
          <option value='1'>Ofertante</option>
          <option value='2'>Solicitante</option>
        </select>
        <input className='h-12 p-3 bg-yellow-300 rounded-2xl cursor-pointer' type='submit' value='Registrarse' />
      </form>
    </div>
  )
}

export default Register
