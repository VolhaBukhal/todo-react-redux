import { MouseEvent } from 'react'

import { useAppDispatch } from '@/hooks/redux.hooks'
import { setFilter } from '@/store/filtersSlice'
import { Filters } from '@/types/types'

const filters = ['All', 'Active', 'Done']

export const TodoFilters = () => {
  const dispatch = useAppDispatch()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const curBtn = event.currentTarget.textContent
    if (curBtn) {
      dispatch(setFilter(curBtn as Filters))
    }
  }

  return (
    <div>
      {filters.map((btn) => (
        <button key={btn} onClick={handleClick}>
          {btn}
        </button>
      ))}
    </div>
  )
}
