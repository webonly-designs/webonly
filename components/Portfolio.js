import React from 'react'

import Work from './Work';

function Portfolio({works}) {
  return (
    <div id="work" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block mb-4 text-md font-semibold tracking-wider text-sky-500 uppercase">
          Work
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
          <span className="relative">Showcase</span>
        </span>{' '}
        Of Previously Built <span className="text-sky-500">Projects</span>
      </h2>
    </div>
    <div className="grid gap-6 row-gap-5 grid-cols-1">

    {works.map(work => (
      <Work key={work.slug} data={work}/>
    ))}

    </div>
   
  </div>
  )
}

export default Portfolio