import backgroundImage from '../assets/testimonials_backgroud.png'
import useSlider from '../hooks/useSlider'

function Testimonials ({ testimonials }) {
  const [currentIndex] = useSlider(3500, testimonials)
  const { testimonial, user, degree } = testimonials[currentIndex]

  return (
    <section className='flex flex-col justify-center items-center w-full h-[500px] relative'>
      <img src={backgroundImage} alt='fondo testimonials' className='w-full h-full object-cover absolute brightness-75' />
      <div className='flex flex-col justify-center items-center gap-2 md:gap-4 px-4 w-3/4 h-1/2 lg:w-1/2 lg:h-96 bg-[#f7f9fb] relative text-center'>
        <p className='text-2xl md:text-3xl font-medium'>"{testimonial}"</p>
        <p>{user} ({degree})</p>
      </div>
      <div className='flex relative gap-5 my-4'>
        {testimonials.map((element, i) => <div key={`num-${i}`} className='flex items-center justify-center rounded-full h-3 w-3 bg-[#f7f9fb]'>
          {/* eslint-disable-next-line react/self-closing-comp */}
          {i === currentIndex && <div className='rounded-full h-2 w-2 bg-black'></div>}
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>)}
      </div>
    </section>
  )
}

export default Testimonials
