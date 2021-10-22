import styles from './styles.module.scss'
import { Input } from '@chakra-ui/react'
import { CsvParser } from '../CsvParser';
import { useTeamContext } from '../../contexts/teamContext';

export function PlayerData() {
  const { setTeamName, teamName } = useTeamContext()
  
  return (
    <div className={styles.content}>
      <div>
        <p>Team Name</p>
        <Input variant='filled' boxShadow='lg' background='transparent' _hover={{ bg: 'transparent' }} w='200px' value={teamName} onChange={e => setTeamName(e.target.value)}/>
      </div>
      <div>
        <p>File</p> 
        <CsvParser />
      </div>
    </div>
  )
}
