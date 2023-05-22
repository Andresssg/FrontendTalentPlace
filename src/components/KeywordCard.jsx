function KeywordCard ({ icon, keyword, text, last }) {
  return (
    <div className={`flex justify-center items-center ${!last && 'border-r border-r-red-500'}  py-8 px-2 gap-2 lg:p-10`}>
      {icon}
      <div>
        <h2 className='text-2xl font-bold'>{keyword}</h2>
        <p className='font-light'>{text}</p>
      </div>
    </div>
  )
}

export default KeywordCard
