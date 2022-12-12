import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import PortableText from "react-portable-text"
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity"

const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:"production",
  useCdn:false
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

function Work({data}) {
  return (
    <div>
      <div className="flex flex-col max-w-screen-xl overflow-hidden bg-slate-900 border border-sky-500 rounded-xl lg:flex-row sm:mx-auto duration-300 transform hover:-translate-y-2 hover:border-2">
        <div className="relative lg:w-1/2">
          <img
            src={urlFor(data.mainImage).url()}
            alt={data.title}
            className="object-contain w-full h-full lg:h-96 p-5"
          />
        </div>
        <div className="flex flex-col justify-center p-8 bg-slate-900 lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block mb-4 text-md font-semibold tracking-wider text-sky-500 uppercase">
              {data.subtitle}
            </p>
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-none sm:text-4xl text-slate-200">
            {data.title}
          </h2>
          <div className="mb-5 text-slate-200">
            <PortableText
                // Pass in block content straight from Sanity.io
                content={data.body}
                projectId="1yohlwwu"
                dataset="production"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
                serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => <li className="special-list-item">{children}</li>,
                    someCustomType: Work,
                }}
            />
          </div>
          <div className="flex">
            <a href={data.link} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-slate-200 transition duration-200 rounded-lg shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none">
                <FaArrowAltCircleRight className="mr-2"/> Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Work