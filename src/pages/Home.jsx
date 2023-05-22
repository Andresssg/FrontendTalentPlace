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

  return (
    <article className='flex flex-col'>
      <section className='flex justify-center items-center h-96 bg-purple-500'>
        banner
      </section>
      <section className='flex justify-evenly items-center flex-wrap py-16'>
        {keywordsInfo.map((element, i) => {
          const { icon, keyword, text } = element
          return <KeywordCard key={i} icon={icon} keyword={keyword} text={text} last={i === keywordsInfo.length - 1} />
        })}
      </section>
      <section>
        register cards
      </section>
      <section className='flex justify-evenly items-center flex-wrap py-16'>
        {categories.map((element, i) => {
          const { icon, category, color } = element
          return <CategoryCard key={`category-${i}`} icon={icon} category={category} color={color} />
        })}
      </section>
      <section>
        testimonials
      </section>
    </article>
  )
}

export default Home
