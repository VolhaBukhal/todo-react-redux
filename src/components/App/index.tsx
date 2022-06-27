import { TodoList } from '@/components/TodoList'
import { TodoInput } from '@/components/TodoInput'
import { TodoFilters } from '@/components/TodoFilters'

import { StyledApp, StyledHeading } from './components'

export const App = () => {
  return (
    <StyledApp>
      <StyledHeading>TODO list</StyledHeading>
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </StyledApp>
  )
}
