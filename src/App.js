import React from 'react';
import './App.css';
import Feed from './Feed';
import Create from './Create';

const App = () => {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr />
      <div id="Create">
        <h2>Add ToDo</h2>
        <Create />
      </div>

      <div id="List">
        <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
        <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
        <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
        <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
        <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
        <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" /><Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
        <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
        <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" /><Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
        <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
        <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
      </div>
      
    </div>
  );
};

export default App;
