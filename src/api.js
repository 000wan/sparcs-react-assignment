const dataFactory = (id, priority, title, content, dueDate) => {
  return { id, priority, title, content, dueDate }
};

const api = {
  _data: [
    dataFactory(0, "high", "React Assignment", "2022 Fall SPARCS newbie seminar", "2022-10-16"),
    dataFactory(1, "mid", "Midterm Exam", "Fall-semester midterm", "2022-10-21"),
    dataFactory(2, "low", "Halloween", "Happy Halloween!", "2022-10-31")
  ],
  loadData () {
    return this._data;
  },

  _latestID: 2,
  get latestID() {
    return this._latestID;
  },
  set latestID(id) {
    this._latestID = id;
  },

  loadFilteredData (filter) {
    if(filter === "all") {
      return this._data.filter(() => true);
    }
    else {
      return this._data.filter(({priority}) => priority===filter);
    }
  },
  add (element) {
    this.latestID++;
    element.id = this.latestID;
    this._data.push(element);
  },
  remove (removedID) {
    this._data = this._data.filter(({id}) => id !== removedID);
  }
}

export default api;
