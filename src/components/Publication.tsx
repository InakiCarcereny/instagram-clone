import { useState } from 'react'
import { Comments } from '../icons/Comments'
import { Dots } from '../icons/Dots'
import { Hearth } from '../icons/Hearth'
import { Save } from '../icons/Save'

interface Props {
  id: number
  username: string
  img: string
  description: string
}

export const Publication: React.FC<Props> = ({id, username, img, description}) => {
  const [like, setLike] = useState(5)
  const [comment, setComment] = useState(40)

  return (
    <div className="flex flex-col gap-4 w-[500px] mt-8">
      <header className="flex items-center justify-between">
        <div className='flex items-center gap-1'>
          <img src={img} alt={username} className="w-[40px] h-[40px] rounded-full"/>
          <span className='text-sm font-semibold text-white'>{username}</span>
          <small className='text-sm font semibold text-zinc-400'>• 6 h</small>
        </div>
        <div>
          <Dots />
        </div>
      </header>
      
      <img src={img} alt="publication" className="w-full h-[600px] rounded-lg"/>
      <section className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Hearth />
          <Comments />
        </div>
          <Save />
      </section>

      <footer className='flex flex-col gap-2'>
        <p className='text-white font-semibold'>{like} Me gustas</p>
        <p className='text-white font-semibold'>
          {username} <span className=' font-normal'>{description}</span>
        </p>
        <button className='text-neutral-500 text-sm font-semibold w-[150px]'>
          Ver los {comment} comentarios
        </button>
        <p className='text-zinc-400 text-sm font-semibold'>
          Aniade un comentario...
        </p>
      </footer>

      <div className='w-full h-[0.5px] bg-neutral-600'></div>
    </div>
  )
}