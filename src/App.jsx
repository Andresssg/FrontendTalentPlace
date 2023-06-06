import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import OfferedServices from './pages/OfferedServices'
import AdminDashboard from './pages/AdminDashboard'
import Checkout from './pages/Checkout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        <Route element={<ProtectedRoute allowedRoles={[3]} />}>
          <Route path='/admin/:username' element={<AdminDashboard />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[1, 2]} />}>
          <Route path='/profile/:username' element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[2]} />}>
          <Route path='/checkout/:id' element={<Checkout />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
