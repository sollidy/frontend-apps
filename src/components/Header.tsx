import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  UserCircleIcon,
  MenuIcon,
  XIcon,
  VideoCameraIcon,
  MapIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const source = [
  {
    name: 'Characters',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/characters',
    icon: UserCircleIcon,
  },
  {
    name: 'Locations',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: MapIcon,
  },
  {
    name: 'Episodes',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: VideoCameraIcon,
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <Popover className="relative ">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 dark:border-gray-700 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <a href="/">
              <span className="text-4xl font-black dark:text-gray-300">
                r&m.
              </span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 mt-3">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      open ? 'dark:text-gray-300' : 'dark:text-gray-400',
                      'group bg-white dark:bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none'
                    )}
                  >
                    <span>Source</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        open ? 'dark:text-gray-300' : 'dark:text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-44">
                      <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {source.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-green-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 dark:text-gray-400"
            >
              About
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="font-bold text-2xl dark:text-gray-300">r&m</div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {source.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
