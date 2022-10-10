import React, {useState, useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import CreateForm from './CreateForm';
import Filter from './Filter'

const App = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    //console.log(filter);
  }, [filter]);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr />
      <div id="Form">
        <div className='CreateForm'>
          <h2>Add ToDo</h2>
          <CreateForm />
        </div>        
      </div>

      <div id="List">
        <Filter selected={filter} setSelected={setFilter} />
        <div className="FeedList">
          <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
          <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
          <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
          <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
          <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
          <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
          <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
          <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
          <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
          <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />
          <Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
          <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
        </div>
      </div>
      
    </div>
  );
};

export default App;
