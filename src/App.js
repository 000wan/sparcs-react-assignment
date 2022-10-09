import React from 'react';
import './App.css';
import Feed from './Feed';

const App = () => {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
      <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
      <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
    </div>
  );
};

export default App;
