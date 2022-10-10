import React, {useState, useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import CreateForm from './CreateForm';
import Filter from './Filter'
import api from './api';


const App = () => {
  const [item, setItem] = useState([]);
  const [created, setCreated] = useState();
  const [removed, setRemoved] = useState();
  const [filter, setFilter] = useState("all");

  const refresh = () => {
    const data = api.loadFilteredData(filter);
    setItem(data);
    console.log(api.loadData());
  }

  useEffect(() => {
    if(created) {
      api.add(created);
      refresh();
    }
  }, [created]);

  useEffect(() => {
    if(typeof(removed) === "number") {
      api.remove(removed);
      refresh();
    }
  }, [removed]);
  
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
          {
            item.length ?
            item.map(({ id, priority, title, content, dueDate }) => 
            <Feed key={id} id={id} priority={priority} title={title} content={content} dueDate={dueDate} removed={removed} setRemoved={setRemoved} />)
            : <p>ToDo List Empty!</p>
          }
        </div>
      </div>
      
    </div>
  );
};

export default App;
