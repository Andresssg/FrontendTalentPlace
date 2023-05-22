function CategoryCard ({ icon, category, color }) {
  return (
    <div
      className='flex flex-col justify-center
    items-center p-8 gap-10 cursor-pointer
    lg:p-10 border-4 border-gray-200 rounded-xl'
      onClick={() => { window.alert(`La categoria ${category} fue seleccionada`) }}
    >
      <div class={`flex w-36 h-36 bg-${color}-500 rounded-full items-center justify-center`}>
        <img className='h-full w-full object-contain' src={icon} alt='icono categoria' />
      </div>
      <h2 className='text-2xl font-bold'>{category}</h2>
    </div>
  )
}

export default CategoryCard
