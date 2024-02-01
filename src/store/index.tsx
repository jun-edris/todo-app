import { Action, TodoType, TodosType } from '@/types'
import { create } from 'zustand'


export const useTodoStore = create<TodosType & Action>((set) => ({
    todos: [],
    addTodo: (title, desc) => {
        set((prev) => ({
          todos: [
            ...prev.todos,
            { title, desc } as TodoType,
          ],
        }));
    },
}))

