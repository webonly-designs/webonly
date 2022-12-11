import React from 'react'
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import * as Scroll from 'react-scroll'

let Link = Scroll.Link

function About() {
  return (
    <div id="about" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10 my-auto">
          <p className="inline-block mb-4 text-md font-semibold tracking-wider text-sky-500 uppercase">
            About Us
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-none sm:text-4xl text-slate-200">
            How We Can Make A 
            <br/>
            <span className="text-sky-500">Difference</span>
          </h2>
          <div className="mb-6 space-y-2">
            <div className="flex items-center">
                <FaCheckCircle className="mr-2 w-4 h-4 text-sky-500"/>
                <p className="text-slate-200 text-md">Fully responsive websites for phones, tablets, desktops and laptops.</p>
            </div>
            <div className="flex items-center">
                <FaCheckCircle className="mr-2 w-4 h-4 text-sky-500"/>
                <p className="text-slate-200">Blazing fast websites with a high performance and SEO scores.</p>
            </div>
            <div className="flex items-center">
                <FaCheckCircle className="mr-2 w-4 h-4 text-sky-500"/>
                <p className="text-slate-200">100% client satisfaction</p>
            </div>
            <div className="flex items-center">
                <FaCheckCircle className="mr-2 w-4 h-4 text-sky-500"/>
                <p className="text-slate-200">Custom web design</p>
            </div>
            <div className="flex items-center">
                <FaCheckCircle className="mr-2 w-4 h-4 text-sky-500"/>
                <p className="text-slate-200">On-time delivery</p>
            </div>
            <div className="flex pt-5">
                <Link to="contact" spy={true} smooth={true} offset={-250} duration={700} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-slate-200 transition duration-200 rounded-lg shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none cursor-pointer">
                    <FaPhoneAlt className="mr-2"/> Contact Us
                </Link>
             </div>
          </div>
        </div>
        <div>
          <img
            className="object-contain w-full h-56 rounded-lg shadow-lg sm:h-96"
            src="fast-min.png"
            alt="SEO Lighthouse score"
          />
        </div>
      </div>
    </div>
  )
}

export default About