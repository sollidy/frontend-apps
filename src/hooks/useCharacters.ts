import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query {
    characters {
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
export const useCharacters = () => {
  const { error, data, loading, refetch } = useQuery(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
  })
  return { error, data, loading, refetch }
}
