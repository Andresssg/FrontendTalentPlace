import GIF_404 from '../assets/caboom-poor-puppy.gif'

function NotFound () {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-[calc(100vh-80px)] font-bold text-4xl gap-y-10'>
      <h1>404 Oops página no encontrada</h1>
      <img src={GIF_404} alt='Gif perro cayendose' className='md:w-5/6 md:h-5/6 md:object-contain' />
      <script type='text/javascript' async src='https://tenor.com/embed.js' />
    </div>
  )
}

export default NotFound
