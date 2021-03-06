import { MouseEvent } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks'
import { setFilter } from '@/store/filtersSlice'
import { Filters } from '@/types/types'

import { FiltersPanel, FilterButton } from './components'

const filters = ['All', 'Active', 'Done']

export const TodoFilters = () => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector((state) => state.filters)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const curBtn = event.currentTarget.textContent
    if (curBtn) {
      dispatch(setFilter(curBtn as Filters))
    }
  }

  return (
    <FiltersPanel>
      {filters.map((btn) => (
        <FilterButton active={filter === btn} key={btn} onClick={handleClick}>
          {btn}
        </FilterButton>
      ))}
    </FiltersPanel>
  )
}
