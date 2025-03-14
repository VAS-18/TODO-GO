import React, { useState, useEffect } from "react";
import { Plus } from 'lucide-react';

function TodoApp() {
  const handleCreateTodo = async () => {};

  return (
    <div className="flex justify-center items-center">
      <div class="relative w-full max-w-sm">
  <form onSubmit={handleCreateTodo}>
    <input
      type="text"
      name="todo"
      placeholder="Add a Todo"
      class="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
    />
    <button
      type="submit"
      class="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-black rounded-r-md hover:bg-gray-900 focus:ring-2 hover:cursor-pointer"
    >
      <Plus class="w-5 h-5" />
    </button>
  </form>
</div>

    </div>
  );
}

export default TodoApp;
