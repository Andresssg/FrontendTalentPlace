import bannerImg1 from '../assets/banner1.jpg'
import bannerImg2 from '../assets/banner2.png'
import bannerImg3 from '../assets/banner3.jpg'
import bannerImg4 from '../assets/banner4.webp'
import useSlider from '../hooks/useSlider'

function Banner () {
  const images = [
    bannerImg1, bannerImg2, bannerImg3, bannerImg4
  ]
  const [currentIndex] = useSlider(3500, images)
  return (
    <section className='flex justify-left items-center h-200px md:h-[500px] lg:h-[calc(100vh-80px)] bg-purple-500 relative'>
      <img className='w-full h-full absolute' src={images[currentIndex]} alt='Image banner' />
      <div className='p-20 relative font-light bg-red-500 w-full text-3xl md:text-5xl bg-opacity-60 text-white'>
        <h2>De estudiantes para estudiantes</h2>
        <p className='text-4xl md:text-6xl'><span className='font-bold'>TalentPlace</span> tu lugar para<br />ofrecer servicios</p>
      </div>
    </section>
  )
}

export default Banner
