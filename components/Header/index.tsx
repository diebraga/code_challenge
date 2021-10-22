import styles from './styles.module.scss'

type HeaderProps = {
  onOpenModal: () => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <h1>My Team</h1>
      </div>
      <div>
        <button className='button-ui' onClick={onOpenModal}>Import Team</button>
      </div>
    </div>
  )
}
