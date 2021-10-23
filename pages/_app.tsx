import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/swrFetcher'
import '../styles/global.scss'
import { TeamProvider } from '../contexts/teamContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <SWRConfig value={{ fetcher }}>
        <TeamProvider>
          <Component {...pageProps} />
        </TeamProvider>
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
