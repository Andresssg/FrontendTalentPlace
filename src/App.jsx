import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import ProtectedRoute from './components/ProtectedRoute'
import useAuth from './hooks/useAuth'
import Profile from './pages/Profile'
import OfferedServices from './pages/OfferedServices'

function App () {
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
        {/* TODO: Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/profile/:username' element={<Profile />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
