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

module.exports = RecordStore;
