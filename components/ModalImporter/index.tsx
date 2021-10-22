import styles from './styles.module.scss'
import { IoIosClose } from 'react-icons/io'
import { PlayerData } from './PlayerData'

type ModalImporterProps = {
  showModal: boolean
  onCloseModal: () => void
}

export function ModalImporter({ showModal, onCloseModal }: ModalImporterProps) {
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
        <div onClick={onCloseModal}>
          <IoIosClose size='40'/>
        </div>
      </div>
    
      <div className={styles.stepsNav}>
        <div className={styles.col}>
          <span>Team Data</span>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.col}>
          <span>Favourite</span>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.col}>
          <span>Summary</span>
          <div className={styles.arrow}></div>
        </div>
      </div>
      
      <PlayerData />
    </div>
  </div>
    )}
    </>
  )
}
