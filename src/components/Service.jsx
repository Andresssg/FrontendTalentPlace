import { toast } from 'react-toastify'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'
import Edit from '../icons/Edit'
import Trash from '../icons/Trash'
import StarRating from './StarRating'

function Service ({ service, setShow, setSelectedService }) {
  const { categories, auth, BASE_URL, ROLES } = useAuth()

  const icons = [
    { icon: <Edit className='w-6 h-6' />, styles: 'bg-sky-500' },
    { icon: <Trash className='w-6 h-6' />, styles: 'bg-red-500' }
  ]
  const {
    id_service,
    service_name: name,
    description, evidence_img,
    evidence_video, category_id: categoryId,
    price, rating, id_hired_service
  } = service

  const promiseMessages = {
    pending: 'Borrando servicio',
    success: 'Servicio borrado',
    error: 'Hubo un error! 🤯'
  }

  const deleteService = async () => {
    const res = await toast.promise(fetch(`${BASE_URL}/service/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token: auth?.token
      },
      body: JSON.stringify({ id_service })
    }), promiseMessages)
    const data = await res?.json()
    toast.info(data.message)
  }
  return (
    <div className='flex flex-col w-96 p-2 bg-red-500 font-medium text-justify rounded-xl overflow-hidden'>
      <div className='flex flex-col bg-white font-medium text-justify rounded-xl'>
        <div className='flex justify-between items-center w-full'>
          <h3 className='w-1/2 text-center text-white bg-red-500 rounded-br-xl rounded-tl-xl p-2 shadow-inner-up'>{name}</h3>
          <div className='flex justify-evenly items-center p-2'>
            {ROLES[auth?.user?.rol] === ROLES[2] &&
              <p className='text-sm'>Solicitado en: {service.date}</p>}
          </div>
        </div>
        <img src={evidence_img} alt='Imagen de evidencia del servicio' className='w-full h-60 object-contain p-2' />
        <details className='p-2 border-2'>
          <summary>Click para ver la información del servicio</summary>
          <p className='p-2 '>Descripción: {description}</p>
          <p className='p-2 '>Precio: {price}</p>
          {evidence_video && <a href={evidence_video} target='_blank' rel='noreferrer' className='p-2 text-justify hover:text-red-500'>Video de referencia</a>}
        </details>
        {ROLES[auth?.user?.rol] === ROLES[2] &&
          <StarRating sendRating rating={rating} idHiredService={id_hired_service} />}
        <div className='flex justify-between items-center'>
          <div className='flex justify-evenly items-center w-full p-2'>
            {ROLES[auth?.user?.rol] !== ROLES[2]
              ? (
                <>
                  <div className={`flex items-center ${icons[0].styles} p-1 rounded-lg`}>
                    <Button
                      text={icons[0].icon} action={() => {
                        setShow('edit')
                        setSelectedService(service)
                      }}
                    />
                  </div>
                  <div className={`flex items-center ${icons[1].styles} p-1 rounded-lg`}>
                    <Button
                      text={icons[1].icon} action={deleteService}
                    />
                  </div>
                </>
                )
              : <p>Oferente: {service.fullname}</p>}
          </div>
          <h3 className='w-1/2 bg-red-500 text-white rounded-tl-xl rounded-br-xl p-2 text-center shadow-inner-down'>{categories[categoryId - 1]}</h3>
        </div>
      </div>

    </div>
  )
}

export default Service
