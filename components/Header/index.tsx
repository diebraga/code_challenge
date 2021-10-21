import styles from './styles.module.scss'

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <h1>My Team</h1>
      </div>
      <button className='button-ui'>Import Team</button>
    </div>
  )
}
