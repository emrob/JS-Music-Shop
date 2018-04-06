var _ = require("lodash")

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record)
};

RecordStore.prototype.numOfRecords = function () {
  return this.inventory.length
};

RecordStore.prototype.sellrecord = function (title) {
 var remainingInventory = [];
  for (var i = 0; i < this.inventory.length; i++) {
    if (this.inventory[i].title !== title) {
      remainingInventory.push(this.inventory[i]);
    }
  }
  this.inventory = remainingInventory;
}











module.exports = RecordStore;
