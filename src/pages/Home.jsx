import KeywordCard from '../components/KeywordCard'
import Stars from '../icons/Stars'
import SearchIcon from '../icons/SearchIcon'
import Coins from '../icons/Coins'
import Phone from '../icons/Phone'
import CategoryCard from '../components/CategoryCard'
import DiccionarioImg from '../assets/diccionario.png'
import DonaImg from '../assets/dona.png'
import MonoImg from '../assets/mono.png'
import MaskImg from '../assets/mask.png'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import RegisterCard from '../components/ResgisterCard'

function Home () {
  const keywordsInfo = [
    { icon: <Stars color='text-red-500' />, keyword: 'Comparte', text: 'Tu talento' },
    { icon: <SearchIcon color='text-red-500' />, keyword: 'Diversidad', text: 'Encuentra lo que buscas' },
    { icon: <Coins color='text-red-500' />, keyword: 'Gana un extra', text: 'Ofreciendo servicios' },
    { icon: <Phone color='text-red-500' />, keyword: 'Comunícate', text: 'Inmediatamente' }
  ]

  const categories = [
    { icon: DiccionarioImg, category: 'Traductores', color: 'red' },
    { icon: DonaImg, category: 'Diseñadores', color: 'green' },
    { icon: MonoImg, category: 'Manualidades', color: 'blue' },
    { icon: MaskImg, category: 'Artistas', color: 'purple' }
  ]

  const testimonials = [
    { user: 'Julian López', testimonial: 'Nunca pensé que podría ganar dinero en la universidad gracias a que sé tocar la guitarra.', degree: 'Ingeniero de telecomunicaciones' },
    { user: 'Mario Gómez', testimonial: 'Desde que utilizo la plataforma, tengo dinero extra y con el puedo pagar mis transportes para la universidad y mi comida.', degree: 'Ingeniero de sistemas' },
    { user: 'Vanessa Cruz', testimonial: 'Gracias a mi creatividad, estoy teniendo ingresos extra haciendo cosas que me gustan y que son mi hobbies.', degree: 'Arquitecta' },
    { user: 'Kevin Rico', testimonial: 'He podido hacer maquetas, anchetas, desayunos sorpresas, regalos, me gusta mucho hacerlo y además recibo ingresos extra', degree: 'Diseñador de espacios y exteriores' }
  ]

  return (
    <article className='flex flex-col justify-center items-center'>
      <Banner />
      <section className='flex justify-evenly items-center flex-wrap py-16'>
        {keywordsInfo.map((element, i) => {
          const { icon, keyword, text } = element
          return <KeywordCard key={i} icon={icon} keyword={keyword} text={text} last={i === keywordsInfo.length - 1} />
        })}
      </section>
      <RegisterCard />
      <section className='flex justify-evenly items-center flex-wrap py-16'>
        {categories.map((element, i) => {
          const { icon, category, color } = element
          return <CategoryCard key={`category-${i}`} icon={icon} category={category} color={color} />
        })}
      </section>
      <Testimonials testimonials={testimonials} />
      <Footer />
    </article>
  )
}

export default Home
