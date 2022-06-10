import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'

export const CharacterList = () => {
  const { error, data, loading } = useCharacters()
  if (loading) return <></>
  if (error) return <div>Network error</div>
  return (
    <div className="flex mb-8 px-4 sm:px-6 lg:px-8 lg:mt-8 flex-col lg:flex-row items-center lg:items-start ">
      <>
        <div className="max-w-xl lg:mx-0 lg:max-w-sm text-center lg:text-left">
          <p className="mt-6 sm:mt-10 lg:mt-13 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Universe characters
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-500  ">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </>
      <div className="grid grid-cols-[repeat(2,170px)] mt-10 sm:gap-y-8 lg:mt-13 sm:grid-cols-[repeat(2,270px)]  w-full justify-evenly ">
        {data.characters.results.map((ch: any) => {
          return (
            <Link to={ch.id} key={ch.id}>
              <div className=" md:mb-0 my-24">
                <div className="rounded-lg shadow-lg h-full block bg-white">
                  <div className="flex justify-center">
                    <div
                      className="flex justify-center"
                      style={{ marginTop: '-75px' }}
                    >
                      <img
                        src={ch.image}
                        className="rounded-full mx-auto shadow-lg"
                        alt=""
                        style={{ width: '150px' }}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">{ch.name}</h5>
                    <p>{ch.species}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
