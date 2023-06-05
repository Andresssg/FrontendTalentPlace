function Table ({ info }) {
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
        {info.map((data, i) => (
          <tr key={i} className={`${i % 2 === 0 && 'bg-slate-400 border-2 border-black'}`}>
            {Object.values(data).map((element, i) => <td key={i} className='p-2'>{element}</td>)}
          </tr>))}
      </tbody>
    </table>
  )
}

export default Table
