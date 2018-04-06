var _ = require("lodash")

var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}


Record.prototype.recordToString = function () {
  return `The record is ${this.artist}, ${this.title}, ${this.genre}, and costs ${this.price}`

};


module.exports = Record;
