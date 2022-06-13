import { useQuery, gql } from '@apollo/client'

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
  const { error, data, loading, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page },
    notifyOnNetworkStatusChange: true,
  })
  return { error, data, loading, refetch }
}
