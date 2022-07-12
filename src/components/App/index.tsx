import { TodoList } from '@/components/TodoList'
import { TodoInput } from '@/components/TodoInput'
import { TodoFilters } from '@/components/TodoFilters'

import { StyledApp, StyledHeading } from './styles'

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
