import { Publication } from "./Publication"

interface publication {
  id: number
  username: string
  img: string
  description: string
}

type ListPublication = publication[]

interface Props {
  publications: ListPublication
}

export const Section: React.FC<Props> = ({publications}) => {

  return (
    <ul>
      {
        publications.map((publication) => (
          <li key={publication.id}>
            <Publication 
            id={publication.id}
            username={publication.username}
            img={publication.img}
            description={publication.description}
            />
          </li>
        ))
      }
    </ul>
  )
}