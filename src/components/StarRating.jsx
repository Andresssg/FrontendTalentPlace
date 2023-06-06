import { useState } from 'react'
import Star from '../icons/Star'
import StarFill from '../icons/StarFill'
import Button from './Button'
import useAuth from '../hooks/useAuth'

const StarRating = ({ rating = 0, sendRating = false, idHiredService }) => {
  const { auth, BASE_URL } = useAuth()
  const starCount = 5
  const [filledStars, setFilledStars] = useState(Math.round(rating))
  const starArray = [...Array(starCount)]

  const handleSelectStar = (index) => {
    const actualRating = index + 1
    setFilledStars(actualRating)
    sendStars(actualRating)
  }

  const sendStars = async (rating) => {
    const payload = {
      id_hired_service: idHiredService,
      rating
    }
    const res = await fetch(`${BASE_URL}/service/rateservice`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: auth?.token
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json()
    if (res.status !== 200) return window.alert(data.message)
    window.alert(data.message)
  }

  return (
    !sendRating
      ? (
        <div className='flex items-center gap-2 text-gray-400 '>
          <p className='text-3xl font-bold text-red-600'>{rating}</p>
          {starArray.map((_, index) => index < filledStars
            ? <StarFill key={index} className='h-6 w-6 text-yellow-400' />
            : <Star key={index} className='h-6 w-6 ' />)}
        </div>
        )
      : (
        <div>
          <p>Click en una estrella para calificar</p>
          <div className='flex items-center gap-2 text-gray-400 '>
            <p className='text-3xl font-bold text-red-600'>{filledStars}</p>
            {starArray.map((_, index) => index < filledStars
              ? <Button key={index} action={() => { handleSelectStar(index) }} icon={<StarFill className='h-6 w-6 text-yellow-400' />} />
              : <Button key={index} action={() => { handleSelectStar(index) }} icon={<Star className='h-6 w-6' />} />)}
          </div>
        </div>
        )
  )
}

export default StarRating
