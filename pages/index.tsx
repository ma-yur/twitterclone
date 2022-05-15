import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* sidebar */}
        <SideBar />
        {/* newsfeed */}
        {/* extra sideBar */}
      </main>
    </div>
  )
}

export default Home
