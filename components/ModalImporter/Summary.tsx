import { useTeamContext } from '../../contexts/teamContext'
import styles from './styles.module.scss'

export function Summary() {
  const { teamName, team, fileName, favouritePlayer } = useTeamContext()
  return (
    <div className={styles.summContainer} style={{ padding: '30px' }}>
      <p>You're adding</p>
      <div className={styles.summWrapper}>
        <div>
          <h2>Team Name</h2>
          <p>{teamName}</p>
        </div>
        <div>
          <h2>Player data</h2>
          <p>{fileName}</p>
        </div>
        <div>
          <h2>Favourite Player</h2>
          <p>{favouritePlayer}</p>
        </div>
        <div>
          <h2>Starters</h2>
          <p>{team.length}</p>
        </div>
        <div>
          <h2>Active</h2>
          <p>00</p>
        </div>
        <div>
          <h2>Injured</h2>
          <p>00</p>
        </div>
      </div>
    </div>
  )
}
