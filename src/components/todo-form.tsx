"use client"

import { useTodoStore } from "@/store"
import { useState } from "react";

export default function TodoForm() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const {addTodo} = useTodoStore()

    // handle the change events for the input fields
  function handleTitleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  };

  function handleDescChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDesc(event.target.value);
  };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addTodo(title, desc);
        setTitle("")
        setDesc("")
    }
    return (
        <div className="container">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="Enter a todo title..." className="px-4 py-2 rounded-md w-full" />
            <textarea rows={5} name="desc" value={desc} onChange={handleDescChange} placeholder="Add description..." className="px-4 py-2 rounded-md w-full" />
            <button type="submit" className="bg-green-500 px-4 py-2 w-full rounded-md">Add Todo</button>
          </form>
        </div>
    )
}
