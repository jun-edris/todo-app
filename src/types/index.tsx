export type TodoType = {
    title: string
    desc: string
}

  export type TodosType = { todos: TodoType[] }

  export type Action = {
    addTodo: (title: string, desc: string) => void;
  }