import logoBlanco from '../assets/logo_blanco.webp'
import logoTiktok from '../assets/logo_tiktok.svg'
import logoInstagram from '../assets/logo_instagram.svg'
import { Link } from 'react-router-dom'

function Footer () {
  const phone = '+57 3046595839'
  return (
    <section className='flex flex-col justify-center items-center bg-gray-500 py-5 text-white font-medium gap-5 w-full'>
      <div className='flex w-full justify-evenly '>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src={logoBlanco} alt='Logo talentplace' />
          <h3 className='text-xl'>{phone}</h3>
        </div>
        <ul className='flex flex-col gap-6'>
          <h5 className='text-xl'>Menú</h5>
          <Link to='/offered' className='cursor-pointer hover:text-red-500'>Ofertados</Link>
        </ul>
        <div className='flex flex-col gap-6'>
          <h5 className='text-xl'>Redes sociales</h5>
          <div className='flex justify-center gap-5 w-full'>
            <a href='https://www.tiktok.com/@talentplac3?_t=8XTVjb3wGLl&_r=1'>
              <img src={logoTiktok} alt='logo tiktok' />
            </a>
            <a href='https://www.instagram.com/talentplac3/'>
              <img src={logoInstagram} alt='logo instagram' />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
