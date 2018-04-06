var assert = require("assert");
var Record = require("../record")

describe("Record", function(){
  var record

  beforeEach(function(){
    record = new Record("The Beatles", "Yellow Submarine", "pop", 10);
  })

  it("should have a artist", function(){
    assert.strictEqual(record.artist, "The Beatles")
  });

  it("should print record properties as a string", function(){
    assert.strictEqual(record.recordToString(), "The record is The Beatles, Yellow Submarine, pop, and costs 10")
  });

})
