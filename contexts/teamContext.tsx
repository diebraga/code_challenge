import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface TeamProviderProp {
  children: ReactNode
}

type Team = {
  height: string
  jersey_number: string
  nationality: string
  player_name: string
  position: string
  weight: string
}

interface  TeamPContextProps {
  team: Team[]
  setTeam: Dispatch<SetStateAction<Team[]>>
  teamName: string
  setTeamName: Dispatch<SetStateAction<string>>
  fileName: string
  setfileName: Dispatch<SetStateAction<string>>
  favouritePlayer: string
  setFavouritePlayer: Dispatch<SetStateAction<string>>
}

export const TeamContext = createContext({} as TeamPContextProps)

export function TeamProvider({ children }: TeamProviderProp) {
  const [team, setTeam] = useState<Team[]>([])
  const [teamName, setTeamName] = useState('')
  const [fileName, setfileName] = useState('')
  const [favouritePlayer, setFavouritePlayer] = useState('')
console.log(favouritePlayer)
  return(
    <TeamContext.Provider value={{
      team,
      setTeam,
      teamName, 
      setTeamName,
      fileName, 
      setfileName,
      favouritePlayer, 
      setFavouritePlayer
    }}>
      {children}
    </TeamContext.Provider>
  )
}

export function useTeamContext() {
  const context = useContext(TeamContext)

  return context
}
