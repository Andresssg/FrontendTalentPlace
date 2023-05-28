import { useEffect, useState } from 'react'

export default function useSlider (time = 2000, dependency) {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dependency.length)
    }, time)
    return () => clearInterval(interval)
  }, [dependency])

  return [currentIndex]
}
