import { Navigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import Service from '../components/Service'
import ChangePassword from '../components/ChangePassword'
import MenuCard from '../components/MenuCard'
import CreateService from '../components/CreateService'
import EditService from '../components/EditService'

function Profile () {
  // Mostrar diferentes perfiles dependiendo del rol
  const { username } = useParams()
  const { auth, ROLES, BASE_URL } = useAuth()
  const { user, token } = auth
  const [show, setShow] = useState('services')
  const [services, setServices] = useState([])

  const [selectedService, setSelectedService] = useState({})

  const [isOpen, setIsOpen] = useState(true)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const [esDispositivoMovil, setEsDispositivoMovil] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1042px)')
    const handleMediaQueryChange = (e) => {
      setEsDispositivoMovil(e.matches)
    }

    handleMediaQueryChange(mediaQuery)

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  useEffect(() => {
    // Función para actualizar el tamaño de la ventana
    const actualizarTamañoVentana = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', actualizarTamañoVentana)
    return () => {
      window.removeEventListener('resize', actualizarTamañoVentana)
    }
  }, [])

  useEffect(() => {
    setIsOpen(true)
  }, [windowSize])

  useEffect(() => {
    if (user.rol === 1) { getServices() } else if (user.rol === 2) { getHiredServices() }
  }, [])

  const getServices = async () => {
    const res = await fetch(`${BASE_URL}/service/getbyuser?username=${user.username}`, {
      method: 'GET',
      headers: {
        token
      }
    })
    const data = await res?.json()
    const { services } = data
    setServices(services)
  }

  const getHiredServices = async () => {
    const res = await fetch(`${BASE_URL}/service/gethiredbyuser?username=${user.username}`, {
      method: 'GET',
      headers: {
        token
      }
    })
    const data = await res?.json()
    const { services } = data
    setServices(services)
  }

  const showServices = async () => {
    if (user.rol === 1) { getServices() } else if (user.rol === 2) { getHiredServices() }
    setShow('services')
    esDispositivoMovil && setIsOpen(!isOpen)
  }

  const showChangePassword = () => {
    setShow('change')
    esDispositivoMovil && setIsOpen(!isOpen)
  }

  const showCreateService = () => {
    setShow('create')
    esDispositivoMovil && setIsOpen(!isOpen)
  }

  const showEditServices = () => {
    setShow('edit')
    esDispositivoMovil && setIsOpen(!isOpen)
  }

  if (username !== auth?.user?.username) {
    // Mostrar perfil de visualizacion y no de edicion
    return <Navigate to='/' />
  }
  return (
    <article className='flex flex-col justify-center items-start p-10 gap-y-5 relative md:flex-row'>
      {isOpen &&
        <aside className='flex flex-col items-center w-full rounded-xl p-5 gap-3 text-2xl
      font-medium bg-slate-100 bg-opacity-90 text-gray-900 fixed z-10 h-screen top-0 lg:w-1/2 lg:relative lg:h-[calc(100vh-150px)]'
        >
          <button className='lg:hidden rounded-full h-16 w-16 fixed top-0 left-0 text-red-500 text-4xl' onClick={() => setIsOpen(!isOpen)}>X</button>
          <h1 className='text-3xl font-bold uppercase'>{user.name} {user.lastname}</h1>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
          <h2 className='text-xl font-medium border-t-2 w-full text-center'>{ROLES[user.rol]}</h2>
          <div className='flex flex-col justify-center items-center gap-y-2 w-full md:flex-row md:flex-wrap md:justify-evenly'>
            <MenuCard text='Mis servicios' action={showServices} iconIndex={0} />
            <MenuCard text='Cambiar contraseña' action={showChangePassword} iconIndex={1} />
            {user.rol === 1 && <>
              <MenuCard text='Nuevo servicio' action={showCreateService} iconIndex={2} />
              <MenuCard text='Editar servicio' action={showEditServices} iconIndex={3} />
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>}
          </div>
        </aside>}
      <section className={`flex flex-col justify-center items-center w-full gap-y-6 md:flex-row md:justify-evenly ${isOpen && 'blur-sm'} lg:blur-none`}>
        {show === 'services' &&
          (services.length
            ? services.map((service, i) => <Service key={`service-${i}`} service={service} setShow={setShow} setSelectedService={setSelectedService} />)
            : user.rol === 1 ? <h2>No tienes servicios, empieza por crear uno</h2> : <h2>No has contratado ningún servicio.</h2>)}
        {show === 'change' && <ChangePassword />}
        {show === 'create' && <CreateService />}
        {show === 'edit' && <EditService service={selectedService} />}
      </section>
      <button
        className={`lg:hidden rounded-full h-16 w-16 fixed bottom-4 right-4 p-4 flex flex-col items-center justify-center gap-2 hover:bg-red-500 ${isOpen && 'hidden'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <hr className='w-10 h-1 bg-yellow-500 border-none' />
        <hr className='w-10 h-1 bg-yellow-500 border-none' />
        <hr className='w-10 h-1 bg-yellow-500 border-none' />
      </button>
    </article>
  )
}

export default Profile
