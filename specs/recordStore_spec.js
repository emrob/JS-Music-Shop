var assert = require('assert');
var RecordStore = require('../RecordStore');
var Record = require('../Record');


describe('record store', function() {

var record, record1, recordStore

beforeEach(function(){
  recordStore = new RecordStore("Music Shop", "Glasgow");
  record = new Record("The Beatles", "Yellow Submarine", "pop-rock", 10);
  record1 = new Record("Michael Jackson", "Thriller", "pop", 10);
  recordStore.addRecord(record);
  recordStore.addRecord(record1);
});

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Music Shop")
  });

  it("should have a balance", function(){
    assert.strictEqual(recordStore.balance, 0)
  });


  // it("list inventory", function(){
  //   assert.strictEqual(recordStore.inventory, ["The Beatles", "Yellow Submarine", "pop", 10])
  // });

  it("should sell a record & remove from inventory", function(){
    recordStore.sellrecord("Yellow Submarine");
    assert.strictEqual(recordStore.inventory.length, 1)
  });

  it("should filter by genre", function(){
    assert.strictEqual(recordStore.filterByGenre("pop"), 1)
  });

  it("should return total value of inventory", function(){
    assert.strictEqual(recordStore.sumOfInventory, 20)
  });

})
