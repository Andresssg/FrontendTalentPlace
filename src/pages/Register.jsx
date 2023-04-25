import { useNavigate } from 'react-router-dom'
import hat from '../assets/hat.svg'
import { useState } from 'react'

function Register () {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - 16)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return window.alert('Las contraseñas deben coincidir, intente nuevamente')
    }
    const form = new FormData(e.target)
    const res = await fetch('/register.py', {
      method: 'POST',
      body: form
    })
    const data = await res.text()
    console.log(data)
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
      <section className=''>
        <h1 className='text-5xl lg:text-6xl'>Registrate para comenzar<br />esta experiencia</h1>
        <p className='text-xl lg:text-3xl'>Si tienes una cuenta <span className='text-red-500'>Inicia sesión</span></p>
      </section>
      <img src={hat} alt='hat image' className='w-2/3 lg:w-1/3' />
      <form method='post' onSubmit={handleSubmit} className='flex flex-col justify-evenly w-[35rem] h-[48rem] p-5 bg-red-600 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Registrate</h2>
        <input name='input-name' className='h-14 p-3 rounded-2xl' type='text' placeholder='Nombre(s)' required />
        <input name='input-lastname' className='h-14 p-3 rounded-2xl' type='text' placeholder='Apellido(s)' required />
        <label className='text-xl font-bold' htmlFor='birthdate'>Fecha de nacimiento</label>
        <input name='input-birthdate' className='h-14 p-3 rounded-2xl' type='date' max={minDate.toISOString().split('T')[0]} id='birthdate' required />
        <input name='input-phone' className='h-14 p-3 rounded-2xl' type='tel' placeholder='Telefono' required />
        <p className='text-xl font-bold'>Seleccione su genero:</p>
        <div className='flex justify-center gap-x-4 text-xl'>
          <label htmlFor='radio-female'>Femenino</label>
          <input type='radio' name='input-gender' id='radio-female' value='female' defaultChecked />
          <label htmlFor='radio-male'>Masculino</label>
          <input type='radio' name='input-gender' id='radio-male' value='male' />
        </div>
        <input name='input-email' className='h-14 p-3 rounded-2xl' type='email' placeholder='Correo electronico' required />
        <input
          name='input-password' className='h-14 p-3 rounded-2xl'
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
        <select name='input-rol' className='h-14 p-3 rounded-2xl'>
          <option value='ofertante'>Ofertante</option>
          <option value='solicitante'>Solicitante</option>
        </select>
        <input className='h-12 p-3 bg-yellow-300 rounded-2xl cursor-pointer' type='submit' value='Registrarse' />
      </form>
    </div>
  )
}

export default Register
