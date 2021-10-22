import { useTeamContext } from '../../contexts/teamContext'
import styles from './styles.module.scss'

export function FavouritePlayer() {
  const { team, setFavouritePlayer } = useTeamContext()

  return (
    <div className={styles.container}>
    <p>Select a Favourite</p>
    <table className={`${styles.tableWrapper}`} >
      <tr className={styles.headWrapper}>
        <th>Player Name</th>
        <th>Jersey Number</th>
        <th>Position</th>
        <th>Nationality</th>
        {/* <th>Status</th> */}
      </tr>
      {team.map((player, index) => {
        return (
          <tr className="card" tabIndex={0} key={index} onClick={() => setFavouritePlayer(player.player_name)}>
            <td className={styles.card}>{player.player_name}</td>
            <td>{player.jersey_number}</td>
            <td>{player.position}</td>
            <td>{player.nationality}</td>
            {/* <td>{player.height}</td> */}
          </tr>
        )
      })}
    </table>
    </div>
  )
}
