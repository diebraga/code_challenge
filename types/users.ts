export type Users = {
  id: string
  name: string
  email: string
  teamName: string
  favouriteName: string
  players: Players[]
}

type Players = {
  height: string
  jersey_number: string
  nationality: string
  player_name: string
  position: string
  weight: string
}
