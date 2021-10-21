import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/swrFetcher'
import { Provider } from "next-auth/client"
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <Provider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
