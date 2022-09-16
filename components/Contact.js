import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className="bg-gray-900 relative">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex sm:flex-nowrap flex-wrap ">
                <div className="lg:w-2/3 w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6204124369738!2d72.84977071472177!3d19.124301355422528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c970a47d2e7d%3A0x2102619ee0f4791e!2sPoonam%20Overseas%20Consultants%20(Study%20Abroad)!5e0!3m2!1sen!2sca!4v1651588298844!5m2!1sen!2sca"></iframe>
                    <div className="bg-slate-900 relative flex py-6 rounded shadow-md">
                        <div className="lg:w-full px-6 mt-1 lg:mt-0">
                            <h2 className="title-font font-semibold text-sky-500 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-slate-200 leading-relaxed">webonly.designs@gmail.com</a>
                            <h2 className="title-font font-semibold text-sky-500 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed text-slate-200">204-869-8510</p>
                        </div>
                    </div>
                </div>
                <form className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg">
                    <p className="py-px mb-4 text-md font-semibold tracking-wider text-sky-500 uppercase rounded-full">
                        Enquire
                    </p>
                    <h5 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl sm:leading-none">
                         Enqire Today And Get Your Questions Answered
                    </h5>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-slate-200">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-slate-100 rounded border border-slate-800 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-slate-200">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-slate-100 rounded border border-slate-800 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="subject" className="leading-7 text-sm text-slate-200">Phone Number</label>
                        <input type="subject" id="subject" name="subject" className="w-full bg-slate-100 rounded border border-slate-800 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-slate-200">Enquiry</label>
                        <textarea id="message" name="message" className="w-full bg-slate-100 rounded border border-slate-800 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 h-32 text-base outline-none text-slate-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="w-full inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-slate-200 transition duration-200 rounded-lg shadow-md bg-sky-600 hover:bg-rose-500 focus:shadow-outline focus:outline-none">Get in Touch</button>
                </form>
            </div>
        </div>
    </div>
  )
}