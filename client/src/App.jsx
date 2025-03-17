import React from "react";
import TodoApp from "./components/TodoApp";
import DateTime from "./components/DateTime";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="min-h-screen bg-primary-background-color text-primary-text-color flex flex-col">
      <ThemeToggle />
      <header>
        <Quotes />
      </header>
      <main>
        <div className="container mx-auto px-4 py-8 flex-grow">
          <DateTime />
          <TodoApp />
        </div>
      </main>
        <Footer />
    </div>
  );
}

export default App;
