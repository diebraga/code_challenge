import { useTeamContext } from '../../contexts/teamContext'
import styles from './styles.module.scss'

export function FavouritePlayer() {
  const { team } = useTeamContext()
  console.log(team)
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
        <th>Status</th>
      </tr>
      {team.map((player, index) => {
        return (
          <tr className={styles.bodyWrapper} key={index} >
            <td>{player.player_name}</td>
            <td>{player.jersey_number}</td>
            <td>{player.position}</td>
            <td>{player.nationality}</td>
            <td>{player.height}</td>
            <td>{player.weight}</td>
            <td>{player.height}</td>
          </tr>
        )
      })}
    </table>
    </div>
  )
}
