import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Filters } from '@/types/types'

interface FiltersState {
  filter: Filters
}

const initialState: FiltersState = {
  filter: Filters.ALL,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filters>) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filtersSlice.actions

export default filtersSlice.reducer
