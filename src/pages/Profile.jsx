import { Navigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Profile () {
  const { username } = useParams()
  const { auth } = useAuth()
  if (username !== auth?.username) {
    // Mostrar perfil de visualizacion y no de edicion
    return <Navigate to='/' />
  }
  return <h1>Hola {auth.username}</h1>
}

export default Profile
