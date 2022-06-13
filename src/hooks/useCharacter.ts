import { useQuery, gql } from '@apollo/client'

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
  const { error, data, loading, refetch } = useQuery(GET_CHARACTER, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
  })
  return { error, data, loading, refetch }
}
