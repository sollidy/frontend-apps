import { Link } from 'react-router-dom'
import { PaginationPanel } from '../components/PaginationPanel'
import { useCharacters } from '../hooks/useCharacters'

export const Characters = () => {
  const { error, data, loading } = useCharacters()
  if (loading) return <></>
  if (error) return <div>Network error</div>
  return (
    <div className=" px-4 sm:px-6 lg:px-8 lg:flex ">
      <>
        <div className="max-w-xl lg:mr-8 lg:mx-0 lg:max-w-sm">
          <p className="mt-6 sm:mt-8 lg:mt-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Universe characters
          </p>
          <p className="mt-4 text-xl text-gray-500 ">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </>
      <div className="grid grid-cols-2 gap-7 mt-6 sm:mt-8 lg:mt-10">
        {data.characters.results.map((ch: any) => {
          return (
            <div key={ch.id} className="flex items-center">
              <img className="rounded-full h-20 mr-4" src={ch.image} alt="rr" />
              <div>
                <div className="text-lg font-semibold">{ch.name}</div>
                <div className="text-lg text-green-700 ">{ch.species}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
