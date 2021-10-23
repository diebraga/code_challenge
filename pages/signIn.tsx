import { Flex, Button, Stack, useToast, useColorMode, Input, FormLabel } from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form";
import Head from 'next/head'
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

type SignFormData = {
  email: string
  password: string
}

export default function Signin() {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm({ mode: 'all' })

  const router = useRouter()
  const toast = useToast()

  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.800' }

  const handleSignIn: SubmitHandler<SignFormData> = async (value) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier: value.email,
        password: value.password,
      })
    })
    const data = await response.json()
    if (data.error) {
      if (data.message[0].messages[0].message) {
        toast({
          title: "Erro.",
          description: data.message[0].messages[0].message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        toast({
          title: "Erro.",
          description: "Error.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      }
    } 

    if (data.user) {
      setCookie(null, 'jwt', data.jwt , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      router.push('/')  
    }
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Login page dash.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w='100vw' h='100vh' align='center' justify='center'>
        <Flex
          as='form' 
          w='100%' 
          maxW={360} 
          bg={bgColor[colorMode]}
          p='8' 
          borderRadius={8}
          flexDir='column'
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing='4'>
            <FormLabel>
              Email
              <Input  {...register("email", { required: true })}/>

            </FormLabel>
            <FormLabel>
              Password
              <Input  {...register("password", { required: true })}/>

            </FormLabel>
          </Stack>
          <Button type='submit' mt='6' colorScheme='blue' size='lg' isLoading={isSubmitting}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

