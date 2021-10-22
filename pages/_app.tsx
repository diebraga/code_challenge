import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/swrFetcher'
import { Provider } from "next-auth/client"
import '../styles/global.scss'
import { TeamProvider } from '../contexts/teamContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <Provider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <TeamProvider>
            <Component {...pageProps} />
          </TeamProvider>
        </SWRConfig>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
