const dataFactory = (priority, title, content, dueDate) => {
  return { priority, title, content, dueDate }
};

const api = {
  _data: [
    dataFactory("high", "Hello, World!", "First Feed", "2022-10-10"),
    dataFactory("mid", "Hello, World!", "Second Feed", "2022-10-11"),
  ],
  loadData () {
    return this._data;
  },
  loadFilteredData (filter) {
    if(filter === "all") {
      return this.loadData().filter(() => true);
    }
    else {
      return this.loadData().filter(({priority}) => priority===filter);
    }
  },
  add ({priority, title, content, dueDate}) {
    this._data.push(
      dataFactory(priority, title, content, dueDate)
    );
  },
  remove () {

  }
}

export default api;
