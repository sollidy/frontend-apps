import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate()
  return (
    <div className="relative ">
      <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-31">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 dark:text-gray-800 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 ">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Rick & </span>{' '}
              <span className="block text-green-600 xl:inline">Morty</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
              An American adult animated science fiction sitcom. The series
              follows the misadventures of cynical mad scientist Rick Sanchez
              and his good-hearted, but fretful grandson Morty Smith, who split
              their time between domestic life and interdimensional adventures.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div>
                <button
                  className="btn-primary"
                  onClick={() => navigate('/characters')}
                >
                  Characters
                </button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://rickandmortyapi.com/graphql"
                  className="btn-secondary"
                >
                  GraphQL Doc
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://kino-punk.ru/wp-content/uploads/2021/06/Rick-and-Morty-cartoon-wubalubadubdub-Rick-Sanchez-Morty-Smith-1389249.jpg"
          alt=""
        />
      </div>
    </div>
  )
}
