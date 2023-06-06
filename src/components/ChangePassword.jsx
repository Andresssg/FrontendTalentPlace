import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { toast } from 'react-toastify'

function ChangePassword () {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { auth, BASE_URL } = useAuth()
  const { user, token } = auth
  const promiseMessages = {
    pending: 'Guardando contraseña',
    success: 'Contraseña guardada',
    error: 'Hubo un error! 🤯'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return toast.warning('Las contraseñas deben coincidir, intente nuevamente')
    }
    const form = new FormData(e.target)
    form.append('email', user.email)
    const res = await toast.promise(fetch(`${BASE_URL}/user/changepassword`, {
      method: 'PUT',
      headers: {
        token
      },
      body: form
    }), promiseMessages)
    const data = await res?.json()
    if (res.status !== 200) return toast.error(data?.message)
    toast.info(data.message)
    setPassword('')
    setConfirmPassword('')
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
    <section className='w-full rounded-xl p-5 gap-3 text-2xl font-medium text-gray-900 lg:w-1/2'>
      <form className='flex flex-col items-center justify-center gap-y-4' onSubmit={handleSubmit}>
        <h3>Ingrese su nueva contraseña</h3>
        <input defaultValue={password} className='w-full p-2' type='password' placeholder='Nueva contraseña' onChange={handlePassword} name='newpassword' required />
        <input defaultValue={confirmPassword} className='w-full p-2' type='password' placeholder='Repita la contraseña' onChange={handleConfirmPassword} required />
        {password === confirmPassword
          ? <></>
          : <p className='text-xl text-red-500 self-center p-2'>Las contraseñas no coinciden</p>}
        <input className='text-center p-3 hover:bg-red-500 rounded-xl cursor-pointer' type='submit' value='Cambiar contraseña' />
      </form>
    </section>
  )
}

export default ChangePassword
