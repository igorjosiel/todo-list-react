import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [showDialog, setShowDialog] = useState(false);
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }

    setShowDialog(true);
  }

  const closeFormTodoDialog = () => {
    setShowDialog(false);

    setSelectedTodo(null);
  }

  const addTodo = (formData) => {
    const title = formData.get("title");
    const description = formData.get("description");

    setTodos(prevState => {
      const todo = {
        id: prevState.length + 1,
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
      }

      return [...prevState, todo];
    });
  }
    
  const toggleTodoCompleted = (todo) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed
          }
        }

        return t;
      });
    });
  }

  const editTodo = (formData) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id === selectedTodo.id) {
          return {
            ...t,
            title: formData.get("title"),
            description: formData.get("description"),
          }
        }

        return t;
      });
    });
  }
    
  const deleteTodo = (todo) => {
    setTodos(prevState => {
      return prevState.filter(t => t.id !== todo.id);
    });
  }

  const pendingTodos = () => {
    return todos.filter(todo => !todo.completed);
  }

  const completedTodos = () => {
    return todos.filter(todo => todo.completed);
  }

  return (
    <TodoContext
      value={{
        todos,
        pendingTodos,
        completedTodos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
