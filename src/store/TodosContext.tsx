import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setToDos] = useState<Todo[]>([]);

  function handleAddToDo(newToDoText : string) {
    if (newToDoText.trim().length === 0) {
      throw new Error("The entered text is empty.");
    }
    const newToDo = new Todo(newToDoText);
    setToDos((prevToDos) => {
      return prevToDos.concat(newToDo);
    });
  }

  function handleItemRemove(id: string) {
    console.log("handle item remove");
    setToDos((prevToDos) => {
      console.log(id);
      return prevToDos.filter((toDo) => toDo.id !== id);
    });
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddToDo,
    removeTodo: handleItemRemove,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
