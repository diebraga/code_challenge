import { Button } from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import { Dispatch } from 'react'
import { useForm } from 'react-hook-form'
import { useTeamContext } from '../../contexts/teamContext'
import { getUserById, getUserMe } from '../../hooks/users'
import styles from './styles.module.scss'

type ModalFooterProps = {
  formStep: number
  prevStep: () => void
  nextStep: () => void
  closesModalAndClearStates: () => void
}

export function ModalFooter({ formStep, prevStep, nextStep, closesModalAndClearStates }: ModalFooterProps) {
  const { 
    fileName, 
    teamName, 
    favouritePlayer, 
  } = useTeamContext()
  const { userMe, mutateMe } = getUserMe()
  const { mutateUser } = getUserById(userMe?.id)
  const { team } = useTeamContext()
  const { handleSubmit, formState: { isSubmitting } } = useForm()

  const jwt = parseCookies().jwt

  async function updateUser() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/${userMe?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        teamName: teamName,
        favouriteName: favouritePlayer,
      })
    })
    if (response.ok) {
      mutateMe()
      nextStep()
    }
  }

  async function handlePostPlayers() {
    {team.map(async (item) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          height: String(item.height),
          jersey_number: String(item.jersey_number),
          nationality: item.nationality,
          player_name: item.player_name,
          position: item.position,
          weight: String(item.weight),
          user: userMe?.id
        })
      })
      if (response.ok) {
        mutateUser()
        setTimeout(() => {
          closesModalAndClearStates()
        }, 3000);
      }
    })}
  }

  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit(formStep === 1 ? updateUser : handlePostPlayers)}>
        {formStep > 0 && <Button variant='outline' color='gray.800' onClick={prevStep}>Return</Button>}
        {formStep === 0 && (
        <Button 
          color='#fff' 
          bg='#1371FE' 
          ml='5' 
          type='button'
          onClick={nextStep} 
          disabled={fileName === '' || teamName === '' }>
          Continue
        </Button>
        )}
        {formStep > 0 && (
        <Button 
          color='#fff' 
          bg='#1371FE' 
          ml='5' 
          type='submit' 
          isLoading={isSubmitting}
          disabled={favouritePlayer === '' }>
          Continue
        </Button>
        )}
      </form>
    </footer>
  )
}
