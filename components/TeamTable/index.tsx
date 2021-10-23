import { getUserById, getUserMe } from '../../hooks/users'
import styles from './styles.module.scss'

export function TeamTable() {
  const { userMe } = getUserMe()
  const { user } = getUserById(userMe?.id)

  return (
    <div className={styles.container}>
    <table className={`${styles.tableWrapper}`} >
      <tr className={styles.headWrapper}>
        <th>Player Name</th>
        <th>Jersey Number</th>
        <th>Position</th>
        <th>Nationality</th>
        <th>Height</th>
        <th>Weight</th>
        {/* <th>Status</th> */}
      </tr>
      {user?.players?.map((player, index) => {
        return (
          <tr className="card" tabIndex={0} key={index}>
            <td className={styles.card}>{player.player_name}</td>
            <td>{player.jersey_number}</td>
            <td>{player.position}</td>
            <td>{player.nationality}</td>
            <td>{player.height}</td>
            <td>{player.weight}</td>
          </tr>
        )
      })}
    </table>
    </div>
  )
}
