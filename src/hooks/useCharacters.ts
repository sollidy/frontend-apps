import { useQuery, gql } from '@apollo/client'
interface Results {
  id: number
  name: string
  image: string
  species: string
  origin: Location
}
interface Location {
  dimension: string
}
interface Info {
  next: number | null
  prev: number | null
}
interface CharactersData {
  characters: {
    info: Info
    results: Results[]
  }
}

const GET_CHARACTERS = gql`
  query GetCaharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
        id
        name
        image
        species
        origin {
          dimension
        }
      }
    }
  }
`
export const useCharacters = (page: number | null = 1) => {
  const { error, data, loading, refetch } = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: { page },
      notifyOnNetworkStatusChange: true,
    }
  )
  return { error, data, loading, refetch }
}
