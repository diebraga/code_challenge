import { getUserMe } from '../../hooks/users'
import styles from './styles.module.scss'

type HeaderProps = {
  onOpenModal: () => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  const { userMe } = getUserMe()

  return (
    <div className={styles.headerWrapper}>
      <div>
        <h1>{!userMe?.teamName ? 'My Team' : userMe?.teamName}</h1>
      </div>
      <div>
        <button className='button-ui' onClick={onOpenModal}>Import Team</button>
      </div>
    </div>
  )
}
