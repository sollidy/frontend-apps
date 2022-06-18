import { Link, useSearchParams } from 'react-router-dom'
import { ErrorModal } from '../components/ErrorModal'
import { Spinner } from '../components/Spinner'
import { useCharacters } from '../hooks/useCharacters'

export const Characters = () => {
  const [page, setPage] = useSearchParams({ page: '1' })
  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'next' && data?.characters.info.next)
      setPage({ page: data.characters.info.next.toString() })
    else if (e.currentTarget.id === 'prev' && data?.characters.info.prev) {
      setPage({ page: data.characters.info.prev.toString() })
    }
  }
  const { error, data, loading, refetch } = useCharacters(
    Number(page.get('page'))
  )
  if (error) {
    return <ErrorModal refetch={refetch} />
  }
  return (
    <div className="flex mb-8 px-4 sm:px-6 lg:px-8 lg:mt-8 flex-col lg:flex-row items-center lg:items-start min-h-[1400px]">
      <>
        <div className="max-w-xl lg:mx-0 lg:max-w-sm text-center lg:text-left">
          <p className="mt-6 sm:mt-10 lg:mt-13 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            Universe characters
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 dark:text-gray-400">
            The show revolves around the adventures of the members of the Smith
            household, which consists of parents Jerry and Beth, their children
            Summer and Morty, and Beth's father, Rick Sanchez, who lives with
            them as a guest.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <button
                id="prev"
                onClick={changePage}
                disabled={loading ? true : !data?.characters.info.prev}
                className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
              >
                Prev
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                id="next"
                onClick={changePage}
                disabled={loading ? true : !data?.characters.info.next}
                className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
      {loading ? (
        <div className="mx-auto mt-12">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(2,170px)] mt-10 sm:gap-y-3 sm:grid-cols-[repeat(2,minmax(270px,330px))] w-full justify-evenly">
          {data &&
            data.characters.results.map((ch) => {
              return (
                <Link to={ch.id.toString()} key={ch.id}>
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl p-4 cursor-pointer">
                    <img
                      className="rounded-full h-24 sm:mr-5"
                      src={ch.image}
                      alt="rr"
                    />
                    <div className="mt-4 sm:mt-0">
                      <div className="text-base sm:text-lg font-semibold dark:text-gray-300">
                        {ch.name}
                      </div>
                      <div className="text-base sm:text-lg text-green-700 dark:text-green-500">
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
