import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'

export const CharactersList = () => {
  const { error, data, loading } = useCharacters()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Network error</div>
  return (
    <>
      <div>
        {data.characters.results.map((character: any) => {
          return (
            <Link to={`/${character.id}`} key={character.id}>
              <img src={character.image} alt="a" />
              <h2>{character.name}</h2>
            </Link>
          )
        })}
      </div>
    </>
  )
}
