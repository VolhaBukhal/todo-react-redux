import { TodoList } from '@/components/TodoList'
import { TodoInput } from '@/components/TodoInput'

import { useAppSelector } from '@/hooks/redux.hooks'

export const App = () => {
  const { tasks } = useAppSelector((state) => state.todos)

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
      <TodoList tasks={tasks} />
    </div>
  )
}
