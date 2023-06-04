import { useState } from 'react'
import useAuth from '../hooks/useAuth'

function EditService ({ service }) {
  const { auth, BASE_URL, categories } = useAuth()
  const { token } = auth
  const {
    id_service: idService, service_name: name,
    description, category_id: categoryId,
    price
  } = service

  const [title, setTitle] = useState(name || '')
  const [desc, setDesc] = useState(description || '')
  const [category, setCategory] = useState(categories[categoryId - 1] || 'TRADUCTORES')
  const [servicePrice, setServicePrice] = useState(price || price)

  const verifyFields = (form) => {
    const oldFormData = new FormData(form)
    const formData = new FormData()
    formData.append('id_service', idService)
    if (title !== name) formData.append('service_name', title)
    if (desc !== description) formData.append('description', desc)
    if (category !== categories[categoryId - 1]) formData.append('category', category)
    if (servicePrice !== price) formData.append('price', servicePrice)
    if (oldFormData.get('evidence_img')?.size !== 0) formData.append('evidence_img', oldFormData.get('evidence_img'))
    if (oldFormData.get('evidence_video') !== '') formData.append('evidence_img', oldFormData.get('evidence_video'))
    return formData
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = verifyFields(e.target)
    if (form.get('id_service')) return window.alert('No se puede editar porque no se ha seleccionado un servicio')
    if (Array.from(form).length <= 1) return window.alert('No se ha modificado nada')
    const res = await fetch(`${BASE_URL}/service/modify`, {
      method: 'PUT',
      headers: {
        token
      },
      body: form
    })
    const data = await res?.json()
    if (res.status !== 201) return window.alert(data?.message)
    window.alert(data.message)
  }

  return (
    <section className='flex justify-center w-full rounded-xl p-5 gap-3 text-2xl font-medium text-gray-900 lg:w-5/6'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly w-5/6 gap-y-3 p-5 bg-slate-500 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Editar un servicio</h2>
        <input name='service_name' className='h-14 p-3 rounded-2xl' type='text' placeholder='Titulo del servicio' defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea name='description' className='h-36 p-3 rounded-2xl' type='text' placeholder='Descripción del servicio' defaultValue={desc} onChange={(e) => setDesc((e.target.value))} />
        <label htmlFor='evidence_img'>Imagen de evidencia del servicio</label>
        <input name='evidence_img' className='h-14 p-3 rounded-2xl' type='file' accept='image/*' />
        <input name='evidence_video' className='h-14 p-3 rounded-2xl' type='text' placeholder='Link del video de evidencia' />
        <select name='category' className='h-14 p-3 rounded-2xl' value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category, i) => <option key={`category-${i}`} value={category}>{category}</option>)}
        </select>
        <input name='price' className='h-14 p-3 rounded-2xl' type='number' placeholder='Precio del servicio' defaultValue={servicePrice} onChange={(e) => setServicePrice((e.target.value))} />
        <input className='p-3 bg-yellow-300 rounded-2xl cursor-pointer' type='submit' value='Editar' />
      </form>
    </section>
  )
}

export default EditService
