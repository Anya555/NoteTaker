// making class Store to handle reading and writing data
class Store {
  constructor(title, text) {
    (this.title = title), (this.text = text);
  }
}

module.exports = Store;
