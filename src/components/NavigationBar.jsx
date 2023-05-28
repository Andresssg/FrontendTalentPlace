import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Button from './Button'
import LogoBar from '../assets/logo_completo.png'

function NavigationBar () {
  const { auth, logout } = useAuth()
  return (
    <ul className={`flex w-full ${auth ? 'justify-between' : 'justify-evenly'} items-center p-3 px-10 bg-red-500 h-20`}>
      <li className='hover:text-white'>
        <Link to='/'>
          <img className='w-20' src={LogoBar} />
        </Link>
      </li>
      <li>
        <input
          className='md:w-[450px] p-3 rounded-xl border border-red-500 focus:outline-none focus:border-yellow-500'
          type='text' placeholder='Busca lo que necesites. Ej. diseñadores, manualidades '
        />
      </li>
      {!auth &&
        <li className='hover:text-white'>
          <Link to='/signup'>Signup</Link>
        </li>}
      {/* <li className='hover:text-white'>
        <Link to='/dashboard'>Dashboard</Link>
      </li> */}
      {
        auth
          ? <div className='flex justify-end bg-green-400 gap-10'>
            <li className='hover:text-white'>
              <Link to={`/profile/${auth?.username}`}>Logo persona - Profile</Link>
            </li>
            <li className='hover:text-white'>
              <Button text='Salir' action={logout} />
            </li>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </div>
          : <li className='bg-yellow-400 p-2 rounded-xl hover:bg-white'>
            <Link to='/login'>Iniciar sesión</Link>
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </li>
      }
    </ul>
  )
}

export default NavigationBar
