import styled from '@emotion/styled'
import Head from 'next/head'
import Header from '../components/Header/index'
import MotionBox from '../components/MotionBox'
import { TeamTable } from '../components/TeamTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TeamTable />
    </>
  )
}
