import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'

function CreateService ({ setShow }) {
  const { auth, BASE_URL, categories } = useAuth()
  const { user, token } = auth
  const promiseMessages = {
    pending: 'Creando servicio',
    success: 'Servicio creado',
    error: 'Hubo un error! 🤯'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    form.append('email', user.email)
    if (form.get('evidence_img')?.size === 0) form.delete('evidence_img')

    const res = await toast.promise(fetch(`${BASE_URL}/service/create`, {
      method: 'POST',
      headers: {
        token
      },
      body: form
    }), promiseMessages)
    const data = await res?.json()
    if (res.status !== 201) return toast.error(data?.message)
    toast.info(data.message)
    setTimeout(() => {
      setShow()
    }, 500)
  }

  return (
    <section className='flex justify-center w-full rounded-xl p-5 gap-3 text-2xl font-medium text-gray-900 lg:w-5/6'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly w-5/6 gap-y-3 p-5 bg-slate-500 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Publicar un servicio</h2>
        <input name='service_name' className='h-14 p-3 rounded-2xl' type='text' placeholder='Titulo del servicio' required />
        <textarea name='description' className='h-36 p-3 rounded-2xl' type='text' placeholder='Descripción del servicio' required />
        <label htmlFor='evidence_img'>Imagen de evidencia del servicio</label>
        <input name='evidence_img' className='h-14 p-3 rounded-2xl' type='file' />
        <input name='evidence_video' className='h-14 p-3 rounded-2xl' type='text' placeholder='Link del video de evidencia' />
        <select name='category' className='h-14 p-3 rounded-2xl'>
          {categories.map((category, i) => <option key={`category-${i}`} value={category}>{category}</option>)}
        </select>
        <input name='price' className='h-14 p-3 rounded-2xl' type='number' placeholder='Precio del servicio' required />
        <input className='p-3 bg-yellow-300 rounded-2xl cursor-pointer' type='submit' value='Publicar' />
      </form>
    </section>
  )
}

export default CreateService
