import { Button } from '@chakra-ui/react'
import styles from './styles.module.scss'

type ModalFooterProps = {
  formStep: number
  prevStep: () => void
  nextStep: () => void
}

export function ModalFooter({ formStep, prevStep, nextStep }: ModalFooterProps) {
  return (
    <footer className={styles.footer}>
      <div>
        {formStep > 0 && <Button variant='outline' color='gray.800' onClick={prevStep}>Return</Button>}
        <Button color='#fff' bg='#1371FE' ml='5' onClick={nextStep}>Continue</Button>
      </div>
    </footer>
  )
}
