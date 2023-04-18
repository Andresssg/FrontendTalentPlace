import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  return (

    <div>
      <h1 className='bg-red-500'>Talent Place</h1>
      <p>Clicks: {count}</p>
      <button className='p-1 bg-red-600 rounded-xl' onClick={() => setCount(count + 1)}>Contador</button>
    </div>
  )
}

export default App
