import { Link } from 'react-router-dom'
import { PaginationPanel } from '../components/PaginationPanel'
import { useCharacters } from '../hooks/useCharacters'

export const Characters = () => {
  const { error, data, loading } = useCharacters()
  if (loading) return <></>
  if (error) return <div>Network error</div>
  return (
    <div className=" px-4 sm:px-6 lg:px-8 ">
      {/* <div className="lg:text-center">
        <p className="mt-6 sm:mt-8 lg:mt-10 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Characters of Universe
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div> */}
      <>
        <div className="flex items-center">
          <img
            className="rounded-full h-20 mr-4"
            src={data.characters.results[1].image}
            alt="rr"
          />
          <div>
            <div className="text-lg font-semibold  leading-none">
              {data.characters.results[1].name}
            </div>
            <div className="text-lg text-green-700 ">
              {data.characters.results[1].species}
            </div>
          </div>
        </div>
      </>
      <div className="py-8 max-w-3xl  mx-auto">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {data.characters.results.map((ch: any) => {
              return (
                <li>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6 flex justify-center ">
                      <div>
                        <img
                          className="h-14 rounded-full mr-3 "
                          src={ch.image}
                          alt="character"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-green-600 truncate">
                            {ch.name}
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Full-time
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-between">
                          <div className="sm:flex">
                            <div className="mr-6 flex items-center text-sm text-gray-500">
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                x-description="Heroicon name: solid/users"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                              </svg>
                              {ch.species}
                            </div>
                          </div>
                          {/* <div className="flex items-center text-sm text-gray-500">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              x-description="Heroicon name: solid/location-marker"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            {ch.origin.dimension}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
          {/* <PaginationPanel / */}
        </div>
      </div>
    </div>
  )
}
