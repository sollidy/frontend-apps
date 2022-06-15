import { useNavigate, useParams } from 'react-router-dom'
import { ErrorModal } from '../components/ErrorModal'
import { Spinner } from '../components/Spinner'
import { useCharacter } from '../hooks/useCharacter'

export const Character = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { error, data, loading, refetch } = useCharacter(Number(id))
  if (error || data?.character === null) return <ErrorModal refetch={refetch} />
  return (
    <div className="flex mb-8 px-4 sm:px-6 lg:px-8 lg:mt-8 flex-col lg:flex-row items-center lg:items-start">
      {loading ? (
        <div className="mx-auto mt-12">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="max-w-xl lg:mx-0 lg:max-w-sm text-center lg:text-left">
            <p className="mt-6 sm:mt-10 lg:mt-13 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              {data.character.name}
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-500 dark:text-gray-400">
              Different versions of the characters inhabit other dimensions
              throughout the show's multiverse and their personal
              characteristics can vary from one reality to another.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div>
                <button
                  onClick={() => navigate(-1)}
                  id="back"
                  className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
          <>
            <div className="mt-10 max-w-4xl px-4 sm:px-6 ">
              <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-900">
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none md:rounded-l-xl rounded-full mx-auto"
                  src={data.character.image}
                  alt="photos"
                  width="384"
                  height="512"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <div>
                    <p className="text-lg font-medium dark:text-gray-400">
                      Rick and Morty has been described as "a never-ending fart
                      joke wrapped around a studied look into nihilism"
                    </p>
                  </div>
                  <div className="font-medium">
                    <div className="text-green-500 dark:text-green-400">
                      {data.character.species}
                    </div>
                    <div className="text-gray-700 dark:text-gray-600">
                      {data.character.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  )
}
