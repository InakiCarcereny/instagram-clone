import { User } from '../components/User'

interface User {
  id: number
  username: string
  img: string
}

type ListUser = User[]

interface Props {
  users: ListUser
}

export const Header: React.FC<Props> = ({users}) => {

  return (
    <>
      <ul className="flex items-center justify-center gap-6">
      {
        users.map((user) => (
          <User 
          id={user.id}
          username={user.username}
          img={user.img}
          />
        ))
      }
      </ul>
    </>
  )
}