import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute ({ allowedRoles = [1, 2, 3], redirectTo = '/login' }) {
  const { auth } = useAuth()
  const role = auth?.user?.rol
  return (
    allowedRoles?.includes(role)
      ? <Outlet />
      : <Navigate to={redirectTo} />
  )
}

export default ProtectedRoute
