import useLocalStorage from 'hooks/useLocalStorage'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useAppState = () => useContext(AppContext)

export const AppStateProvider = ({ children }) => {
	const [teamName, setTeamName] = useState('My Team')
	const [teamSheet, setTeamSheet] = useLocalStorage('teamSheet', [])
	const [searchValue, setSearchValue] = useState('')

	const names = ['james', 'rick', 'pac', 'blue']
	const filteredNames = names.filter((player) =>
		player.toLowerCase().includes(searchValue.toLowerCase())
	)

	const addTeamSheet = () => {
		setTeamSheet()
	}

	const editPlayer = (id) => console.log(id)
	const deletePLayer = (id) => {
		setTeamSheet((prevTeam) => {
			return prevTeam.filter((player) => player.id !== id)
		})
	}

	return (
		<AppContext.Provider
			value={{
				teamName,
				setTeamName,
				searchValue,
				setSearchValue,
				filteredNames,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
