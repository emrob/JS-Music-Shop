var assert = require('assert');
var RecordStore = require('../RecordStore');
var Record = require('../Record');


describe('record store', function() {

var record, recordStore

beforeEach(function(){
  recordStore = new RecordStore("Music Shop", "Glasgow");
  record = new Record("The Beatles", "Yellow Submarine", "pop", 10);
  recordStore.addRecord(record);
});

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Music Shop")
  });

})
