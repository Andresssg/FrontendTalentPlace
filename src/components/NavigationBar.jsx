import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from './Button'
import LogoBar from '../assets/logo_blanco.webp'

function NavigationBar () {
  const { auth, logout } = useAuth()
  return (
    <ul className={`flex w-full ${auth ? 'justify-between' : 'justify-evenly'} items-center p-3 px-10 bg-black h-20 text-white font-medium`}>
      <li>
        <Link to='/'>
          <img className='w-28' src={LogoBar} />
        </Link>
      </li>
      <li className='p-2 rounded-xl hover:bg-white hover:text-black'>
        <Link to='/offered'>Ofrecidos</Link>
      </li>
      {!auth &&
        <li className='p-2 rounded-xl hover:bg-white hover:text-black'>
          <Link to='/signup'>Registrarse</Link>
        </li>}
      {/* <li className='hover:text-white'>
        <Link to='/dashboard'>Dashboard</Link>
      </li> */}
      {
        auth
          ? <div className='flex justify-end items-center gap-10'>
            <li className='hover:bg-white hover:text-black'>
              {auth?.user?.rol === 3
                ? <Link to={`/admin/${auth?.user?.username}`}>{auth?.user?.username}</Link>
                : <Link to={`/profile/${auth?.user?.username}`}>{auth?.user?.username}</Link>}
            </li>
            <li className='hover:bg-red-500 hover:text-black p-2 rounded-xl'>
              <Button text='Salir' action={logout} />
            </li>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </div>
          : <li className='bg-yellow-400 p-2 rounded-xl hover:bg-white hover:text-black'>
            <Link to='/login'>Iniciar sesión</Link>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </li>
      }
    </ul>
  )
}

export default NavigationBar
