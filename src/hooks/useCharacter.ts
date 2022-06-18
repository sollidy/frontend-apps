import { useQuery, gql } from '@apollo/client'

interface Character {
  id: number
  name: string
  species: string
  status: string
  image: string
  episode: Episodes[]
}
interface Episodes {
  name: string
  episode: string
}
interface CharacterData {
  character: Character
}

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      image
      episode {
        name
        episode
      }
    }
  }
`
export const useCharacter = (id: number | undefined) => {
  const { error, data, loading, refetch } = useQuery<CharacterData>(
    GET_CHARACTER,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true,
    }
  )
  return { error, data, loading, refetch }
}
