import styles from './styles.module.scss'
import { Button, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { CsvParser } from '../CsvParser';

export function PlayerData() {
  const inputFile = useRef(null) 

  const activeInput = () => {
    inputFile.current.click();
  };

  return (
    <div className={styles.content}>
      <div>
        <p>Team Name</p>
        <Input variant='filled' boxShadow='lg' background='transparent' _hover={{ bg: 'transparent' }} w='200px'/>
      </div>
      <div>
        <p>File</p> 
        <Button variant='outline' colorScheme='gray' _hover={{ bg: 'transparent' }} color='blue.500' onClick={activeInput}>
          Select file
        </Button>
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        <CsvParser />
      </div>
    </div>
  )
}
