// making class Store to handle reading and writing data
class Store {
  constructor(title, text) {
  //Math.random method will generate random id for each note,so I can view and delete each of them individually   
    this.id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1; 
    this.title = title;
    this.text = text;
  }
}

module.exports = Store;
