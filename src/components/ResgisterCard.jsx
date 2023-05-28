import { Link } from 'react-router-dom'
import image from '../assets/resgister_image.jpg'

function RegisterCard () {
  return (
    <section className='flex justify-left items-center h-200px md:h-[500px] lg:h-[50vh] lg:w-[50vw] bg-purple-500 relative lg:rounded-xl overflow-hidden'>
      <img className='w-full h-full absolute' src={image} alt='Image banner' />
      <div className='flex flex-col justify-evenly px-20 relative font-light h-full w-full text-3xl md:text-5xl bg-opacity-60 text-white bg-black'>
        <h2>¿Alma de emprendor o necesitas ayuda?</h2>
        <p>No importa, este es tu lugar</p>
        <div className='flex justify-center border-4 border-yellow-500 w-fit font-medium p-3 rounded-xl hover:bg-yellow-500 cursor-pointer'>
          <Link to='signup'>Inicia Ahora</Link>
        </div>
      </div>
    </section>
  )
}

export default RegisterCard
