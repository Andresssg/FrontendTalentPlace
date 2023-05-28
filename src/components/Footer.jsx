import logoBlanco from '../assets/logo_blanco.webp'
import logoTiktok from '../assets/logo_tiktok.svg'
import logoInstagram from '../assets/logo_instagram.svg'
import logoPayvalida from '../assets/logo-payvalida.png'
import logoNequi from '../assets/logo-nequi.png'
import logoDaviplata from '../assets/logo-daviplata.png'
import logoEfecty from '../assets/logo-efecty.png'

function Footer () {
  const phone = '+57 3046595839'
  return (
    <section className='flex flex-col justify-center items-center bg-gray-500 py-5 text-white font-medium gap-5 w-full'>
      <div className='flex w-full justify-evenly '>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img src={logoBlanco} alt='Logo talentplace' />
          <h3 className='text-xl'>{phone}</h3>
          <div className='flex justify-center gap-5 w-full'>
            <img src={logoTiktok} alt='logo tiktok' />
            <img src={logoInstagram} alt='logo instagram' />
          </div>
        </div>
        <ul className='flex flex-col gap-6'>
          <h5 className='text-xl'>Menú</h5>
          <li className='cursor-pointer hover:text-red-500'>Ofertados</li>
          <li className='cursor-pointer hover:text-red-500'>Solicitados</li>
        </ul>
        <ul className='flex flex-col gap-6'>
          <h5 className='text-xl'>Info</h5>
          <li className='cursor-pointer hover:text-red-500'>FAQ</li>
          <li className='cursor-pointer hover:text-red-500'>Acerca de</li>
        </ul>
      </div>
      <div className='flex flex-col w-full text-center gap-6'>
        <h3 className='text-xl'>Aceptamos los siguientes métodos de pago</h3>
        <div className='flex items-center justify-evenly'>
          <img className='w-36' src={logoPayvalida} alt='logo de payvalida' />
          <img className='w-36' src={logoNequi} alt='logo de nequi' />
          <img className='w-36' src={logoDaviplata} alt='logo de daviplata' />
          <img className='w-36' src={logoEfecty} alt='logo de efecty' />
        </div>
      </div>
    </section>
  )
}

export default Footer
