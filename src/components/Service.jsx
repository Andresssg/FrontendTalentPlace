import Button from '../components/Button'
import useAuth from '../hooks/useAuth'
import Edit from '../icons/Edit'
import Trash from '../icons/Trash'

function Service ({ service, setShow, setSelectedService }) {
  const icons = [
    { icon: <Edit className='w-6 h-6' />, styles: 'bg-sky-500' },
    { icon: <Trash className='w-6 h-6' />, styles: 'bg-red-500' }
  ]
  const {
    service_name: name,
    description, evidence_img,
    evidence_video, category_id: categoryId,
    price
  } = service
  const { categories } = useAuth()
  return (
    <div className='flex flex-col w-96 p-2 bg-red-500 font-medium text-justify rounded-xl overflow-hidden'>
      <div className='flex flex-col bg-white font-medium text-justify rounded-xl'>
        <h3 className='w-1/2 text-center text-white bg-red-500 rounded-br-xl rounded-tl-xl p-2 shadow-inner-up'>{name}</h3>
        <img src={evidence_img} alt='Imagen de evidencia del servicio' className='w-full h-60 object-contain p-2' />
        <p className='p-2 '>Descripción: {description}</p>
        <p className='p-2 '>Precio: {price}</p>
        {evidence_video && <a href={evidence_video} target='_blank' rel='noreferrer' className='p-2 text-justify hover:text-red-500'>Video de referencia</a>}
        <div className='flex justify-between items-center'>
          <div className='flex justify-evenly items-center w-full p-2'>
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
                text={icons[1].icon} action={() => {
                  window.alert('se elimino')
                }}
              />
            </div>
          </div>
          <h3 className='w-1/2 bg-red-500 text-white rounded-tl-xl rounded-br-xl p-2 self-end text-center shadow-inner-down'>{categories[categoryId - 1]}</h3>
        </div>
      </div>

    </div>
  )
}

export default Service
