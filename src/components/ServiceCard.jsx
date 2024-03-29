import Button from './Button'
import useAuth from '../hooks/useAuth'
import Cart from '../icons/Cart'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import { toast } from 'react-toastify'

function ServiceCard ({ service }) {
  const { categories, ROLES, auth } = useAuth()
  const icons = [
    { icon: <Cart className='w-6 h-6' />, styles: 'bg-yellow-400' }
  ]

  const {
    id_service,
    service_name: name,
    description, evidence_img,
    evidence_video, category_id: categoryId,
    price, average_rating
  } = service

  const linkState = { name, price, id_service }

  return (
    <div className='flex flex-col w-96 p-2 bg-red-500 font-medium text-justify rounded-xl overflow-hidden'>
      <div className='flex flex-col bg-white font-medium text-justify rounded-xl'>
        <h3 className='w-1/2 text-center text-white bg-red-500 rounded-br-xl rounded-tl-xl p-2 shadow-inner-up'>{name}</h3>
        <img src={evidence_img} alt='Imagen de evidencia del servicio' className='w-full h-60 object-contain p-2' />
        <details className='p-4 border-2'>
          <summary>Click para ver la información del servicio</summary>
          <p>Descripción: {description}</p>
          <p>Precio: {price}</p>
          <StarRating rating={average_rating} />
        </details>
        {evidence_video && <a href={evidence_video} target='_blank' rel='noreferrer' className='p-2 text-justify hover:text-red-500'>Video de referencia</a>}
        <div className='flex justify-between items-center'>
          <div className='flex justify-evenly items-center w-full p-2'>
            <div className={`flex items-center ${icons[0].styles} p-1 rounded-lg`}>
              {auth
                ? (
                    ROLES[auth?.user?.rol] !== ROLES[1]
                      ? (
                        <Link to={`/checkout/${id_service}`} state={linkState}>
                          <Button
                            className='flex gap-3 px-2'
                            icon={icons[0].icon}
                            text='Contratar servicio' action={() => {}}
                          />
                        </Link>
                        )
                      : <Button
                          className='flex gap-3 px-2'
                          text={`Como ${ROLES[1]} no puedes contratar servicios`} action={() => toast.warning(`Acción no permitida como ${ROLES[1]}`)}
                        />)
                : <Link to='/login'>Inicia sesión para contratar</Link>}
            </div>
          </div>
          <h3 className='w-1/2 bg-red-500 text-white rounded-tl-xl rounded-br-xl p-2 self-end text-center shadow-inner-down'>{categories[categoryId - 1]}</h3>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
