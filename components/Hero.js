import React from 'react'
import { FaPhoneAlt} from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Will Love", "Will Admire"],
    loop: true,
    delaySpeed: 1000,
  })
  return (
    <div className="" id="hero">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block mb-4 text-md font-semibold tracking-wider text-sky-500 uppercase rounded-full">
                Winnipeg Based
              </p>
            </div>
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl sm:leading-none">
              We Design And Develop
              <br/>
              <span className="text-sky-500">Websites</span> That You <span className="text-sky-500">{text} <Cursor cursorColor='#0ea5e9'/></span>
            </h1>
            <p className="text-base text-slate-200 md:text-lg">
              Our goal is to help local and small businesses make an online presence at affordable pricing.
            </p>
          </div>
          <div className="flex pb-4">
                <a href="/" className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-slate-200 transition duration-200 rounded-lg shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none">
                    <FaPhoneAlt className="mr-2"/> Contact Us
                </a>
          </div>
        </div>
        <div className="relative">
            <img
                className="object-cover w-full h-full"
                src="/hero.png"
                alt="main hero image"
            />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero