import { TodoList } from '@/components/TodoList'
import { TodoInput } from '@/components/TodoInput'
import { TodoFilters } from '@/components/TodoFilters'

export const App = () => {
  return (
    <div
      className="container"
      style={{
        width: '600px',
        margin: '20px auto',
        backgroundColor: 'lightseagreen',
      }}
    >
      To do list
      <TodoInput />
      <TodoFilters />
      <TodoList />
    </div>
  )
}
