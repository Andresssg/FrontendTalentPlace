import { Navigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import MenuCard from '../components/MenuCard'
import Table from '../components/Table'

function AdminDashboard () {
  const { username } = useParams()
  const { auth, ROLES, BASE_URL } = useAuth()
  const { user, token } = auth
  const [show, setShow] = useState('services')
  const [services, setServices] = useState([])
  const [users, setUsers] = useState([])

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
    if (user.rol === 3) {
      getAllHired()
      getUsers()
    }
  }, [])

  const getUsers = async () => {
    const res = await fetch(`${BASE_URL}/user/getall`, {
      method: 'GET',
      headers: {
        token
      }
    })
    const data = await res?.json()
    if (res.status !== 200) return window.alert('Error al obtener los usuarios')
    setUsers(data)
  }

  const getAllHired = async () => {
    const res = await fetch(`${BASE_URL}/service/getallhired`, {
      method: 'GET',
      headers: {
        token
      }
    })
    const data = await res?.json()
    if (res.status !== 200) return window.alert('Error al obtener los servicios contratados')
    setServices(data)
  }

  const showServices = async () => {
    if (user.rol === 3) { getAllHired() }
    setShow('services')
    esDispositivoMovil && setIsOpen(!isOpen)
  }

  const showUsers = () => {
    setShow('users')
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
      font-medium bg-slate-100 bg-opacity-90 text-gray-900 fixed z-10 h-screen top-0 lg:w-1/2 lg:sticky lg:h-[calc(100vh-150px)]'
        >
          <button className='lg:hidden rounded-full h-16 w-16 fixed top-0 left-0 text-red-500 text-4xl' onClick={() => setIsOpen(!isOpen)}>X</button>
          <h1 className='text-3xl font-bold uppercase'>{user.name} {user.lastname}</h1>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
          <h2 className='text-xl font-medium border-t-2 w-full text-center'>{ROLES[user.rol]}</h2>
          <div className='flex flex-col justify-center items-center gap-y-2 w-full md:flex-row md:flex-wrap md:justify-evenly'>
            <MenuCard text='Servicios contratados' action={showServices} iconIndex={4} />
            <MenuCard text='Lista de usuarios' action={showUsers} iconIndex={5} />
          </div>
        </aside>}
      <section className={`flex flex-col flex-wrap justify-center items-center w-full gap-y-6 md:flex-row md:justify-evenly ${isOpen && 'blur-sm'} lg:blur-none`}>
        {show === 'services' && <Table info={services} />}
        {show === 'users' && <Table info={users} />}
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

export default AdminDashboard
