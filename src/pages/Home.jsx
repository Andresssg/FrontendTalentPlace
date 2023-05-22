import KeywordCard from '../components/KeywordCard'
import Stars from '../icons/Stars'
import SearchIcon from '../icons/SearchIcon'
import Coins from '../icons/Coins'
import Phone from '../icons/Phone'

function Home () {
  const keywordsInfo = [
    { icon: <Stars color='text-red-500' />, keyword: 'Comparte', text: 'Tu talento' },
    { icon: <SearchIcon color='text-red-500' />, keyword: 'Diversidad', text: 'Encuentra lo que buscas' },
    { icon: <Coins color='text-red-500' />, keyword: 'Gana un extra', text: 'Ofreciendo servicios' },
    { icon: <Phone color='text-red-500' />, keyword: 'Comunícate', text: 'Inmediatamente' }

  ]

  return (
    <article className='flex flex-col'>
      <section className=''>
        banner
      </section>
      <section className='flex justify-evenly items-center flex-wrap py-16'>
        {keywordsInfo.map((element, i) => {
          const { icon, keyword, text } = element
          return <KeywordCard key={i} icon={icon} keyword={keyword} text={text} last={i === keywordsInfo.length - 1} />
        })}
      </section>
      <div>
        register cards
      </div>
      <section>
        categories
      </section>
      <section>
        testimonials
      </section>
    </article>
  )
}

export default Home
