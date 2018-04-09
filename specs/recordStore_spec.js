var assert = require('assert');
var RecordStore = require('../RecordStore');
var Record = require('../Record');


describe('record store', function() {

var record, record1, recordStore

beforeEach(function(){
  recordStore = new RecordStore("Music Shop", "Glasgow", 0);
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
    assert.deepStrictEqual(recordStore.filterByGenre("pop"), [record1])
  });


  it("should return total value of inventory", function(){
    assert.deepStrictEqual(recordStore.sumOfInventory(), 20)
  });

  it("Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.", function(){
    assert.strictEqual(recordStore.sold(record1), 10)
  });

  it("Create a method that reports the financial situation of the Store, showing the balance and value of inventory.", function(){
    assert.strictEqual(recordStore.valueOfStore(), 20)
  });




})
