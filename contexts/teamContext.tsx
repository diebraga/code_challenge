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
}

export const TeamContext = createContext({} as TeamPContextProps)

export function TeamProvider({ children }: TeamProviderProp) {
  const [team, setTeam] = useState<Team[]>([])
  
  return(
    <TeamContext.Provider value={{
      team,
      setTeam
    }}>
      {children}
    </TeamContext.Provider>
  )
}

export function useTeamContext() {
  const context = useContext(TeamContext)

  return context
}
