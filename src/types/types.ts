export type ITask = {
  id: string
  text: string
  completed: boolean
}

export enum Filters {
  ALL = 'All',
  ACTIVE = 'Active',
  DONE = 'Done',
}
