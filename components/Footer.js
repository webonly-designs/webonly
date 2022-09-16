import React from 'react'


function Footer() {
  return (
    <footer className="bg-gray-900">
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t-2 border-sky-500">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="inline-flex items-center">
            <span className="text-xl font-bold tracking-wide text-slate-200">
              <span className="text-sky-500">Web</span>Only<span className="text-sky-500">.</span>
            </span>
          </div>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-slate-200">
              We are a Winnipeg based Web design agency with a goal of helping local and small businesses create an online presence at affordable pricing.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-sky-500">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-sky-500">Phone:</p>
            <a
              href="tel:204-869-8510"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-slate-200 hover:text-sky-600"
            >
              204-869-8510
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-sky-500">Email:</p>
            <a
              href="mailto:webonly.designs@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-slate-200 hover:text-sky-600"
            >
              webonly.designs@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-sky-500">Address:</p>
            <a
              href="https://www.google.com/maps/place/198+Vineland+Crescent,+Winnipeg,+MB+R3Y+1T7/@49.8032569,-97.2196941,17z/data=!3m1!4b1!4m5!3m4!1s0x52ea75503585882d:0x3777d2fc0ea208f9!8m2!3d49.8032569!4d-97.2175054"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-slate-200 hover:text-sky-600"
            >
              198 Vineland Crescent, Winnipeg
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-sky-500">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/designs.webonly/"
              className="text-slate-200 transition-colors duration-300 hover:text-sky-500"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-7">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/WebOnlyCanada"
              className="text-slate-200 transition-colors duration-300 hover:text-sky-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-sky-500 lg:flex-row">
        <p className="text-sm text-slate-300">
          © Copyright 2020 WebOnly. All rights reserved.
        </p>
      </div>
    </div>
    </footer>
  )
}

export default Footer