import { Navigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from '../components/Button'
import { useState } from 'react'
import Service from '../components/Service'
import ChangePassword from '../components/ChangePassword'

function Profile () {
  // Mostrar diferentes perfiles dependiendo del rol
  const { username } = useParams()
  const { auth, ROLES, BASE_URL } = useAuth()
  const { user, token } = auth
  const [show, setShow] = useState('services')
  const [services, setServices] = useState([])

  const showServices = async () => {
    // Crear endpoint
    if (!services.length) return window.alert('no hay servicios')
    const res = await fetch(`${BASE_URL}/service?email=${user.username}`, {
      method: 'GET',
      headers: {
        token
      }
    })
    const data = await res?.json()
    console.log(data)
    setShow('services')
    setServices([])
  }

  const showChangePassword = () => {
    setShow('change')
  }

  if (username !== auth?.user?.username) {
    // Mostrar perfil de visualizacion y no de edicion
    return <Navigate to='/' />
  }
  return (
    <article className='flex flex-col justify-center items-center p-10 gap-y-5'>
      <section className='flex flex-col items-center w-full rounded-xl p-5 gap-3 text-2xl font-medium bg-gradient-to-tr from-red-500 to-yellow-500 text-gray-900 lg:w-1/2'>
        <h1 className='text-3xl font-bold uppercase'>{user.name} {user.lastname}</h1>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
        <h2 className='text-xl font-medium border-t-2 w-full text-center'>{ROLES[user.rol]}</h2>
        <div className='flex justify-evenly w-full text-xl p-2'>
          <Button className='hover:bg-white rounded-xl p-2' text='Mis servicios' action={showServices} />
          <Button className='hover:bg-white rounded-xl p-2' text='Cambiar contraseña' action={showChangePassword} />
        </div>
      </section>
      {show === 'services'
        ? (services.length ? services.map((service, i) => <Service key={`service-${i}`} service={service} />) : <h1>No tienes servicios, empieza por crear uno</h1>)
        : <ChangePassword />}
    </article>
  )
}

export default Profile
