import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { Difficulty } from '../../pages/Minesweeper/Types'

type GridState = {
  difficulty: Difficulty
}

const initialState: GridState = {
  difficulty: 'easy',
}

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateDifficultyAction: (state, action: PayloadAction<Difficulty>) => ({
      ...state,
      difficulty: action.payload,
    }),
  },
})

export const { updateDifficultyAction } = gridSlice.actions

export const selectGridState = (rootState: { grid: GridState }): GridState =>
  rootState.grid

export default gridSlice.reducer
