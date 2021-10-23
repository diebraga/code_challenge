import styles from './styles.module.scss'
import { IoIosClose } from 'react-icons/io'
import { PlayerData } from './PlayerData'
import { ModalFooter } from './ModalFooter'
import { FormEvent, useState } from 'react'
import { FavouritePlayer } from './FavouritePlayer'
import { Summary } from './Summary'
import { Icon, StarIcon } from '@chakra-ui/icons'
import { FaUpload } from 'react-icons/fa'
import { BiListUl } from 'react-icons/bi'
import { useTeamContext } from '../../contexts/teamContext'
import { getUserMe } from '../../hooks/users'

type ModalImporterProps = {
  showModal: boolean
  onCloseModal: () => void
}

export function ModalImporter({ showModal, onCloseModal }: ModalImporterProps) {
  const [formStep, setFormStep] = useState(0)
  const { setFavouritePlayer, setTeam, setTeamName, setfileName } = useTeamContext()

  function closesModalAndClearStates() {
    onCloseModal()
    setFavouritePlayer('')
    setTeamName('')
    setTeam([])
    setfileName('')
    setFormStep(0)
  }
  function nextStep() {
    setFormStep(formStep + 1)
  }

  function prevStep() {
    setFormStep(formStep - 1)
  }

  const activeStyles = {
    background: '#1371FE',
    color: '#fff'
  }

  const inactiveStyles = {
    background: '#E5E5E5',
    color: '#181b1e'
  }

  return (
    <>
    {showModal && (
    <div className={styles.modalImporterWrapper}>
    <div className={styles.modal}>
      <div className={styles.header}>
        <div>
          <p>Importer</p>
        </div>
        {/* @ts-ignore */}
        <div onClick={closesModalAndClearStates}>
          <IoIosClose size='40'/>
        </div>
      </div>
    
      <div className={styles.stepsNav}>
        <div className={styles.col} style={formStep === 0 ? activeStyles : inactiveStyles}>
          <span><Icon as={FaUpload}/> &nbsp; Team Data</span>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.col} style={formStep === 1 ? activeStyles : inactiveStyles}>
          <span><StarIcon/> &nbsp; Favourite</span>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.col} style={formStep === 2 ? activeStyles : inactiveStyles}>
          <span><Icon fontSize='2xl' as={BiListUl}/> &nbsp; Summary</span>
          <div className={styles.arrow}></div>
        </div>
      </div>
      {formStep === 0 && <PlayerData />}
      {formStep === 1 && <FavouritePlayer />}
      {formStep === 2 && <Summary />}
      <ModalFooter formStep={formStep} nextStep={nextStep} prevStep={prevStep} closesModalAndClearStates={closesModalAndClearStates} />
    </div>
  </div>
    )}
    </>
  )
}
