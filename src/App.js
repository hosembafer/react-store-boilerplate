import React from 'react';
import './App.css';
import TodoList from 'components/TodoList/TodoList';
import Messages from 'components/Messages/Messages';

function App() {
  return (
    <div className="App">
      <TodoList />
      <Messages />
    </div>
  );
}

export default App;
