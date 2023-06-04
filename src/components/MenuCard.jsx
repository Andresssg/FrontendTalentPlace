import Home from '../icons/Home'
import Shield from '../icons/Shield'
import Add from '../icons/Add'
import Edit from '../icons/Edit'

function MenuCard ({ text, action, iconIndex }) {
  const icons = [
    { icon: <Home className='w-10 h-10' />, styles: 'bg-red-500' },
    { icon: <Shield className='w-10 h-10' />, styles: 'bg-yellow-500' },
    { icon: <Add className='w-10 h-10' />, styles: 'bg-emerald-500' },
    { icon: <Edit className='w-10 h-10' />, styles: 'bg-sky-500' }
  ]
  return (
    <div
      className='flex items-center w-96 p-2 gap-x-2 bg-white border-2 border-gray-300
    font-medium rounded-xl overflow-hidden cursor-pointer'
      onClick={action}
    >
      <div className={`${icons[iconIndex].styles} p-2 rounded-lg`}>
        {icons[iconIndex].icon}
      </div>
      <h1 className=''>{text}</h1>
    </div>
  )
}

export default MenuCard
