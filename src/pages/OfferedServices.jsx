import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'

function OfferedServices () {
  const { categories, BASE_URL } = useAuth()
  const [services, setServices] = useState([])
  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const res = await fetch(`${BASE_URL}/services`, {
      method: 'GET'
    })
    const data = await res?.json()
    setServices(data)
  }
  return (
    <section className='flex flex-col justify-evenly items-center p-5 font-medium gap-y-5'>
      <h1 className='text-3xl font-bold'>Servicios actuales</h1>
      <div className='flex w-full items-center justify-evenly p-3 flex-wrap gap-y-3'>
        <h3 className=' text-xl'>Filtrar por:</h3>
        <Button key='pill-all' className='p-2 rounded-full bg-slate-200 text-center hover:text-white hover:bg-red-400' text='TODOS' />
        {categories.map(category => <Button key={`pill-${category}`} className='p-2 rounded-full bg-slate-200 text-center hover:text-white hover:bg-red-400' text={category} />)}
      </div>
      {services.length === 0
        ? <h2>Aún no tenemos servicios, muy pronto tendremos más para ofrecerte!</h2>
        : services.map((service, i) => <ServiceCard key={`servicecard-${i}`} service={service} />)}
    </section>
  )
}

export default OfferedServices
