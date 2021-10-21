import styles from './styles.module.scss'

export function TeamTable() {
  return (
    <table className={styles.tableWrapper}>
      <tr className={styles.headWrapper}>
        <th>Player Name</th>
        <th>Jersey Number</th>
        <th>Position</th>
        <th>Nationality</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Status</th>
      </tr>
      <tr className={styles.bodyWrapper}>
        <td>Alfreds Futterkiste</td>
        <td>9</td>
        <td>Foward</td>
        <td>German</td>
        <td>1.90</td>
        <td>90kg</td>
        <td>Avalible</td>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>9</td>
        <td>Foward</td>
        <td>German</td>
        <td>1.90</td>
        <td>90kg</td>
        <td>Avalible</td>
      </tr>
    </table>
  )
}
