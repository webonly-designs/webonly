import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { createClient } from "next-sanity"
import { Toaster } from 'react-hot-toast'
import About from '../components/About'

export default function Home({works}) {
  console.log(works)
  return (
    <div className="bg-gray-900">
      
      <Head>
        <title>WebOnly | Web Design Winnipeg | Web Development Winnipeg</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="site_locale" content="en"/>
        <meta name="Keywords" content="Brand Strategy, Web Design, Web Development, Digital Marketing, SEO, Graphic Design, Web Hosting, Winnipeg,, Canada"/>
        <meta name="Description" content="Webonly is a Winnipeg based web design agency with a goal to help local and small businesses make an online presence at affordable pricing." />
        <meta property="og:title" content="Webony | Web Design Winnipeg | Web Development Winnipeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webonly.dev/" />
        <meta property="og:description" content="Webonly is a Winnipeg based web design agency with a goal to help local and small businesses make an online presence at affordable pricing." />
        <meta property="og:image" content="/webonly.png" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="WebOnly" />
        <meta name="google-site-verification" content="EdhjxmhJC7aOfw6A3X1fnOTsqLW7jIkROn68oe6UXPk" />
        <meta property="og:locality" content="Winnipeg"/>
        <meta property="og:region" content="Manitoba"/>
        <meta property="og:postal_code" content="R3Y 1T7"/>
        <meta property="og:country_name" content="Canada"/>
        <meta property="og:email" content="webonly.designs@gmail.com"/>
        <meta property="og:phone_number" content="204-869-8510"></meta>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Toaster />
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
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
