import { MouseEvent } from 'react'
import { observer } from 'mobx-react-lite'

import todoStore from '@/store/todo'

import { Filters } from '@/types/types'

import { FiltersPanel, FilterButton } from './styles'

export const TodoFilters = observer(() => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const curBtn = event.currentTarget.textContent
    if (curBtn) {
      todoStore.setFilter(curBtn as Filters)
    }
  }

  return (
    <FiltersPanel>
      {Object.values(Filters).map((btn) => (
        <FilterButton
          active={todoStore.filter === btn}
          key={btn}
          onClick={handleClick}
        >
          {btn}
        </FilterButton>
      ))}
    </FiltersPanel>
  )
})
