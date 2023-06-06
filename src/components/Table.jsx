import useAuth from '../hooks/useAuth'

function Table ({ info }) {
  const { ROLES } = useAuth()
  if (info.length === 0) return <h1>No information</h1>
  const headers = Object.keys(info[0])
  return (
    <table className='text-2xl border-2 border-black'>
      <thead>
        <tr className=''>
          {headers.map(header => <td key={header} className='font-bold p-3'>{header}</td>)}
        </tr>
      </thead>
      <tbody>
        {info.map((data, i) => {
          const values = Object.values(data)
          return (
            <tr key={i} className={`${i % 2 === 0 && 'bg-slate-400 border-2 border-black'}`}>
              {values.map((element, i) => <td key={i} className='p-2'>{headers[i] === 'rol' ? ROLES[element] : element}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
