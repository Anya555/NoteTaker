// making class Store to handle reading and writing data
class Store {
  constructor(title, text) {
    this.id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    this.title = title;
    this.text = text;
  }
}

module.exports = Store;
