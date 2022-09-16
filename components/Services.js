import React from 'react'

function Services() {
  return (
    <div id='services' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-sky-500 uppercase">
          Services
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-200 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block text-sky-500"
          >
            <defs>
              <pattern
                id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">What</span>
        </span>{' '}
        Are We <span className="text-sky-500">Best</span> At
      </h2>
    </div>
    <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col justify-between p-5 border border-sky-500 rounded-xl bg-slate-900 duration-300 transform hover:-translate-y-2 hover:border-2">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-500">
            <svg
              className="w-12 h-12 text-slate-200"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-sky-500">Web Design</h6>
          <p className="mb-3 text-sm text-slate-200">
            Design beautifully crafted websites or web applications using technologies like Wix, Wordpress or React.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 border border-sky-500 rounded-xl bg-slate-900 duration-300 transform hover:-translate-y-2 hover:border-2">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-500">
            <svg
              className="w-12 h-12 text-slate-200"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-sky-500">App Development</h6>
          <p className="mb-3 text-sm text-slate-200">
            Develop cross-platform fully functiional Android and IOS applications using React Native.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 border border-sky-500 rounded-xl bg-slate-900 duration-300 transform hover:-translate-y-2 hover:border-2">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-500">
            <svg
              className="w-12 h-12 text-slate-200"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-sky-500">Social Media Marketing</h6>
          <p className="mb-3 text-sm text-slate-200">
            Create posts, thumbnails, reels, shorts, mockups for Instagram, Facebook and Youtube to increase online presence.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services