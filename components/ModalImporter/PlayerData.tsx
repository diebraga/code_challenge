import styles from './styles.module.scss'
import { Button, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { CsvParser } from '../CsvParser';

export function PlayerData() {

  return (
    <div className={styles.content}>
      <div>
        <p>Team Name</p>
        <Input variant='filled' boxShadow='lg' background='transparent' _hover={{ bg: 'transparent' }} w='200px'/>
      </div>
      <div>
        <p>File</p> 
        <CsvParser />
      </div>
    </div>
  )
}
