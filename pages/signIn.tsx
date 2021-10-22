import { Flex, Button, Stack, Text, Center, InputRightElement, IconButton, InputGroup, Icon, useToast, useColorMode } from '@chakra-ui/react'
import styles from './signIn.module.scss'
import { signIn, useSession, signOut } from 'next-auth/client'
import { GrGithub } from 'react-icons/gr'
import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/dist/client/router'

export default function SignIn() {
  const [session] = useSession()
  const router = useRouter()
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
    <Flex
      w='100%' 
      maxW={360} 
      p='8' 
      borderRadius={8}
      flexDir='column'
    >
      {!session ? (
      <Button mt='6' colorScheme='blue' size='lg' w='300px' onClick={() => signIn('github')}>
        Login with github <Icon as={FaGithub} ml='4'/>
      </Button>
      ) : (
      <>
      <Button mt='6' colorScheme='blue' size='lg' w='300px' onClick={() => signOut()}>
        {session?.user.email} <Icon as={FiX} ml='4'/>
      </Button>
      <Button mt='6' colorScheme='blue' size='lg' w='300px' onClick={() => router.push('/')}>
        Go to dashboard
      </Button>
      </>
      )}
    </Flex>
  </Flex>

  )
}
