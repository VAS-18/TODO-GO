import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

function TodoApp() {
  const queryClient = useQueryClient();
  const { theme } = useTheme();
  const [newTodo, setNewTodo] = useState();
  const [result, setResult] = useState([]);


  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todos");
        setResult(response.data);
        return response.data;
      } catch (error) {
        throw new Error(error.message || "Something went wrong");
      }
    },
  });

  const handleUpdateTodo = useMutation({
    mutationFn: async (updatedTodo) => {
      const result = await axios.patch(`http://localhost:5000/api/todos/${updatedTodo._id}`, updatedTodo);
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  })

  const toggleComplete = (todo) => {
    const updatedTodo = { ...todo }
    if (updatedTodo.completed == false) {
      updatedTodo.completed = !updatedTodo.completed;
    }
    if (updatedTodo.completed == true) {
      updatedTodo.completed = !updatedTodo.completed;
    }
    handleUpdateTodo.mutate(updatedTodo);

    console.log(updatedTodo.body + updatedTodo.completed);
  }

  const handleCreateTodo = async (e) => {
    e.preventDefault();


  };

  return (
    <div className="container">
      <div className="flex justify-center items-center mt-6 sm:mt-10 md:mt-10">
        <div class="relative w-full max-w-sm">
          <form onSubmit={handleCreateTodo}>
            <input
              type="text"
              name="todo"
              placeholder="Add a Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
            />
            <button
              type="submit"
              className={`absolute inset-y-0 right-0 flex items-center px-3 rounded-r-md focus:ring-2 hover:cursor-pointer ${theme === "dark"
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-900"
                }`}
            >
              <Plus
                className={`w-5 h-5 ${theme === "dark" ? "text-black" : "text-white"
                  }`}
              />
            </button>
          </form>
        </div>
      </div>
      {/* todo list */}
      <div className="container max-w-lg mx-auto">
        {result.map((todo) => (
          <div className="flex justify-between items-start p-3 border-b" key={todo.id}>
            <div className="flex flex-col">
              <div className={`text-base ${todo.completed ? "line-through text-gray-500" : ""}`}>
                {todo.body}
              </div>
              <div className="flex gap-3 mt-1 text-xs text-gray-500">
                <span>{new Date(todo.createdAt).toLocaleString()}</span>
                <span className={`font-medium ${todo.priority === "high" ? "text-red-500" :
                    todo.priority === "medium" ? "text-yellow-500" : "text-green-500"
                  }`}>
                  {todo.priority}
                </span>
              </div>
            </div>
            <button
              onClick={() => toggleComplete(todo)}
              className={`w-5 h-5 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-200 cursor-pointer ${todo.completed
                  ? `${theme === "dark" ? "bg-white" : "bg-black"}`
                  : `bg-transparent ${theme === "dark" ? "border border-white" : "border border-black"}`
                }`}
              aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {todo.completed && (
                <div className={`w-3 h-3 ${theme === "dark" ? "bg-black" : "bg-white"} rounded-full`}></div>
              )}
            </button>
          </div>
        ))}
      </div>

    </div>


  );
}

export default TodoApp;
