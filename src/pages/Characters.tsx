import { Link, useSearchParams } from 'react-router-dom'
import { ErrorModal } from '../components/ErrorModal'
import { Spinner } from '../components/Spinner'
import { useCharacters } from '../hooks/useCharacters'

export const Characters = () => {
  const [page, setPage] = useSearchParams({ page: '1' })
  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'next')
      setPage({ page: data.characters.info.next })
    else setPage({ page: data.characters.info.prev })
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
          <p className="mt-6 sm:mt-10 lg:mt-13 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Universe characters
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-500  ">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <button
                id="prev"
                onClick={changePage}
                disabled={loading ? true : !data.characters.info.prev}
                className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
              >
                Prev
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                id="next"
                onClick={changePage}
                disabled={loading ? true : !data.characters.info.next}
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
