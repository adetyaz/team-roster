import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	teamSheet: [],
}

const teamSlice = createSlice({
	name: 'teamsheet',
	initialState,
	reducers: {
		addTeamData: (state, action) => {
			state.teamSheet.push(action.payload)
		},
		reset: (state) => {
			state.teamSheet = []
		},
	},
})
