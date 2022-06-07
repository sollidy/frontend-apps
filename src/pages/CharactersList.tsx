import { Link } from 'react-router-dom'
import { HeaderMenu } from '../components/HeaderMenu'
import { useCharacters } from '../hooks/useCharacters'

export const CharactersList = () => {
  const { error, data, loading } = useCharacters()
  // if (loading) return <></>
  if (error) return <div>Network error</div>
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-31">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              {data?.characters &&
                data.characters.results.map((character: any) => {
                  return (
                    <Link to={`/${character.id}`} key={character.id}>
                      <img src={character.image} alt="a" />
                      <h2>{character.name}</h2>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
