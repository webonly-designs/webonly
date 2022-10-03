import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { createClient } from "next-sanity"
import { Toaster } from 'react-hot-toast'

export default function Home({works}) {
  console.log(works)
  return (
    <div className="bg-gray-900">
      
      <Head>
        <title>WebOnly | Web Design And Development Winnipeg</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="description" content="We are a Winnipeg based web design agency with a goal to help local and small businesses make an online presence at affordable pricing." />
        <meta property="og:title" content="Webony | Web Design And Developemnt Winnipeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webonly.dev/" />
        <meta property="og:description" content="We are a Winnipeg based web design agency with a goal to help local and small businesses make an online presence at affordable pricing." />
        <meta property="og:image" content="/webonly.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="WebOnly" />
        <meta name="google-site-verification" content="EdhjxmhJC7aOfw6A3X1fnOTsqLW7jIkROn68oe6UXPk" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Toaster />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio works={works} />
        <Contact />
      </main>
      <Footer />
    
    </div>
  )
}

export async function getServerSideProps() {
  const client = createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:"production",
    useCdn:false
  })
  const query = `*[_type == 'post']`
  const works = await client.fetch(query)
  return { 
    props: { 
      works
    }
  }
}
