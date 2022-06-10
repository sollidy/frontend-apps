import { Link } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useCharacters } from '../hooks/useCharacters'

export const Characters = () => {
  const { error, data, loading } = useCharacters()
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
      {loading ? (
        <div className="mx-auto mt-12">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(2,170px)] mt-10 sm:gap-y-3 sm:grid-cols-[repeat(2,270px)]  w-full justify-evenly ">
          {data.characters.results.map((ch: any) => {
            return (
              <Link to={ch.id} key={ch.id}>
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left  hover:bg-gray-100 rounded-xl p-4 cursor-pointer">
                  <img
                    className="rounded-full h-24 sm:mr-5"
                    src={ch.image}
                    alt="rr"
                  />
                  <div className="mt-4 sm:mt-0">
                    <div className="text-base sm:text-lg font-semibold">
                      {ch.name}
                    </div>
                    <div className="text-base sm:text-lg text-green-700 ">
                      {ch.species}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
