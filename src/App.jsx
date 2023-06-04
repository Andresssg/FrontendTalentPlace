import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NavigationBar from './components/NavigationBar'
import ProtectedRoute from './components/ProtectedRoute'
import useAuth from './hooks/useAuth'
import Profile from './pages/Profile'
import OfferedServices from './pages/OfferedServices'

function App () {
  const { ROLES } = useAuth()
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        {/* Rutas publicas */}
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/offered' element={<OfferedServices />} />
        {/* <Route path='/publicaciones/:id' element={<h1>Post</h1>} /> */}
        {/* <Route path='/profile/:username' element={<h1>Profile</h1>} /> */}
        {/* TODO: Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/profile/:username' element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[ROLES[1]]} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
