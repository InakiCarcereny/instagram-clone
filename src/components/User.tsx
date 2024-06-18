interface Props {
  id: number
  username: string
  img: string
}

export const User: React.FC<Props> = ({id, username, img}) => {

  return (
    <li key={id}
    className="flex flex-col gap-1 items-center justify-center"
    >
      <img src={img} alt={username} className="w-[60px] h-[60px] rounded-full border-2 border-orange-500 object-cover"
      />
      <span className="text-xs font-semibold text-zinc-200">{username}</span>
    </li>
  )
}