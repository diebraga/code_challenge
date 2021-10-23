import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import Header from '../components/Header/index'
import { ModalImporter } from '../components/ModalImporter'
import { TeamTable } from '../components/TeamTable'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  function onOpenModal() {
    setShowModal(true)
  }

  function onCloseModal() {
    setShowModal(false)
  }

  return (
    <div className='pageWrapper'>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onOpenModal={onOpenModal}/>
      <TeamTable />
      <ModalImporter showModal={showModal} onCloseModal={onCloseModal}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const jwt = parseCookies(ctx).jwt

  if (!jwt) {
    return { 
      redirect: {
        destination: '/signIn',
        permanent: false
      }
    }
  }

  return {
    props: {
			jwt: jwt,
		}, 
  }
}
