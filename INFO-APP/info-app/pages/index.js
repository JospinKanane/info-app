import Head from 'next/head'
// import Categories from '../components/Categories'
// import PostWeidget from '../components/PostWeidget'
// import PostCard from '../components/PostCard'

export default function Home({posts}) {
  return (
    <div className="Container mx-auto px-0 mb-0 w-full">
      <Head>
        <title>7Empire</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" />
      </Head>
      <div className='body grid grid-rows-4 grid-cols-5 gap-x-30'>
        <div className='post-container row-start-1 row-span-4	col-span-3'>
        </div>
        <div className='aside row-start-1 row-span-4 col-span-2 p-50'>
          <div className='recent-post'>
          </div>
        </div>
      </div>
    </div>
  )
}