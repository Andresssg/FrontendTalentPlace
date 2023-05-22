import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute ({ allowedRoles = ['user'], redirectTo = '/login' }) {
  const { auth } = useAuth()
  return (
    auth?.role?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : <Navigate to={redirectTo} />
  )
}

export default ProtectedRoute
