import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'

export const Character = () => {
  const { id } = useParams()
  const { error, data, loading } = useCharacter(Number(id))
  if (loading) return <div>Loading...</div>
  if (error || data.character === null) return <div>Network error</div>
  return (
    <>
      <div>{data.character.name}</div>
    </>
  )
}
