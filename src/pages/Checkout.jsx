import { useState } from 'react'
import { useLocation } from 'react-router'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { auth, BASE_URL } = useAuth()
  const location = useLocation()
  const { name, price, id_service } = location.state
  const [numeroTarjeta, setNumeroTarjeta] = useState('')
  const [nombreTitular, setNombreTitular] = useState('')
  const [fechaExpiracion, setFechaExpiracion] = useState('')
  const [codigoCVV, setCodigoCVV] = useState('')
  const [resumenCompra, setResumenCompra] = useState(null)

  const hireService = async () => {
    if (!/^\d{16}$/.test(numeroTarjeta)) {
      return window.alert('La tarjeta no puede contener letras y solo debe tener 16 dígitos')
    }
    if (!(nombreTitular && fechaExpiracion && codigoCVV)) {
      window.alert('los campos no pueden estar incompletos')
    }
    const payload = {
      email: auth?.user?.email,
      service_id: id_service,
      num_card: numeroTarjeta.slice(-4),
      service_name: name,
      service_price: price
    }
    const res = await fetch(`${BASE_URL}/service/hire`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        token: auth?.token
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    if (res.status !== 201) { return window.alert(data.message) }
    setResumenCompra({ price, name })
    window.alert(data.message)
  }

  return (
    <>
      <div className='max-w-md mx-auto p-4 bg-white rounded shadow my-10'>
        <h2 className='text-xl font-bold mb-4'>Datos de la tarjeta</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='numeroTarjeta'>
            Número de tarjeta
          </label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500'
            type='text'
            id='numeroTarjeta'
            value={numeroTarjeta}
            onChange={(e) => setNumeroTarjeta(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='numeroTarjeta'>
            Nombre del titular
          </label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500'
            type='text'
            id='numeroTarjeta'
            value={nombreTitular}
            onChange={(e) => setNombreTitular(e.target.value)}
          />
        </div>
        <div className='flex justify-between mb-4'>
          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='numeroTarjeta'>
              Fecha de expiración
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500'
              type='date'
              id='numeroTarjeta'
              value={fechaExpiracion}
              onChange={(e) => setFechaExpiracion(e.target.value)}
            />
          </div>
          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='numeroTarjeta'>
              CVV
            </label>
            <input
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500'
              type='number'
              id='numeroTarjeta'
              max='999'
              min='100'
              value={codigoCVV}
              onChange={(e) => setCodigoCVV(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-4'>
          <button
            className={`w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded ${!(numeroTarjeta && nombreTitular && fechaExpiracion && codigoCVV) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={hireService}
            disabled={!(numeroTarjeta && nombreTitular && fechaExpiracion && codigoCVV)}
          >
            Confirmar compra
          </button>
        </div>
        {resumenCompra && (
          <div className='flex flex-col justify-center font-bold'>
            <h3 className='text-lg mb-2'>Resumen de la compra</h3>
            <p>Nombre del servicio: <span className='font-normal'>{resumenCompra.name}</span></p>
            <p>Precio: <span className='font-normal'>{resumenCompra.price}</span></p>
            <p className='font-medium'>La factura electronica fue enviada al correo electronico</p>
            <hr className='h-2' />
            <Link to='/offered' className='text-red-500'>Click para volver a los servicios ofertados</Link>
          </div>
        )}
        <div />
        {/* eslint-disable-next-line react/jsx-closing-tag-location */}
      </div>
    </>
  )
}

export default Checkout
