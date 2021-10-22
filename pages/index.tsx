import { useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header/index'
import { ModalImporter } from '../components/ModalImporter'
import { TeamTable } from '../components/TeamTable'

export default function Home() {
  const [session, isLoading] = useSession()
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/signIn')
    }
  }, [session])

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
