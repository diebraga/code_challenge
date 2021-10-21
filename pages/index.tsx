import Head from 'next/head'
import MotionBox from '../components/MotionBox'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionBox
        animate={{ y: 50, scale: 0.97, }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[280, 400]}
        marginX="auto"          
      >
        <h1>Start</h1>
          <div>
            🚀
          </div>
      </MotionBox>
    </>
  )
}
