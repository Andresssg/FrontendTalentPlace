import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Bienvenido a Talent Place</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Oops 404 page not found!</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
