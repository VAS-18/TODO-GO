import React from 'react';
import TodoApp from './components/TodoApp';
import DateTime from './components/DateTime';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

function App() {
  return (
      <div className="min-h-screen bg-primary-background-color text-primary-text-color">
        <ThemeToggle/>
        <div className="container mx-auto px-4 py-8">
          <DateTime />
          <TodoApp />
          <Footer/>
        </div>        
      </div>
  );
}

export default App;
