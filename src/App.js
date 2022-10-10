import React, {useState, useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import CreateForm from './CreateForm';
import Filter from './Filter'
import api from './api';


const App = () => {
  const [item, setItem] = useState([]);
  const [created, setCreated] = useState();
  const [filter, setFilter] = useState("all");

  const refresh = () => {
    const data = api.loadFilteredData(filter);
    setItem(data);
  }

  useEffect(() => {
    if(created) {
      api.add(created);
      refresh();
    }
  }, [created]);
  
  useEffect(() => {
    refresh();
  }, [filter]);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr />
      <div id="Form">
        <div className='CreateForm'>
          <h2>Add ToDo</h2>
          <CreateForm submit={created} setSubmit={setCreated} />
        </div>        
      </div>

      <div id="List">
        <Filter selected={filter} setSelected={setFilter} />
        <div className="FeedList">
          {/*<Feed priority="mid" title="Hello, World!" content="Second Feed" dueDate="2022/10/10" />
          <Feed priority="low" title="Hello, World!" content="Third Feed" dueDate="2022/10/10" />
          <Feed priority="high" title="Hello, World!" content="First Feed" dueDate="2022/10/10" />*/}
          {
            item.map(({ priority, title, content, dueDate }) => 
            <Feed priority={priority} title={title} content={content} dueDate={dueDate} key={title+','+dueDate} />
            )
          }
        </div>
      </div>
      
    </div>
  );
};

export default App;
