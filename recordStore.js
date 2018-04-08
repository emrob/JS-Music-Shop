var _ = require("lodash");


var RecordStore = function(name, city, balance){
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
 var sold = [];
  for (var i = 0; i < this.inventory.length; i++) {
    if (this.inventory[i].title !== title) {
      remainingInventory.push(this.inventory[i]);
      if ((this.inventory[i].title == title))
      sold.push(this.inventory[i])
    }
  }
  this.inventory = remainingInventory;
}




RecordStore.prototype.filterByGenre = function (genre) {
var filteredByGenre = [];
 for (var i = 0; i < this.inventory.length; i++) {
   if (this.inventory[i].genre === genre) {
     filteredByGenre.push(this.inventory[i]);

   }
 }

return filteredByGenre.length
}


RecordStore.prototype.sumOfInventory = function () {
  let inventorySum = _.sumBy(this.inventory, 'price');
  return inventorySum;
};

RecordStore.prototype.sold = function (record) {
  return this.balance += record.price;

}







module.exports = RecordStore;
